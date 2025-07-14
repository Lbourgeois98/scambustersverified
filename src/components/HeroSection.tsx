import React from 'react';
import { Search, Shield, CheckCircle } from 'lucide-react';
import { Link } from './Link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-black min-h-screen flex items-center pt-16 pb-8 md:pt-24 md:pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3279691/pexels-photo-3279691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      </div>
      
      <div className="container mx-auto px-3 md:px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <img 
            src="/logo-Photoroom.png" 
            alt="ScamBusters Logo" 
            className="w-48 md:w-64 lg:w-96 mb-4 md:mb-8 animate-float"
          />
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-6 text-white leading-tight animate-slideUp px-2">
              <span className="text-red-600">Verify</span> Casino Agents. 
              <span className="text-gold-500"> Protect</span> Players.
            </h1>
            
            <p className="text-sm md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-8 animate-slideUp animation-delay-200 px-4">
              ScamBusters provides reliable verification services for online casino agents.
              Search for agent verification IDs and play with confidence.
            </p>
            
            <div className="animate-slideUp animation-delay-400">
              <Link 
                href="/verify" 
                className="group bg-red-600 hover:bg-red-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-md transition-all transform hover:scale-105 flex items-center justify-center inline-flex text-sm md:text-base"
              >
                <Search className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                Verify Agent Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;