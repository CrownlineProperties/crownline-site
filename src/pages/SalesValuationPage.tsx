import Hero from '../components/ui/Hero';
import ValuationForm from '../components/ui/ValuationForm';
import ValuationModal from '../components/ui/ValuationModal';
import { Check, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import Button from '../components/ui/Button';

const SalesValuationPage = () => {
  const [isValuationModalOpen, setIsValuationModalOpen] = useState(false);

  const openValuationModal = () => {
    setIsValuationModalOpen(true);
  };

  return (
    <div>
      <Hero
        title="Get a Free Sales Valuation"
        subtitle="Find out how much your property is worth in today's market"
        backgroundImage="https://images.pexels.com/photos/251287/pexels-photo-251287.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
              <h2 className="section-title">Why Choose Crownline to Sell Your Property</h2>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Expert Market Knowledge</h3>
                    <p className="text-gray-600">Our experienced team has deep insights into London's property market and pricing trends.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Professional Marketing</h3>
                    <p className="text-gray-600">High-quality photography, detailed floor plans, and premium listings on major property portals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">International Buyer Network</h3>
                    <p className="text-gray-600">Access to overseas investors and buyers through our dedicated international desk.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Proactive Approach</h3>
                    <p className="text-gray-600">We actively match properties with our database of qualified buyers to accelerate the sales process.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Dedicated Support</h3>
                    <p className="text-gray-600">Your personal agent will guide you through the entire sales process from valuation to completion.</p>
                  </div>
                </li>
              </ul>
              
              <div className="card bg-offwhite border border-gray-200">
                <div className="flex items-center mb-4">
                  <TrendingUp className="text-gold mr-3" />
                  <h3 className="font-semibold">Market Insights</h3>
                </div>
                <p className="text-gray-700">
                  Stay informed with our quarterly market reports and property price trends in London's most sought-after areas.
                </p>
              </div>
            </div>
            
            <div>
              <ValuationForm 
                type="sales"
                title="Request Your Free Sales Valuation"
                subtitle="Complete the form below and our sales experts will provide a detailed valuation for your property."
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="section-title text-white mb-6">The Crownline Sales Process</h2>
          <p className="text-lg mb-12 max-w-3xl mx-auto">
            We make selling your property simple and stress-free with our straightforward process.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
            <div className="relative pb-8 md:pb-0">
              <div className="bg-gold text-navy rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Valuation</h3>
              <p className="text-gray-300">Expert assessment of your property's value</p>
              
              {/* Connector line (hidden on mobile) */}
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gold transform translate-x-1/2"></div>
            </div>
            
            <div className="relative pb-8 md:pb-0">
              <div className="bg-gold text-navy rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Marketing</h3>
              <p className="text-gray-300">Professional photography and premium listings</p>
              
              {/* Connector line (hidden on mobile) */}
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gold transform translate-x-1/2"></div>
            </div>
            
            <div className="relative pb-8 md:pb-0">
              <div className="bg-gold text-navy rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Viewings</h3>
              <p className="text-gray-300">Accompanied viewings with qualified buyers</p>
              
              {/* Connector line (hidden on mobile) */}
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gold transform translate-x-1/2"></div>
            </div>
            
            <div className="relative pb-8 md:pb-0">
              <div className="bg-gold text-navy rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Offers</h3>
              <p className="text-gray-300">Negotiation to secure the best price</p>
              
              {/* Connector line (hidden on mobile) */}
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gold transform translate-x-1/2"></div>
            </div>
            
            <div className="relative pb-8 md:pb-0">
              <div className="bg-gold text-navy rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">5</div>
              <h3 className="text-xl font-semibold mb-2">Progression</h3>
              <p className="text-gray-300">Manage the sales process and paperwork</p>
              
              {/* Connector line (hidden on mobile) */}
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gold transform translate-x-1/2"></div>
            </div>
            
            <div>
              <div className="bg-gold text-navy rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">6</div>
              <h3 className="text-xl font-semibold mb-2">Completion</h3>
              <p className="text-gray-300">Successfully exchange and complete the sale</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">How long will it take to sell my property?</h3>
              <p className="text-gray-600">
                The time to sell varies depending on market conditions, property type, and pricing. On average, properties in London sell within 8-12 weeks when priced correctly.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">What fees do you charge?</h3>
              <p className="text-gray-600">
                Our fees are competitive and transparent. We operate on a no-sale, no-fee basis. During your valuation, we'll discuss our fee structure based on your specific requirements.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">How do you market my property?</h3>
              <p className="text-gray-600">
                We use professional photography, detailed floor plans, and virtual tours. Your property will be listed on major portals like Rightmove and Zoopla, as well as our website and social media channels.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">What if I'm also looking to buy?</h3>
              <p className="text-gray-600">
                We offer a comprehensive service for clients who are selling and buying simultaneously. Your dedicated agent will coordinate both transactions to ensure a smooth process.
              </p>
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

export default SalesValuationPage;