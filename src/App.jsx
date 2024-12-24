import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';  // Changed to HashRouter
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiesPolicy from './pages/CookiesPolicy';

// Create a Home component to hold the main page content
const Home = () => (
  <>
    <Hero />
    <Portfolio />
    <ContactForm />
  </>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;