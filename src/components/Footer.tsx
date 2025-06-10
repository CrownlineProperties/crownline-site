import { Link } from 'react-router-dom';
import { Crown, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Crown className="h-8 w-8 text-gold" />
              <span className="text-xl font-poppins font-semibold text-white">Crownline</span>
            </Link>
            <p className="text-gray-300 mb-4">
              London's dedicated property partner for overseas landlords and investors.
            </p>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-gold transition duration-300"
                aria-label="WeChat"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/rent" className="text-gray-300 hover:text-gold transition duration-300">Rent</Link></li>
              <li><Link to="/buy" className="text-gray-300 hover:text-gold transition duration-300">Buy</Link></li>
              <li><Link to="/valuation/sales" className="text-gray-300 hover:text-gold transition duration-300">Get a Valuation</Link></li>
              <li><Link to="/landlords/lettings" className="text-gray-300 hover:text-gold transition duration-300">Landlord Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-gold transition duration-300">About Us</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/resources/property-prices" className="text-gray-300 hover:text-gold transition duration-300">Property Prices</Link></li>
              <li><Link to="/resources/area-guide" className="text-gray-300 hover:text-gold transition duration-300">Area Guide</Link></li>
              <li><Link to="/resources/selling-process" className="text-gray-300 hover:text-gold transition duration-300">Selling Process</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold transition duration-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-gold mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-300">45 Broad Lane<br />London N15 4DJ</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-gold mr-2 flex-shrink-0" />
                <a href="tel:02038878100" className="text-gray-300 hover:text-gold transition duration-300">
                  020 3887 8100
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-gold mr-2 flex-shrink-0" />
                <a href="mailto:info@crownline.co.uk" className="text-gray-300 hover:text-gold transition duration-300">
                  info@crownline.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center md:justify-between items-center py-6 border-t border-gray-800">
          <div className="mb-4 md:mb-0">
            <img 
              src="https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Money Shield Badge" 
              className="h-12 w-auto"
            />
          </div>
          <p className="text-gray-400 text-sm text-center md:text-right">
            Crownline Properties Limited. Registered in England and Wales.<br />
            Company Number: 12345678. VAT Registration: GB123456789.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Crownline Properties. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            This website is for demonstration purposes only. All property listings are fictional.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;