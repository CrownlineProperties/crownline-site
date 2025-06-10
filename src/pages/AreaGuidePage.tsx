import { useState } from 'react';
import Hero from '../components/ui/Hero';
import Button from '../components/ui/Button';
import { MapPin, Train, Building, Utensils, Landmark, GraduationCap } from 'lucide-react';

interface AreaInfo {
  name: string;
  description: string;
  image: string;
  averagePrice: string;
  averageRent: string;
  transport: string[];
  amenities: string[];
}

const areas: AreaInfo[] = [
  {
    name: 'Canary Wharf',
    description: 'A major business district with modern high-rise apartments, excellent amenities, and river views. Popular with professionals working in finance and business.',
    image: 'https://images.pexels.com/photos/351264/pexels-photo-351264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    averagePrice: '£600,000 - £1,500,000',
    averageRent: '£1,800 - £3,500 pcm',
    transport: ['Jubilee Line', 'DLR', 'Elizabeth Line', 'Thames Clipper'],
    amenities: ['Shopping malls', 'Riverside restaurants', 'Gyms', 'Parks']
  },
  {
    name: 'Kensington',
    description: 'One of London\'s most affluent areas with beautiful period properties, garden squares, and proximity to museums and Hyde Park.',
    image: 'https://images.pexels.com/photos/9821313/pexels-photo-9821313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    averagePrice: '£1,200,000 - £5,000,000',
    averageRent: '£2,500 - £6,000 pcm',
    transport: ['District Line', 'Circle Line', 'Piccadilly Line', 'Overground'],
    amenities: ['Museums', 'High-end shopping', 'Hyde Park', 'Garden squares']
  },
  {
    name: 'Shoreditch',
    description: 'A trendy area known for its vibrant arts scene, tech startups, and eclectic mix of warehouses, new builds, and period conversions.',
    image: 'https://images.pexels.com/photos/1604141/pexels-photo-1604141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    averagePrice: '£550,000 - £1,200,000',
    averageRent: '£1,700 - £3,000 pcm',
    transport: ['Northern Line', 'Overground', 'Great Northern', 'Buses'],
    amenities: ['Art galleries', 'Independent cafes', 'Nightlife', 'Markets']
  },
  {
    name: 'Fulham',
    description: 'A popular residential area with a village feel, attractive period houses, and excellent schools. Close to the Thames and various parks.',
    image: 'https://images.pexels.com/photos/5994406/pexels-photo-5994406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    averagePrice: '£800,000 - £2,000,000',
    averageRent: '£1,800 - £4,000 pcm',
    transport: ['District Line', 'Piccadilly Line', 'Buses', 'Overground'],
    amenities: ['Boutique shops', 'Riverside pubs', 'Parks', 'Sports facilities']
  },
  {
    name: 'Camden',
    description: 'A diverse area famous for its markets, music venues, and alternative culture. Housing ranges from canal-side apartments to Georgian townhouses.',
    image: 'https://images.pexels.com/photos/2127718/pexels-photo-2127718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    averagePrice: '£550,000 - £1,300,000',
    averageRent: '£1,600 - £2,800 pcm',
    transport: ['Northern Line', 'Overground', 'Thameslink', 'Buses'],
    amenities: ['Camden Market', 'Regent\'s Canal', 'Live music venues', 'Regent\'s Park']
  },
  {
    name: 'Greenwich',
    description: 'A historic area with maritime heritage, green spaces, and a mixture of period and modern properties. Popular with families and professionals.',
    image: 'https://images.pexels.com/photos/2793649/pexels-photo-2793649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    averagePrice: '£500,000 - £1,200,000',
    averageRent: '£1,500 - £2,800 pcm',
    transport: ['DLR', 'Jubilee Line', 'Southeastern', 'Thames Clipper'],
    amenities: ['Greenwich Park', 'Royal Observatory', 'Cutty Sark', 'Greenwich Market']
  }
];

const AreaGuidePage = () => {
  const [selectedArea, setSelectedArea] = useState<AreaInfo | null>(null);

  return (
    <div>
      <Hero
        title="London Area Guide"
        subtitle="Discover the unique character and investment potential of London's most sought-after neighborhoods"
        backgroundImage="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        fullHeight={false}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Explore London's Neighborhoods</h2>

          {/* Area Selection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {areas.map((area) => (
              <div
                key={area.name}
                className={`relative cursor-pointer overflow-hidden rounded-property transition duration-300 group ${
                  selectedArea?.name === area.name ? 'ring-2 ring-gold' : ''
                }`}
                onClick={() => setSelectedArea(area)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-70"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-semibold">{area.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Area Details */}
          {selectedArea && (
            <div className="card p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <h3 className="text-3xl font-semibold mb-4">{selectedArea.name}</h3>
                  <p className="text-gray-700 mb-6">{selectedArea.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-offwhite p-4 rounded-property">
                      <h4 className="font-semibold text-navy">Average Sale Price</h4>
                      <p className="text-lg">{selectedArea.averagePrice}</p>
                    </div>
                    <div className="bg-offwhite p-4 rounded-property">
                      <h4 className="font-semibold text-navy">Average Rent</h4>
                      <p className="text-lg">{selectedArea.averageRent}</p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button href={`/buy?area=${selectedArea.name}`} variant="primary">
                      Properties For Sale
                    </Button>
                    <Button href={`/rent?area=${selectedArea.name}`} variant="secondary">
                      Properties To Rent
                    </Button>
                  </div>
                </div>

                <div className="h-64 sm:h-80 rounded-property overflow-hidden">
                  <img
                    src={selectedArea.image}
                    alt={selectedArea.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <Train className="text-gold mr-2" size={20} />
                    Transport Links
                  </h4>
                  <ul className="space-y-2">
                    {selectedArea.transport.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <Utensils className="text-gold mr-2" size={20} />
                    Local Amenities
                  </h4>
                  <ul className="space-y-2">
                    {selectedArea.amenities.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {!selectedArea && (
            <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-property">
              <p className="text-lg text-gray-600 mb-2">Select an area above to view detailed information</p>
              <p className="text-gray-500">Explore property prices, transport links, and local amenities</p>
            </div>
          )}
        </div>
      </section>

      <section className="section bg-offwhite">
        <div className="container-custom">
          <h2 className="section-title mb-8">London Property Market Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <Building className="text-gold mr-4" size={24} />
                <h3 className="text-xl font-semibold">Property Types</h3>
              </div>
              <p className="text-gray-600 mb-4">
                London's diverse property market includes everything from studio apartments to grand mansions. Key property types include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  <span>Period conversions in Victorian/Georgian buildings</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  <span>New-build apartments in modern developments</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  <span>Terraced houses in residential neighborhoods</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  <span>Luxury penthouses in prime central locations</span>
                </li>
              </ul>
            </div>

            <div className="card hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <Landmark className="text-gold mr-4" size={24} />
                <h3 className="text-xl font-semibold">Investment Hotspots</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Areas experiencing significant regeneration and infrastructure investment offer strong growth potential:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  <span>East London: Stratford, Hackney, Bow</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  <span>South London: Nine Elms, Battersea, Elephant & Castle</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  <span>West London: White City, Acton, Ealing</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  <span>Docklands: Royal Docks, Greenwich Peninsula</span>
                </li>
              </ul>
            </div>

            <div className="card hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-gold mr-4" size={24} />
                <h3 className="text-xl font-semibold">Education Hubs</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Areas with prestigious schools and universities are consistently in high demand among families and international students:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  <span>South Kensington: Imperial College London</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  <span>Bloomsbury: UCL, SOAS, Birkbeck</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  <span>King's Cross: Central Saint Martins</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  <span>Greenwich: University of Greenwich</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/7119248/pexels-photo-7119248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <div className="absolute inset-0 bg-navy bg-opacity-80"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Looking for personalised area recommendations?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our local experts can help you find the perfect London location based on your needs and budget.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Speak to Our Area Specialists
          </Button>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">International Buyer's Guide</h2>
              <p className="text-lg text-gray-600 mb-6">
                London remains one of the world's most attractive property markets for international investors. Here's what you need to know:
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <MapPin className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Foreign Ownership Rules</h3>
                    <p className="text-gray-600">There are no restrictions on foreign ownership of property in the UK, making London accessible to international buyers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Stamp Duty</h3>
                    <p className="text-gray-600">Non-UK residents pay an additional 2% Stamp Duty Land Tax surcharge on top of standard rates.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Financing Options</h3>
                    <p className="text-gray-600">Several UK banks offer mortgages to international buyers, typically requiring larger deposits (30-40%).</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Rental Yields</h3>
                    <p className="text-gray-600">London offers rental yields between 3-5% depending on location, with stronger capital growth in prime areas.</p>
                  </div>
                </li>
              </ul>
              
              <Button href="/contact" variant="primary">
                Get International Buyer Support
              </Button>
            </div>
            
            <div className="h-96 rounded-property overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/221166/pexels-photo-221166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="London property investment" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreaGuidePage;