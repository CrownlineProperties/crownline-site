import Hero from '../components/ui/Hero';
import ContactForm from '../components/ui/ContactForm';
import GoogleMap from '../components/ui/GoogleMap';
import { MapPin, Phone, Mail, Clock, Building2, Landmark } from 'lucide-react';

const ContactPage = () => {
  return (
    <div>
      <Hero
        title="Contact Crownline Properties"
        subtitle="Get in touch with our team of property experts"
        backgroundImage="https://images.pexels.com/photos/33153/raisting-sattelit-reception-signal.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        fullHeight={false}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="section-title mb-8">Get In Touch</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <MapPin size={24} className="text-gold mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Our Office</h3>
                    <p className="text-gray-600">
                      45 Broad Lane<br />
                      London N15 4DJ<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-gold mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:020 3489 2040" className="hover:text-gold transition duration-300">
                        020 3489 2040
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-gold mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@crownlineproperties.co.uk" className="hover:text-gold transition duration-300">
                        info@crownlineproperties.co.uk
                      </a>
                    </p>
                    <ul className="mt-2 text-sm text-gray-600">
                      <li>
                        <span className="font-medium">Lettings:</span>{" "}
                        <a href="mailto:lettings@crownlineproperties.co.uk" className="hover:text-gold transition duration-300">
                          info@crownlineproperties.co.uk
                        </a>
                      </li>
                      <li>
                        <span className="font-medium">Sales:</span>{" "}
                        <a href="mailto:sales@crownline.co.uk" className="hover:text-gold transition duration-300">
                          info@crownlineproperties.co.uk
                        </a>
                      </li>
                      <li>
                        <span className="font-medium">Property Management:</span>{" "}
                        <a href="mailto:management@crownline.co.uk" className="hover:text-gold transition duration-300">
                          info@crownlineproperties.co.uk
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="text-gold mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Office Hours</h3>
                    <ul className="text-gray-600">
                      <li>Monday - Friday: 9:00 AM - 6:30 PM</li>
                      <li>Saturday: 10:00 AM - 4:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Building2 size={24} className="text-gold mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Departments</h3>
                    <ul className="text-gray-600">
                      <li><span className="font-medium">Sales:</span> 020 3489 2040</li>
                      <li><span className="font-medium">Lettings:</span> 020 3489 2040</li>
                      <li><span className="font-medium">Property Management:</span> 020 3489 2040</li>
                      <li><span className="font-medium">International Desk (中文服务):</span> 020 3489 2040</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <GoogleMap
                address="45 Broad Lane, London N15 4DJ"
                zoom={16}
                className="w-full h-64 rounded-property"
              />
              <p className="text-sm text-gray-500 mt-2">
                Conveniently located near Tottenham Hale and Seven Sisters stations (Victoria Line and National Rail).
              </p>
            </div>
            
            {/* Contact Form */}
            <div>
              <ContactForm 
                title="Send Us a Message" 
                subtitle="Have a question or need assistance? Fill out the form below and our team will get back to you as soon as possible."
              />
              
              <div className="mt-8 p-6 bg-offwhite rounded-property border border-gray-200">
                <div className="flex items-start">
                  <Landmark size={24} className="text-gold mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Professional Memberships</h3>
                    <p className="text-gray-600 mb-4">
                      Crownline Properties is a member of the Property Ombudsman and adheres to their Code of Practice.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <img 
                        src="https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Money Shield" 
                        className="h-12 w-auto"
                      />
                      <img 
                        src="https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Property Ombudsman" 
                        className="h-12 w-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-offwhite">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">What areas of London do you cover?</h3>
              <p className="text-gray-600">
                We specialise in Central London areas including Kensington, Chelsea, Mayfair, Westminster, City of London, Canary Wharf, Islington, Camden, and surrounding areas.
              </p>
            </div>
            
            <div className="card hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Do you offer virtual viewings?</h3>
              <p className="text-gray-600">
                Yes, we provide high-quality video tours and live virtual viewings for all our properties to accommodate international clients and those unable to attend in person.
              </p>
            </div>
            
            <div className="card hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">How do I arrange a valuation?</h3>
              <p className="text-gray-600">
                You can book a valuation by calling us directly, using our online valuation form, or sending us an email with your property details and preferred contact time.
              </p>
            </div>
            
            <div className="card hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Do you have staff who speak Mandarin?</h3>
              <p className="text-gray-600">
                Yes, our international desk has Mandarin and Cantonese speaking staff to assist Chinese investors and landlords. Please contact our international desk directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;