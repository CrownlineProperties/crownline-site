import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Home, Bed, Bath, Maximize, Calendar, ArrowLeft, Phone, Mail } from 'lucide-react';
import Button from './Button';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { supabase } from '../../lib/supabase';
import { Property, PropertyInquiryData } from '../../types';
import { formatPrice } from '../../utils/formatters';

import propertyData from '../../data/listings.json';
import { register } from 'swiper/element/bundle';

register();

const PropertyDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef<HTMLElement | null>(null);
  
  // Inquiry form state
  const [formData, setFormData] = useState<PropertyInquiryData>({
    type: 'rent',
    property_id: '',
    property_title: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    employment_status: undefined,
    current_position: undefined,
    annual_income: undefined,
    preferred_viewing_date: undefined,
    preferred_move_date: undefined,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (slug) {
      const foundProperty = (propertyData as Property[]).find(p => p.slug === slug) || null;
      setProperty(foundProperty);
      if (foundProperty) {
        setFormData(prev => ({
          ...prev,
          type: foundProperty.listingType === 'sale' ? 'buy' : 'rent',
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('property_inquiries')
        .insert([formData]);

      if (supabaseError) throw supabaseError;

      setIsSubmitted(true);
      setFormData(prev => ({
        ...prev,
        name: '',
        email: '',
        phone: '',
        message: '',
        employment_status: undefined,
        current_position: undefined,
        annual_income: undefined,
        preferred_viewing_date: undefined,
        preferred_move_date: undefined,
      }));
    } catch (err) {
      console.error('Error submitting inquiry:', err);
      setError('There was an error submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const renderFormStep = () => {
    if (property?.listingType === 'sale' || step === 1) {
      return (
        <>
          <div className="mb-4">
            <label htmlFor="name\" className="form-label">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input"
              required
              minLength={2}
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="form-label">Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message || ''}
              onChange={handleInputChange}
              className="form-input min-h-[120px]"
            ></textarea>
          </div>

          {property?.listingType === 'rent' ? (
            <Button
              type="button"
              variant="primary"
              className="w-full"
              onClick={nextStep}
            >
              Next
            </Button>
          ) : (
            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </Button>
          )}
        </>
      );
    }

    if (step === 2) {
      return (
        <>
          <div className="mb-4">
            <label htmlFor="employment_status" className="form-label">Employment Status</label>
            <select
              id="employment_status"
              name="employment_status"
              value={formData.employment_status}
              onChange={handleInputChange}
              className="form-input"
              required
            >
              <option value="">Select status</option>
              <option value="employed">Employed</option>
              <option value="unemployed">Unemployed</option>
            </select>
          </div>

          {formData.employment_status === 'employed' && (
            <>
              <div className="mb-4">
                <label htmlFor="current_position" className="form-label">Current Position</label>
                <input
                  type="text"
                  id="current_position"
                  name="current_position"
                  value={formData.current_position || ''}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="annual_income" className="form-label">Annual Income (£)</label>
                <input
                  type="number"
                  id="annual_income"
                  name="annual_income"
                  value={formData.annual_income || ''}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
            </>
          )}

          <Button
            type="button"
            variant="primary"
            className="w-full"
            onClick={nextStep}
          >
            Next
          </Button>
        </>
      );
    }

    if (step === 3) {
      return (
        <>
          <div className="mb-4">
            <label htmlFor="preferred_viewing_date" className="form-label">Preferred Viewing Date</label>
            <DatePicker
              selected={formData.preferred_viewing_date}
              onChange={(date: Date) => setFormData(prev => ({ ...prev, preferred_viewing_date: date }))}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
              minDate={new Date()}
              className="form-input w-full"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="preferred_move_date" className="form-label">Preferred Move-in Date</label>
            <DatePicker
              selected={formData.preferred_move_date}
              onChange={(date: Date) => setFormData(prev => ({ ...prev, preferred_move_date: date }))}
              dateFormat="MMMM d, yyyy"
              minDate={new Date()}
              className="form-input w-full"
              required
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          </Button>
        </>
      );
    }
  };

  if (loading) {
    return (
      <div className="container-custom py-32 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="container-custom py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
        <p className="mb-8">The property you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16">
      {/* Back Button */}
      <div className="container-custom mb-6">
        <Link 
          to={property.listingType === 'rent' ? '/rent' : '/buy'} 
          className="inline-flex items-center text-navy hover:text-gold transition duration-300"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to {property.listingType === 'rent' ? 'rentals' : 'sales'}
        </Link>
      </div>

      {/* Property Header */}
      <div className="container-custom mb-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end">
          <div>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <MapPin size={16} className="mr-1 text-gold" />
              <span>{property.area}</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">{property.title}</h1>
            <p className="text-2xl md:text-3xl font-semibold text-navy">
              {formatPrice(property.price, property.listingType)}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-4">
              <Button variant="primary">
                <Phone size={16} className="mr-2" />
                Call
              </Button>
              <Button variant="secondary">
                <Mail size={16} className="mr-2" />
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Property Gallery */}
      <div className="container-custom mb-12">
        <div className="bg-gray-100 rounded-property overflow-hidden">
          <swiper-container ref={swiperRef} init="false" class="h-[300px] md:h-[500px]">
            {property.gallery.map((image, index) => (
              <swiper-slide key={index}>
                <img
                  src={image}
                  alt={`${property.title} - image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>

      {/* Property Content */}
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Key Features */}
            <div className="card mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                  <Bed size={24} className="text-gold mb-2" />
                  <span className="text-gray-600 text-sm">Bedrooms</span>
                  <span className="font-semibold">{property.beds}</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                  <Bath size={24} className="text-gold mb-2" />
                  <span className="text-gray-600 text-sm">Bathrooms</span>
                  <span className="font-semibold">{property.baths}</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                  <Maximize size={24} className="text-gold mb-2" />
                  <span className="text-gray-600 text-sm">Floor Size</span>
                  <span className="font-semibold">{property.floorSize} sq ft</span>
                </div>
                {property.listingType === 'rent' && property.dateAvailable && (
                  <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                    <Calendar size={24} className="text-gold mb-2" />
                    <span className="text-gray-600 text-sm">Available From</span>
                    <span className="font-semibold">{property.dateAvailable}</span>
                  </div>
                )}
                {property.listingType === 'rent' && property.furnished !== undefined && (
                  <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                    <Home size={24} className="text-gold mb-2" />
                    <span className="text-gray-600 text-sm">Furnished</span>
                    <span className="font-semibold">{property.furnished ? 'Yes' : 'No'}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="card mb-8">
              <h2 className="text-xl font-semibold mb-4">Property Description</h2>
              <p className="text-gray-700 whitespace-pre-line">{property.description}</p>
            </div>

            {/* Features */}
            {property.features && property.features.length > 0 && (
              <div className="card mb-8">
                <h2 className="text-xl font-semibold mb-4">Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {property.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Map */}
            <div className="card mb-8">
              <h2 className="text-xl font-semibold mb-4">Location</h2>
              <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{ backgroundImage: "url('https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
                ></div>
              </div>
              <p className="mt-4 text-gray-600">
                {property.area}, London
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Contact Form */}
            <div className="sticky top-24">
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
                      onClick={() => {
                        setIsSubmitted(false);
                        setStep(1);
                      }}
                    >
                      Request Another Viewing
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {renderFormStep()}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;