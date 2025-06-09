import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Home, Bed, Bath, Maximize, Calendar, ArrowLeft, Phone, Mail } from 'lucide-react';
import Button from '../components/ui/Button';
import ContactForm from '../components/ui/ContactForm';
import { PropertyData, propertyService } from '../lib/properties';
import { formatPrice } from '../utils/formatters';
import { register } from 'swiper/element/bundle';

register();

const PropertyDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [property, setProperty] = useState<PropertyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const swiperRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (slug) {
      loadProperty();
    }
  }, [slug]);

  const loadProperty = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Try to get property by slug first
      let foundProperty = await propertyService.getPropertyBySlug(slug!);
      
      // If not found by slug, try to get all properties and find by slug
      if (!foundProperty) {
        const allProperties = await propertyService.getAllProperties();
        foundProperty = allProperties.find(p => p.slug === slug) || null;
      }
      
      setProperty(foundProperty);
      
      if (!foundProperty) {
        setError('Property not found');
      }
    } catch (err) {
      console.error('Error loading property:', err);
      setError('Failed to load property');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    
    if (!swiperContainer || !property) return;
    
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
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navy mx-auto mb-4"></div>
        <p>Loading property...</p>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="container-custom py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
        <p className="mb-8">{error || "The property you're looking for doesn't exist or has been removed."}</p>
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
    features,
    floor_size,
    listing_type,
    date_available,
    furnished,
  } = property;

  return (
    <div className="pt-20 pb-16">
      {/* Back Button */}
      <div className="container-custom mb-6">
        <Link 
          to={listing_type === 'rent' ? '/rent' : '/buy'} 
          className="inline-flex items-center text-navy hover:text-gold transition duration-300"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to {listing_type === 'rent' ? 'rentals' : 'sales'}
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
              {formatPrice(price, listing_type)}
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
            {gallery && gallery.length > 0 ? gallery.map((image, index) => (
              <swiper-slide key={index}>
                <img
                  src={image}
                  alt={`${title} - image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </swiper-slide>
            )) : (
              <swiper-slide>
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </swiper-slide>
            )}
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
                {floor_size && (
                  <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                    <Maximize size={24} className="text-gold mb-2" />
                    <span className="text-gray-600 text-sm">Floor Size</span>
                    <span className="font-semibold">{floor_size} sq ft</span>
                  </div>
                )}
                {listing_type === 'rent' && date_available && (
                  <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                    <Calendar size={24} className="text-gold mb-2" />
                    <span className="text-gray-600 text-sm">Available From</span>
                    <span className="font-semibold">{date_available}</span>
                  </div>
                )}
                {listing_type === 'rent' && furnished !== undefined && (
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
                subtitle={`Interested in this ${listing_type === 'rent' ? 'rental' : 'property'}? Get in touch to schedule a viewing.`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;