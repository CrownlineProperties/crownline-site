import { Link } from 'react-router-dom';
import { Bed, Bath, MapPin, ArrowRight, Home } from 'lucide-react';
import { Property } from '../../types';
import { formatPrice } from '../../utils/formatters';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const {
    slug,
    title,
    area,
    price,
    beds,
    baths,
    thumb,
    listingType,
  } = property;

  return (
    <div className="card group overflow-hidden transition-all duration-300 hover:shadow-md">
      {/* Image container */}
      <div className="relative h-56 -mx-6 -mt-6 mb-4 overflow-hidden">
        <img 
          src={thumb} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-navy text-white text-xs px-3 py-1 rounded-full uppercase">
            {listingType === 'rent' ? 'To Rent' : 'For Sale'}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin size={16} className="mr-1 text-gold" />
          <span>{area}</span>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        
        <p className="text-xl font-semibold text-navy mb-4">
          {formatPrice(price, listingType)}
        </p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <div className="flex items-center text-gray-700">
              <Bed size={16} className="mr-1" />
              <span>{beds} {beds === 1 ? 'bed' : 'beds'}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Bath size={16} className="mr-1" />
              <span>{baths} {baths === 1 ? 'bath' : 'baths'}</span>
            </div>
          </div>
        </div>
        
        <Link 
          to={`/property/${slug}`} 
          className="text-navy font-medium flex items-center hover:text-gold transition duration-300"
        >
          View details
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;