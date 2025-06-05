/*
  # Update rental inquiry requirements

  1. Changes
    - Drop existing rental fields constraint
    - Recreate constraint to ensure required fields for rental inquiries
    
  2. Notes
    - Ensures employment status, viewing date, and move date are required for rentals
    - Fields remain optional for sales inquiries
*/

-- Drop existing constraint
ALTER TABLE property_inquiries
DROP CONSTRAINT IF EXISTS rental_fields_required;

-- Add constraint to require employment and viewing details for rentals
ALTER TABLE property_inquiries
ADD CONSTRAINT rental_fields_required 
CHECK (
  (type = 'rent' AND employment_status IS NOT NULL AND preferred_viewing_date IS NOT NULL AND preferred_move_date IS NOT NULL) OR
  type = 'buy'
);