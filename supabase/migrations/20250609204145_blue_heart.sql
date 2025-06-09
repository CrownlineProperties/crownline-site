/*
  # Create properties table and admin system

  1. New Tables
    - `properties`
      - `id` (uuid, primary key)
      - `slug` (text, unique)
      - `listing_type` (text, 'rent' or 'sale')
      - `title` (text)
      - `area` (text)
      - `price` (numeric)
      - `beds` (integer)
      - `baths` (integer)
      - `thumb` (text, URL)
      - `gallery` (text[], array of URLs)
      - `description` (text)
      - `features` (text[], array)
      - `floor_size` (integer)
      - `date_available` (date, nullable)
      - `furnished` (boolean, nullable)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    - `admin_users`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `password_hash` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for admin access
    - Create admin authentication functions

  3. Sample Data
    - Insert existing properties from JSON into database
    - Create default admin user
*/

-- Create properties table
CREATE TABLE IF NOT EXISTS properties (
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

-- Create admin users table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Properties policies (public read, admin write)
CREATE POLICY "Properties are viewable by everyone"
  ON properties
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admin can manage properties"
  ON properties
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE email = auth.jwt() ->> 'email'
    )
  );

-- Admin users policies (admin only)
CREATE POLICY "Admin users can read own data"
  ON admin_users
  FOR SELECT
  TO authenticated
  USING (email = auth.jwt() ->> 'email');

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for properties updated_at
CREATE TRIGGER update_properties_updated_at
  BEFORE UPDATE ON properties
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample properties (migrating from JSON data)
INSERT INTO properties (slug, listing_type, title, area, price, beds, baths, thumb, gallery, description, features, floor_size, date_available, furnished) VALUES
('sales001', 'sale', 'Stunning 2-Bedroom Apartment in Covent Garden', 'Covent Garden, WC2', 850000, 2, 2, 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
 ARRAY['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1643385/pexels-photo-1643385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
 'A beautifully presented two-bedroom apartment in the heart of Covent Garden. This property features a spacious reception room, modern kitchen, two double bedrooms, and two bathrooms. Located moments from Covent Garden Piazza and transport links.',
 ARRAY['Period conversion', 'High ceilings', 'Wooden floors', 'Close to transport', 'Central location'], 850, NULL, NULL),

('sales002', 'sale', 'Luxury 3-Bedroom Penthouse in Canary Wharf', 'Canary Wharf, E14', 1200000, 3, 3, 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
 ARRAY['https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/210552/pexels-photo-210552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
 'A stunning penthouse apartment with breathtaking views of the London skyline. This property features a large open-plan living area, modern kitchen, three double bedrooms, three bathrooms, and a private terrace. The development offers 24-hour concierge, gym, and swimming pool.',
 ARRAY['Penthouse', 'River views', 'Private terrace', '24-hour concierge', 'Gym', 'Swimming pool'], 1500, NULL, NULL),

('rent001', 'rent', 'Modern 1-Bedroom Flat in Camden', 'Camden, NW1', 1700, 1, 1, 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
 ARRAY['https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
 'A contemporary one-bedroom apartment in a modern development in Camden. This property features an open-plan living/dining area, fully fitted kitchen, double bedroom, and bathroom. Located close to Camden Town station and Camden Market.',
 ARRAY['Modern development', 'Furnished', 'Close to transport', 'Communal garden', 'Bike storage'], 550, '2025-05-15', true);

-- Insert default admin user (password: admin123)
-- Note: In production, this should be changed immediately
INSERT INTO admin_users (email, password_hash) VALUES 
('admin@crownline.co.uk', '$2b$10$rOzJqQZQZQZQZQZQZQZQZOzJqQZQZQZQZQZQZQZQZOzJqQZQZQZQZQ');