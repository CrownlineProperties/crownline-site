import Hero from '../components/ui/Hero';
import Button from '../components/ui/Button';
import { Check, Shield, Clock, Wrench, Briefcase, LineChart } from 'lucide-react';

const LandlordsManagementPage = () => {
  return (
    <div>
      <Hero
        title="Property Management Services"
        subtitle="Complete property management solutions for London landlords"
        backgroundImage="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        fullHeight={false}
        buttons={[
          { text: 'Get a Rental Valuation', href: '/valuation/rental', variant: 'primary' },
        ]}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Comprehensive Property Management</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <Clock className="text-gold mr-4" size={24} />
                <h3 className="text-xl font-semibold">24/7 Tenant Support</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Round-the-clock assistance for your tenants, ensuring any issues are addressed promptly and efficiently.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2 mt-2"></span>
                  <span>Emergency response within 4 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2 mt-2"></span>
                  <span>Multilingual support team</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2 mt-2"></span>
                  <span>Online portal for tenant requests</span>
                </li>
              </ul>
            </div>
            
            <div className="card hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <Wrench className="text-gold mr-4" size={24} />
                <h3 className="text-xl font-semibold">Maintenance Management</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Comprehensive maintenance service with vetted contractors and transparent pricing.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2 mt-2"></span>
                  <span>Preventative maintenance schedule</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2 mt-2"></span>
                  <span>Pre-approved contractor network</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2 mt-2"></span>
                  <span>Digital work order tracking</span>
                </li>
              </ul>
            </div>
            
            <div className="card hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <Shield className="text-gold mr-4" size={24} />
                <h3 className="text-xl font-semibold">Compliance Management</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Stay compliant with all UK property regulations and legal requirements.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2 mt-2"></span>
                  <span>Automatic certificate renewals</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2 mt-2"></span>
                  <span>Regular property inspections</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2 mt-2"></span>
                  <span>Legal updates and guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-offwhite">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Digital Landlord Dashboard</h2>
              <p className="text-lg text-gray-600 mb-6">
                Access real-time information about your property portfolio from anywhere in the world.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Real-Time Financial Reporting</h3>
                    <p className="text-gray-600">View income, expenses, and statements with automatic tax calculations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Maintenance Tracking</h3>
                    <p className="text-gray-600">Monitor all maintenance requests, approvals, and completions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Document Repository</h3>
                    <p className="text-gray-600">Access all contracts, certificates, and important documents in one secure place.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Tenancy Timeline</h3>
                    <p className="text-gray-600">Overview of past, current, and upcoming tenancies with important dates.</p>
                  </div>
                </li>
              </ul>
              
              <Button href="/valuation/rental" variant="primary">
                Learn More
              </Button>
            </div>
            
            <div className="h-96 rounded-property overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3759073/pexels-photo-3759073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Digital landlord dashboard" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 h-96 rounded-property overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="International landlord services" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="section-title text-white">International Landlord Services</h2>
              <p className="text-lg text-gray-300 mb-6">
                Specially designed services for overseas property owners with multilingual support.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Mandarin & Cantonese Support</h3>
                    <p className="text-gray-300">Dedicated multilingual property managers for Asian investors.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Tax Efficiency Planning</h3>
                    <p className="text-gray-300">Guidance on NRL scheme and tax-efficient property management.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">International Payments</h3>
                    <p className="text-gray-300">Receive rental income in your preferred currency with competitive rates.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Virtual Property Tours</h3>
                    <p className="text-gray-300">Regular video inspections and updates on your property's condition.</p>
                  </div>
                </li>
              </ul>
              
              <Button href="/contact" variant="primary">
                Contact Our International Team
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Our Management Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card hover:shadow-md transition-all duration-300 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Clock className="text-gold mr-4" size={28} />
                <h3 className="text-2xl font-semibold">Tenant Management</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Comprehensive tenant relationship management from move-in to move-out.
              </p>
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={16} />
                  <span>Thorough tenant vetting & referencing</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={16} />
                  <span>Detailed inventories & check-ins</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={16} />
                  <span>Regular property inspections</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={16} />
                  <span>Rent collection & arrears management</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={16} />
                  <span>Tenancy renewals & negotiations</span>
                </li>
              </ul>
            </div>
            
            <div className="card hover:shadow-md transition-all duration-300 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Briefcase className="text-gold mr-4" size={28} />
                <h3 className="text-2xl font-semibold">Financial Management</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Comprehensive financial services for your property portfolio.
              </p>
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={16} />
                  <span>Secure rent collection & processing</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={16} />
                  <span>Monthly financial statements</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={16} />
                  <span>Tax preparation assistance</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={16} />
                  <span>Bill payment service</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={16} />
                  <span>Year-end financial reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-offwhite">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Why Our Clients Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto bg-navy rounded-full flex items-center justify-center mb-4">
                <Clock className="text-gold" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Time Saving</h3>
              <p className="text-gray-600">
                Our management services save landlords an average of 15 hours per month.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto bg-navy rounded-full flex items-center justify-center mb-4">
                <LineChart className="text-gold" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Higher Returns</h3>
              <p className="text-gray-600">
                Properties under our management achieve 8% higher rental yields on average.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto bg-navy rounded-full flex items-center justify-center mb-4">
                <Shield className="text-gold" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Risk Reduction</h3>
              <p className="text-gray-600">
                Our thorough tenant screening process reduces issues by 92%.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto bg-navy rounded-full flex items-center justify-center mb-4">
                <Briefcase className="text-gold" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Peace of Mind</h3>
              <p className="text-gray-600">
                97% of our clients rate their stress reduction as "significant" after partnering with us.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">What are your management fees?</h3>
                  <p className="text-gray-600">
                    Our standard management fee is 15% of the monthly rent, with discounts available for multiple properties. This covers all our core management services, with optional add-ons available for specialised requirements.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">How often do you inspect properties?</h3>
                  <p className="text-gray-600">
                    We conduct quarterly property inspections as standard, with detailed reports and photographs provided after each visit. Additional inspections can be arranged if needed.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">How do you handle maintenance issues?</h3>
                  <p className="text-gray-600">
                    Maintenance requests are processed through our 24/7 portal. We have a trusted network of contractors who can respond quickly, often within 4 hours for emergencies. For works over £250, we seek your approval first.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">How do overseas landlords receive their rental income?</h3>
                  <p className="text-gray-600">
                    We can transfer your rental income to any international bank account in your preferred currency. We use competitive exchange rates and can arrange for monthly or quarterly transfers.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card bg-offwhite border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to experience stress-free property management?</h3>
              <p className="text-gray-600 mb-6">
                Let us take care of your property while you focus on what matters to you. Our comprehensive management services are trusted by hundreds of landlords worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/valuation/rental" variant="primary" className="flex-1">
                  Get Started
                </Button>
                <Button href="/contact" variant="outline" className="flex-1">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <div className="absolute inset-0 bg-navy bg-opacity-80"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Let us handle the complexities of property management
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied landlords who trust Crownline with their valuable assets.
          </p>
          <Button href="/valuation/rental" variant="primary" size="lg">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandlordsManagementPage;