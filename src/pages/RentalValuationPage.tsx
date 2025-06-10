import Hero from '../components/ui/Hero';
import ValuationForm from '../components/ui/ValuationForm';
import ValuationModal from '../components/ui/ValuationModal';
import Button from '../components/ui/Button';
import { Check, Shield } from 'lucide-react';
import { useState } from 'react';

const RentalValuationPage = () => {
  const [isValuationModalOpen, setIsValuationModalOpen] = useState(false);

  const openValuationModal = () => {
    setIsValuationModalOpen(true);
  };

  return (
    <div>
      <Hero
        title="Get a Free Rental Valuation"
        subtitle="Find out how much your property could earn in today's rental market"
        backgroundImage="https://images.pexels.com/photos/1791583/pexels-photo-1791583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        fullHeight={false}
        buttons={[
          { 
            text: 'Get an Instant Valuation', 
            href: '#',
            variant: 'primary',
            onClick: openValuationModal
          },
        ]}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Why Choose Crownline for Your Rental Property</h2>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Local Market Expertise</h3>
                    <p className="text-gray-600">Our dedicated team has in-depth knowledge of the London rental market and current pricing trends.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Quality Tenant Matching</h3>
                    <p className="text-gray-600">We find reliable tenants who meet your requirements and pass our thorough referencing process.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Full Compliance Assistance</h3>
                    <p className="text-gray-600">We ensure your property meets all legal requirements and regulations for renting in London.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Dedicated International Desk</h3>
                    <p className="text-gray-600">Specialised services for overseas landlords with multilingual staff to assist you.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Comprehensive Marketing</h3>
                    <p className="text-gray-600">Professional photography, detailed floor plans, and listings on major property portals.</p>
                  </div>
                </li>
              </ul>
              
              <div className="card bg-offwhite border border-gray-200">
                <div className="flex items-center mb-4">
                  <Shield className="text-gold mr-3" />
                  <h3 className="font-semibold">Our Rental Guarantee</h3>
                </div>
                <p className="text-gray-700">
                  Crownline offers rental guarantee and protection plans to ensure you receive your rental income even if your tenant fails to pay.
                </p>
              </div>
            </div>
            
            <div>
              <ValuationForm 
                type="rental"
                title="Request Your Free Rental Valuation"
                subtitle="Complete the form below and our lettings experts will provide a detailed rental valuation for your property."
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="section-title text-white mb-6">The Crownline Lettings Process</h2>
          <p className="text-lg mb-12 max-w-3xl mx-auto">
            We make letting your property simple and stress-free with our straightforward process.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="relative pb-8 md:pb-0">
              <div className="bg-gold text-navy rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Valuation</h3>
              <p className="text-gray-300">We assess your property and provide a competitive rental valuation.</p>
              
              {/* Connector line (hidden on mobile) */}
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gold transform translate-x-1/2"></div>
            </div>
            
            <div className="relative pb-8 md:pb-0">
              <div className="bg-gold text-navy rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Marketing</h3>
              <p className="text-gray-300">We create professional listings and market your property to find quality tenants.</p>
              
              {/* Connector line (hidden on mobile) */}
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gold transform translate-x-1/2"></div>
            </div>
            
            <div className="relative pb-8 md:pb-0">
              <div className="bg-gold text-navy rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Tenant Selection</h3>
              <p className="text-gray-300">We conduct viewings and thoroughly reference potential tenants.</p>
              
              {/* Connector line (hidden on mobile) */}
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gold transform translate-x-1/2"></div>
            </div>
            
            <div>
              <div className="bg-gold text-navy rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Move In</h3>
              <p className="text-gray-300">We handle all paperwork, deposit protection, and inventory before your tenant moves in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valuation Modal */}
      <ValuationModal
        isOpen={isValuationModalOpen}
        onClose={() => setIsValuationModalOpen(false)}
      />
    </div>
  );
};

export default RentalValuationPage;