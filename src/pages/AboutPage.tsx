import React from 'react';
import { Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="dark-box rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 flex items-center justify-center">
              <Shield className="h-16 w-16 text-white" />
            </div>
            
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-6 text-center text-white">About ScamBusters</h1>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-300 mb-6">
                  Welcome to Scam Busters, a community dedicated to exposing and stopping scammers! 
                  Our mission is to protect people from fraud by sharing warnings, uncovering scams, 
                  and educating members on how to recognize and avoid scams.
                </p>
                
                <p className="text-lg text-gray-300 mb-6">
                  Here, you'll find alerts about the latest scammers and expert advice on how to stay safe. 
                  We encourage members to report suspicious activities, share helpful tips, and support each 
                  other in the fight against fraud.
                </p>
                
                <p className="text-lg text-gray-300">
                  Join us in making the online gaming community a safer place—stay informed, stay vigilant, 
                  and help bust those scams!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;