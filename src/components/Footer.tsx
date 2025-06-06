import React from 'react';
import { Mail, Phone, Globe, Facebook, MessagesSquare } from 'lucide-react';
import { Link } from './Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo-Photoroom.png" alt="ScamBusters Logo" className="h-12 mr-2" />
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in casino agent verification. 
              Ensuring safe and legitimate online gaming experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/groups/1529993591011245/?ref=share&mibextid=NSMWBT" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gold-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://m.me/j/Aba6iSHafKh901ZD/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gold-400 transition-colors"
              >
                <MessagesSquare className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/verify" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Verify Agent
                </Link>
              </li>
              <li>
                <Link href="/agents" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Verified Agents
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-gold-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Agent Verification</span>
              </li>
              <li>
                <span className="text-gray-400">Player Protection</span>
              </li>
              <li>
                <span className="text-gray-400">Fraud Prevention</span>
              </li>
              <li>
                <span className="text-gray-400">Compliance Monitoring</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@scambusters.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Globe className="h-4 w-4 mr-2" />
                <span>www.scambusters.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ScamBusters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;