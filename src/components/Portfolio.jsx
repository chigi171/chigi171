import React from 'react';
import privacyPossibleLogo from '../assets/images/privacy_possible_logo.png';
import enemsolLogo from '../assets/images/enemsol_logo.jpeg';

const Portfolio = () => (
  <section id="portfolio" className="py-12 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img 
            src={privacyPossibleLogo}
            alt="PrivacyPossible.org Logo" 
            className="w-full h-40 object-contain mb-4"
          />
          <h3 className="text-xl font-bold mb-2">PrivacyPossible.org</h3>
          <p className="text-gray-600 mb-4">
            Leading the way in digital privacy advocacy and education, empowering individuals and organizations to protect their online presence.
          </p>
          <a 
            href="https://privacypossible.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Visit Website →
          </a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img 
            src={enemsolLogo}
            alt="EnEmSol.com Logo" 
            className="w-full h-40 object-contain mb-4"
          />
          <h3 className="text-xl font-bold mb-2">EnEmSol.com</h3>
          <p className="text-gray-600 mb-4">
            Innovative solutions in environmental and energy management, helping businesses achieve sustainability goals while optimizing operations.
          </p>
          <a 
            href="https://enemsol.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Visit Website →
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;