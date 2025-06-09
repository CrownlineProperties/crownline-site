import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, ArrowLeft } from 'lucide-react';
import Button from '../ui/Button';
import ImageUpload from './ImageUpload';
import { PropertyData, propertyService } from '../../lib/properties';

interface PropertyFormProps {
  propertyId?: string;
  isEdit?: boolean;
}

const PropertyForm = ({ propertyId, isEdit = false }: PropertyFormProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<Omit<PropertyData, 'id'>>({
    slug: '',
    listing_type: 'sale',
    title: '',
    area: '',
    price: 0,
    beds: 1,
    baths: 1,
    thumb: '',
    gallery: [],
    description: '',
    features: [''],
    floor_size: 0,
    date_available: '',
    furnished: false,
  });

  useEffect(() => {
    if (isEdit && propertyId) {
      loadProperty();
    }
  }, [isEdit, propertyId]);

  const loadProperty = async () => {
    try {
      setLoading(true);
      const property = await propertyService.getProperty(propertyId!);
      if (property) {
        setFormData({
          slug: property.slug,
          listing_type: property.listing_type,
          title: property.title,
          area: property.area,
          price: property.price,
          beds: property.beds,
          baths: property.baths,
          thumb: property.thumb,
          gallery: property.gallery.length > 0 ? property.gallery : [],
          description: property.description,
          features: property.features.length > 0 ? property.features : [''],
          floor_size: property.floor_size || 0,
          date_available: property.date_available || '',
          furnished: property.furnished || false,
        });
      }
    } catch (err) {
      setError('Failed to load property');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validate that at least one image is uploaded
      if (formData.gallery.length === 0) {
        setError('Please upload at least one image');
        setLoading(false);
        return;
      }

      // Clean up data
      const cleanData = {
        ...formData,
        thumb: formData.gallery[0], // Use first image as thumbnail
        gallery: formData.gallery,
        features: formData.features.filter(feature => feature.trim() !== ''),
        floor_size: formData.floor_size || undefined,
        date_available: formData.date_available || undefined,
      };

      if (isEdit && propertyId) {
        await propertyService.updateProperty(propertyId, cleanData);
      } else {
        await propertyService.createProperty(cleanData);
      }

      navigate('/admin');
    } catch (err) {
      setError(isEdit ? 'Failed to update property' : 'Failed to create property');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : 
               type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
               value
    }));
  };

  const handleImagesChange = (images: string[]) => {
    setFormData(prev => ({
      ...prev,
      gallery: images,
      thumb: images[0] || '' // Update thumbnail to first image
    }));
  };

  const handleFeatureChange = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.map((item, i) => i === index ? value : item)
    }));
  };

  const addFeature = () => {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, '']
    }));
  };

  const removeFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  if (loading && isEdit) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navy"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Button 
            onClick={() => navigate('/admin')}
            variant="outline"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Properties
          </Button>
          <h1 className="text-3xl font-semibold">
            {isEdit ? 'Edit Property' : 'Add New Property'}
          </h1>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="card">
          <h2 className="text-xl font-semibold mb-6">Basic Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="form-label">Property Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            
            <div>
              <label htmlFor="slug" className="form-label">URL Slug</label>
              <input
                type="text"
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            
            <div>
              <label htmlFor="listing_type" className="form-label">Listing Type</label>
              <select
                id="listing_type"
                name="listing_type"
                value={formData.listing_type}
                onChange={handleInputChange}
                className="form-input"
                required
              >
                <option value="sale">For Sale</option>
                <option value="rent">To Rent</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="area" className="form-label">Area</label>
              <input
                type="text"
                id="area"
                name="area"
                value={formData.area}
                onChange={handleInputChange}
                className="form-input"
                placeholder="e.g. Kensington, W8"
                required
              />
            </div>
            
            <div>
              <label htmlFor="price" className="form-label">
                Price (£{formData.listing_type === 'rent' ? ' per month' : ''})
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            
            <div>
              <label htmlFor="floor_size" className="form-label">Floor Size (sq ft)</label>
              <input
                type="number"
                id="floor_size"
                name="floor_size"
                value={formData.floor_size}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
            
            <div>
              <label htmlFor="beds" className="form-label">Bedrooms</label>
              <input
                type="number"
                id="beds"
                name="beds"
                value={formData.beds}
                onChange={handleInputChange}
                className="form-input"
                min="0"
                required
              />
            </div>
            
            <div>
              <label htmlFor="baths" className="form-label">Bathrooms</label>
              <input
                type="number"
                id="baths"
                name="baths"
                value={formData.baths}
                onChange={handleInputChange}
                className="form-input"
                min="1"
                required
              />
            </div>
          </div>

          {formData.listing_type === 'rent' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label htmlFor="date_available" className="form-label">Available From</label>
                <input
                  type="date"
                  id="date_available"
                  name="date_available"
                  value={formData.date_available}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="furnished"
                  name="furnished"
                  checked={formData.furnished}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label htmlFor="furnished" className="form-label mb-0">Furnished</label>
              </div>
            </div>
          )}
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-6">Property Images</h2>
          <ImageUpload
            images={formData.gallery}
            onImagesChange={handleImagesChange}
            maxImages={10}
            label="Upload Property Images"
          />
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-6">Description & Features</h2>
          
          <div className="mb-6">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="form-input min-h-[120px]"
              required
            />
          </div>

          <div>
            <label className="form-label">Features</label>
            {formData.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  value={feature}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                  className="form-input flex-1"
                  placeholder="Feature"
                />
                {formData.features.length > 1 && (
                  <Button
                    type="button"
                    onClick={() => removeFeature(index)}
                    variant="outline"
                    className="p-2 text-red-600 hover:bg-red-50"
                  >
                    Remove
                  </Button>
                )}
              </div>
            ))}
            <Button
              type="button"
              onClick={addFeature}
              variant="outline"
              className="mt-2"
            >
              Add Feature
            </Button>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            onClick={() => navigate('/admin')}
            variant="outline"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={loading}
          >
            <Save size={16} className="mr-2" />
            {loading ? 'Saving...' : isEdit ? 'Update Property' : 'Create Property'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PropertyForm;