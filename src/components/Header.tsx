import React, { useState, useEffect } from 'react';
import { Menu, X, Users, Search } from 'lucide-react';
import { Link } from './Link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactAdmins = () => {
    const adminSection = document.querySelector('#admin-contacts');
    if (adminSection) {
      adminSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#admin-contacts';
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-md py-2' : 'bg-black/80 py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/logo-Photoroom.png" alt="ScamBusters Logo" className="h-12 mr-2" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="/" className="text-white hover:text-gold-400 transition-colors">Home</Link>
          <Link href="/verify" className="text-white hover:text-gold-400 transition-colors">Verify Agent</Link>
          <Link href="/agents" className="text-white hover:text-gold-400 transition-colors">Verified Agents</Link>
          <Link href="/apply" className="text-white hover:text-gold-400 transition-colors">Apply for Verification</Link>
          <Link href="/about" className="text-white hover:text-gold-400 transition-colors">About Us</Link>
          <button 
            onClick={handleContactAdmins}
            className="bg-gold-500 hover:bg-gold-600 text-black px-4 py-2 rounded-md transition-colors flex items-center"
          >
            <Users className="h-4 w-4 mr-2" />
            Contact Admins
          </button>
          <Link 
            href="/verify" 
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors flex items-center"
          >
            <Search className="h-4 w-4 mr-2" />
            Verify Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 absolute w-full">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-white hover:text-gold-400 transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/verify" 
              className="text-white hover:text-gold-400 transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Verify Agent
            </Link>
            <Link 
              href="/agents" 
              className="text-white hover:text-gold-400 transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Verified Agents
            </Link>
            <Link 
              href="/apply" 
              className="text-white hover:text-gold-400 transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply for Verification
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-gold-400 transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <button 
              onClick={() => {
                handleContactAdmins();
                setIsMenuOpen(false);
              }}
              className="bg-gold-500 hover:bg-gold-600 text-black px-4 py-2 rounded-md transition-colors flex items-center justify-center"
            >
              <Users className="h-4 w-4 mr-2" />
              Contact Admins
            </button>
            <Link 
              href="/verify" 
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search className="h-4 w-4 mr-2" />
              Verify Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;