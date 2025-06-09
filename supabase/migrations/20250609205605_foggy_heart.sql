/*
  # Fix property insert policy for admin users

  1. Security
    - Add explicit INSERT policy for properties table
    - Allow authenticated admin users to create properties
    - Use correct Supabase auth functions
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
      WHERE admin_users.email = auth.email()
    )
  );