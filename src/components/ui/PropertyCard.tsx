import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, MapPin, ArrowRight } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
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
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    employment_status: '' as 'employed' | 'unemployed' | '',
    current_position: '',
    annual_income: '',
    preferred_viewing_date: null as Date | null,
    preferred_move_date: null as Date | null,
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
      const inquiryData = {
        type: listingType === 'sale' ? 'buy' : 'rent',
        property_id: id,
        property_title: title,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        ...(listingType === 'rent' && {
          employment_status: formData.employment_status,
          current_position: formData.employment_status === 'employed' ? formData.current_position : null,
          annual_income: formData.employment_status === 'employed' ? parseFloat(formData.annual_income) : null,
          preferred_viewing_date: formData.preferred_viewing_date,
          preferred_move_date: formData.preferred_move_date,
        }),
      };

      const { error } = await supabase
        .from('property_inquiries')
        .insert([inquiryData]);

      if (error) throw error;
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        employment_status: '',
        current_position: '',
        annual_income: '',
        preferred_viewing_date: null,
        preferred_move_date: null,
      });
    } catch (err) {
      console.error('Error submitting inquiry:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const renderFormStep = () => {
    if (listingType === 'sale' || step === 1) {
      return (
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
          {listingType === 'rent' ? (
            <button
              type="button"
              className="btn-primary w-full"
              onClick={nextStep}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="btn-primary w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Request'}
            </button>
          )}
        </div>
      );
    }

    if (step === 2) {
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Employment Status
            </label>
            <select
              name="employment_status"
              value={formData.employment_status}
              onChange={handleInputChange}
              className="form-input w-full"
              required
            >
              <option value="">Select status</option>
              <option value="employed">Employed</option>
              <option value="unemployed">Unemployed</option>
            </select>
          </div>
          
          {formData.employment_status === 'employed' && (
            <>
              <div>
                <input
                  type="text"
                  name="current_position"
                  value={formData.current_position}
                  onChange={handleInputChange}
                  placeholder="Current position"
                  className="form-input w-full"
                  required
                />
              </div>
              <div>
                <input
                  type="number"
                  name="annual_income"
                  value={formData.annual_income}
                  onChange={handleInputChange}
                  placeholder="Annual income"
                  className="form-input w-full"
                  required
                />
              </div>
            </>
          )}
          <button
            type="button"
            className="btn-primary w-full"
            onClick={nextStep}
          >
            Next
          </button>
        </div>
      );
    }

    if (step === 3) {
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Viewing Date
            </label>
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Move-in Date
            </label>
            <DatePicker
              selected={formData.preferred_move_date}
              onChange={(date: Date) => setFormData(prev => ({ ...prev, preferred_move_date: date }))}
              dateFormat="MMMM d, yyyy"
              minDate={new Date()}
              className="form-input w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Request'}
          </button>
        </div>
      );
    }
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
              {renderFormStep()}
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
                setStep(1);
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