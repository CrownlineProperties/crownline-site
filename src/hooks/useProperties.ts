import { useState, useEffect } from 'react';
import { PropertyData, propertyService } from '../lib/properties';

export const useProperties = (type?: 'rent' | 'sale') => {
  const [properties, setProperties] = useState<PropertyData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('Loading properties with type:', type);
        
        const data = type 
          ? await propertyService.getPropertiesByType(type)
          : await propertyService.getAllProperties();
        
        console.log('Properties loaded:', data.length);
        setProperties(data);
      } catch (err) {
        console.error('Error in useProperties hook:', err);
        const errorMessage = err instanceof Error ? err.message : 'Failed to load properties';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, [type]);

  const refetch = () => {
    setLoading(true);
    setError(null);
  };

  return { properties, loading, error, refetch };
};