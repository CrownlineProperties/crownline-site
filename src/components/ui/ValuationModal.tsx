import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Button from './Button';
import { supabase } from '../../lib/supabase';

interface ValuationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ValuationType = 'sale' | 'rental' | 'switch';
type PropertyType = 'newHouse' | 'secondHandHouse' | 'newFlat' | 'secondHandFlat';

const ValuationModal: React.FC<ValuationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [touched, setTouched] = useState({
    postcode: false,
    fullName: false,
    email: false,
    phone: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form data
  const [valuationType, setValuationType] = useState<ValuationType | null>(null);
  const [propertyTypes, setPropertyTypes] = useState<PropertyType[]>([]);
  const [formData, setFormData] = useState({
    postcode: '',
    fullName: '',
    email: '',
    phone: '',
  });

  // Helper functions for validation - pure functions with no side effects
  const touch = (field: keyof typeof touched) =>
    setTouched(prev => ({ ...prev, [field]: true }));

  const isValidPostcode = (value: string) =>
    /^[A-Za-z]{1,2}\d[\dA-Za-z]? ?\d[A-Za-z]{2}$/i.test(value);

  const isValidName = (value: string) => value.trim().length >= 3;
  
  const isValidEmail = (value: string) => 
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  
  const isValidPhone = (value: string) => 
    /^[+ 0-9().-]{7,}$/.test(value);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        resetForm();
      }, 300);
    }
  }, [isOpen]);

  // Trap focus in modal when open
  useEffect(() => {
    if (isOpen) {
      // Disable scrolling on body
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const resetForm = () => {
    setStep(1);
    setValuationType(null);
    setPropertyTypes([]);
    setFormData({
      postcode: '',
      fullName: '',
      email: '',
      phone: '',
    });
    setTouched({
      postcode: false,
      fullName: false,
      email: false,
      phone: false,
    });
    setSubmitting(false);
    setSubmitted(false);
  };

  const handleValuationTypeSelect = (type: ValuationType) => {
    setValuationType(type);
    nextStep();
  };

  const togglePropertyType = (type: PropertyType) => {
    if (propertyTypes.includes(type)) {
      setPropertyTypes(propertyTypes.filter(t => t !== type));
    } else {
      setPropertyTypes([...propertyTypes, type]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputBlur = (field: keyof typeof touched) => {
    touch(field);
  };

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handlePostcodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark postcode as touched
    touch('postcode');
    
    // Then validate
    if (isValidPostcode(formData.postcode)) {
      nextStep();
    }
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    touch('fullName');
    
    if (isValidName(formData.fullName)) {
      nextStep();
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    touch('email');
    
    if (isValidEmail(formData.email)) {
      nextStep();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation
    touch('phone');
    
    if (!isValidPhone(formData.phone)) {
      return;
    }
    
    setSubmitting(true);
    
    try {
      // Submit to Supabase
      const { error } = await supabase
        .from('valuation_requests')
        .insert([{
          type: valuationType === 'switch' ? 'sales' : valuationType,
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          postcode: formData.postcode,
          address: '', // We'll add this later if needed
          bedrooms: propertyTypes.length > 0 ? propertyTypes.join(', ') : 'Not specified',
          comments: ''
        }]);

      if (error) throw error;
      
      setSubmitted(true);
      setStep(8); // Move to confirmation step
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div 
          className="fixed inset-0 bg-navy bg-opacity-70 transition-opacity"
          onClick={onClose}
        ></div>
        
        <div className="relative transform overflow-hidden rounded-property bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className="absolute top-4 right-4">
            <button
              type="button"
              className="rounded-full p-1 hover:bg-gray-200 transition duration-300"
              onClick={onClose}
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          
          <div className="px-6 pt-10 pb-8">
            {/* Step 1: Initial popup */}
            {step === 1 && (
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Get your free valuation</h2>
                <p className="text-gray-600 mb-8">
                  Thanks for reaching out to us! We will be asking a few questions on the asset you want to get the valuation for, it should take less than 1 minute.
                </p>
                <Button 
                  variant="primary" 
                  onClick={() => setStep(2)}
                  className="w-full"
                >
                  Let's go
                </Button>
              </div>
            )}
            
            {/* Step 2: First selection - single choice */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Choose one option</h2>
                
                <div className="space-y-3 mb-6">
                  <button
                    type="button"
                    className={`w-full p-4 border rounded-property text-left transition ${
                      valuationType === 'sale'
                        ? 'border-gold bg-gold bg-opacity-10'
                        : 'border-gray-300 hover:border-gold'
                    }`}
                    onClick={() => handleValuationTypeSelect('sale')}
                  >
                    <span className="font-semibold">Valuation for an upcoming sale</span>
                  </button>
                  
                  <button
                    type="button"
                    className={`w-full p-4 border rounded-property text-left transition ${
                      valuationType === 'rental'
                        ? 'border-gold bg-gold bg-opacity-10'
                        : 'border-gray-300 hover:border-gold'
                    }`}
                    onClick={() => handleValuationTypeSelect('rental')}
                  >
                    <span className="font-semibold">Rental Valuation</span>
                  </button>
                  
                  <button
                    type="button"
                    className={`w-full p-4 border rounded-property text-left transition ${
                      valuationType === 'switch'
                        ? 'border-gold bg-gold bg-opacity-10'
                        : 'border-gray-300 hover:border-gold'
                    }`}
                    onClick={() => handleValuationTypeSelect('switch')}
                  >
                    <span className="font-semibold">Thinking of switching agent</span>
                  </button>
                </div>
                
                <Button 
                  variant="primary" 
                  onClick={() => setStep(3)}
                  className="w-full"
                  disabled={!valuationType}
                >
                  Let's go
                </Button>
              </div>
            )}
            
            {/* Step 3: Second selection - multiple choice */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">What type of property are you looking to evaluate?</h2>
                <p className="text-gray-600 mb-4">Select all that apply</p>
                
                <div className="space-y-3 mb-6">
                  <button
                    type="button"
                    className={`w-full p-4 border rounded-property text-left transition ${
                      propertyTypes.includes('newHouse')
                        ? 'border-gold bg-gold bg-opacity-10'
                        : 'border-gray-300 hover:border-gold'
                    }`}
                    onClick={() => togglePropertyType('newHouse')}
                  >
                    <span className="font-semibold">New built house</span>
                  </button>
                  
                  <button
                    type="button"
                    className={`w-full p-4 border rounded-property text-left transition ${
                      propertyTypes.includes('secondHandHouse')
                        ? 'border-gold bg-gold bg-opacity-10'
                        : 'border-gray-300 hover:border-gold'
                    }`}
                    onClick={() => togglePropertyType('secondHandHouse')}
                  >
                    <span className="font-semibold">Second hand house</span>
                  </button>
                  
                  <button
                    type="button"
                    className={`w-full p-4 border rounded-property text-left transition ${
                      propertyTypes.includes('newFlat')
                        ? 'border-gold bg-gold bg-opacity-10'
                        : 'border-gray-300 hover:border-gold'
                    }`}
                    onClick={() => togglePropertyType('newFlat')}
                  >
                    <span className="font-semibold">New built flat</span>
                  </button>
                  
                  <button
                    type="button"
                    className={`w-full p-4 border rounded-property text-left transition ${
                      propertyTypes.includes('secondHandFlat')
                        ? 'border-gold bg-gold bg-opacity-10'
                        : 'border-gray-300 hover:border-gold'
                    }`}
                    onClick={() => togglePropertyType('secondHandFlat')}
                  >
                    <span className="font-semibold">Second hand flat</span>
                  </button>
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={prevStep}
                  >
                    Back
                  </Button>
                  <Button 
                    variant="primary" 
                    onClick={nextStep}
                    disabled={propertyTypes.length === 0}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
            
            {/* Step 4: Contact details - Postcode */}
            {step === 4 && (
              <form onSubmit={handlePostcodeSubmit}>
                <h2 className="text-2xl font-semibold mb-4">What is the postcode of your property?</h2>
                
                <div className="mb-6">
                  <input
                    type="text"
                    name="postcode"
                    id="postcode"
                    className={`form-input w-full ${
                      touched.postcode && !isValidPostcode(formData.postcode) ? 'border-red-500' : ''
                    }`}
                    value={formData.postcode}
                    onChange={handleInputChange}
                    onBlur={() => handleInputBlur('postcode')}
                    placeholder="e.g. WC1X 8LU"
                    required
                  />
                  {touched.postcode && !isValidPostcode(formData.postcode) && (
                    <p className="text-red-500 text-sm mt-1">Please enter a valid UK postcode</p>
                  )}
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={prevStep}
                    type="button"
                  >
                    Back
                  </Button>
                  <Button 
                    variant="primary" 
                    type="submit"
                  >
                    Next
                  </Button>
                </div>
              </form>
            )}
            
            {/* Step 5: Contact details - Name */}
            {step === 5 && (
              <form onSubmit={handleNameSubmit}>
                <h2 className="text-2xl font-semibold mb-4">Tell us your full name</h2>
                
                <div className="mb-6">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    className={`form-input w-full ${
                      touched.fullName && !isValidName(formData.fullName) ? 'border-red-500' : ''
                    }`}
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onBlur={() => handleInputBlur('fullName')}
                    placeholder="Your full name"
                    required
                  />
                  {touched.fullName && !isValidName(formData.fullName) && (
                    <p className="text-red-500 text-sm mt-1">Please enter your full name</p>
                  )}
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={prevStep}
                    type="button"
                  >
                    Back
                  </Button>
                  <Button 
                    variant="primary" 
                    type="submit"
                  >
                    Next
                  </Button>
                </div>
              </form>
            )}
            
            {/* Step 6: Contact details - Email */}
            {step === 6 && (
              <form onSubmit={handleEmailSubmit}>
                <h2 className="text-2xl font-semibold mb-4">Your email</h2>
                
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`form-input w-full ${
                      touched.email && !isValidEmail(formData.email) ? 'border-red-500' : ''
                    }`}
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={() => handleInputBlur('email')}
                    placeholder="your.email@example.com"
                    required
                  />
                  {touched.email && !isValidEmail(formData.email) && (
                    <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
                  )}
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={prevStep}
                    type="button"
                  >
                    Back
                  </Button>
                  <Button 
                    variant="primary" 
                    type="submit"
                  >
                    Next
                  </Button>
                </div>
              </form>
            )}
            
            {/* Step 7: Contact details - Phone */}
            {step === 7 && (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold mb-4">Your phone number</h2>
                
                <div className="mb-6">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className={`form-input w-full ${
                      touched.phone && !isValidPhone(formData.phone) ? 'border-red-500' : ''
                    }`}
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={() => handleInputBlur('phone')}
                    placeholder="Your phone number"
                    required
                  />
                  {touched.phone && !isValidPhone(formData.phone) && (
                    <p className="text-red-500 text-sm mt-1">Please enter a valid phone number</p>
                  )}
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={prevStep}
                    type="button"
                    disabled={submitting}
                  >
                    Back
                  </Button>
                  <Button 
                    variant="primary" 
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting...' : 'Submit'}
                  </Button>
                </div>
              </form>
            )}
            
            {/* Step 8: Confirmation */}
            {step === 8 && submitted && (
              <div className="text-center">
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
                <h2 className="text-2xl font-semibold mb-4">Thank you for your enquiry!</h2>
                <p className="text-gray-600 mb-6">
                  Our team will contact you under 24h for further details. Stay close to your phone!
                </p>
                <Button 
                  variant="primary" 
                  onClick={onClose}
                >
                  Close
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuationModal;