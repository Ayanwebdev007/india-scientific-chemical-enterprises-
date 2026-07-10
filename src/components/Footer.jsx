import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-400">INDIA SCIENTIFIC & CHEMICAL ENTERPRISES</h3>
            <p className="text-gray-400 mb-6">
              A trusted supplier of scientific laboratory equipment, industrial chemicals, and civil engineering testing equipment since 1985.
            </p>
            <div className="flex space-x-4">
              {/* Add social links here if needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link></li>
              <li><a href="/#products" className="text-gray-400 hover:text-blue-400 transition-colors">Products</a></li>
              <li><a href="/#industries" className="text-gray-400 hover:text-blue-400 transition-colors">Industries</a></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white border-b border-gray-700 pb-2">Our Products</h4>
            <ul className="space-y-2">
              <li><a href="https://wa.me/919905115966?text=I%20am%20interested%20in%20Scientific%20Instruments" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">Scientific Instruments</a></li>
              <li><a href="https://wa.me/919905115966?text=I%20am%20interested%20in%20Soil%20and%20Bitumen%20Equipment" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">Soil & Bitumen Equipment</a></li>
              <li><a href="https://wa.me/919905115966?text=I%20am%20interested%20in%20Laboratory%20Chemicals" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">Laboratory Chemicals</a></li>
              <li><a href="https://wa.me/919905115966?text=I%20am%20interested%20in%20Borosil%20Glassware" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">Borosil Glassware</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white border-b border-gray-700 pb-2">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  8/A, First Floor, Janta Market,<br />
                  Near Bus Stand, Bartand,<br />
                  Dhanbad, Jharkhand
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">
                  <a href="tel:+919835531699" className="hover:text-white">+91 98355 31699</a><br/>
                  <a href="tel:+919905115966" className="hover:text-white">+91 99051 15966</a>
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@isce.com" className="text-gray-400 hover:text-white transition-colors">
                  info@isce.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} India Scientific & Chemical Enterprises. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Trust and Quality.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
