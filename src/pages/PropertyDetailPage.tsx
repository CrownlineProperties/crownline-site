import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Home, Bed, Bath, Maximize, Calendar, ArrowLeft, Phone, Mail } from 'lucide-react';
import Button from '../components/ui/Button';
import ContactForm from '../components/ui/ContactForm';
import { Property } from '../types';
import { formatPrice } from '../utils/formatters';

import propertyData from '../data/listings.json';
import { register } from 'swiper/element/bundle';

register();

const PropertyDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (slug) {
      const foundProperty = (propertyData as Property[]).find(p => p.slug === slug) || null;
      setProperty(foundProperty);
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    
    if (!swiperContainer) return;
    
    Object.assign(swiperContainer, {
      slidesPerView: 1,
      navigation: true,
      pagination: {
        clickable: true,
      },
    });
    
    swiperContainer.initialize();
  }, [property]);

  if (loading) {
    return (
      <div className="container-custom py-32 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="container-custom py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
        <p className="mb-8">The property you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    );
  }

  const {
    title,
    area,
    price,
    beds,
    baths,
    gallery,
    description,
    mapLatLng,
    features,
    floorSize,
    listingType,
    dateAvailable,
    furnished,
  } = property;

  // Structure property data for JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': listingType === 'rent' ? 'Apartment' : 'House',
    name: title,
    description: description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressRegion: area,
      addressCountry: 'GB',
    },
    ...(listingType === 'rent'
      ? {
          category: 'Rental',
          offers: {
            '@type': 'Offer',
            price: price,
            priceCurrency: 'GBP',
            priceValidUntil: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0],
            availability: 'https://schema.org/InStock',
          },
        }
      : {
          offers: {
            '@type': 'Offer',
            price: price,
            priceCurrency: 'GBP',
            availability: 'https://schema.org/InStock',
          },
        }),
    image: gallery,
    numberOfRooms: beds,
    numberOfBathroomsTotal: baths,
    floorSize: {
      '@type': 'QuantitativeValue',
      unitCode: 'SQFT',
      value: floorSize,
    },
  };

  return (
    <>
      {/* Insert JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-20 pb-16">
        {/* Back Button */}
        <div className="container-custom mb-6">
          <Link 
            to={listingType === 'rent' ? '/rent' : '/buy'} 
            className="inline-flex items-center text-navy hover:text-gold transition duration-300"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to {listingType === 'rent' ? 'rentals' : 'sales'}
          </Link>
        </div>

        {/* Property Header */}
        <div className="container-custom mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end">
            <div>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <MapPin size={16} className="mr-1 text-gold" />
                <span>{area}</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">{title}</h1>
              <p className="text-2xl md:text-3xl font-semibold text-navy">
                {formatPrice(price, listingType)}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-4">
                <Button variant="primary">
                  <Phone size={16} className="mr-2" />
                  Call
                </Button>
                <Button variant="secondary">
                  <Mail size={16} className="mr-2" />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Property Gallery */}
        <div className="container-custom mb-12">
          <div className="bg-gray-100 rounded-property overflow-hidden">
            <swiper-container ref={swiperRef} init="false" class="h-[300px] md:h-[500px]">
              {gallery.map((image, index) => (
                <swiper-slide key={index}>
                  <img
                    src={image}
                    alt={`${title} - image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </swiper-slide>
              ))}
            </swiper-container>
          </div>
        </div>

        {/* Property Content */}
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Key Features */}
              <div className="card mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                    <Bed size={24} className="text-gold mb-2" />
                    <span className="text-gray-600 text-sm">Bedrooms</span>
                    <span className="font-semibold">{beds}</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                    <Bath size={24} className="text-gold mb-2" />
                    <span className="text-gray-600 text-sm">Bathrooms</span>
                    <span className="font-semibold">{baths}</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                    <Maximize size={24} className="text-gold mb-2" />
                    <span className="text-gray-600 text-sm">Floor Size</span>
                    <span className="font-semibold">{floorSize} sq ft</span>
                  </div>
                  {listingType === 'rent' && dateAvailable && (
                    <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                      <Calendar size={24} className="text-gold mb-2" />
                      <span className="text-gray-600 text-sm">Available From</span>
                      <span className="font-semibold">{dateAvailable}</span>
                    </div>
                  )}
                  {listingType === 'rent' && furnished !== undefined && (
                    <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                      <Home size={24} className="text-gold mb-2" />
                      <span className="text-gray-600 text-sm">Furnished</span>
                      <span className="font-semibold">{furnished ? 'Yes' : 'No'}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="card mb-8">
                <h2 className="text-xl font-semibold mb-4">Property Description</h2>
                <p className="text-gray-700 whitespace-pre-line">{description}</p>
              </div>

              {/* Features */}
              {features && features.length > 0 && (
                <div className="card mb-8">
                  <h2 className="text-xl font-semibold mb-4">Features</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Map */}
              <div className="card mb-8">
                <h2 className="text-xl font-semibold mb-4">Location</h2>
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                  {/* This would be a Google Map in production */}
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
                  ></div>
                </div>
                <p className="mt-4 text-gray-600">
                  {area}, London
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Contact Form */}
              <div className="sticky top-24">
                <ContactForm 
                  title="Request a Viewing" 
                  subtitle={`Interested in this ${listingType === 'rent' ? 'rental' : 'property'}? Get in touch to schedule a viewing.`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetailPage;