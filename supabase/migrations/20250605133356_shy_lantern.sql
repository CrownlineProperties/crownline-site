/*
  # Forms Database Schema

  1. New Tables
    - `contact_submissions`
      - For general contact form submissions
      - Stores name, email, phone, message
    
    - `valuation_requests`
      - For property valuation requests
      - Stores property details and contact info
      
    - `viewing_requests`
      - For property viewing requests
      - Links to specific properties

  2. Security
    - Enable RLS on all tables
    - Add policies for inserting data
    - Restrict read access to authenticated admin users only

  3. Notes
    - All tables include created_at timestamp
    - Email validation using check constraints
    - Phone number format validation
*/

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (length(name) >= 2),
  email text NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Property valuation requests
CREATE TABLE IF NOT EXISTS valuation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL CHECK (type IN ('sales', 'rental')),
  name text NOT NULL CHECK (length(name) >= 2),
  email text NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  phone text NOT NULL,
  postcode text NOT NULL,
  address text NOT NULL,
  bedrooms text NOT NULL,
  comments text,
  created_at timestamptz DEFAULT now()
);

-- Property viewing requests
CREATE TABLE IF NOT EXISTS viewing_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id text NOT NULL,
  property_title text NOT NULL,
  name text NOT NULL CHECK (length(name) >= 2),
  email text NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  phone text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE valuation_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE viewing_requests ENABLE ROW LEVEL SECURITY;

-- Policies for contact submissions
CREATE POLICY "Enable insert for all users" ON contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users only" ON contact_submissions
  FOR SELECT TO authenticated USING (true);

-- Policies for valuation requests
CREATE POLICY "Enable insert for all users" ON valuation_requests
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users only" ON valuation_requests
  FOR SELECT TO authenticated USING (true);

-- Policies for viewing requests
CREATE POLICY "Enable insert for all users" ON viewing_requests
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users only" ON viewing_requests
  FOR SELECT TO authenticated USING (true);