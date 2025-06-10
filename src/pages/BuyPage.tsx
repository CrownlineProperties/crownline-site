import Hero from '../components/ui/Hero';
import PropertyGrid from '../components/ui/PropertyGrid';
import { useProperties } from '../hooks/useProperties';

const BuyPage = () => {
  const { properties, loading } = useProperties('sale');

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
    rightmoveUrl: p.rightmove_url,
  }));

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
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navy"></div>
            </div>
          ) : (
            <PropertyGrid
              properties={convertedProperties}
              title="Properties For Sale"
              subtitle="Browse our selection of properties available for purchase across London"
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default BuyPage;