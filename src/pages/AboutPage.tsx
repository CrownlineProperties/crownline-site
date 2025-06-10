import React from 'react';
import Hero from '../components/ui/Hero';
import Button from '../components/ui/Button';
import { Check, Users, Award, Building, Clock, Heart, Star } from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      <Hero
        title="About Crownline Properties"
        subtitle="London's dedicated property partner for overseas landlords and investors"
        backgroundImage="https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        fullHeight={false}
      />

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2017, Crownline Properties has rapidly established itself as a trusted name in London's property market, particularly for international investors and landlords seeking a reliable partner for their UK property investments.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our journey began when our founder, Henry Abiodun Okunbolade, identified a gap in the market for property services that truly understood the unique needs of overseas investors. Having experienced the challenges firsthand as an international property owner, Henry built Crownline with a clear mission: to make London property investment accessible, transparent, and rewarding for clients around the world.
              </p>
              <p className="text-lg text-gray-700">
                Today, we're proud to manage over £180 million in property assets across prime London locations, serving clients from more than 15 countries with our multilingual team and specialised services.
              </p>
            </div>
            <div className="rounded-property overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="London cityscape" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-offwhite">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="flex items-center mb-4">
                <Users className="text-gold mr-4" size={24} />
                <h3 className="text-xl font-semibold">Client-First Approach</h3>
              </div>
              <p className="text-gray-600">
                We prioritise your needs and goals, providing personalised service and tailored solutions for every client, whether you're a first-time buyer or seasoned investor.
              </p>
            </div>
            
            <div className="card hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="flex items-center mb-4">
                <Award className="text-gold mr-4" size={24} />
                <h3 className="text-xl font-semibold">Excellence</h3>
              </div>
              <p className="text-gray-600">
                We maintain the highest standards in everything we do, from the quality of our property marketing to the responsiveness of our maintenance service.
              </p>
            </div>
            
            <div className="card hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="flex items-center mb-4">
                <Clock className="text-gold mr-4" size={24} />
                <h3 className="text-xl font-semibold">Efficiency</h3>
              </div>
              <p className="text-gray-600">
                We leverage technology and streamlined processes to deliver fast, effective service without compromising on quality or attention to detail.
              </p>
            </div>
            
            <div className="card hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="flex items-center mb-4">
                <Building className="text-gold mr-4" size={24} />
                <h3 className="text-xl font-semibold">Local Expertise</h3>
              </div>
              <p className="text-gray-600">
                Our in-depth knowledge of London's property market allows us to provide informed advice and identify opportunities that others might miss.
              </p>
            </div>
            
            <div className="card hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="flex items-center mb-4">
                <Star className="text-gold mr-4" size={24} />
                <h3 className="text-xl font-semibold">Innovation</h3>
              </div>
              <p className="text-gray-600">
                We continuously seek new ways to enhance our service, adopting cutting-edge technology and creative solutions to stay ahead of market trends.
              </p>
            </div>
            
            <div className="card hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="flex items-center mb-4">
                <Heart className="text-gold mr-4" size={24} />
                <h3 className="text-xl font-semibold">Integrity</h3>
              </div>
              <p className="text-gray-600">
                Transparency and honesty are at the core of our business. We build long-term relationships based on trust and mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="James Chen - Founder & CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">James Chen</h3>
              <p className="text-gold mb-3">Founder & CEO</p>
              <p className="text-gray-600 mb-4">
                With over 15 years in London property and a background in international finance, James brings unique insights to overseas property investment.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Sarah Williams - Head of Sales" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Sarah Williams</h3>
              <p className="text-gold mb-3">Head of Sales</p>
              <p className="text-gray-600 mb-4">
                A top-performing agent with extensive experience in prime Central London, Sarah leads our sales team with passion and market expertise.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/936593/pexels-photo-936593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="David Zhang - Head of Property Management" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">David Zhang</h3>
              <p className="text-gold mb-3">Head of Property Management</p>
              <p className="text-gray-600 mb-4">
                Fluent in Mandarin and English, David specialises in helping overseas landlords navigate the complexities of UK property management.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Emma Johnson - Lettings Manager" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Emma Johnson</h3>
              <p className="text-gold mb-3">Lettings Manager</p>
              <p className="text-gray-600 mb-4">
                With her thorough understanding of London's rental market, Emma ensures our landlords achieve optimal yields and minimal vacancies.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Michael Lee - International Desk" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Michael Lee</h3>
              <p className="text-gold mb-3">International Desk</p>
              <p className="text-gray-600 mb-4">
                With deep ties to the Nigerian community, Michael helps clients confidently navigate the London property market.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Olivia Patel - Marketing Director" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Olivia Patel</h3>
              <p className="text-gold mb-3">Marketing Director</p>
              <p className="text-gray-600 mb-4">
                With a background in luxury real estate marketing, Olivia ensures our properties receive maximum exposure to the right audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section bg-offwhite">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Our Accreditations</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            {/* These would be real accreditation logos in production */}
            <div className="w-32 h-24 bg-white rounded-property shadow-subtle flex items-center justify-center p-4">
              <img 
                src="https://cdn.pixabay.com/photo/2016/03/31/21/04/black-1296170_1280.png" 
                alt="Property Ombudsman"
                className="max-w-full max-h-full"
              />
            </div>
            <div className="w-32 h-24 bg-white rounded-property shadow-subtle flex items-center justify-center p-4">
              <img 
                src="https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="ARLA Propertymark"
                className="max-w-full max-h-full"
              />
            </div>
            <div className="w-32 h-24 bg-white rounded-property shadow-subtle flex items-center justify-center p-4">
              <img 
                src="https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="NAEA Propertymark"
                className="max-w-full max-h-full"
              />
            </div>
            <div className="w-32 h-24 bg-white rounded-property shadow-subtle flex items-center justify-center p-4">
              <img 
                src="https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Client Money Protect"
                className="max-w-full max-h-full"
              />
            </div>
          </div>
          
          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            Crownline Properties is fully accredited and complies with all industry regulations. We are members of professional bodies that uphold the highest standards in property services.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-navy text-white">
        <div className="container-custom">
          <h2 className="section-title text-white text-center mb-12">Why Choose Crownline</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="bg-gold text-navy rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Local Market Expertise</h3>
                <p className="text-gray-300">
                  Our team lives and breathes the London property market. We have in-depth knowledge of local trends, pricing, and future development plans that impact property values.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-gold text-navy rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">International Perspective</h3>
                <p className="text-gray-300">
                  We understand the unique challenges faced by overseas investors and provide specialised services to overcome language, time zone, and regulatory barriers.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-gold text-navy rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Transparent Communication</h3>
                <p className="text-gray-300">
                  We believe in clear, honest communication. No hidden fees, no industry jargon – just straightforward advice and regular updates on your property.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-gold text-navy rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Technology-Driven Approach</h3>
                <p className="text-gray-300">
                  Our digital platform provides real-time updates, instant property matches, and seamless communication – accessible from anywhere in the world.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container-custom text-center">
          <h2 className="section-title mb-6">Ready to work with London's dedicated property partner?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're looking to buy, sell, rent, or have your property managed, our team is here to help you achieve your property goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/valuation/sales" variant="primary">
              Get a Free Valuation
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;