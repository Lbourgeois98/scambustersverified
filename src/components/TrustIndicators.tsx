import React from 'react';
import { Shield, Check, AlertTriangle, UserCheck, Clock, Award } from 'lucide-react';

const TrustIndicators: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Why Trust <span className="text-red-600">Scam</span><span className="text-gold-500">Busters</span>?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our comprehensive verification process ensures that players can trust verified agents and enjoy a safe gaming experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="dark-box p-6 rounded-lg transition-transform hover:transform hover:scale-105">
            <div className="bg-red-600/20 p-3 rounded-full inline-block mb-4 border border-red-500/30">
              <Shield className="h-8 w-8 text-red-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Rigorous Verification</h3>
            <p className="text-gray-300">
              We conduct thorough background checks on all agents applying for verification, ensuring they meet our strict standards.
            </p>
          </div>
          
          <div className="dark-box p-6 rounded-lg transition-transform hover:transform hover:scale-105">
            <div className="bg-gold-500/20 p-3 rounded-full inline-block mb-4 border border-gold-400/30">
              <Check className="h-8 w-8 text-gold-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Regular Monitoring</h3>
            <p className="text-gray-300">
              Verified agents undergo continuous monitoring to ensure they maintain compliance with our standards and player protection policies.
            </p>
          </div>
          
          <div className="dark-box p-6 rounded-lg transition-transform hover:transform hover:scale-105">
            <div className="bg-red-600/20 p-3 rounded-full inline-block mb-4 border border-red-500/30">
              <AlertTriangle className="h-8 w-8 text-red-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Complaint System</h3>
            <p className="text-gray-300">
              Players can report issues with verified agents, which we investigate promptly, taking appropriate action when necessary.
            </p>
          </div>
          
          <div className="dark-box p-6 rounded-lg transition-transform hover:transform hover:scale-105">
            <div className="bg-gold-500/20 p-3 rounded-full inline-block mb-4 border border-gold-400/30">
              <UserCheck className="h-8 w-8 text-gold-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Player Protection</h3>
            <p className="text-gray-300">
              Our verification system is designed to protect players from fraudulent agents and ensure fair gaming practices.
            </p>
          </div>
          
          <div className="dark-box p-6 rounded-lg transition-transform hover:transform hover:scale-105">
            <div className="bg-red-600/20 p-3 rounded-full inline-block mb-4 border border-red-500/30">
              <Clock className="h-8 w-8 text-red-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Regular Updates</h3>
            <p className="text-gray-300">
              Our verification database is updated in real-time, ensuring you always have access to the most current information.
            </p>
          </div>
          
          <div className="dark-box p-6 rounded-lg transition-transform hover:transform hover:scale-105">
            <div className="bg-gold-500/20 p-3 rounded-full inline-block mb-4 border border-gold-400/30">
              <Award className="h-8 w-8 text-gold-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Industry Recognition</h3>
            <p className="text-gray-300">
              ScamBusters is recognized within the industry as a leading verification service, trusted by players and legitimate agents alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;