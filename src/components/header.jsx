import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Heart, Award, Users, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home className="h-4 w-4" /> },
    { name: 'Donation', path: '/donation', icon: <Heart className="h-4 w-4" /> },
    { name: 'Certificate', path: '/certificates', icon: <Award className="h-4 w-4" /> },
    { name: 'Members', path: '/idcard', icon: <Users className="h-4 w-4" /> },
    { name: 'Contact', path: '/contact', icon: <Phone className="h-4 w-4" /> }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gradient-to-r from-orange-500 to-orange-600 shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo & Trust Name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className={`overflow-hidden rounded-full border-2 transition-all duration-300 ${
                isScrolled ? 'border-white' : 'border-white'
              }`}>
                <img 
                  src="/assets/Bhadroli_devi.jpg" 
                  alt="Maa Bhagwati" 
                  className={`transition-all duration-300 ${
                    isScrolled ? 'h-10 w-10' : 'h-12 w-12 md:h-16 md:w-16'
                  } object-cover object-center`}
                  style={{ objectPosition: '50% 20%' }} /* This helps center the image better */
                />
              </div>
              
              <div className="text-white">
                <h1 className={`font-bold transition-all duration-300 ${
                  isScrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
                }`}>
                  Maa Bhagwati
                </h1>
                <p className={`text-sm transition-all duration-300 ${
                  isScrolled ? 'opacity-100' : 'opacity-90'
                }`}>
                  Charitable Trust
                </p>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation - Hidden on Mobile */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center ${
                  isActive(link.path)
                    ? isScrolled
                      ? 'bg-white/20 text-white'
                      : 'bg-white/20 text-white'
                    : isScrolled
                      ? 'text-white hover:bg-white/10'
                      : 'text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-1.5">{link.icon}</span>
                {link.name}
              </Link>
            ))}
            
            <Link
              to="/donation"
              className={`ml-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                isScrolled
                  ? 'bg-white text-orange-600 hover:bg-orange-50'
                  : 'bg-white text-orange-600 hover:bg-orange-50'
              }`}
            >
              Donate Now
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md transition-colors duration-200 text-white hover:bg-white/10"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu - Slide Down When Open */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0'
        } bg-orange-500/95`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 flex items-center ${
                isActive(link.path)
                  ? 'bg-white/20 text-white'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="mr-3">{link.icon}</span>
              {link.name}
            </Link>
          ))}
          
          <div className="pt-2">
            <Link
              to="/donation"
              className="block w-full text-center px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 bg-white text-orange-600 hover:bg-orange-50"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
      
      {/* Overlay for transparent header */}
      {!isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent w-full h-full -z-10"></div>
      )}
    </header>
  );
};

export default Header;