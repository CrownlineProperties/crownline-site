/*
  # Add rental-specific fields to property inquiries

  1. Changes
    - Add employment status field
    - Add current position and income for employed users
    - Add viewing and move-in date preferences
    
  2. Security
    - Maintain existing RLS policies
*/

ALTER TABLE property_inquiries
ADD COLUMN employment_status text CHECK (employment_status IN ('employed', 'unemployed')),
ADD COLUMN current_position text,
ADD COLUMN annual_income numeric,
ADD COLUMN preferred_viewing_date timestamptz,
ADD COLUMN preferred_move_date date;

-- Update validation to make these fields required for rental inquiries
ALTER TABLE property_inquiries
ADD CONSTRAINT rental_fields_required 
CHECK (
  (type = 'rent' AND employment_status IS NOT NULL AND preferred_viewing_date IS NOT NULL AND preferred_move_date IS NOT NULL) OR
  type = 'buy'
);