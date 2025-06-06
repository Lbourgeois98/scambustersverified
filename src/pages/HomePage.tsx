import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustIndicators from '../components/TrustIndicators';
import VerificationProcess from '../components/VerificationProcess';
import { Facebook, MessagesSquare } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <TrustIndicators />
      <VerificationProcess />
      
      <div id="admin-contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-white">Contact Our Admins</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our dedicated administrators are here to help with verification and answer any questions you may have.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-red-500 rounded-lg blur-lg opacity-75 animate-pulse"></div>
                <div className="relative dark-box p-6 rounded-lg text-center">
                  <h3 className="font-bold text-lg mb-4 text-white">Darren Boykin</h3>
                  <a 
                    href="https://www.facebook.com/share/16tXMhVYMu/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Facebook className="h-5 w-5 mr-2" />
                    Contact on Facebook
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-1 bg-pink-500 rounded-lg blur-lg opacity-75 animate-pulse"></div>
                <div className="relative dark-box p-6 rounded-lg text-center">
                  <h3 className="font-bold text-lg mb-4 text-white">Brittney Kellar</h3>
                  <a 
                    href="https://www.facebook.com/share/16MJsPzPtf/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Facebook className="h-5 w-5 mr-2" />
                    Contact on Facebook
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-1 bg-green-500 rounded-lg blur-lg opacity-75 animate-pulse"></div>
                <div className="relative dark-box p-6 rounded-lg text-center">
                  <h3 className="font-bold text-lg mb-4 text-white">LeAnn Bourgeois</h3>
                  <a 
                    href="https://www.facebook.com/share/16ahBG51EL/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Facebook className="h-5 w-5 mr-2" />
                    Contact on Facebook
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 dark-box p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4 text-white">Join Our Community</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a 
                  href="https://www.facebook.com/groups/1529993591011245/?ref=share&mibextid=NSMWBT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center dark-box-light p-4 rounded-lg text-red-400 hover:text-red-300 transition-colors"
                >
                  <Facebook className="h-5 w-5 mr-2" />
                  Join our Facebook Group
                </a>
                <a 
                  href="https://m.me/j/Aba6iSHafKh901ZD/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center dark-box-light p-4 rounded-lg text-red-400 hover:text-red-300 transition-colors"
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