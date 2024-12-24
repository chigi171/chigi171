import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiesPolicy from './pages/CookiesPolicy';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const getPage = () => {
    const path = window.location.pathname;
    switch (path) {
      case '/terms':
        return <TermsOfService />;
      case '/privacy':
        return <PrivacyPolicy />;
      case '/cookies':
        return <CookiesPolicy />;
      default:
        return (
          <>
            <Hero />
            <Portfolio />
            <ContactForm />
          </>
        );
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      {getPage()}
      <Footer />
    </div>
  );
};

export default App;