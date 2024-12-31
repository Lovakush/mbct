import React from 'react';
import khatushyamLogo from '../assets/Khatushyam.jpeg';
import Bhagwati from '../assets/Bhadroli_devi.jpg';
const Header = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Main Header with Title and Logos */}
      <div className="bg-orange-500 text-white py-4 px-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left Logo */}
          <img 
            src={Bhagwati}
            alt="MBCT Left Logo"
            className="h-20 w-20 object-contain"
          />
          
          {/* Title Section */}
          <div className="text-center flex-1 mx-8">
            <h1 className="text-3xl font-bold mb-2">
              Maa Bhagwati Charitable Trust
            </h1>
            <h2 className="text-xl">
              सेवा परमो धर्मः
            </h2>
          </div>
          
          {/* Right Logo */}
          <img 
            src={khatushyamLogo}
            alt="MBCT Right Logo" 
            className="h-20 w-20 object-contain"
          />
        </div>
      </div>
      
      {/* Decorative Triangle Pattern */}
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
      <nav className="bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto">
          <ul className="flex">
            <li className="border-r border-orange-400">
              <a 
                href="/" 
                className="px-8 py-3 block hover:bg-orange-600 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li className="border-r border-orange-400">
              <a 
                href="/donation" 
                className="px-8 py-3 block hover:bg-orange-600 transition-colors duration-200"
              >
                Donation
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;