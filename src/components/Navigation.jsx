import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight - 24;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navHeight = 64;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight - 24;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50"> {/* Added explicit top-0 left-0 right-0 */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button onClick={handleHomeClick} className="text-xl font-bold text-gray-800">
              Chigi Technology
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={handleHomeClick} 
              className="text-gray-600 hover:text-gray-900"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-gray-600 hover:text-gray-900"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-600 hover:text-gray-900"
            >
              Contact
            </button>
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
            <button 
              onClick={(e) => {
                handleHomeClick(e);
                setIsOpen(false);
              }} 
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              Home
            </button>
            <button 
              onClick={() => {
                scrollToSection('portfolio');
                setIsOpen(false);
              }} 
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              Portfolio
            </button>
            <button 
              onClick={() => {
                scrollToSection('contact');
                setIsOpen(false);
              }} 
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;