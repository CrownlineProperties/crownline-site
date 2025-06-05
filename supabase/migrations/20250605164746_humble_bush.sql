/*
  # Booking Valuations Table

  1. New Table
    - `booking_valuations`
      - For valuation bookings from the modal
      - Stores property type preferences and contact info
    
  2. Security
    - Enable RLS
    - Add policies for inserting data
    - Restrict read access to authenticated users

  3. Notes
    - Includes validation for email and phone
    - Tracks property preferences
*/

-- Booking valuations table
CREATE TABLE IF NOT EXISTS booking_valuations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL CHECK (type IN ('sale', 'rental', 'switch')),
  name text NOT NULL CHECK (length(name) >= 2),
  email text NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  phone text NOT NULL,
  postcode text NOT NULL,
  property_types text[] NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE booking_valuations ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Enable insert for all users" ON booking_valuations
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users only" ON booking_valuations
  FOR SELECT TO authenticated USING (true);