import React, { useState } from 'react';
import { Search, AlertCircle } from 'lucide-react';
import { verifyAgent } from '../utils/verificationUtils';
import VerificationResult from './VerificationResult';
import { VerificationResult as VerificationResultType } from '../types';

const VerificationSearch: React.FC = () => {
  const [verificationId, setVerificationId] = useState('');
  const [result, setResult] = useState<VerificationResultType | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!verificationId.trim()) {
      setError('Please enter a verification ID or agent name');
      return;
    }
    
    setError('');
    setIsSearching(true);
    
    // Simulate a network request
    setTimeout(() => {
      const verificationResult = verifyAgent(verificationId);
      setResult(verificationResult);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="dark-box rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-red-700 to-red-600 p-6">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
            Verify Casino Agent
          </h2>
          <p className="text-white/80">
            Enter the verification ID or agent name to confirm their legitimacy
          </p>
        </div>
        
        <div className="p-6">
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative">
              <input
                type="text"
                value={verificationId}
                onChange={(e) => setVerificationId(e.target.value)}
                placeholder="Enter verification ID (e.g., SB-12345) or agent name"
                className={`w-full px-4 py-3 pl-12 pr-4 bg-white/10 backdrop-blur-sm border ${error ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400`}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            {error && (
              <div className="mt-2 text-red-400 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span className="text-sm">{error}</span>
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSearching}
              className={`mt-4 w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium py-3 px-4 rounded-lg transition-all ${isSearching ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSearching ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                    <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </span>
              ) : (
                'Verify Agent'
              )}
            </button>
          </form>
          
          {result && <VerificationResult result={result} />}
          
          {!result && !isSearching && (
            <div className="dark-box-light p-4 rounded-lg">
              <h3 className="font-medium text-white mb-2">How to verify an agent?</h3>
              <ol className="list-decimal pl-5 text-gray-300 space-y-2">
                <li>Ask the agent for their ScamBusters verification ID</li>
                <li>Enter the ID or agent name in the search box above</li>
                <li>Check the verification details and current status</li>
                <li>Confirm the agent's identity before proceeding</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerificationSearch;