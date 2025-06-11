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
                href="https://www.linkedin.com/company/crownlineproperties/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/crownlinep" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/crownlinep" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition duration-300"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@crownline_properties" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition duration-300"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-gold transition duration-300">Privacy Policy</Link></li>
              <li><Link to="/data-protection" className="text-gray-300 hover:text-gold transition duration-300">Data Protection</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-300 hover:text-gold transition duration-300">Terms and Conditions</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-gold transition duration-300">About us</Link></li>
              <li><Link to="/complaint-procedure" className="text-gray-300 hover:text-gold transition duration-300">Complaint Procedure</Link></li>
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
              <li><Link to="/complaint-procedure" className="text-gray-300 hover:text-gold transition duration-300">Complaints</Link></li>
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
                <a href="tel:02034892040" className="text-gray-300 hover:text-gold transition duration-300">
                  020 3489 2040
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-gold mr-2 flex-shrink-0" />
                <a href="mailto:info@crownlineproperties.co.uk" className="text-gray-300 hover:text-gold transition duration-300">
                  info@crownlineproperties.co.uk
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
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-gold text-xs transition duration-300">
              Privacy Policy
            </Link>
            <span className="text-gray-500 text-xs">•</span>
            <Link to="/terms-conditions" className="text-gray-500 hover:text-gold text-xs transition duration-300">
              Terms & Conditions
            </Link>
            <span className="text-gray-500 text-xs">•</span>
            <Link to="/data-protection" className="text-gray-500 hover:text-gold text-xs transition duration-300">
              Cookie Policy
            </Link>
            <span className="text-gray-500 text-xs">•</span>
            <Link to="/complaint-procedure" className="text-gray-500 hover:text-gold text-xs transition duration-300">
              Complaints
            </Link>
            <span className="text-gray-500 text-xs">•</span>
            <span className="text-gray-500 text-xs">
              This website is for demonstration purposes only. All property listings are fictional.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;