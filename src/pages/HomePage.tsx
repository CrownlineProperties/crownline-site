import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Shield, Globe, Clock, Star, MapPin } from 'lucide-react';
import Hero from '../components/ui/Hero';
import Button from '../components/ui/Button';
import PropertyGrid from '../components/ui/PropertyGrid';
import TestimonialCarousel from '../components/ui/TestimonialCarousel';
import ValuationModal from '../components/ui/ValuationModal';
import GoogleMap from '../components/ui/GoogleMap';
import { Property, Testimonial } from '../types';
import { useProperties } from '../hooks/useProperties';

import testimonialData from '../data/testimonials.json';

const HomePage = () => {
  const { properties: allProperties, loading } = useProperties();
  const [featuredSales, setFeaturedSales] = useState<Property[]>([]);
  const [featuredRentals, setFeaturedRentals] = useState<Property[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isValuationModalOpen, setIsValuationModalOpen] = useState(false);

  useEffect(() => {
    if (!loading && allProperties.length > 0) {
      // Convert PropertyData to Property format for compatibility
      const convertedProperties = allProperties.map(p => ({
        id: p.id || '',
        slug: p.slug,
        listingType: p.listing_type,
        title: p.title,
        area: p.area,
        price: p.price,
        beds: p.beds,
        baths: p.baths,
        thumb: p.thumb,
        gallery: p.gallery,
        description: p.description,
        mapLatLng: [51.5074, -0.1278] as [number, number], // Default London coordinates
        features: p.features,
        floorSize: p.floor_size,
        dateAvailable: p.date_available,
        furnished: p.furnished,
        rightmoveUrl: p.rightmove_url,
      }));

      const sales = convertedProperties
        .filter(p => p.listingType === 'sale')
        .slice(0, 3);
      
      const rentals = convertedProperties
        .filter(p => p.listingType === 'rent')
        .slice(0, 3);
      
      setFeaturedSales(sales);
      setFeaturedRentals(rentals);
    }
    
    setTestimonials(testimonialData as Testimonial[]);
  }, [allProperties, loading]);

  const openValuationModal = () => {
    setIsValuationModalOpen(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="London's dedicated property partner for overseas landlords and investors."
        subtitle="Buy. Sell. Rent. Manage. All of it made easy with Crownline."
        backgroundImage="https://images.pexels.com/photos/409127/pexels-photo-409127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        buttons={[
          { text: 'I want to buy or sell', href: '/buy', variant: 'primary' },
          { text: 'Get a rental valuation', href: '#', variant: 'secondary' },
        ]}
      />

      {/* Key Badges Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center flex flex-col items-center">
              <Globe size={48} className="text-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dedicated Multilingual Team</h3>
              <p className="text-gray-600">
                Mandarin & Cantonese speaking staff to assist international investors.
              </p>
            </div>
            <div className="card text-center flex flex-col items-center">
              <Building2 size={48} className="text-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Central-London Expertise</h3>
              <p className="text-gray-600">
                Specialized knowledge of prime London locations and property markets.
              </p>
            </div>
            <div className="card text-center flex flex-col items-center">
              <Shield size={48} className="text-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">International Landlord Tools</h3>
              <p className="text-gray-600">
                Tailored services for overseas property owners and investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-offwhite">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">We focus on one thing. Your needs.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <Star className="text-gold mr-4" size={24} />
                <h3 className="text-xl font-semibold">Data-driven advice</h3>
              </div>
              <p className="text-gray-600">
                We provide market insights based on real data, helping you make informed decisions about your property journey.
              </p>
            </div>
            
            <div className="card hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <Building2 className="text-gold mr-4" size={24} />
                <h3 className="text-xl font-semibold">All services in-house</h3>
              </div>
              <p className="text-gray-600">
                From valuations to property management, we handle everything under one roof for a seamless experience.
              </p>
            </div>
            
            <div className="card hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <Shield className="text-gold mr-4" size={24} />
                <h3 className="text-xl font-semibold">One point of contact</h3>
              </div>
              <p className="text-gray-600">
                Your dedicated agent will guide you through the entire process, ensuring personalized service at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Highlight */}
      <section className="section bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="section-title text-white mb-8">Property management, simplified</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Say farewell to endless email chains and delayed responses. Our digital platform offers instant portal matching, 4-hour maintenance SLA, and real-time updates.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Clock size={40} className="text-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">4-Hour Response</h3>
              <p className="text-gray-300">
                Maintenance issues addressed within 4 hours, guaranteed.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <Globe size={40} className="text-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Access</h3>
              <p className="text-gray-300">
                Monitor your property portfolio from anywhere in the world.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <Shield size={40} className="text-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Full Compliance</h3>
              <p className="text-gray-300">
                All legal requirements handled automatically.
              </p>
            </div>
          </div>
          
          <Button 
            href="/landlords/management"
            variant="primary"
            className="mt-12"
          >
            Learn About Our Management Services
          </Button>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Featured Properties</h2>
          
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navy"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Properties for Sale</h3>
                <PropertyGrid properties={featuredSales} />
                <div className="mt-8 text-center">
                  <Button href="/buy" variant="outline">
                    View All Properties for Sale
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Properties to Rent</h3>
                <PropertyGrid properties={featuredRentals} />
                <div className="mt-8 text-center">
                  <Button href="/rent" variant="outline">
                    View All Properties to Rent
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-16 bg-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-gold mb-2">230+</h3>
              <p className="text-xl">Happy Landlords</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gold mb-2">400+</h3>
              <p className="text-xl">Amazed Tenants</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gold mb-2">£180m+</h3>
              <p className="text-xl">Assets Under Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-offwhite">
        <div className="container-custom">
          <TestimonialCarousel 
            testimonials={testimonials}
            title="Crownline Reviews"
          />
        </div>
      </section>

      {/* Find Us */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Find Us</h2>
              <div className="flex items-start mb-4">
                <MapPin className="text-gold mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  60 Gray's Inn Road<br />
                  London WC1X 8LU
                </p>
              </div>
              <div className="flex items-center mb-4">
                <svg 
                  className="text-gold mr-3 flex-shrink-0" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-gray-700">
                  020 3887 8100
                </p>
              </div>
              <div className="flex items-center">
                <svg 
                  className="text-gold mr-3 flex-shrink-0" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-gray-700">
                  info@crownline.co.uk
                </p>
              </div>
            </div>
            <div>
              <GoogleMap
                address="60 Gray's Inn Road, London WC1X 8LU"
                zoom={16}
                className="w-full h-80 rounded-property"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <div className="absolute inset-0 bg-navy bg-opacity-80"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Looking to buy or sell your property? Go with Crownline.
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our expert team will guide you through every step of the process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={openValuationModal}
              variant="primary"
            >
              Get a Free Valuation
            </Button>
            <Button href="/buy" variant="secondary">
              See our properties for sale
            </Button>
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

export default HomePage;