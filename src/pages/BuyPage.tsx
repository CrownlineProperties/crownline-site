import { useEffect, useState } from 'react';
import Hero from '../components/ui/Hero';
import PropertyGrid from '../components/ui/PropertyGrid';
import { Property } from '../types';

import propertyData from '../data/listings.json';

const BuyPage = () => {
  const [salesProperties, setSalesProperties] = useState<Property[]>([]);

  useEffect(() => {
    const sales = (propertyData as Property[]).filter(p => p.listingType === 'sale');
    setSalesProperties(sales);
  }, []);

  return (
    <div>
      <Hero
        title="Properties for Sale in London"
        subtitle="Discover exceptional properties in London's most desirable locations"
        backgroundImage="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        fullHeight={false}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <PropertyGrid
            properties={salesProperties}
            title="Properties For Sale"
            subtitle="Browse our selection of properties available for purchase across London"
          />
        </div>
      </section>
    </div>
  );
};

export default BuyPage;