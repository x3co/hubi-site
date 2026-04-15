import { neon } from "@neondatabase/serverless";

// Supports the env var names Vercel's Neon integration sets automatically
const connectionString =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.POSTGRES_PRISMA_URL ||
  process.env.POSTGRES_URL_NON_POOLING ||
  "";

export const sql = connectionString ? neon(connectionString) : null;

let ready = false;
export async function ensureSchema() {
  if (!sql) throw new Error("Database not configured");
  if (ready) return;
  await sql`
    CREATE TABLE IF NOT EXISTS leads (
      id BIGSERIAL PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      locale TEXT,
      ip TEXT,
      user_agent TEXT,
      referer TEXT
    );
  `;
  await sql`CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);`;
  await sql`CREATE INDEX IF NOT EXISTS leads_email_idx ON leads (email);`;
  ready = true;
}
