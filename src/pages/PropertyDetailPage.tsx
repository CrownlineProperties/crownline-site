import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Home, Bed, Bath, Maximize, Calendar, ArrowLeft, Phone, Mail, ExternalLink } from 'lucide-react';
import Button from '../components/ui/Button';
import PropertyInquiryForm from '../components/ui/PropertyInquiryForm';
import GoogleMap from '../components/ui/GoogleMap';
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

  const handleCall = () => {
    window.location.href = 'tel:02034892040';
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Inquiry about ${property?.title || 'Property'}`);
    const body = encodeURIComponent(`Hi,

I am interested in the following property:
${property?.title || 'Property'}
Location: ${property?.area || 'N/A'}
Price: ${property ? formatPrice(property.price, property.listing_type) : 'N/A'}

Please contact me to discuss this property further.

Best regards`);
    
    window.location.href = `mailto:info@crownlineproperties.co.uk?subject=${subject}&body=${body}`;
  };

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
    id,
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
    rightmove_url,
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
              <Button variant="primary" onClick={handleCall}>
                <Phone size={16} className="mr-2" />
                Call
              </Button>
              <Button variant="secondary" onClick={handleEmail}>
                <Mail size={16} className="mr-2" />
                Email
              </Button>
              {rightmove_url && (
                <Button 
                  href={rightmove_url}
                  variant="outline"
                  className="hidden sm:flex"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Rightmove
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Rightmove Link for Mobile */}
      {rightmove_url && (
        <div className="container-custom mb-6 sm:hidden">
          <Button 
            href={rightmove_url}
            variant="outline"
            className="w-full"
          >
            <ExternalLink size={16} className="mr-2" />
            View on Rightmove
          </Button>
        </div>
      )}

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

            {/* Rightmove Link */}
            {rightmove_url && (
              <div className="card mb-8 bg-offwhite border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">View on Rightmove</h3>
                    <p className="text-gray-600">
                      See additional photos, floor plans, and market insights for this property on Rightmove.
                    </p>
                  </div>
                  <Button 
                    href={rightmove_url}
                    variant="primary"
                    className="ml-4"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Listing
                  </Button>
                </div>
              </div>
            )}

            {/* Map */}
            <div className="card mb-8">
              <h2 className="text-xl font-semibold mb-4">Location</h2>
              <GoogleMap
                address={area}
                zoom={16}
                className="w-full h-64 rounded-lg"
              />
              <p className="mt-4 text-gray-600">
                {area}, London
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Property Inquiry Form */}
            <div className="sticky top-24">
              <PropertyInquiryForm
                propertyId={id || ''}
                propertyTitle={title}
                listingType={listing_type}
                title={`Interested in this ${listing_type === 'rent' ? 'rental' : 'property'}?`}
                subtitle="Fill out the form below and our team will get back to you shortly."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;