import { useState } from 'react';
import Hero from '../components/ui/Hero';
import Button from '../components/ui/Button';
import { Check, Clock, HelpCircle, FileText, Phone, Users, Home, PencilRuler, Banknote, Key } from 'lucide-react';

const SellingProcessPage = () => {
  const [activeTab, setActiveTab] = useState<'process' | 'tips' | 'faq'>('process');

  return (
    <div>
      <Hero
        title="The Property Selling Process"
        subtitle="A comprehensive guide to selling your property with Crownline"
        backgroundImage="https://images.pexels.com/photos/5313361/pexels-photo-5313361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        fullHeight={false}
        buttons={[
          { text: 'Get a Free Valuation', href: '/valuation/sales', variant: 'primary' },
        ]}
      />

      {/* Tabs Navigation */}
      <section className="bg-white border-b">
        <div className="container-custom">
          <div className="flex overflow-x-auto py-4 gap-4">
            <button
              className={`whitespace-nowrap px-5 py-2 font-medium rounded-property transition ${
                activeTab === 'process'
                  ? 'bg-navy text-white'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('process')}
            >
              Selling Process
            </button>
            <button
              className={`whitespace-nowrap px-5 py-2 font-medium rounded-property transition ${
                activeTab === 'tips'
                  ? 'bg-navy text-white'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('tips')}
            >
              Seller's Tips
            </button>
            <button
              className={`whitespace-nowrap px-5 py-2 font-medium rounded-property transition ${
                activeTab === 'faq'
                  ? 'bg-navy text-white'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('faq')}
            >
              FAQs
            </button>
          </div>
        </div>
      </section>

      {/* Selling Process Section */}
      {activeTab === 'process' && (
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">How We Sell Your Property</h2>
            
            <div className="max-w-5xl mx-auto">
              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-center">
                <div className="md:col-span-1">
                  <div className="relative">
                    <div className="w-24 h-24 bg-navy rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4 mx-auto md:mx-0">1</div>
                    <div className="hidden md:block absolute top-24 left-12 h-24 w-0.5 bg-gold"></div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-semibold mb-3">Property Valuation</h3>
                  <p className="text-gray-600 mb-4">
                    We conduct a thorough assessment of your property, taking into account local market trends, comparable properties, and unique features of your home. Our goal is to establish a competitive and realistic asking price.
                  </p>
                  <div className="card bg-offwhite">
                    <div className="flex items-start">
                      <Clock className="text-gold mr-3 flex-shrink-0 mt-1" size={20} />
                      <p className="text-sm">Our valuations typically take 30-45 minutes and include a detailed property inspection.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-center">
                <div className="md:col-span-1">
                  <div className="relative">
                    <div className="w-24 h-24 bg-navy rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4 mx-auto md:mx-0">2</div>
                    <div className="hidden md:block absolute top-24 left-12 h-24 w-0.5 bg-gold"></div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-semibold mb-3">Preparing for Sale</h3>
                  <p className="text-gray-600 mb-4">
                    Our marketing team creates a compelling listing that showcases your property's best features. This includes professional photography, detailed floor plans, and engaging property descriptions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 card bg-offwhite">
                      <div className="flex items-start">
                        <PencilRuler className="text-gold mr-3 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <h4 className="font-semibold mb-1">Floor Plans</h4>
                          <p className="text-sm">Accurate measurements and layouts</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 card bg-offwhite">
                      <div className="flex items-start">
                        <Home className="text-gold mr-3 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <h4 className="font-semibold mb-1">Photography</h4>
                          <p className="text-sm">High-quality images that sell</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-center">
                <div className="md:col-span-1">
                  <div className="relative">
                    <div className="w-24 h-24 bg-navy rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4 mx-auto md:mx-0">3</div>
                    <div className="hidden md:block absolute top-24 left-12 h-24 w-0.5 bg-gold"></div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-semibold mb-3">Marketing & Viewings</h3>
                  <p className="text-gray-600 mb-4">
                    We market your property across all major portals, our website, social media, and our extensive buyer database. Our agents conduct accompanied viewings, highlighting your property's key features and answering potential buyers' questions.
                  </p>
                  <div className="card bg-offwhite">
                    <div className="flex items-start">
                      <Users className="text-gold mr-3 flex-shrink-0 mt-1" size={20} />
                      <p className="text-sm">We pre-qualify all viewers to ensure they are serious buyers who meet the financial requirements.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-center">
                <div className="md:col-span-1">
                  <div className="relative">
                    <div className="w-24 h-24 bg-navy rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4 mx-auto md:mx-0">4</div>
                    <div className="hidden md:block absolute top-24 left-12 h-24 w-0.5 bg-gold"></div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-semibold mb-3">Offers & Negotiations</h3>
                  <p className="text-gray-600 mb-4">
                    We present all offers to you promptly and advise on the best course of action. Our experienced negotiators work to secure the best possible price and terms for your property.
                  </p>
                  <div className="card bg-offwhite">
                    <div className="flex items-start">
                      <Banknote className="text-gold mr-3 flex-shrink-0 mt-1" size={20} />
                      <p className="text-sm">We verify each buyer's financial position before accepting an offer to minimize fall-throughs.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-center">
                <div className="md:col-span-1">
                  <div className="relative">
                    <div className="w-24 h-24 bg-navy rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4 mx-auto md:mx-0">5</div>
                    <div className="hidden md:block absolute top-24 left-12 h-24 w-0.5 bg-gold"></div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-semibold mb-3">Sales Progression</h3>
                  <p className="text-gray-600 mb-4">
                    Once an offer is accepted, our dedicated sales progression team manages the process through to completion. We liaise with solicitors, surveyors, and all parties to ensure a smooth transaction.
                  </p>
                  <div className="card bg-offwhite">
                    <div className="flex items-start">
                      <FileText className="text-gold mr-3 flex-shrink-0 mt-1" size={20} />
                      <p className="text-sm">Weekly updates keep you informed about the progress of your sale at every stage.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 6 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="relative">
                    <div className="w-24 h-24 bg-navy rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4 mx-auto md:mx-0">6</div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-semibold mb-3">Completion & Aftercare</h3>
                  <p className="text-gray-600 mb-4">
                    We coordinate the exchange of contracts and completion day arrangements, ensuring a hassle-free handover of keys. Our relationship doesn't end at completion - we're here to assist with any future property needs.
                  </p>
                  <div className="card bg-offwhite">
                    <div className="flex items-start">
                      <Key className="text-gold mr-3 flex-shrink-0 mt-1" size={20} />
                      <p className="text-sm">We handle all final meter readings, key handovers, and property checks on completion day.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Seller's Tips Section */}
      {activeTab === 'tips' && (
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">Maximizing Your Property's Value</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="card hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Presentation Tips</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium">Declutter all spaces</p>
                      <p className="text-sm text-gray-600">Remove personal items and excess furniture to make rooms appear larger.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium">Make minor repairs</p>
                      <p className="text-sm text-gray-600">Fix leaky taps, cracked tiles, and scuffed paintwork before viewings.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium">Deep clean everything</p>
                      <p className="text-sm text-gray-600">Consider professional cleaning for carpets, windows, and hard-to-reach areas.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium">Enhance curb appeal</p>
                      <p className="text-sm text-gray-600">First impressions count - tidy the front garden, clean the façade, and consider a freshly painted front door.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="card hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Viewing Preparation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium">Create ambiance</p>
                      <p className="text-sm text-gray-600">Open curtains for natural light, set a comfortable temperature, and consider subtle fragrances.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium">Remove pets during viewings</p>
                      <p className="text-sm text-gray-600">Some buyers may be allergic or uncomfortable around animals.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium">Prepare information pack</p>
                      <p className="text-sm text-gray-600">Have details about service charges, utility costs, and local amenities ready for interested buyers.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium">Highlight key features</p>
                      <p className="text-sm text-gray-600">Ensure that special features like renovated kitchens or gardens are clean and well-presented.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="card hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Timing Your Sale</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium">Consider seasonal factors</p>
                      <p className="text-sm text-gray-600">Spring and early autumn typically see the most active markets in London.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium">Monitor interest rates</p>
                      <p className="text-sm text-gray-600">Lower rates tend to boost buyer demand due to reduced mortgage costs.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium">Watch local development plans</p>
                      <p className="text-sm text-gray-600">Upcoming improvements to infrastructure or amenities can positively impact prices.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="card hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Documentation Checklist</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium">Property title deeds</p>
                      <p className="text-sm text-gray-600">Ensure these are readily available or registered with the Land Registry.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium">Energy Performance Certificate</p>
                      <p className="text-sm text-gray-600">Valid for 10 years - check if yours needs renewing.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium">Building regulations certificates</p>
                      <p className="text-sm text-gray-600">For any work carried out on the property, including extensions or conversions.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium">Warranties and guarantees</p>
                      <p className="text-sm text-gray-600">Gather documents for appliances, windows, boilers, and any building work.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg mb-6">Ready to get started with your property sale?</p>
              <Button href="/valuation/sales" variant="primary" size="lg">
                Book a Free Valuation
              </Button>
            </div>
          </div>
        </section>
      )}
      
      {/* FAQs Section */}
      {activeTab === 'faq' && (
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="card">
                  <div className="flex items-start">
                    <HelpCircle className="text-gold mr-3 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-2">How long will it take to sell my property?</h3>
                      <p className="text-gray-600">
                        The timeframe varies depending on market conditions, property type, location, and pricing strategy. In London, the average time from listing to completion is 3-4 months. During your valuation, we can provide a more accurate estimate based on current market conditions and your specific property.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="card">
                  <div className="flex items-start">
                    <HelpCircle className="text-gold mr-3 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-2">What costs are involved in selling a property?</h3>
                      <p className="text-gray-600">
                        The main costs include estate agent fees (typically 1-3% of the sale price), solicitor/conveyancer fees (£800-£2,000), Energy Performance Certificate (£60-£120), and potential mortgage redemption fees. If you're buying another property, you'll also need to consider stamp duty, moving costs, and potential overlap in mortgages.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="card">
                  <div className="flex items-start">
                    <HelpCircle className="text-gold mr-3 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-2">Should I sell before buying my next property?</h3>
                      <p className="text-gray-600">
                        This depends on your financial situation and the current market. Selling first puts you in a stronger position as a buyer with no chain, but means you may need temporary accommodation between moves. Buying first can avoid this disruption but may create pressure to sell quickly, potentially at a lower price. We can advise on the best strategy based on your circumstances and the current market.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="card">
                  <div className="flex items-start">
                    <HelpCircle className="text-gold mr-3 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-2">What is conveyancing and what does it involve?</h3>
                      <p className="text-gray-600">
                        Conveyancing is the legal process of transferring property ownership from seller to buyer. It involves preparing contracts, conducting property searches, arranging the deposit, exchanging contracts, and completing the sale. Your solicitor or conveyancer will handle this process, which typically takes 8-12 weeks.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="card">
                  <div className="flex items-start">
                    <HelpCircle className="text-gold mr-3 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-2">What happens if my buyer pulls out?</h3>
                      <p className="text-gray-600">
                        Before exchange of contracts, either party can withdraw without legal consequences, though costs incurred up to that point are not recoverable. After exchange, the buyer would forfeit their deposit if they withdraw. If your buyer pulls out before exchange, we will immediately remarket your property and contact other interested parties who viewed previously.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="card">
                  <div className="flex items-start">
                    <HelpCircle className="text-gold mr-3 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-2">Do I need to pay Capital Gains Tax when selling my property?</h3>
                      <p className="text-gray-600">
                        If the property is your main residence, you typically won't pay Capital Gains Tax (CGT) under Private Residence Relief. However, if you're selling a second home or investment property, CGT may apply on the profit made. The amount depends on your income tax band and any available exemptions. We recommend consulting with a tax advisor for personalised advice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card mt-10 p-8 bg-navy text-white">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="mb-6 md:mb-0 md:mr-8">
                    <Phone size={48} className="text-gold" />
                  </div>
                  <div className="text-center md:text-left md:flex-1">
                    <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
                    <p className="mb-4">
                      Our team of property experts is ready to answer any questions you have about selling your property.
                    </p>
                    <Button href="/contact" variant="primary">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/7578951/pexels-photo-7578951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <div className="absolute inset-0 bg-navy bg-opacity-80"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to sell your property?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book a no-obligation valuation with one of our expert agents today.
          </p>
          <Button href="/valuation/sales" variant="primary" size="lg">
            Get a Free Valuation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SellingProcessPage;