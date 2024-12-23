import React, { useState } from 'react';
import { Menu, X, Send } from 'lucide-react';

// Import images
import privacyPossibleLogo from './assets/images/privacy_possible_logo.png';
import enemsolLogo from './assets/images/enemsol_logo.jpeg';

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

const Hero = () => (
  <section id="home" className="pt-20 pb-12 bg-gradient-to-r from-blue-500 to-purple-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center py-16">
        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          Empowering Growth Through Technology
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-100">
          We are an impact-driven private firm that provides strategic and operational support to small to medium sized businesses looking to leverage technology to drive sustainable growth.
        </p>
      </div>
    </div>
  </section>
);

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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const callEndpoint = async (company, message, name, email) => {
    const url = 'https://fvm9by.buildship.run/chigi-e644709bc6cf';
    const data = {
      company: company,
      message: message,
      name: name,
      email: email
    };
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      console.log('Success:', result);
      return result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await callEndpoint(
        formData.company,
        formData.message,
        formData.name,
        formData.email
      );
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        
        {status && (
          <div className={`mb-6 p-4 rounded ${status.includes('Failed') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {status}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Company</label>
            <input
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            />
          </div>
          
          <button
            type="submit"
            className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Chigi Technology Limited. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <Hero />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;