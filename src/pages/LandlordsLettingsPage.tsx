import Hero from '../components/ui/Hero';
import Button from '../components/ui/Button';
import { Check, Shield, Clock, Briefcase } from 'lucide-react';

const LandlordsLettingsPage = () => {
  return (
    <div>
      <Hero
        title="Lettings Services for Landlords"
        subtitle="Comprehensive lettings solutions for London property owners"
        backgroundImage="https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        fullHeight={false}
        buttons={[
          { text: 'Get a Rental Valuation', href: '/valuation/rental', variant: 'primary' },
        ]}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Our Lettings Packages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">Let Only</h3>
                <p className="text-gray-600 mb-4">Perfect for experienced landlords who want to manage their own property.</p>
                <p className="text-2xl font-bold text-navy mb-4">8% <span className="text-base font-normal text-gray-500">of annual rent</span></p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Property marketing & advertising</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Tenant finding & referencing</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Tenancy agreement preparation</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Deposit registration</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Move-in coordination</span>
                </li>
              </ul>
              
              <Button href="/valuation/rental" variant="outline" className="w-full">
                Get Started
              </Button>
            </div>
            
            <div className="card border-2 border-gold hover:shadow-md transition-all duration-300 flex flex-col relative">
              <div className="absolute -top-4 right-4 bg-gold text-navy px-4 py-1 rounded-full text-sm font-bold">
                Popular
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">Rent Collection</h3>
                <p className="text-gray-600 mb-4">Ideal for landlords who want to manage maintenance but not finances.</p>
                <p className="text-2xl font-bold text-navy mb-4">10% <span className="text-base font-normal text-gray-500">of annual rent</span></p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>All Let Only services</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Monthly rent collection</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Rent arrears management</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Monthly statements</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Annual tax statements</span>
                </li>
              </ul>
              
              <Button href="/valuation/rental" variant="primary" className="w-full">
                Get Started
              </Button>
            </div>
            
            <div className="card hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">Fully Managed</h3>
                <p className="text-gray-600 mb-4">Complete management solution for hands-off property ownership.</p>
                <p className="text-2xl font-bold text-navy mb-4">15% <span className="text-base font-normal text-gray-500">of annual rent</span></p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>All Rent Collection services</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Property maintenance</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>24/7 tenant support</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Quarterly property inspections</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Legal compliance management</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>End of tenancy management</span>
                </li>
              </ul>
              
              <Button href="/valuation/rental" variant="outline" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-offwhite">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Landlord Compliance Checklist</h2>
          
          <div className="card max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="py-3 px-4 text-left bg-navy text-white rounded-tl-lg">Requirement</th>
                    <th className="py-3 px-4 text-left bg-navy text-white">Details</th>
                    <th className="py-3 px-4 text-left bg-navy text-white rounded-tr-lg">Crownline Assistance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Energy Performance Certificate (EPC)</td>
                    <td className="py-3 px-4">Minimum rating of E required for all rental properties</td>
                    <td className="py-3 px-4">
                      <Check className="text-green-500" size={18} />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Gas Safety Certificate</td>
                    <td className="py-3 px-4">Annual inspection required for all gas appliances</td>
                    <td className="py-3 px-4">
                      <Check className="text-green-500" size={18} />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Electrical Safety Certification</td>
                    <td className="py-3 px-4">EICR required every 5 years</td>
                    <td className="py-3 px-4">
                      <Check className="text-green-500" size={18} />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Smoke & Carbon Monoxide Alarms</td>
                    <td className="py-3 px-4">Required on each floor and near fuel-burning appliances</td>
                    <td className="py-3 px-4">
                      <Check className="text-green-500" size={18} />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Legionella Risk Assessment</td>
                    <td className="py-3 px-4">Assessment of water systems required</td>
                    <td className="py-3 px-4">
                      <Check className="text-green-500" size={18} />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Right to Rent Checks</td>
                    <td className="py-3 px-4">Verification of tenant's right to live in the UK</td>
                    <td className="py-3 px-4">
                      <Check className="text-green-500" size={18} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 flex items-start">
              <Shield className="text-gold mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-600">
                With our Fully Managed service, we handle all compliance requirements for you, ensuring your property meets all legal standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">International Landlord Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                Crownline specializes in helping overseas landlords manage their London property investments with confidence and ease.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Multilingual Support</h3>
                    <p className="text-gray-600">Dedicated Mandarin and Cantonese speaking staff to assist Asian investors.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Non-Resident Landlord Tax Guidance</h3>
                    <p className="text-gray-600">Assistance with NRL scheme registration and tax requirements.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">24/7 Online Landlord Portal</h3>
                    <p className="text-gray-600">Access real-time information about your property from anywhere in the world.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">International Payment Options</h3>
                    <p className="text-gray-600">Receive rental income in your preferred currency with competitive exchange rates.</p>
                  </div>
                </li>
              </ul>
              
              <Button href="/valuation/rental" variant="primary">
                Let With Us
              </Button>
            </div>
            
            <div className="h-96 rounded-property overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2310885/pexels-photo-2310885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="International property investors" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="section-title text-white mb-8">Let Your Property with Crownline</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Experience hassle-free property management with our dedicated team of lettings professionals.
          </p>
          
          <Button href="/valuation/rental" variant="primary" size="lg">
            Get a Free Rental Valuation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandlordsLettingsPage;