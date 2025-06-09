import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Edit, Trash2, Plus, Eye } from 'lucide-react';
import Button from '../ui/Button';
import { PropertyData, propertyService } from '../../lib/properties';
import { formatPrice } from '../../utils/formatters';

const PropertyList = () => {
  const [properties, setProperties] = useState<PropertyData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'sale' | 'rent'>('all');

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      setLoading(true);
      const data = await propertyService.getAllProperties();
      setProperties(data);
    } catch (err) {
      setError('Failed to load properties');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      try {
        await propertyService.deleteProperty(id);
        setProperties(prev => prev.filter(p => p.id !== id));
      } catch (err) {
        setError('Failed to delete property');
      }
    }
  };

  const filteredProperties = properties.filter(property => {
    if (filter === 'all') return true;
    return property.listing_type === filter;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navy"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
        <h1 className="text-3xl font-semibold">Property Management</h1>
        <Button href="/admin/properties/new" variant="primary">
          <Plus size={16} className="mr-2" />
          Add New Property
        </Button>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      {/* Filter Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-200 p-1 rounded-lg w-fit">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-md font-medium transition ${
            filter === 'all' ? 'bg-white shadow-sm' : 'hover:bg-gray-300'
          }`}
        >
          All ({properties.length})
        </button>
        <button
          onClick={() => setFilter('sale')}
          className={`px-4 py-2 rounded-md font-medium transition ${
            filter === 'sale' ? 'bg-white shadow-sm' : 'hover:bg-gray-300'
          }`}
        >
          For Sale ({properties.filter(p => p.listing_type === 'sale').length})
        </button>
        <button
          onClick={() => setFilter('rent')}
          className={`px-4 py-2 rounded-md font-medium transition ${
            filter === 'rent' ? 'bg-white shadow-sm' : 'hover:bg-gray-300'
          }`}
        >
          To Rent ({properties.filter(p => p.listing_type === 'rent').length})
        </button>
      </div>

      {filteredProperties.length === 0 ? (
        <div className="card text-center py-12">
          <h3 className="text-lg font-semibold mb-2">No properties found</h3>
          <p className="text-gray-600 mb-6">
            {filter === 'all' 
              ? "You haven't added any properties yet." 
              : `No properties found for ${filter === 'sale' ? 'sale' : 'rent'}.`
            }
          </p>
          <Button href="/admin/properties/new" variant="primary">
            <Plus size={16} className="mr-2" />
            Add Your First Property
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <div key={property.id} className="card hover:shadow-md transition-all duration-300">
              <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-property">
                <img
                  src={property.thumb}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-navy text-white text-xs px-3 py-1 rounded-full uppercase">
                    {property.listing_type === 'rent' ? 'To Rent' : 'For Sale'}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{property.title}</h3>
                <p className="text-gray-600 mb-2">{property.area}</p>
                <p className="text-xl font-semibold text-navy mb-4">
                  {formatPrice(property.price, property.listing_type)}
                </p>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-4 text-sm text-gray-600">
                    <span>{property.beds} bed{property.beds !== 1 ? 's' : ''}</span>
                    <span>{property.baths} bath{property.baths !== 1 ? 's' : ''}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    href={`/property/${property.slug}`}
                    variant="outline"
                    className="flex-1 text-sm"
                  >
                    <Eye size={14} className="mr-1" />
                    View
                  </Button>
                  <Button
                    href={`/admin/properties/${property.id}/edit`}
                    variant="outline"
                    className="flex-1 text-sm"
                  >
                    <Edit size={14} className="mr-1" />
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(property.id!, property.title)}
                    variant="outline"
                    className="text-red-600 hover:bg-red-50 hover:border-red-300 p-2"
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyList;