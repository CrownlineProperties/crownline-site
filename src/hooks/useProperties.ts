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
        const data = type 
          ? await propertyService.getPropertiesByType(type)
          : await propertyService.getAllProperties();
        setProperties(data);
      } catch (err) {
        setError('Failed to load properties');
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, [type]);

  return { properties, loading, error, refetch: () => setLoading(true) };
};