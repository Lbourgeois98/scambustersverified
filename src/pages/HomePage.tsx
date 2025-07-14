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
      
      <div id="admin-contacts" className="py-8 md:py-16">
        <div className="container mx-auto px-3 md:px-4">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-white">Contact Our Admins</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base px-4">
              Our dedicated administrators are here to help with verification and answer any questions you may have.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-blue-500 rounded-lg blur-lg opacity-75 animate-pulse"></div>
                <div className="relative dark-box p-4 md:p-6 rounded-lg text-center">
                  <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 text-white">Darren Boykin</h3>
                  <a 
                    href="https://www.facebook.com/share/16tXMhVYMu/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 md:px-4 rounded-lg transition-colors text-sm md:text-base"
                  >
                    <Facebook className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                    Contact on Facebook
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-1 bg-pink-500 rounded-lg blur-lg opacity-75 animate-pulse"></div>
                <div className="relative dark-box p-4 md:p-6 rounded-lg text-center">
                  <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 text-white">Brittney Kellar</h3>
                  <a 
                    href="https://www.facebook.com/share/16MJsPzPtf/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white px-3 py-2 md:px-4 rounded-lg transition-colors text-sm md:text-base"
                  >
                    <Facebook className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                    Contact on Facebook
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-1 bg-green-500 rounded-lg blur-lg opacity-75 animate-pulse"></div>
                <div className="relative dark-box p-4 md:p-6 rounded-lg text-center">
                  <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 text-white">LeAnn Bourgeois</h3>
                  <a 
                    href="https://www.facebook.com/share/16ahBG51EL/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-3 py-2 md:px-4 rounded-lg transition-colors text-sm md:text-base"
                  >
                    <Facebook className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                    Contact on Facebook
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-4 md:mt-8 dark-box p-4 md:p-6 rounded-lg">
              <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 text-white">Join Our Community</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <a 
                  href="https://www.facebook.com/groups/1529993591011245/?ref=share&mibextid=NSMWBT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 md:px-6 md:py-4 rounded-lg transition-colors text-sm md:text-base"
                >
                  <Facebook className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                  Join our Facebook Group
                </a>
                <a 
                  href="https://m.me/j/Aba6iSHafKh901ZD/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 md:px-6 md:py-4 rounded-lg transition-colors text-sm md:text-base"
                >
                  <MessagesSquare className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
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