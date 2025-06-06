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
      
      <div id="admin-contacts" className="py-16 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-white">Contact Our Admins</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our dedicated administrators are here to help with verification and answer any questions you may have.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-gray-200 text-center">
                <div className="mb-4 relative">
                  <div className="absolute -inset-2 bg-red-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
                  <img 
                    src="/darren.jpg" 
                    alt="Darren Boykin" 
                    className="relative w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
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
              
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-gray-200 text-center">
                <div className="mb-4 relative">
                  <div className="absolute -inset-2 bg-pink-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
                  <img 
                    src="/brittney.jpg" 
                    alt="Brittney Kellar" 
                    className="relative w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
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
              
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-gray-200 text-center">
                <div className="mb-4 relative">
                  <div className="absolute -inset-2 bg-green-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
                  <img 
                    src="/leann.jpg" 
                    alt="LeAnn Bourgeois" 
                    className="relative w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
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
            
            <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-gray-200 shadow-xl">
              <h3 className="font-bold text-lg mb-4">Join Our Community</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a 
                  href="https://www.facebook.com/groups/1529993591011245/?ref=share&mibextid=NSMWBT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-white p-4 rounded-lg border border-gray-200 text-red-600 hover:text-red-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <Facebook className="h-5 w-5 mr-2" />
                  Join our Facebook Group
                </a>
                <a 
                  href="https://m.me/j/Aba6iSHafKh901ZD/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-white p-4 rounded-lg border border-gray-200 text-red-600 hover:text-red-700 transition-colors shadow-md hover:shadow-lg"
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