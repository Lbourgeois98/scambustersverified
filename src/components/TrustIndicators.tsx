import React from 'react';
import { Shield, Check, AlertTriangle, UserCheck, Clock, Award } from 'lucide-react';

const TrustIndicators: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Trust <span className="text-red-600">Scam</span><span className="text-gold-500">Busters</span>?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive verification process ensures that players can trust verified agents and enjoy a safe gaming experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
            <div className="bg-red-100 p-3 rounded-full inline-block mb-4">
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Rigorous Verification</h3>
            <p className="text-gray-600">
              We conduct thorough background checks on all agents applying for verification, ensuring they meet our strict standards.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
            <div className="bg-gold-100 p-3 rounded-full inline-block mb-4">
              <Check className="h-8 w-8 text-gold-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Regular Monitoring</h3>
            <p className="text-gray-600">
              Verified agents undergo continuous monitoring to ensure they maintain compliance with our standards and player protection policies.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
            <div className="bg-red-100 p-3 rounded-full inline-block mb-4">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Complaint System</h3>
            <p className="text-gray-600">
              Players can report issues with verified agents, which we investigate promptly, taking appropriate action when necessary.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
            <div className="bg-gold-100 p-3 rounded-full inline-block mb-4">
              <UserCheck className="h-8 w-8 text-gold-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Player Protection</h3>
            <p className="text-gray-600">
              Our verification system is designed to protect players from fraudulent agents and ensure fair gaming practices.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
            <div className="bg-red-100 p-3 rounded-full inline-block mb-4">
              <Clock className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Regular Updates</h3>
            <p className="text-gray-600">
              Our verification database is updated in real-time, ensuring you always have access to the most current information.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
            <div className="bg-gold-100 p-3 rounded-full inline-block mb-4">
              <Award className="h-8 w-8 text-gold-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Industry Recognition</h3>
            <p className="text-gray-600">
              ScamBusters is recognized within the industry as a leading verification service, trusted by players and legitimate agents alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;