import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg">
      {/* Decorative Wave Pattern */}
      <div className="bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-12">
          <path 
            fill="#F97316" 
            fillOpacity="1" 
            d="M0,32L80,32C160,32,320,32,480,26.7C640,21,800,11,960,10.7C1120,11,1280,21,1360,26.7L1440,32L1440,48L1360,48C1280,48,1120,48,960,48C800,48,640,48,480,48C320,48,160,48,80,48L0,48Z"
          ></path>
        </svg>
      </div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/assets/Bhadroli_devi.jpg" 
                alt="MBCT Logo" 
                className="h-14 w-14 rounded-full border-2 border-white/70 shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold">Maa Bhagwati</h3>
                <p className="text-sm text-orange-100">Charitable Trust</p>
              </div>
            </div>
            <p className="text-sm text-orange-50 leading-relaxed">
              Dedicated to preserving our spiritual heritage while serving 
              humanity through various charitable initiatives. We strive to 
              bring positive change through compassion and service.
            </p>
            <div className="flex space-x-3 pt-2">
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-orange-400/40 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Donation', path: '/donation' },
                { name: 'Certificate', path: '/certificates' },
                { name: 'Members', path: '/idcard' },
                { name: 'Contacts', path: '/contact' }
              ].map((link) => (
                <li key={link.path} className="hover:translate-x-1 transition-transform duration-200">
                  <Link 
                    to={link.path}
                    className="text-orange-50 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Trust Policies */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-orange-400/40 pb-2">
              Trust Policies
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Trust Policy', path: '/policy' },
                { name: 'Trust Policy in simple terms', path: '/policy-simple' },
                { name: 'Member/Trustee Policy', path: '/member-policy' },
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms & Conditions', path: '/terms' }
              ].map((link) => (
                <li key={link.path} className="hover:translate-x-1 transition-transform duration-200">
                  <Link 
                    to={link.path}
                    className="text-orange-50 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-orange-400/40 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-orange-200 flex-shrink-0" />
                <span className="text-orange-50">
                  Bhadroli, Bah<br/>
                  Agra, UP - 283113
                </span>
              </li>
              {/* <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-orange-200 flex-shrink-0" />
                <span className="text-orange-50">+91 8006666006</span>
              </li> */}
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-orange-200 flex-shrink-0" />
                <span className="text-orange-50">charity.mbct@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar with copyright */}
        <div className="pt-6 border-t border-orange-400/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-orange-100 text-sm mb-4 md:mb-0">
            © {currentYear} Maa Bhagwati Charitable Trust. All Rights Reserved.
          </p>
          <div className="flex items-center">
            <Heart className="h-4 w-4 text-orange-200 mr-1" />
            <span className="text-orange-100 text-sm">Made with devotion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;