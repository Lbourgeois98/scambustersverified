import React from 'react';
import VerificationSearch from '../components/VerificationSearch';
import { Shield } from 'lucide-react';

const VerifyPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex justify-center items-center p-2 bg-red-600 rounded-full mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-white">Verify Casino Agent</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Enter the verification ID provided by your casino agent to confirm their legitimacy and ensure a safe gaming experience.
          </p>
        </div>
        
        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6">
          <VerificationSearch />
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-gray-200 shadow-xl">
            <h2 className="text-xl font-bold mb-4">Why Verification Matters</h2>
            <p className="text-gray-600 mb-4">
              Verification is a crucial step in ensuring your safety and security when dealing with online casino agents:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-lg mb-2">Protect Your Funds</h3>
                <p className="text-gray-600">
                  Verified agents have demonstrated financial stability and proper fund handling procedures.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-lg mb-2">Ensure Fair Play</h3>
                <p className="text-gray-600">
                  Verified agents work with licensed game providers that use certified random number generators.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-lg mb-2">Reliable Support</h3>
                <p className="text-gray-600">
                  Verified agents maintain proper customer support channels and dispute resolution procedures.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-lg mb-2">Data Protection</h3>
                <p className="text-gray-600">
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