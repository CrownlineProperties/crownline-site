import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, MapPin, ArrowRight, Home } from 'lucide-react';
import { Property } from '../../types';
import { formatPrice } from '../../utils/formatters';
import { supabase } from '../../lib/supabase';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const {
    id,
    slug,
    title,
    area,
    price,
    beds,
    baths,
    thumb,
    listingType,
  } = property;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('property_inquiries')
        .insert([{
          type: listingType === 'sale' ? 'buy' : 'rent',
          property_id: id,
          property_title: title,
          ...formData
        }]);

      if (error) throw error;
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error('Error submitting inquiry:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="card group overflow-hidden transition-all duration-300 hover:shadow-md">
      {/* Image container */}
      <div className="relative h-56 -mx-6 -mt-6 mb-4 overflow-hidden">
        <img 
          src={thumb} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-navy text-white text-xs px-3 py-1 rounded-full uppercase">
            {listingType === 'rent' ? 'To Rent' : 'For Sale'}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin size={16} className="mr-1 text-gold" />
          <span>{area}</span>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        
        <p className="text-xl font-semibold text-navy mb-4">
          {formatPrice(price, listingType)}
        </p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <div className="flex items-center text-gray-700">
              <Bed size={16} className="mr-1" />
              <span>{beds} {beds === 1 ? 'bed' : 'beds'}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Bath size={16} className="mr-1" />
              <span>{baths} {baths === 1 ? 'bath' : 'baths'}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Link 
            to={`/property/${slug}`} 
            className="text-navy font-medium flex items-center hover:text-gold transition duration-300"
          >
            View details
            <ArrowRight size={16} className="ml-1" />
          </Link>

          <button
            onClick={() => setShowForm(true)}
            className="text-navy font-medium hover:text-gold transition duration-300"
          >
            Request details
          </button>
        </div>

        {/* Inquiry Form */}
        {showForm && !isSubmitted && (
          <div className="mt-4 pt-4 border-t">
            <h4 className="font-semibold mb-4">Request Property Details</h4>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="form-input w-full"
                    required
                    minLength={2}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    className="form-input w-full"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone"
                    className="form-input w-full"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message (optional)"
                    className="form-input w-full"
                    rows={3}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Request'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Success Message */}
        {isSubmitted && (
          <div className="mt-4 pt-4 border-t text-center">
            <div className="text-green-600 mb-2">✓</div>
            <p className="text-gray-700">Thank you for your interest! We'll be in touch shortly.</p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setShowForm(false);
              }}
              className="text-navy hover:text-gold transition duration-300 mt-2"
            >
              Send another request
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;