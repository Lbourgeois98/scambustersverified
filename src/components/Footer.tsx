import React from 'react';
import { Facebook, MessagesSquare } from 'lucide-react';
import { Link } from './Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://m.me/j/Aba6iSHafKh901ZD/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
              >
                <MessagesSquare className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/verify" className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Verify Agent
                </Link>
              </li>
              <li>
                <Link href="/agents" className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Verified Agents
                </Link>
              </li>
              <li>
                <Link href="/games" className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Game Links
                </Link>
              </li>
              <li>
                <Link href="/about" className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-lg">Agent Verification</span>
              </li>
              <li>
                <span className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-lg">Player Protection</span>
              </li>
              <li>
                <span className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-lg">Fraud Prevention</span>
              </li>
              <li>
                <span className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-lg">Compliance Monitoring</span>
              </li>
            </ul>
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