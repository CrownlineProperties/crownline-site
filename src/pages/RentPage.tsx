import Hero from '../components/ui/Hero';
import PropertyGrid from '../components/ui/PropertyGrid';
import { useProperties } from '../hooks/useProperties';

const RentPage = () => {
  const { properties, loading } = useProperties('rent');

  // Convert PropertyData to Property format for compatibility
  const convertedProperties = properties.map(p => ({
    id: p.id || '',
    slug: p.slug,
    listingType: p.listing_type as 'rent' | 'sale',
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
  }));

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
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navy"></div>
            </div>
          ) : (
            <PropertyGrid
              properties={convertedProperties}
              title="Properties Available to Rent"
              subtitle="All our rental properties are professionally managed and maintained to the highest standards"
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default RentPage;