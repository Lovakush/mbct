import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-8 py-4">
          <Link to="/contact" className="hover:text-orange-200 transition-colors">Contact Us</Link>
          <Link to="/about" className="hover:text-orange-200 transition-colors">About Us</Link>
          <Link to="/policy" className="hover:text-orange-200 transition-colors">Trust Policy</Link>
          <Link to="/member-policy" className="hover:text-orange-200 transition-colors">Member/Trustee Policy</Link>
          <Link to="/feedback" className="hover:text-orange-200 transition-colors">Feedback</Link>
        </div>
        <div className="text-center py-4 border-t border-orange-400">
          © 2024 MBCT. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;