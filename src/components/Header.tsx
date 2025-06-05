import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Crown } from 'lucide-react';
import clsx from 'clsx';
import { NavItem } from '../types';
import ValuationModal from './ui/ValuationModal';

const navigation: NavItem[] = [
  { label: 'Rent', path: '/rent' },
  { label: 'Buy', path: '/buy' },
  {
    label: 'Valuation',
    path: '#',
    children: [
      { label: 'Rental Valuation', path: '/valuation/rental' },
      { label: 'Sales Valuation', path: '/valuation/sales' },
    ],
  },
  {
    label: 'Landlords',
    path: '#',
    children: [
      { label: 'Lettings', path: '/landlords/lettings' },
      { label: 'Property Management', path: '/landlords/management' },
    ],
  },
  {
    label: 'Who we are',
    path: '#',
    children: [
      { label: 'About us', path: '/about' },
      { label: 'Contact us', path: '/contact' },
    ],
  },
  {
    label: 'Resources',
    path: '#',
    children: [
      { label: 'Property prices', path: '/resources/property-prices' },
      { label: 'Area guide', path: '/resources/area-guide' },
      { label: 'Selling process', path: '/resources/selling-process' },
    ],
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isValuationModalOpen, setIsValuationModalOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll event to change header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const openValuationModal = () => {
    setIsValuationModalOpen(true);
  };

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled || isOpen ? 'bg-white shadow-md' : 'bg-white'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-gold" />
              <span className="text-xl font-poppins font-semibold">Crownline</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <>
                      <button
                        className="nav-link flex items-center"
                        onClick={() => toggleDropdown(item.label)}
                      >
                        {item.label}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <div className="bg-white rounded-property shadow-subtle py-2">
                          {item.children.map((child) => (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              className={({ isActive }) =>
                                clsx(
                                  'block px-4 py-2 hover:bg-offwhite transition duration-300',
                                  isActive ? 'text-gold' : 'text-navy'
                                )
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        clsx('nav-link', isActive ? 'text-gold' : 'text-navy')
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button className="btn-primary" onClick={openValuationModal}>
                Book a Valuation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-navy"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={clsx(
            'lg:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-screen pb-6' : 'max-h-0'
          )}
        >
          <nav className="container-custom pt-4 space-y-4">
            {navigation.map((item) => (
              <div key={item.label} className="border-b border-gray-100 pb-4">
                {item.children ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full py-2 font-medium"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={clsx(
                          'h-4 w-4 transition-transform duration-300',
                          activeDropdown === item.label ? 'transform rotate-180' : ''
                        )}
                      />
                    </button>
                    <div
                      className={clsx(
                        'overflow-hidden transition-all duration-300',
                        activeDropdown === item.label ? 'max-h-64 mt-2' : 'max-h-0'
                      )}
                    >
                      <div className="pl-4 border-l-2 border-gold space-y-2">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            className={({ isActive }) =>
                              clsx(
                                'block py-2 transition duration-300',
                                isActive ? 'text-gold' : 'text-navy'
                              )
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      clsx(
                        'block py-2 font-medium transition duration-300',
                        isActive ? 'text-gold' : 'text-navy'
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
            <div className="pt-4">
              <button className="btn-primary block text-center w-full" onClick={openValuationModal}>
                Book a Valuation
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Valuation Modal */}
      <ValuationModal
        isOpen={isValuationModalOpen}
        onClose={() => setIsValuationModalOpen(false)}
      />
    </>
  );
};

export default Header;