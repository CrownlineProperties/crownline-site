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
    try {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching properties:', error);
        return [];
      }
      
      return data || [];
    } catch (err) {
      console.error('Failed to fetch properties:', err);
      return [];
    }
  },

  async getProperty(id: string): Promise<PropertyData | null> {
    try {
      console.log('Fetching property with ID:', id);
      
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('id', id)
        .maybeSingle(); // Use maybeSingle instead of single to handle no results gracefully

      if (error) {
        console.error('Error fetching property:', error);
        return null;
      }
      
      console.log('Property data:', data);
      return data;
    } catch (err) {
      console.error('Failed to fetch property:', err);
      return null;
    }
  },

  async getPropertyBySlug(slug: string): Promise<PropertyData | null> {
    try {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('slug', slug)
        .maybeSingle(); // Use maybeSingle instead of single

      if (error) {
        console.error('Error fetching property by slug:', error);
        return null;
      }
      
      return data;
    } catch (err) {
      console.error('Failed to fetch property by slug:', err);
      return null;
    }
  },

  async createProperty(property: Omit<PropertyData, 'id'>): Promise<PropertyData> {
    try {
      console.log('Creating property:', property);
      
      const { data, error } = await supabase
        .from('properties')
        .insert([property])
        .select()
        .single();

      if (error) {
        console.error('Error creating property:', error);
        throw new Error('Failed to create property: ' + error.message);
      }
      
      console.log('Created property:', data);
      return data;
    } catch (err) {
      console.error('Failed to create property:', err);
      throw err;
    }
  },

  async updateProperty(id: string, property: Partial<PropertyData>): Promise<PropertyData> {
    try {
      console.log('Updating property with ID:', id);
      console.log('Update data:', property);
      
      // First check if the property exists
      const existingProperty = await this.getProperty(id);
      if (!existingProperty) {
        throw new Error(`Property with ID ${id} not found`);
      }
      
      const { data, error } = await supabase
        .from('properties')
        .update(property)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Error updating property:', error);
        throw new Error('Failed to update property: ' + error.message);
      }
      
      if (!data) {
        throw new Error('No data returned after update');
      }
      
      console.log('Updated property:', data);
      return data;
    } catch (err) {
      console.error('Failed to update property:', err);
      throw err;
    }
  },

  async deleteProperty(id: string): Promise<void> {
    try {
      console.log('Deleting property with ID:', id);
      
      // First check if the property exists
      const existingProperty = await this.getProperty(id);
      if (!existingProperty) {
        throw new Error(`Property with ID ${id} not found`);
      }
      
      const { error } = await supabase
        .from('properties')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting property:', error);
        throw new Error('Failed to delete property: ' + error.message);
      }
      
      console.log('Property deleted successfully');
    } catch (err) {
      console.error('Failed to delete property:', err);
      throw err;
    }
  },

  async getPropertiesByType(type: 'rent' | 'sale'): Promise<PropertyData[]> {
    try {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('listing_type', type)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching properties by type:', error);
        return [];
      }
      
      return data || [];
    } catch (err) {
      console.error('Failed to fetch properties by type:', err);
      return [];
    }
  }
};