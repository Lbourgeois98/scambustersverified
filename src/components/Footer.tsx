import React from 'react';
import { Facebook, MessagesSquare } from 'lucide-react';
import { Link } from './Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8">
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
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ScamBusters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;