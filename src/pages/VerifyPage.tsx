import React from 'react';
import VerificationSearch from '../components/VerificationSearch';
import { Shield } from 'lucide-react';

const VerifyPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 pb-8 md:pt-24 md:pb-16">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-6 md:mb-10">
          <div className="inline-flex justify-center items-center p-2 bg-red-600 rounded-full mb-4">
            <Shield className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-white px-4">Verify Casino Agent</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base px-4">
            Enter the verification ID provided by your casino agent to confirm their legitimacy and ensure a safe gaming experience.
          </p>
        </div>
        
        <div className="dark-box rounded-lg p-4 md:p-6">
          <VerificationSearch />
        </div>
        
        <div className="mt-8 md:mt-16 max-w-3xl mx-auto">
          <div className="dark-box p-4 md:p-6 rounded-lg">
            <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">Why Verification Matters</h2>
            <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
              Verification is a crucial step in ensuring your safety and security when dealing with online casino agents:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="dark-box-light p-3 md:p-4 rounded-lg">
                <h3 className="font-medium text-base md:text-lg mb-2 text-white">Protect Your Funds</h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Verified agents have demonstrated financial stability and proper fund handling procedures.
                </p>
              </div>
              <div className="dark-box-light p-3 md:p-4 rounded-lg">
                <h3 className="font-medium text-base md:text-lg mb-2 text-white">Ensure Fair Play</h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Verified agents work with licensed game providers that use certified random number generators.
                </p>
              </div>
              <div className="dark-box-light p-3 md:p-4 rounded-lg">
                <h3 className="font-medium text-base md:text-lg mb-2 text-white">Reliable Support</h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Verified agents maintain proper customer support channels and dispute resolution procedures.
                </p>
              </div>
              <div className="dark-box-light p-3 md:p-4 rounded-lg">
                <h3 className="font-medium text-base md:text-lg mb-2 text-white">Data Protection</h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Verified agents implement proper security measures to protect your personal and financial information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;