/*
  # Add employment and viewing fields to property inquiries

  1. New Columns (only if they don't exist)
    - `employment_status` (text) - Employment status for rental inquiries
    - `current_position` (text) - Current job position
    - `annual_income` (numeric) - Annual income amount
    - `preferred_viewing_date` (timestamptz) - Preferred viewing date/time
    - `preferred_move_date` (date) - Preferred move-in date

  2. Constraints
    - Add validation for employment status values
    - Add constraint to require rental-specific fields for rent inquiries
*/

-- Add columns only if they don't exist
DO $$
BEGIN
  -- Add employment_status column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'property_inquiries' AND column_name = 'employment_status'
  ) THEN
    ALTER TABLE property_inquiries ADD COLUMN employment_status text;
  END IF;

  -- Add current_position column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'property_inquiries' AND column_name = 'current_position'
  ) THEN
    ALTER TABLE property_inquiries ADD COLUMN current_position text;
  END IF;

  -- Add annual_income column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'property_inquiries' AND column_name = 'annual_income'
  ) THEN
    ALTER TABLE property_inquiries ADD COLUMN annual_income numeric;
  END IF;

  -- Add preferred_viewing_date column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'property_inquiries' AND column_name = 'preferred_viewing_date'
  ) THEN
    ALTER TABLE property_inquiries ADD COLUMN preferred_viewing_date timestamptz;
  END IF;

  -- Add preferred_move_date column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'property_inquiries' AND column_name = 'preferred_move_date'
  ) THEN
    ALTER TABLE property_inquiries ADD COLUMN preferred_move_date date;
  END IF;
END $$;

-- Add employment status check constraint if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.check_constraints
    WHERE constraint_name = 'property_inquiries_employment_status_check'
  ) THEN
    ALTER TABLE property_inquiries
    ADD CONSTRAINT property_inquiries_employment_status_check
    CHECK (employment_status IN ('employed', 'unemployed'));
  END IF;
END $$;

-- Add rental fields required constraint if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.check_constraints
    WHERE constraint_name = 'rental_fields_required'
  ) THEN
    ALTER TABLE property_inquiries
    ADD CONSTRAINT rental_fields_required 
    CHECK (
      (type = 'rent' AND employment_status IS NOT NULL AND preferred_viewing_date IS NOT NULL AND preferred_move_date IS NOT NULL) OR
      type = 'buy'
    );
  END IF;
END $$;