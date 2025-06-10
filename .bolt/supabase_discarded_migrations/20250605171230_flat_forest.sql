/*
  # Add rental inquiry field requirements

  1. Changes
    - Add constraint to ensure required fields for rental inquiries
    - Employment status, viewing date, and move date required for rentals
    - Fields optional for sales inquiries

  2. Notes
    - Only applies validation for rental inquiries
    - Sales inquiries are not affected by this constraint
*/

-- Add constraint to require employment and viewing details for rentals
ALTER TABLE property_inquiries
ADD CONSTRAINT rental_fields_required 
CHECK (
  (type = 'rent' AND employment_status IS NOT NULL AND preferred_viewing_date IS NOT NULL AND preferred_move_date IS NOT NULL) OR
  type = 'buy'
);