// One-time DB setup — run once: node scripts/setup-db.mjs
// Tries the Supabase pooler JWT connection, then falls back to a helpful message.
import pg from 'pg';
const { Client } = pg;

const SERVICE_ROLE = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphYWtzbWN1dHpibm5lY3Vwc2NkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4ODU4NzExNCwiZXhwIjoyMTA0MTYzMTE0fQ.ABHrsZz55lAEshdgzhMSlgGK8j1p8V-Aby5Ud36LRJ4';
const PROJECT = 'jaaksmcutzbnnecupscd';

const SQL = `
CREATE TABLE IF NOT EXISTS bookings (
  id              uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at      timestamptz DEFAULT now() NOT NULL,
  name            text        NOT NULL,
  phone           text        NOT NULL,
  email           text,
  service         text        NOT NULL,
  city            text        NOT NULL,
  preferred_date  date        NOT NULL,
  preferred_time  text        NOT NULL,
  vehicle         text,
  notes           text,
  status          text        DEFAULT 'pending' NOT NULL
                              CHECK (status IN ('pending','confirmed','completed','cancelled'))
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS anon_insert ON bookings;
CREATE POLICY anon_insert ON bookings FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS service_role_all ON bookings;
CREATE POLICY service_role_all ON bookings FOR ALL TO service_role USING (true) WITH CHECK (true);
`;

// Supabase pooler accepts service role JWT as password
const configs = [
  // Transaction pooler (port 6543)
  { host: `aws-0-us-east-1.pooler.supabase.com`, port: 6543, user: `postgres.${PROJECT}`, password: SERVICE_ROLE, database: 'postgres', ssl: { rejectUnauthorized: false } },
  // Session pooler (port 5432)
  { host: `aws-0-us-east-1.pooler.supabase.com`, port: 5432, user: `postgres.${PROJECT}`, password: SERVICE_ROLE, database: 'postgres', ssl: { rejectUnauthorized: false } },
];

async function tryConnect(config) {
  const client = new Client({ ...config, connectionTimeoutMillis: 8000 });
  await client.connect();
  return client;
}

let connected = null;
for (const cfg of configs) {
  try {
    process.stdout.write(`Trying ${cfg.host}:${cfg.port}... `);
    connected = await tryConnect(cfg);
    console.log('Connected!');
    break;
  } catch (e) {
    console.log(`Failed (${e.message})`);
  }
}

if (!connected) {
  console.log('\n─────────────────────────────────────────────────────');
  console.log('Direct connection failed. Please run the SQL manually:');
  console.log('https://supabase.com/dashboard/project/jaaksmcutzbnnecupscd/sql/new');
  console.log('\nPaste the contents of: supabase/001_create_bookings.sql');
  console.log('─────────────────────────────────────────────────────');
  process.exit(0);
}

try {
  await connected.query(SQL);
  console.log('\n✅ bookings table created successfully!');
  console.log('Your booking system is ready. Deploy and go to /book and /admin');
} catch (e) {
  if (e.message.includes('already exists')) {
    console.log('\n✅ bookings table already exists — nothing to do!');
  } else {
    console.error('\n❌ SQL error:', e.message);
  }
} finally {
  await connected.end();
}
