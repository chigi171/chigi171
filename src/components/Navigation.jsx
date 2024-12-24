import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ isOpen, setIsOpen }) => (
  <nav className="bg-white shadow-lg fixed w-full z-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <a href="#home" className="text-xl font-bold text-gray-800">Chigi Technology</a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </div>
        
        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </div>
    
    {/* Mobile Navigation Menu */}
    {isOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Home</a>
          <a href="#portfolio" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Portfolio</a>
          <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
        </div>
      </div>
    )}
  </nav>
);

export default Navigation;