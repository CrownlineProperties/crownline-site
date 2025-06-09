/*
  # Fresh Database Setup for Crownline Properties

  1. New Tables
    - `properties` - Main properties table with all required fields
    - `admin_users` - Simple admin authentication
    - `contact_submissions` - Contact form submissions
    - `valuation_requests` - Property valuation requests
    - `viewing_requests` - Property viewing requests
    - `booking_valuations` - Valuation booking requests
    - `property_inquiries` - Property inquiry forms

  2. Security
    - Enable RLS on all tables
    - Add appropriate policies for public and admin access
    - Simple admin authentication system

  3. Sample Data
    - Insert sample properties for demonstration
    - Create admin user for testing
*/

-- Drop existing tables if they exist (fresh start)
DROP TABLE IF EXISTS property_inquiries CASCADE;
DROP TABLE IF EXISTS booking_valuations CASCADE;
DROP TABLE IF EXISTS viewing_requests CASCADE;
DROP TABLE IF EXISTS valuation_requests CASCADE;
DROP TABLE IF EXISTS contact_submissions CASCADE;
DROP TABLE IF EXISTS properties CASCADE;
DROP TABLE IF EXISTS admin_users CASCADE;

-- Create admin_users table
CREATE TABLE admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create properties table
CREATE TABLE properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  listing_type text NOT NULL CHECK (listing_type IN ('rent', 'sale')),
  title text NOT NULL,
  area text NOT NULL,
  price numeric NOT NULL,
  beds integer NOT NULL DEFAULT 0,
  baths integer NOT NULL DEFAULT 0,
  thumb text NOT NULL,
  gallery text[] DEFAULT '{}',
  description text NOT NULL,
  features text[] DEFAULT '{}',
  floor_size integer,
  date_available date,
  furnished boolean,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (length(name) >= 2),
  email text NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create valuation_requests table
CREATE TABLE valuation_requests (
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

-- Create viewing_requests table
CREATE TABLE viewing_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id text NOT NULL,
  property_title text NOT NULL,
  name text NOT NULL CHECK (length(name) >= 2),
  email text NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  phone text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

-- Create booking_valuations table
CREATE TABLE booking_valuations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL CHECK (type IN ('sale', 'rental', 'switch')),
  name text NOT NULL CHECK (length(name) >= 2),
  email text NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  phone text NOT NULL,
  postcode text NOT NULL,
  property_types text[] NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create property_inquiries table
CREATE TABLE property_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL CHECK (type IN ('rent', 'buy')),
  property_id text NOT NULL,
  property_title text NOT NULL,
  name text NOT NULL CHECK (length(name) >= 2),
  email text NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  phone text NOT NULL,
  message text,
  employment_status text CHECK (employment_status IN ('employed', 'unemployed')),
  current_position text,
  annual_income numeric,
  preferred_viewing_date timestamptz,
  preferred_move_date date,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT rental_fields_required CHECK (
    (type = 'rent' AND employment_status IS NOT NULL AND preferred_viewing_date IS NOT NULL AND preferred_move_date IS NOT NULL) OR
    type = 'buy'
  )
);

-- Create update trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add update trigger to properties
CREATE TRIGGER update_properties_updated_at
  BEFORE UPDATE ON properties
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS on all tables
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE valuation_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE viewing_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE booking_valuations ENABLE ROW LEVEL SECURITY;
ALTER TABLE property_inquiries ENABLE ROW LEVEL SECURITY;

-- Admin users policies
CREATE POLICY "Admin users can read own data"
  ON admin_users
  FOR SELECT
  TO authenticated
  USING (email = (auth.jwt() ->> 'email'));

-- Properties policies
CREATE POLICY "Properties are viewable by everyone"
  ON properties
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admin can manage properties"
  ON properties
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Contact submissions policies
CREATE POLICY "Enable insert for all users"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users only"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Valuation requests policies
CREATE POLICY "Enable insert for all users"
  ON valuation_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users only"
  ON valuation_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Viewing requests policies
CREATE POLICY "Enable insert for all users"
  ON viewing_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users only"
  ON viewing_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Booking valuations policies
CREATE POLICY "Enable insert for all users"
  ON booking_valuations
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users only"
  ON booking_valuations
  FOR SELECT
  TO authenticated
  USING (true);

-- Property inquiries policies
CREATE POLICY "Enable insert for all users"
  ON property_inquiries
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users only"
  ON property_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Insert admin user
INSERT INTO admin_users (email, password_hash)
VALUES ('admin@crownline.co.uk', 'demo_hash_admin123');

-- Insert sample properties
INSERT INTO properties (slug, listing_type, title, area, price, beds, baths, thumb, gallery, description, features, floor_size, date_available, furnished) VALUES
('luxury-penthouse-canary-wharf', 'sale', 'Luxury 3-Bedroom Penthouse in Canary Wharf', 'Canary Wharf, E14', 1200000, 3, 3, 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
 ARRAY['https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
 'A stunning penthouse apartment with breathtaking views of the London skyline. This property features a large open-plan living area, modern kitchen, three double bedrooms, three bathrooms, and a private terrace.',
 ARRAY['Penthouse', 'River views', 'Private terrace', '24-hour concierge', 'Gym', 'Swimming pool'], 1500, NULL, NULL),

('elegant-apartment-kensington', 'sale', 'Elegant 1-Bedroom Flat in Kensington', 'Kensington, W8', 650000, 1, 1, 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
 ARRAY['https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
 'A beautifully presented one-bedroom apartment in a prestigious Kensington mansion block. This property features a large reception room, separate kitchen, double bedroom, and bathroom.',
 ARRAY['Period property', 'High ceilings', 'Wooden floors', 'Porter', 'Lift access'], 600, NULL, NULL),

('modern-flat-camden', 'rent', 'Modern 1-Bedroom Flat in Camden', 'Camden, NW1', 1700, 1, 1, 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
 ARRAY['https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
 'A contemporary one-bedroom apartment in a modern development in Camden. This property features an open-plan living/dining area, fully fitted kitchen, double bedroom, and bathroom.',
 ARRAY['Modern development', 'Furnished', 'Close to transport', 'Communal garden', 'Bike storage'], 550, '2025-05-15', true),

('garden-flat-fulham', 'rent', 'Spacious 2-Bedroom Garden Flat in Fulham', 'Fulham, SW6', 2300, 2, 1, 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
 ARRAY['https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
 'A well-presented two-bedroom garden flat in Fulham. This property features a reception room, separate kitchen, two double bedrooms, bathroom, and a private garden.',
 ARRAY['Garden flat', 'Period conversion', 'Furnished', 'Close to transport', 'Close to amenities'], 750, '2025-06-01', true);