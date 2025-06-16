import React from 'react';
import PropertyCard from './PropertyCard';
import { Property } from '../../types';

interface PropertyGridProps {
  properties: Property[];
  title?: string;
  subtitle?: string;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({
  properties,
  title,
  subtitle,
}) => {
  if (properties.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-lg text-gray-600">No properties found</h3>
      </div>
    );
  }

  return (
    <div>
      {title && (
        <div className="mb-8">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyGrid;