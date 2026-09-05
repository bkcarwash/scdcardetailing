-- Run this in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/jaaksmcutzbnnecupscd/sql/new

CREATE TABLE IF NOT EXISTS bookings (
  id          uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at  timestamptz DEFAULT now() NOT NULL,
  name        text        NOT NULL,
  phone       text        NOT NULL,
  email       text,
  service     text        NOT NULL,
  city        text        NOT NULL,
  preferred_date  date    NOT NULL,
  preferred_time  text    NOT NULL,
  vehicle     text,
  notes       text,
  status      text        DEFAULT 'pending' NOT NULL
                          CHECK (status IN ('pending','confirmed','completed','cancelled'))
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Anon can INSERT (public booking form)
CREATE POLICY "anon_insert" ON bookings
  FOR INSERT TO anon WITH CHECK (true);

-- Service role can do everything (admin API routes use service role key)
CREATE POLICY "service_role_all" ON bookings
  FOR ALL TO service_role USING (true) WITH CHECK (true);
