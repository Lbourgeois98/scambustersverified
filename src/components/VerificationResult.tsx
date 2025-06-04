import React from 'react';
import { CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import { VerificationResult as VerificationResultType } from '../types';

interface VerificationResultProps {
  result: VerificationResultType;
}

const VerificationResult: React.FC<VerificationResultProps> = ({ result }) => {
  if (!result.found) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center animate-fadeIn">
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 p-3 rounded-full">
            <XCircle className="h-10 w-10 text-red-500" />
          </div>
        </div>
        <h3 className="text-lg font-bold text-red-700 mb-2">Verification Failed</h3>
        <p className="text-red-600 mb-4">
          We couldn't find any agent with this verification ID in our database.
        </p>
        <div className="bg-white p-4 rounded-lg border border-red-200 text-left">
          <h4 className="font-medium text-gray-900 mb-2">What to do next:</h4>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Double-check the verification ID for typos</li>
            <li>Ask the agent to provide their correct verification ID</li>
            <li>If the agent claims to be verified but you can't find them, report them to our support team</li>
            <li>Proceed with caution when dealing with unverified agents</li>
          </ul>
        </div>
      </div>
    );
  }

  const { agent } = result;

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden animate-fadeIn">
      <div className="bg-gradient-to-r from-red-600 to-red-700 p-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{agent.name}</h3>
            <p className="text-white/80">Verification ID: {agent.verificationId}</p>
          </div>
          <div className="bg-white p-2 rounded-full">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <a 
          href={agent.website}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-center flex items-center justify-center"
        >
          Visit Agent's Page
          <ExternalLink className="h-4 w-4 ml-2" />
        </a>
      </div>
      
      <div className="bg-gray-50 p-4 border-t border-gray-200">
        <div className="flex items-center justify-center text-sm text-gray-500">
          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          This agent is verified by ScamBusters
        </div>
      </div>
    </div>
  );
};

export default VerificationResult