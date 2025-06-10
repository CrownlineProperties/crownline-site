import { useState } from 'react';
import { Plus, X, Image as ImageIcon, ExternalLink } from 'lucide-react';
import Button from '../ui/Button';

interface ImageUploadProps {
  images: string[];
  onImagesChange: (images: string[]) => void;
  maxImages?: number;
  label?: string;
}

const ImageUpload = ({ images, onImagesChange, maxImages = 10, label = "Images" }: ImageUploadProps) => {
  const [newImageUrl, setNewImageUrl] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(true);

  const validateImageUrl = (url: string): boolean => {
    if (!url.trim()) return false;
    
    try {
      new URL(url);
      // Check if URL ends with common image extensions or is from known image hosting services
      const imageExtensions = /\.(jpg|jpeg|png|gif|webp|svg)$/i;
      const imageHosts = /(pexels\.com|unsplash\.com|pixabay\.com|imgur\.com|cloudinary\.com|amazonaws\.com)/i;
      
      return imageExtensions.test(url) || imageHosts.test(url);
    } catch {
      return false;
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setNewImageUrl(url);
    setIsValidUrl(url === '' || validateImageUrl(url));
  };

  const addImageUrl = () => {
    const trimmedUrl = newImageUrl.trim();
    
    if (!trimmedUrl) {
      setIsValidUrl(false);
      return;
    }

    if (!validateImageUrl(trimmedUrl)) {
      setIsValidUrl(false);
      return;
    }

    if (images.includes(trimmedUrl)) {
      alert('This image URL has already been added');
      return;
    }

    if (images.length >= maxImages) {
      alert(`Maximum ${maxImages} images allowed`);
      return;
    }

    onImagesChange([...images, trimmedUrl]);
    setNewImageUrl('');
    setIsValidUrl(true);
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    onImagesChange(newImages);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addImageUrl();
    }
  };

  return (
    <div>
      <label className="form-label">{label}</label>
      
      {/* URL Input Area */}
      <div className="border-2 border-dashed border-gray-300 rounded-property p-6 mb-6">
        <div className="flex flex-col items-center text-center">
          <ImageIcon className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium mb-2">Add Image URLs</h3>
          <p className="text-sm text-gray-500 mb-4">
            Enter direct links to images (JPG, PNG, GIF, WebP, SVG)
          </p>
          
          <div className="w-full max-w-md">
            <div className="flex gap-2">
              <input
                type="url"
                value={newImageUrl}
                onChange={handleUrlChange}
                onKeyPress={handleKeyPress}
                className={`form-input flex-1 ${!isValidUrl ? 'border-red-500' : ''}`}
                placeholder="https://example.com/image.jpg"
              />
              <Button
                type="button"
                onClick={addImageUrl}
                variant="primary"
                disabled={!newImageUrl.trim() || !isValidUrl}
              >
                <Plus size={16} className="mr-1" />
                Add
              </Button>
            </div>
            
            {!isValidUrl && (
              <p className="text-red-500 text-sm mt-1">
                Please enter a valid image URL
              </p>
            )}
            
            <p className="text-xs text-gray-500 mt-2">
              Supported: Direct image links, Pexels, Unsplash, Pixabay, Imgur, etc.
            </p>
          </div>
        </div>
      </div>

      {/* Image Preview Grid */}
      {images.length > 0 && (
        <div>
          <h4 className="font-medium mb-3">Added Images ({images.length}/{maxImages})</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1';
                    }}
                  />
                </div>
                
                {/* Remove button */}
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Remove image"
                >
                  <X size={16} />
                </button>
                
                {/* View original button */}
                <a
                  href={image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  title="View original image"
                >
                  <ExternalLink size={14} />
                </a>
                
                {/* Thumbnail indicator */}
                {index === 0 && (
                  <div className="absolute bottom-2 left-2 bg-gold text-navy text-xs px-2 py-1 rounded">
                    Thumbnail
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <p className="text-sm text-gray-500 mt-4">
        The first image will be used as the property thumbnail. You can reorder images by removing and re-adding them in your preferred order.
      </p>
    </div>
  );
};

export default ImageUpload;