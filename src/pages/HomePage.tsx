import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustIndicators from '../components/TrustIndicators';
import VerificationProcess from '../components/VerificationProcess';
import AgentDirectory from '../components/AgentDirectory';
import { Facebook, MessagesSquare } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <TrustIndicators />
      <VerificationProcess />
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Featured Verified Agents</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These agents have successfully completed our verification process and maintain high standards for player safety.
            </p>
          </div>
          <AgentDirectory />
        </div>
      </div>
      
      <div id="admin-contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Contact Our Admins</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated administrators are here to help with verification and answer any questions you may have.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                <div className="mb-4">
                  <img 
                    src="/logo.png" 
                    alt="Darren Boykin" 
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-red-600"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">Darren Boykin</h3>
                <a 
                  href="https://www.facebook.com/share/16tXMhVYMu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors"
                >
                  <Facebook className="h-5 w-5 mr-2" />
                  Contact on Facebook
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                <div className="mb-4">
                  <img 
                    src="/logo.png" 
                    alt="Brittney Kellar" 
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-red-600"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">Brittney Kellar</h3>
                <a 
                  href="https://www.facebook.com/share/16MJsPzPtf/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors"
                >
                  <Facebook className="h-5 w-5 mr-2" />
                  Contact on Facebook
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                <div className="mb-4">
                  <img 
                    src="/logo.png" 
                    alt="LeAnn Bourgeois" 
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-red-600"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">LeAnn Bourgeois</h3>
                <a 
                  href="https://www.facebook.com/share/16ahBG51EL/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors"
                >
                  <Facebook className="h-5 w-5 mr-2" />
                  Contact on Facebook
                </a>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-4">Join Our Community</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a 
                  href="https://www.facebook.com/groups/1529993591011245/?ref=share&mibextid=NSMWBT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-white p-4 rounded-lg border border-gray-200 text-red-600 hover:text-red-700 transition-colors"
                >
                  <Facebook className="h-5 w-5 mr-2" />
                  Join our Facebook Group
                </a>
                <a 
                  href="https://m.me/j/Aba6iSHafKh901ZD/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-white p-4 rounded-lg border border-gray-200 text-red-600 hover:text-red-700 transition-colors"
                >
                  <MessagesSquare className="h-5 w-5 mr-2" />
                  Join our Group Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;