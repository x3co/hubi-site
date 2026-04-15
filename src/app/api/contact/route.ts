import { NextResponse } from "next/server";
import { sql, ensureSchema } from "@/lib/db";

export const runtime = "nodejs";

// In-memory rate limit (per-instance; good enough for form spam)
const hits = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  const {
    firstName = "",
    lastName = "",
    email = "",
    phone = "",
    botcheck = "",
    locale = "en",
  } = body;

  // Honeypot
  if (botcheck) return NextResponse.json({ ok: true });

  const fn = firstName.trim();
  const ln = lastName.trim();
  const em = email.trim().toLowerCase();
  const ph = phone.trim();

  if (!fn || !ln || !em) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  if (fn.length > 120 || ln.length > 120 || em.length > 200 || ph.length > 60) {
    return NextResponse.json({ ok: false, error: "Field too long" }, { status: 400 });
  }

  if (!sql) {
    console.error("Database not configured");
    return NextResponse.json({ ok: false, error: "Server not configured" }, { status: 500 });
  }

  const userAgent = req.headers.get("user-agent") || "";
  const referer = req.headers.get("referer") || "";

  try {
    await ensureSchema();
    await sql`
      INSERT INTO leads (first_name, last_name, email, phone, locale, ip, user_agent, referer)
      VALUES (${fn}, ${ln}, ${em}, ${ph || null}, ${locale}, ${ip}, ${userAgent}, ${referer})
    `;
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("DB insert failed:", err);
    return NextResponse.json({ ok: false, error: "Database error" }, { status: 502 });
  }
}
