export interface Property {
  id: string;
  slug: string;
  listingType: 'rent' | 'sale';
  title: string;
  area: string;
  price: number;
  beds: number;
  baths: number;
  thumb: string;
  gallery: string[];
  description: string;
  mapLatLng: [number, number];
  features?: string[];
  floorSize?: number;
  dateAvailable?: string;
  furnished?: boolean;
  rightmoveUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  quote: string;
  service: 'buyer' | 'seller' | 'landlord' | 'tenant';
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ValuationFormData {
  type: 'sales' | 'rental';
  name: string;
  email: string;
  phone: string;
  postcode: string;
  address: string;
  bedrooms: string;
  comments?: string;
}

export interface ViewingRequestData {
  property_id: string;
  property_title: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export interface PropertyInquiryData {
  type: 'rent' | 'buy';
  property_id: string;
  property_title: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  employment_status?: 'employed' | 'unemployed';
  current_position?: string;
  annual_income?: number;
  preferred_viewing_date?: Date;
  preferred_move_date?: Date;
}