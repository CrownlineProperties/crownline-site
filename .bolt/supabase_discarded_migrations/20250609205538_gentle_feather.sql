/*
  # Fix property insert policy for admin users

  1. Security Changes
    - Add INSERT policy for properties table
    - Allow authenticated admin users to insert new properties
    - Maintains existing security model where only verified admin users can create properties

  The existing ALL policy should cover INSERT operations, but we're adding an explicit INSERT policy to ensure proper permissions.
*/

-- Add explicit INSERT policy for admin users to create properties
CREATE POLICY "Admin users can insert properties"
  ON properties
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1
      FROM admin_users
      WHERE admin_users.email = (jwt() ->> 'email'::text)
    )
  );