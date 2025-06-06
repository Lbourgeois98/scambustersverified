import React from 'react';
import AgentDirectory from '../components/AgentDirectory';

const AgentsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4 text-white">Verified Agents Directory</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Browse our comprehensive directory of casino agents and their verification status. 
            Use the filters to find specific agents or see only those with a particular status.
          </p>
        </div>
        
        <div className="dark-box rounded-lg p-6">
          <AgentDirectory />
        </div>
      </div>
    </div>
  );
};

export default AgentsPage;