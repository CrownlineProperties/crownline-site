/*
  # Fix properties RLS policy for admin users

  1. Security Updates
    - Update the insert policy for properties to properly check admin authentication
    - Ensure admin users can create properties when properly authenticated

  The issue is that the current insert policy is checking `email()` function which doesn't exist.
  We need to check against the JWT token's email claim properly.
*/

-- Drop the existing problematic insert policy
DROP POLICY IF EXISTS "Admin users can insert properties" ON properties;

-- Create a corrected insert policy that properly checks admin authentication
CREATE POLICY "Admin users can insert properties"
  ON properties
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.email = (auth.jwt() ->> 'email')
    )
  );

-- Also update the general admin policy to be more explicit
DROP POLICY IF EXISTS "Admin can manage properties" ON properties;

CREATE POLICY "Admin can manage properties"
  ON properties
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.email = (auth.jwt() ->> 'email')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.email = (auth.jwt() ->> 'email')
    )
  );