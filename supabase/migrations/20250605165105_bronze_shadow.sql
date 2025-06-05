/*
  # Property Inquiries Schema

  1. New Tables
    - `property_inquiries`
      - For tracking interest in properties (both rental and sales)
      - Stores contact info and property details
      - Includes inquiry type (rent/buy)

  2. Security
    - Enable RLS
    - Allow public inserts
    - Restrict read access to authenticated users
*/

CREATE TABLE IF NOT EXISTS property_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL CHECK (type IN ('rent', 'buy')),
  property_id text NOT NULL,
  property_title text NOT NULL,
  name text NOT NULL CHECK (length(name) >= 2),
  email text NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  phone text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE property_inquiries ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Enable insert for all users" ON property_inquiries
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users only" ON property_inquiries
  FOR SELECT TO authenticated USING (true);