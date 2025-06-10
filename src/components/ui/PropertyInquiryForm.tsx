import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Button from './Button';
import { supabase } from '../../lib/supabase';
import { PropertyInquiryData } from '../../types';

interface PropertyInquiryFormProps {
  propertyId: string;
  propertyTitle: string;
  listingType: 'rent' | 'sale';
  title?: string;
  subtitle?: string;
}

const PropertyInquiryForm = ({ 
  propertyId, 
  propertyTitle, 
  listingType, 
  title, 
  subtitle 
}: PropertyInquiryFormProps) => {
  const [formData, setFormData] = useState<PropertyInquiryData>({
    type: listingType === 'sale' ? 'buy' : 'rent',
    property_id: propertyId,
    property_title: propertyTitle,
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? (value ? Number(value) : undefined) : value
    }));
  };

  const handleDateChange = (date: Date | null, field: 'preferred_viewing_date' | 'preferred_move_date') => {
    setFormData(prev => ({
      ...prev,
      [field]: date || undefined
    }));
  };

  const validateStep1 = () => {
    if (!formData.name.trim() || formData.name.length < 2) {
      setError('Please enter your full name (minimum 2 characters)');
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.phone.trim()) {
      setError('Please enter your phone number');
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (formData.type === 'rent') {
      if (!formData.employment_status) {
        setError('Please select your employment status');
        return false;
      }
      if (formData.employment_status === 'employed' && !formData.current_position?.trim()) {
        setError('Please enter your current position');
        return false;
      }
      if (formData.employment_status === 'employed' && (!formData.annual_income || formData.annual_income <= 0)) {
        setError('Please enter your annual income');
        return false;
      }
    }
    return true;
  };

  const validateStep3 = () => {
    if (formData.type === 'rent') {
      if (!formData.preferred_viewing_date) {
        setError('Please select your preferred viewing date');
        return false;
      }
      if (!formData.preferred_move_date) {
        setError('Please select your preferred move-in date');
        return false;
      }
      // Check that viewing date is in the future
      if (formData.preferred_viewing_date <= new Date()) {
        setError('Viewing date must be in the future');
        return false;
      }
      // Check that move date is after viewing date
      if (formData.preferred_move_date <= formData.preferred_viewing_date) {
        setError('Move-in date must be after the viewing date');
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    setError(null);
    
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setError(null);
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Final validation
    if (!validateStep1() || !validateStep2() || !validateStep3()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for submission
      const submissionData = {
        type: formData.type,
        property_id: formData.property_id,
        property_title: formData.property_title,
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message?.trim() || null,
        employment_status: formData.employment_status || null,
        current_position: formData.current_position?.trim() || null,
        annual_income: formData.annual_income || null,
        preferred_viewing_date: formData.preferred_viewing_date || null,
        preferred_move_date: formData.preferred_move_date || null,
      };

      console.log('Submitting property inquiry:', submissionData);

      const { error: supabaseError } = await supabase
        .from('property_inquiries')
        .insert([submissionData]);

      if (supabaseError) {
        console.error('Supabase error:', supabaseError);
        throw new Error(supabaseError.message);
      }

      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        type: listingType === 'sale' ? 'buy' : 'rent',
        property_id: propertyId,
        property_title: propertyTitle,
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
      setStep(1);
      
    } catch (err: any) {
      console.error('Error submitting inquiry:', err);
      setError(err.message || 'There was an error submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTotalSteps = () => {
    return formData.type === 'rent' ? 3 : 1;
  };

  const renderStepIndicator = () => {
    const totalSteps = getTotalSteps();
    if (totalSteps === 1) return null;

    return (
      <div className="flex justify-center mb-6">
        <div className="flex space-x-2">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i + 1 <= step ? 'bg-gold' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  const renderStep1 = () => (
    <>
      <div className="mb-4">
        <label htmlFor="name" className="form-label">Full Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="form-input"
          required
          minLength={2}
          placeholder="Your full name"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="form-label">Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="form-input"
          required
          placeholder="your.email@example.com"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="phone" className="form-label">Phone Number *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="form-input"
          required
          placeholder="Your phone number"
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
          placeholder="Any specific questions or requirements?"
        />
      </div>

      {formData.type === 'buy' ? (
        <Button
          type="submit"
          variant="primary"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
        </Button>
      ) : (
        <Button
          type="button"
          variant="primary"
          className="w-full"
          onClick={nextStep}
        >
          Next: Employment Details
        </Button>
      )}
    </>
  );

  const renderStep2 = () => (
    <>
      <div className="mb-4">
        <label htmlFor="employment_status" className="form-label">Employment Status *</label>
        <select
          id="employment_status"
          name="employment_status"
          value={formData.employment_status || ''}
          onChange={handleInputChange}
          className="form-input"
          required
        >
          <option value="">Select your employment status</option>
          <option value="employed">Employed</option>
          <option value="unemployed">Unemployed</option>
        </select>
      </div>

      {formData.employment_status === 'employed' && (
        <>
          <div className="mb-4">
            <label htmlFor="current_position" className="form-label">Current Position *</label>
            <input
              type="text"
              id="current_position"
              name="current_position"
              value={formData.current_position || ''}
              onChange={handleInputChange}
              className="form-input"
              required
              placeholder="Your job title"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="annual_income" className="form-label">Annual Income (£) *</label>
            <input
              type="number"
              id="annual_income"
              name="annual_income"
              value={formData.annual_income || ''}
              onChange={handleInputChange}
              className="form-input"
              required
              min="0"
              placeholder="Your annual income in pounds"
            />
          </div>
        </>
      )}

      <div className="flex space-x-4">
        <Button
          type="button"
          variant="outline"
          className="flex-1"
          onClick={prevStep}
        >
          Back
        </Button>
        <Button
          type="button"
          variant="primary"
          className="flex-1"
          onClick={nextStep}
        >
          Next: Viewing Preferences
        </Button>
      </div>
    </>
  );

  const renderStep3 = () => (
    <>
      <div className="mb-4">
        <label htmlFor="preferred_viewing_date" className="form-label">Preferred Viewing Date & Time *</label>
        <DatePicker
          selected={formData.preferred_viewing_date}
          onChange={(date) => handleDateChange(date, 'preferred_viewing_date')}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
          minDate={new Date()}
          className="form-input w-full"
          placeholderText="Select date and time for viewing"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="preferred_move_date" className="form-label">Preferred Move-in Date *</label>
        <DatePicker
          selected={formData.preferred_move_date}
          onChange={(date) => handleDateChange(date, 'preferred_move_date')}
          dateFormat="MMMM d, yyyy"
          minDate={formData.preferred_viewing_date || new Date()}
          className="form-input w-full"
          placeholderText="Select your preferred move-in date"
          required
        />
      </div>

      <div className="flex space-x-4">
        <Button
          type="button"
          variant="outline"
          className="flex-1"
          onClick={prevStep}
        >
          Back
        </Button>
        <Button
          type="submit"
          variant="primary"
          className="flex-1"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
        </Button>
      </div>
    </>
  );

  if (isSubmitted) {
    return (
      <div className="card">
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
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Inquiry Submitted Successfully!</h3>
          <p className="text-gray-600 mb-4">
            Thank you for your interest in this property. Our team will review your inquiry and contact you shortly to arrange 
            {formData.type === 'rent' ? ' the viewing' : ' a viewing'}.
          </p>
          <p className="text-sm text-gray-500">
            Property: {propertyTitle}
          </p>
          <Button
            variant="secondary"
            className="mt-6"
            onClick={() => {
              setIsSubmitted(false);
              setStep(1);
            }}
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
      {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
      
      <div className="mb-4 p-3 bg-offwhite rounded-lg">
        <p className="text-sm font-medium text-navy">Property: {propertyTitle}</p>
        <p className="text-sm text-gray-600">Inquiry Type: {formData.type === 'buy' ? 'Purchase' : 'Rental'}</p>
      </div>

      {renderStepIndicator()}
      
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </form>
      
      {formData.type === 'rent' && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-xs text-blue-700">
            <strong>Note:</strong> For rental properties, we require employment details and viewing preferences to process your application efficiently.
          </p>
        </div>
      )}
    </div>
  );
};

export default PropertyInquiryForm;