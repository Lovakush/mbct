import React from 'react';
import { Link } from 'react-router-dom';
import khatushyamLogo from '../assets/Khatushyam.jpeg';
import Bhagwati from '../assets/Bhadroli_devi.jpg';

const Header = () => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Main Header with Title and Logos */}
      <div className="bg-orange-500 text-white py-4 px-4 sm:px-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <img 
            src={Bhagwati}
            alt="MBCT Left Logo"
            className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded-full shadow-lg"
          />
          
          <div className="text-center flex-1 mx-2 sm:mx-8">
            <h1 className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">
              Maa Bhagwati Charitable Trust
            </h1>
            <h2 className="text-lg sm:text-xl">
              सेवा परमो धर्मः
            </h2>
          </div>
          
          <img 
            src={khatushyamLogo}
            alt="MBCT Right Logo" 
            className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded-full shadow-lg"
          />
        </div>
      </div>
      
      {/* Decorative Pattern */}
      <div className="h-4 w-full bg-orange-500 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <pattern id="trianglePattern" x="0" y="0" width="20" height="4" patternUnits="userSpaceOnUse">
              <polygon points="0,0 10,0 5,4" fill="white"/>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#trianglePattern)"/>
          </svg>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <nav className="bg-orange-500 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ul className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">

            <li className="w-full sm:w-auto">
              <Link 
                to="/" 
                className="inline-flex w-full sm:w-auto justify-center items-center px-6 py-3 
                bg-orange-600 hover:bg-orange-700 rounded-lg shadow-lg hover:shadow-xl 
                transition-all duration-300 transform hover:-translate-y-0.5 
                focus:ring-2 focus:ring-orange-400"
              >
                <span className="font-medium">Home</span>
              </Link>
            </li>
            <li className="w-full sm:w-auto">
              <Link 
                to="/donation" 
                className="inline-flex w-full sm:w-auto justify-center items-center px-6 py-3 
                bg-orange-600 hover:bg-orange-700 rounded-lg shadow-lg hover:shadow-xl 
                transition-all duration-300 transform hover:-translate-y-0.5 
                focus:ring-2 focus:ring-orange-400"
              >
                <span className="font-medium">Donation</span>
              </Link>
            </li>
            <li className="w-full sm:w-auto">
              <Link 
                to="/certificates" 
                className="inline-flex w-full sm:w-auto justify-center items-center px-6 py-3 
                bg-orange-600 hover:bg-orange-700 rounded-lg shadow-lg hover:shadow-xl 
                transition-all duration-300 transform hover:-translate-y-0.5 
                focus:ring-2 focus:ring-orange-400"
              >
                <span className="font-medium">Certificate</span>
              </Link>
            </li>
            <li className="w-full sm:w-auto">
              <Link 
                to="/idcard" 
                className="inline-flex w-full sm:w-auto justify-center items-center px-6 py-3 
                bg-orange-600 hover:bg-orange-700 rounded-lg shadow-lg hover:shadow-xl 
                transition-all duration-300 transform hover:-translate-y-0.5 
                focus:ring-2 focus:ring-orange-400"
              >
                <span className="font-medium">Members</span>
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;