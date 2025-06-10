/*
  # Add Rightmove URL field to properties

  1. Changes
    - Add rightmove_url column to properties table
    - Column is optional (nullable) and stores URL links to Rightmove listings

  2. Security
    - No changes to RLS policies needed as this is just adding a new optional field
*/

-- Add rightmove_url column to properties table
ALTER TABLE properties 
ADD COLUMN rightmove_url text;

-- Add a comment to describe the column
COMMENT ON COLUMN properties.rightmove_url IS 'Optional URL link to the property listing on Rightmove';

-- Update existing sample properties with example Rightmove URLs
UPDATE properties 
SET rightmove_url = CASE 
  WHEN slug = 'luxury-penthouse-canary-wharf' THEN 'https://www.rightmove.co.uk/properties/123456789'
  WHEN slug = 'elegant-apartment-kensington' THEN 'https://www.rightmove.co.uk/properties/123456790'
  WHEN slug = 'modern-flat-camden' THEN 'https://www.rightmove.co.uk/properties/123456791'
  WHEN slug = 'garden-flat-fulham' THEN 'https://www.rightmove.co.uk/properties/123456792'
  ELSE NULL
END;