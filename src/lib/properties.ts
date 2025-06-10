import { supabase, testSupabaseConnection } from './supabase';

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
  rightmove_url?: string;
}

export const propertyService = {
  async getAllProperties(): Promise<PropertyData[]> {
    try {
      console.log('Fetching all properties...');
      
      // Test connection first
      const connectionOk = await testSupabaseConnection();
      if (!connectionOk) {
        console.error('Supabase connection test failed');
        return [];
      }
      
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase error fetching properties:', error);
        console.error('Error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        return [];
      }
      
      console.log('Fetched properties:', data?.length || 0);
      return data || [];
    } catch (err) {
      console.error('Failed to fetch properties:', err);
      console.error('Error type:', typeof err);
      console.error('Error name:', err instanceof Error ? err.name : 'Unknown');
      console.error('Error message:', err instanceof Error ? err.message : String(err));
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
        .maybeSingle();

      if (error) {
        console.error('Supabase error fetching property:', error);
        return null;
      }
      
      console.log('Fetched property:', data);
      return data;
    } catch (err) {
      console.error('Failed to fetch property:', err);
      return null;
    }
  },

  async getPropertyBySlug(slug: string): Promise<PropertyData | null> {
    try {
      console.log('Fetching property with slug:', slug);
      
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (error) {
        console.error('Supabase error fetching property by slug:', error);
        return null;
      }
      
      console.log('Fetched property by slug:', data);
      return data;
    } catch (err) {
      console.error('Failed to fetch property by slug:', err);
      return null;
    }
  },

  async createProperty(property: Omit<PropertyData, 'id'>): Promise<PropertyData> {
    try {
      console.log('Creating property:', property);
      
      // Ensure required fields are present
      if (!property.title?.trim()) {
        throw new Error('Property title is required');
      }
      
      if (!property.slug?.trim()) {
        throw new Error('Property slug is required');
      }
      
      if (!property.description?.trim()) {
        throw new Error('Property description is required');
      }
      
      if (!property.gallery || property.gallery.length === 0) {
        throw new Error('At least one image is required');
      }

      // Set thumbnail to first gallery image if not provided
      const propertyData = {
        ...property,
        thumb: property.thumb || property.gallery[0],
        features: property.features.filter(f => f.trim() !== ''),
      };
      
      const { data, error } = await supabase
        .from('properties')
        .insert([propertyData])
        .select()
        .single();

      if (error) {
        console.error('Supabase error creating property:', error);
        throw new Error(`Failed to create property: ${error.message}`);
      }
      
      if (!data) {
        throw new Error('No data returned after creating property');
      }
      
      console.log('Created property:', data);
      return data;
    } catch (err: any) {
      console.error('Failed to create property:', err);
      throw new Error(err.message || 'Failed to create property');
    }
  },

  async updateProperty(id: string, property: Partial<PropertyData>): Promise<PropertyData> {
    try {
      console.log('Updating property with ID:', id);
      console.log('Update data:', property);
      
      if (!id) {
        throw new Error('Property ID is required for update');
      }
      
      // First check if the property exists
      const { data: existingData, error: fetchError } = await supabase
        .from('properties')
        .select('id')
        .eq('id', id)
        .maybeSingle();
      
      if (fetchError) {
        console.error('Error checking property existence:', fetchError);
        throw new Error(`Failed to verify property exists: ${fetchError.message}`);
      }
      
      if (!existingData) {
        throw new Error(`Property with ID ${id} not found`);
      }
      
      // Clean the update data
      const updateData = { ...property };
      if (updateData.features) {
        updateData.features = updateData.features.filter(f => f.trim() !== '');
      }
      
      // Set thumbnail to first gallery image if gallery is provided but thumb is not
      if (updateData.gallery && updateData.gallery.length > 0 && !updateData.thumb) {
        updateData.thumb = updateData.gallery[0];
      }
      
      // Now perform the update
      const { data, error } = await supabase
        .from('properties')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Supabase error updating property:', error);
        throw new Error(`Failed to update property: ${error.message}`);
      }
      
      if (!data) {
        throw new Error('No data returned after update');
      }
      
      console.log('Updated property:', data);
      return data;
    } catch (err: any) {
      console.error('Failed to update property:', err);
      throw new Error(err.message || 'Failed to update property');
    }
  },

  async deleteProperty(id: string): Promise<void> {
    try {
      console.log('Deleting property with ID:', id);
      
      if (!id) {
        throw new Error('Property ID is required for deletion');
      }
      
      // First check if the property exists
      const { data: existingData, error: fetchError } = await supabase
        .from('properties')
        .select('id')
        .eq('id', id)
        .maybeSingle();
      
      if (fetchError) {
        console.error('Error checking property existence:', fetchError);
        throw new Error(`Failed to verify property exists: ${fetchError.message}`);
      }
      
      if (!existingData) {
        throw new Error(`Property with ID ${id} not found`);
      }
      
      const { error } = await supabase
        .from('properties')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Supabase error deleting property:', error);
        throw new Error(`Failed to delete property: ${error.message}`);
      }
      
      console.log('Property deleted successfully');
    } catch (err: any) {
      console.error('Failed to delete property:', err);
      throw new Error(err.message || 'Failed to delete property');
    }
  },

  async getPropertiesByType(type: 'rent' | 'sale'): Promise<PropertyData[]> {
    try {
      console.log('Fetching properties by type:', type);
      
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('listing_type', type)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase error fetching properties by type:', error);
        return [];
      }
      
      console.log('Fetched properties by type:', data?.length || 0);
      return data || [];
    } catch (err) {
      console.error('Failed to fetch properties by type:', err);
      return [];
    }
  }
};