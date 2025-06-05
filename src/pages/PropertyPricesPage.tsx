import { TrendingUp, ArrowUpRight, Info, PoundSterling, Home, MapPin } from 'lucide-react';
import Hero from '../components/ui/Hero';
import Button from '../components/ui/Button';

const PropertyPricesPage = () => {
  // Sample data for London areas property prices
  const areaData = [
    { 
      area: 'Kensington & Chelsea', 
      avgPrice: 1450000, 
      changePercent: 2.3,
      avgRent: 2800,
      rentYield: 2.3
    },
    { 
      area: 'Westminster', 
      avgPrice: 1200000, 
      changePercent: 1.8,
      avgRent: 2600, 
      rentYield: 2.6
    },
    { 
      area: 'Camden', 
      avgPrice: 950000, 
      changePercent: 2.1,
      avgRent: 2100,
      rentYield: 2.7 
    },
    { 
      area: 'Hammersmith & Fulham', 
      avgPrice: 875000, 
      changePercent: 1.5,
      avgRent: 1950,
      rentYield: 2.7
    },
    { 
      area: 'Islington', 
      avgPrice: 780000, 
      changePercent: 2.0,
      avgRent: 1800,
      rentYield: 2.8
    },
    { 
      area: 'Hackney', 
      avgPrice: 670000, 
      changePercent: 2.5,
      avgRent: 1600,
      rentYield: 2.9
    },
    { 
      area: 'Tower Hamlets', 
      avgPrice: 610000, 
      changePercent: 1.9,
      avgRent: 1700,
      rentYield: 3.3
    },
    { 
      area: 'Southwark', 
      avgPrice: 590000, 
      changePercent: 1.7,
      avgRent: 1600,
      rentYield: 3.2
    },
  ];

  // Format currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div>
      <Hero
        title="London Property Price Insights"
        subtitle="Stay informed about property prices and market trends across London's most desirable areas"
        backgroundImage="https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        fullHeight={false}
      />

      {/* Market Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">London Property Market Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <TrendingUp className="text-gold mr-4" size={24} />
                <h3 className="text-xl font-semibold">Current Trends</h3>
              </div>
              <p className="text-gray-600 mb-4">
                The London property market has shown resilience with an average price increase of 2.1% over the past year, despite economic challenges.
              </p>
              <p className="text-gray-600">
                Prime Central London continues to attract international investors, particularly from Asia and the Middle East.
              </p>
            </div>
            
            <div className="card hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <PoundSterling className="text-gold mr-4" size={24} />
                <h3 className="text-xl font-semibold">Investment Outlook</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Rental yields in London average between 2.5-4.5%, with higher yields typically found in emerging areas and new developments.
              </p>
              <p className="text-gray-600">
                Long-term capital growth remains strong, with properties in select areas seeing 25-30% appreciation over 5 years.
              </p>
            </div>
            
            <div className="card hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <Home className="text-gold mr-4" size={24} />
                <h3 className="text-xl font-semibold">Property Types</h3>
              </div>
              <p className="text-gray-600 mb-4">
                New-build luxury apartments continue to command premium prices, especially in riverside developments and regeneration zones.
              </p>
              <p className="text-gray-600">
                Period properties in established neighborhoods remain highly sought after, with limited supply driving competitive bidding.
              </p>
            </div>
          </div>
          
          {/* Price Disclaimer */}
          <div className="card bg-offwhite border border-gray-200 mb-12">
            <div className="flex items-start">
              <Info className="text-gold mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">About Our Price Data</h3>
                <p className="text-gray-600">
                  The data presented is based on our proprietary database of transactions, combined with Land Registry data and market research. Figures represent average prices for the past quarter and are updated monthly. Individual property values may vary significantly based on specific features, condition, and exact location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Area Price Tables */}
      <section className="section bg-offwhite">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">London Property Prices by Area</h2>
          
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="py-4 px-6 text-left">Area</th>
                    <th className="py-4 px-6 text-right">Average Sale Price</th>
                    <th className="py-4 px-6 text-right">Annual Change</th>
                    <th className="py-4 px-6 text-right">Average Rent (pcm)</th>
                    <th className="py-4 px-6 text-right">Rental Yield</th>
                  </tr>
                </thead>
                <tbody>
                  {areaData.map((area, index) => (
                    <tr 
                      key={index} 
                      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="py-3 px-6 font-medium">{area.area}</td>
                      <td className="py-3 px-6 text-right">{formatPrice(area.avgPrice)}</td>
                      <td className="py-3 px-6 text-right text-green-600">+{area.changePercent}%</td>
                      <td className="py-3 px-6 text-right">{formatPrice(area.avgRent)}</td>
                      <td className="py-3 px-6 text-right">{area.rentYield}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Want to know how much your property is worth in today's market?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/valuation/sales" variant="primary">
                Get a Sales Valuation
              </Button>
              <Button href="/valuation/rental" variant="secondary">
                Get a Rental Valuation
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Market Insights */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">Property Market Insights</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Current Market Trends</h3>
                <p className="text-gray-600 mb-4">
                  The London property market continues to demonstrate remarkable resilience. Despite economic headwinds, prices in prime areas have seen steady growth, supported by limited supply and consistent demand from both domestic and international buyers.
                </p>
                <p className="text-gray-600">
                  Areas experiencing significant regeneration, such as Nine Elms, Stratford, and parts of South London, are showing particularly strong growth potential for investors looking for capital appreciation.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Rental Market Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Rental demand has surged post-pandemic, with central London locations seeing rental price increases of 8-12% year-on-year. The return of international students and professionals has created significant competition for quality rental properties.
                </p>
                <p className="text-gray-600">
                  For landlords, this presents an opportunity to maximize returns through professional management and strategic improvements to meet the expectations of today's discerning tenants.
                </p>
              </div>
            </div>
            
            <div>
              <div className="card border-l-4 border-gold p-8">
                <h3 className="text-xl font-semibold mb-4">Factors Influencing London Property Prices</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ArrowUpRight className="text-gold mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <h4 className="font-semibold">Transport Links</h4>
                      <p className="text-gray-600">Properties within a 10-minute walk of Underground stations command a 10-15% premium.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowUpRight className="text-gold mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <h4 className="font-semibold">School Catchments</h4>
                      <p className="text-gray-600">Properties in the catchment areas of outstanding schools can see premiums of up to 20%.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowUpRight className="text-gold mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <h4 className="font-semibold">Regeneration Projects</h4>
                      <p className="text-gray-600">Areas with major infrastructure investments often see property value increases of 30-50% over 5-10 years.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowUpRight className="text-gold mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <h4 className="font-semibold">Green Spaces</h4>
                      <p className="text-gray-600">Properties near London's parks and gardens typically command a 7-12% premium.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Research Reports */}
      <section className="section bg-offwhite">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Property Research Reports</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card hover:shadow-md transition-all duration-300">
              <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-property">
                <img 
                  src="https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="London Quarterly Market Update" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">London Quarterly Market Update</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive analysis of London's property market performance across all boroughs with price trends and forecasts.
              </p>
              <Button variant="outline" className="w-full">
                Download Report
              </Button>
            </div>
            
            <div className="card hover:shadow-md transition-all duration-300">
              <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-property">
                <img 
                  src="https://images.pexels.com/photos/6985003/pexels-photo-6985003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="International Investor Guide" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">International Investor Guide</h3>
              <p className="text-gray-600 mb-4">
                Essential information for overseas investors including tax considerations, legal requirements, and market opportunities.
              </p>
              <Button variant="outline" className="w-full">
                Download Guide
              </Button>
            </div>
            
            <div className="card hover:shadow-md transition-all duration-300">
              <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-property">
                <img 
                  src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Rental Yield Analysis" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rental Yield Analysis</h3>
              <p className="text-gray-600 mb-4">
                Detailed breakdown of rental yields across London with insights on tenant demographics and demand patterns.
              </p>
              <Button variant="outline" className="w-full">
                Download Analysis
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="section-title text-white mb-6">Expert Property Advice</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're buying, selling, or investing, our team of property experts is here to help you make informed decisions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary">
              Speak to an Expert
            </Button>
            <Button href="/valuation/sales" variant="secondary">
              Get a Property Valuation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyPricesPage;