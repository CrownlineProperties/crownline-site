import { Link } from 'react-router-dom';
import { Bed, Bath, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
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
    rightmoveUrl,
  } = property;

  return (
    <div className="card group overflow-hidden transition-all duration-300 hover:shadow-md">
      {/* Image container with improved mobile sizing */}
      <div className="relative h-72 sm:h-64 md:h-56 lg:h-64 -mx-6 -mt-6 mb-4 overflow-hidden">
        <img 
          src={thumb} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
          }}
        />
        <div className="absolute top-3 left-3">
          <span className="bg-navy text-white text-xs px-3 py-1 rounded-full uppercase">
            {listingType === 'rent' ? 'To Rent' : 'For Sale'}
          </span>
        </div>
        {rightmoveUrl && (
          <div className="absolute top-3 right-3">
            <a
              href={rightmoveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-90 hover:bg-opacity-100 text-navy p-2 rounded-full transition-all duration-300"
              title="View on Rightmove"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        )}
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
        
        <div className="flex items-center justify-between">
          <Link 
            to={`/property/${slug}`} 
            className="text-navy font-medium flex items-center hover:text-gold transition duration-300"
          >
            View details
            <ArrowRight size={16} className="ml-1" />
          </Link>
          
          {rightmoveUrl && (
            <a
              href={rightmoveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gold transition duration-300 flex items-center"
              title="View on Rightmove"
            >
              Rightmove
              <ExternalLink size={14} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;