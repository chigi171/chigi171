import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-sm">
          © {new Date().getFullYear()} Chigi Technology Limited. All rights reserved.
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-gray-300">
          <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/cookies" className="hover:text-white">Cookies</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;