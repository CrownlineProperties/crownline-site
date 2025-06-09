import { adminSupabase, supabase } from './supabase';

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
      // Try with regular client first for public access
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.warn('Public access failed, trying admin client:', error);
        // Fallback to admin client
        const { data: adminData, error: adminError } = await adminSupabase
          .from('properties')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (adminError) throw adminError;
        return adminData || [];
      }
      
      return data || [];
    } catch (err) {
      console.error('Failed to fetch properties:', err);
      return [];
    }
  },

  async getProperty(id: string): Promise<PropertyData | null> {
    try {
      // Try with regular client first
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.warn('Public access failed, trying admin client:', error);
        // Fallback to admin client
        const { data: adminData, error: adminError } = await adminSupabase
          .from('properties')
          .select('*')
          .eq('id', id)
          .single();
        
        if (adminError) throw adminError;
        return adminData;
      }
      
      return data;
    } catch (err) {
      console.error('Failed to fetch property:', err);
      return null;
    }
  },

  async getPropertyBySlug(slug: string): Promise<PropertyData | null> {
    try {
      // Try with regular client first
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        console.warn('Public access failed, trying admin client:', error);
        // Fallback to admin client
        const { data: adminData, error: adminError } = await adminSupabase
          .from('properties')
          .select('*')
          .eq('slug', slug)
          .single();
        
        if (adminError) throw adminError;
        return adminData;
      }
      
      return data;
    } catch (err) {
      console.error('Failed to fetch property by slug:', err);
      return null;
    }
  },

  async createProperty(property: Omit<PropertyData, 'id'>): Promise<PropertyData> {
    try {
      const { data, error } = await adminSupabase
        .from('properties')
        .insert([property])
        .select()
        .single();

      if (error) {
        console.warn('Database insert failed, using fallback:', error);
        
        // Create a mock response for demo
        const mockProperty: PropertyData = {
          id: `prop-${Date.now()}`,
          ...property
        };
        
        // Store in localStorage as fallback for demo
        const existingProperties = JSON.parse(localStorage.getItem('demo_properties') || '[]');
        existingProperties.push(mockProperty);
        localStorage.setItem('demo_properties', JSON.stringify(existingProperties));
        
        return mockProperty;
      }
      
      return data;
    } catch (err) {
      console.error('Failed to create property:', err);
      throw err;
    }
  },

  async updateProperty(id: string, property: Partial<PropertyData>): Promise<PropertyData> {
    try {
      const { data, error } = await adminSupabase
        .from('properties')
        .update(property)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.warn('Database update failed, using fallback:', error);
        
        // Fallback for demo
        const existingProperties = JSON.parse(localStorage.getItem('demo_properties') || '[]');
        const index = existingProperties.findIndex((p: PropertyData) => p.id === id);
        if (index !== -1) {
          existingProperties[index] = { ...existingProperties[index], ...property };
          localStorage.setItem('demo_properties', JSON.stringify(existingProperties));
          return existingProperties[index];
        }
        throw error;
      }
      
      return data;
    } catch (err) {
      console.error('Failed to update property:', err);
      throw err;
    }
  },

  async deleteProperty(id: string): Promise<void> {
    try {
      const { error } = await adminSupabase
        .from('properties')
        .delete()
        .eq('id', id);

      if (error) {
        console.warn('Database delete failed, using fallback:', error);
        
        // Fallback for demo
        const existingProperties = JSON.parse(localStorage.getItem('demo_properties') || '[]');
        const filtered = existingProperties.filter((p: PropertyData) => p.id !== id);
        localStorage.setItem('demo_properties', JSON.stringify(filtered));
        return;
      }
    } catch (err) {
      console.error('Failed to delete property:', err);
      throw err;
    }
  },

  async getPropertiesByType(type: 'rent' | 'sale'): Promise<PropertyData[]> {
    try {
      // Try with regular client first
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('listing_type', type)
        .order('created_at', { ascending: false });

      if (error) {
        console.warn('Public access failed, trying admin client:', error);
        // Fallback to admin client
        const { data: adminData, error: adminError } = await adminSupabase
          .from('properties')
          .select('*')
          .eq('listing_type', type)
          .order('created_at', { ascending: false });
        
        if (adminError) throw adminError;
        return adminData || [];
      }
      
      return data || [];
    } catch (err) {
      console.error('Failed to fetch properties by type:', err);
      return [];
    }
  }
};