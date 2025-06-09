/*
  # Create admin user for authentication

  1. New Data
    - Insert the admin user into admin_users table if not exists
    - This allows the RLS policies to work properly

  2. Security
    - Ensure admin user exists for proper authentication
*/

-- Insert admin user if not exists
INSERT INTO admin_users (email, password_hash)
VALUES ('admin@crownline.co.uk', 'demo_hash')
ON CONFLICT (email) DO NOTHING;