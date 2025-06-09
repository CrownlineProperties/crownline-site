import { supabase } from './supabase';

export interface PropertyData {
  id?: string;
  slug: string;
  listing_type: 'rent' | 'sale';
  title: string;
  area: string;
  price: number;
  beds: number;
  baths: number;
  thumb: string;
  gallery: string[];
  description: string;
  features: string[];
  floor_size?: number;
  date_available?: string;
  furnished?: boolean;
}

export const propertyService = {
  async getAllProperties(): Promise<PropertyData[]> {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async getProperty(id: string): Promise<PropertyData | null> {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  async createProperty(property: Omit<PropertyData, 'id'>): Promise<PropertyData> {
    const { data, error } = await supabase
      .from('properties')
      .insert([property])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateProperty(id: string, property: Partial<PropertyData>): Promise<PropertyData> {
    const { data, error } = await supabase
      .from('properties')
      .update(property)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteProperty(id: string): Promise<void> {
    const { error } = await supabase
      .from('properties')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  async getPropertiesByType(type: 'rent' | 'sale'): Promise<PropertyData[]> {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('listing_type', type)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }
};