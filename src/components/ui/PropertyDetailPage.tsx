import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Home, Bed, Bath, Maximize, Calendar, ArrowLeft, Phone, Mail } from 'lucide-react';
import Button from './Button';
import { supabase } from '../../lib/supabase';
import { Property, ViewingRequestData } from '../../types';
import { formatPrice } from '../../utils/formatters';

import propertyData from '../../data/listings.json';
import { register } from 'swiper/element/bundle';

register();

const PropertyDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef<HTMLElement | null>(null);
  
  // Viewing request form state
  const [viewingFormData, setViewingFormData] = useState<ViewingRequestData>({
    property_id: '',
    property_title: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      const foundProperty = (propertyData as Property[]).find(p => p.slug === slug) || null;
      setProperty(foundProperty);
      if (foundProperty) {
        setViewingFormData(prev => ({
          ...prev,
          property_id: foundProperty.id,
          property_title: foundProperty.title,
        }));
      }
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    
    if (!swiperContainer) return;
    
    Object.assign(swiperContainer, {
      slidesPerView: 1,
      navigation: true,
      pagination: {
        clickable: true,
      },
    });
    
    swiperContainer.initialize();
  }, [property]);

  const handleViewingRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('viewing_requests')
        .insert([viewingFormData]);

      if (supabaseError) throw supabaseError;

      setIsSubmitted(true);
      setViewingFormData(prev => ({
        ...prev,
        name: '',
        email: '',
        phone: '',
        message: '',
      }));
    } catch (err) {
      console.error('Error submitting viewing request:', err);
      setError('There was an error submitting your viewing request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setViewingFormData(prev => ({ ...prev, [name]: value }));
  };

  // ... rest of the component code remains the same ...

  return (
    <>
      {/* ... existing JSX until the contact form ... */}
      
      {/* Contact Form */}
      <div className="card">
        <h3 className="text-xl font-semibold mb-4">Request a Viewing</h3>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}
        
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Viewing Request Received!</h3>
            <p className="text-gray-600">
              Thank you for your interest. Our team will contact you shortly to arrange the viewing.
            </p>
            <Button
              variant="secondary"
              className="mt-6"
              onClick={() => setIsSubmitted(false)}
            >
              Request Another Viewing
            </Button>
          </div>
        ) : (
          <form onSubmit={handleViewingRequest}>
            <div className="mb-4">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={viewingFormData.name}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Your name"
                required
                minLength={2}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={viewingFormData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={viewingFormData.phone}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Your phone number"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="form-label">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={viewingFormData.message}
                onChange={handleInputChange}
                className="form-input min-h-[120px]"
                placeholder="Any specific requirements or questions?"
              ></textarea>
            </div>
            
            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Request Viewing'}
            </Button>
          </form>
        )}
      </div>
      
      {/* ... rest of the component code remains the same ... */}
    </>
  );
};

export default PropertyDetailPage;