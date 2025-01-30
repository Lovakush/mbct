import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Mobile-friendly link grid */}
        <div className="grid grid-cols-2 md:flex md:justify-center gap-4 md:space-x-8 py-4">
          <Link to="/contact" className="hover:text-orange-200 transition-colors text-center">
            Contact Us
          </Link>
          <Link to="/about" className="hover:text-orange-200 transition-colors text-center">
            About Us
          </Link>
          <Link to="/policy" className="hover:text-orange-200 transition-colors text-center">
            Trust Policy
          </Link>
          <Link to="/member-policy" className="hover:text-orange-200 transition-colors text-center">
            Member/Trustee Policy
          </Link>
          <Link to="/feedback" className="hover:text-orange-200 transition-colors text-center md:col-span-1 col-span-2">
            Feedback
          </Link>
        </div>
        <div className="text-center py-4 border-t border-orange-400">
          © 2025 MBCT. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;