import { NextResponse } from "next/server";
import { sql, ensureSchema } from "@/lib/db";

export const runtime = "nodejs";

function unauthorized() {
  return new NextResponse("Unauthorized", {
    status: 401,
    headers: { "WWW-Authenticate": 'Bearer realm="admin"' },
  });
}

function authorize(req: Request) {
  const token = process.env.ADMIN_TOKEN;
  if (!token) return false;
  const url = new URL(req.url);
  const qp = url.searchParams.get("token");
  const header = req.headers.get("authorization") || "";
  const bearer = header.startsWith("Bearer ") ? header.slice(7) : "";
  return qp === token || bearer === token;
}

function csvEscape(v: unknown) {
  if (v === null || v === undefined) return "";
  const s = String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export async function GET(req: Request) {
  if (!authorize(req)) return unauthorized();
  if (!sql) return NextResponse.json({ ok: false, error: "DB not configured" }, { status: 500 });

  const url = new URL(req.url);
  const format = url.searchParams.get("format") || "json";
  const limit = Math.min(Math.max(parseInt(url.searchParams.get("limit") || "200", 10), 1), 1000);

  await ensureSchema();
  const rows = (await sql`
    SELECT id, created_at, first_name, last_name, email, phone, locale, ip, user_agent, referer
    FROM leads
    ORDER BY created_at DESC
    LIMIT ${limit}
  `) as Array<Record<string, unknown>>;

  if (format === "csv") {
    const header = [
      "id",
      "created_at",
      "first_name",
      "last_name",
      "email",
      "phone",
      "locale",
      "ip",
      "user_agent",
      "referer",
    ];
    const lines = [header.join(",")];
    for (const r of rows) lines.push(header.map((h) => csvEscape(r[h])).join(","));
    return new NextResponse(lines.join("\n"), {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="hubi-leads-${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  }

  return NextResponse.json({ ok: true, count: rows.length, leads: rows });
}
