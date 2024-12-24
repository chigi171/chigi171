import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-sm">
          © {new Date().getFullYear()} Chigi Technology Limited. All rights reserved.
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-gray-300">
          <a href="/terms" className="hover:text-white">Terms of Service</a>
          <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          <a href="/cookies" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;