import { useEffect, useState } from 'react';
import Hero from '../components/ui/Hero';
import PropertyGrid from '../components/ui/PropertyGrid';
import { Property } from '../types';

import propertyData from '../data/listings.json';

const RentPage = () => {
  const [rentalProperties, setRentalProperties] = useState<Property[]>([]);

  useEffect(() => {
    const rentals = (propertyData as Property[]).filter(p => p.listingType === 'rent');
    setRentalProperties(rentals);
  }, []);

  return (
    <div>
      <Hero
        title="Find Your Perfect London Rental"
        subtitle="Browse our selection of high-quality properties available to rent across London"
        backgroundImage="https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        fullHeight={false}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <PropertyGrid
            properties={rentalProperties}
            title="Properties Available to Rent"
            subtitle="All our rental properties are professionally managed and maintained to the highest standards"
          />
        </div>
      </section>
    </div>
  );
};

export default RentPage;