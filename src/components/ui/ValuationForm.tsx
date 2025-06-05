import { useState } from 'react';
import Button from './Button';
import { supabase } from '../../lib/supabase';
import type { ValuationFormData } from '../../types';

interface ValuationFormProps {
  type: 'sales' | 'rental';
  title?: string;
  subtitle?: string;
}

const ValuationForm = ({ type, title, subtitle }: ValuationFormProps) => {
  const [formData, setFormData] = useState<ValuationFormData>({
    type,
    name: '',
    email: '',
    phone: '',
    postcode: '',
    bedrooms: '',
    address: '',
    comments: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const { error: supabaseError } = await supabase
        .from('valuation_requests')
        .insert([formData]);

      if (supabaseError) throw supabaseError;
      
      setIsSubmitted(true);
      setFormData({
        type,
        name: '',
        email: '',
        phone: '',
        postcode: '',
        bedrooms: '',
        address: '',
        comments: '',
      });
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was an error submitting your valuation request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card">
      {title && <h2 className="text-2xl font-semibold mb-2">{title}</h2>}
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}
      
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
          <h3 className="text-xl font-semibold mb-2">Valuation Request Received!</h3>
          <p className="text-gray-600">
            Thank you for your {type === 'sales' ? 'sales' : 'rental'} valuation request. One of our property experts will be in touch shortly.
          </p>
          <Button
            variant="secondary"
            className="mt-6"
            onClick={() => setIsSubmitted(false)}
          >
            Request Another Valuation
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Your name"
                required
                minLength={2}
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="Your phone number"
                required
              />
            </div>
            <div>
              <label htmlFor="postcode" className="form-label">
                Postcode
              </label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g. WC1X 8LU"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="address" className="form-label">
                Property Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-input"
                placeholder="Street address"
                required
              />
            </div>
            <div>
              <label htmlFor="bedrooms" className="form-label">
                Number of Bedrooms
              </label>
              <select
                id="bedrooms"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">Select</option>
                <option value="Studio">Studio</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </select>
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="comments" className="form-label">
              Additional Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
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
            {isSubmitting ? 'Submitting...' : `Request ${type === 'sales' ? 'Sales' : 'Rental'} Valuation`}
          </Button>
          
          <p className="text-xs text-gray-500 mt-4">
            By submitting this form, you agree to our privacy policy. Your information will only be used to process your valuation request.
          </p>
        </form>
      )}
    </div>
  );
};

export default ValuationForm;