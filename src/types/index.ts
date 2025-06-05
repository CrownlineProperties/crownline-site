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