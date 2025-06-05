/*
  # Fix rental fields constraint

  1. Changes
    - Drop existing constraint before recreating
    - Add constraint to ensure required fields for rental inquiries
    
  2. Notes
    - Ensures employment status, viewing date, and move date are required for rentals
    - Fields remain optional for sales inquiries
*/

-- Drop existing constraint if it exists
DO $$ 
BEGIN
  IF EXISTS (
    SELECT 1 
    FROM information_schema.table_constraints 
    WHERE constraint_name = 'rental_fields_required' 
    AND table_name = 'property_inquiries'
  ) THEN
    ALTER TABLE property_inquiries DROP CONSTRAINT rental_fields_required;
  END IF;
END $$;

-- Add constraint to require employment and viewing details for rentals
ALTER TABLE property_inquiries
ADD CONSTRAINT rental_fields_required 
CHECK (
  (type = 'rent' AND employment_status IS NOT NULL AND preferred_viewing_date IS NOT NULL AND preferred_move_date IS NOT NULL) OR
  type = 'buy'
);