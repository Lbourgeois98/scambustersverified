import React from 'react';
import { Search, Shield, CheckCircle } from 'lucide-react';
import { Link } from './Link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-black min-h-screen flex items-center pt-24 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3279691/pexels-photo-3279691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <img 
            src="/logo-Photoroom.png" 
            alt="ScamBusters Logo" 
            className="w-64 md:w-96 mb-8 animate-float"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight animate-slideUp">
                <span className="text-red-600">Verify</span> Casino Agents. 
                <span className="text-gold-500"> Protect</span> Players.
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 animate-slideUp animation-delay-200">
                ScamBusters provides reliable verification services for online casino agents.
                Search for agent verification IDs and play with confidence.
              </p>
              
              <div className="animate-slideUp animation-delay-400">
                <Link 
                  href="/verify" 
                  className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md transition-all transform hover:scale-105 flex items-center justify-center inline-flex"
                >
                  <Search className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Verify Agent Now
                </Link>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center animate-slideUp animation-delay-600">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-gold-500 rounded-lg blur opacity-75 animate-pulse"></div>
              <div className="relative bg-black border border-gray-800 p-8 rounded-lg shadow-2xl">
                <div className="flex items-center mb-6">
                  <Shield className="h-10 w-10 text-red-600 mr-3 animate-bounce" />
                  <div>
                    <h2 className="text-xl font-bold text-white">Agent Verification</h2>
                    <p className="text-gray-400">Quick search by ID</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Enter verification ID (e.g., SB-12345)"
                      className="w-full px-4 py-3 pl-12 pr-4 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white group-hover:border-red-500"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <Search className="h-5 w-5 text-gray-500 group-hover:text-red-500 transition-colors" />
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/verify" 
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium py-3 px-4 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  Verify Now
                </Link>
                
                <div className="mt-6 grid grid-cols-1 gap-3">
                  <div className="flex items-center text-gray-400 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 animate-pulse" />
                    <span>Instant verification results</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 animate-pulse" />
                    <span>Comprehensive agent information</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 animate-pulse" />
                    <span>Regularly updated database</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;