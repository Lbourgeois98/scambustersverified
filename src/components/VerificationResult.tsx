import React from 'react';
import { CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import { VerificationResult as VerificationResultType } from '../types';

interface VerificationResultProps {
  result: VerificationResultType;
}

const VerificationResult: React.FC<VerificationResultProps> = ({ result }) => {
  if (!result.found) {
    return (
      <div className="bg-red-900/50 border border-red-500/30 rounded-lg p-6 text-center animate-fadeIn backdrop-blur-sm">
        <div className="flex justify-center mb-4">
          <div className="bg-red-500/20 p-3 rounded-full border border-red-500/30">
            <XCircle className="h-10 w-10 text-red-400" />
          </div>
        </div>
        <h3 className="text-lg font-bold text-red-400 mb-2">Verification Failed</h3>
        <p className="text-red-300 mb-4">
          We couldn't find any agent with this verification ID in our database.
        </p>
        <div className="dark-box-light p-4 rounded-lg text-left">
          <h4 className="font-medium text-white mb-2">What to do next:</h4>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
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
    <div className="dark-box-light border border-white/20 rounded-lg overflow-hidden animate-fadeIn">
      <div className="bg-gradient-to-r from-red-600 to-red-700 p-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{agent.name}</h3>
            <p className="text-white/80">Verification ID: {agent.verificationId}</p>
          </div>
          <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
            <CheckCircle className="h-8 w-8 text-green-400" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <a 
          href={agent.website}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium py-3 px-4 rounded-lg transition-all text-center flex items-center justify-center"
        >
          Visit Agent's Page
          <ExternalLink className="h-4 w-4 ml-2" />
        </a>
      </div>
      
      <div className="bg-green-500/10 p-4 border-t border-white/10">
        <div className="flex items-center justify-center text-sm text-green-400">
          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
          This agent is verified by ScamBusters
        </div>
      </div>
    </div>
  );
};

export default VerificationResult