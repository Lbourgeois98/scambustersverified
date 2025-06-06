import React, { useState } from 'react';
import { agents } from '../data/agents';
import { Search, CheckCircle, ExternalLink } from 'lucide-react';
import { Agent } from '../types';

const AgentDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  
  const filteredAgents = agents.filter((agent) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = searchTerm === '' || 
                         agent.name.toLowerCase().includes(searchLower) || 
                         agent.verificationId.toLowerCase().includes(searchLower);
    
    const matchesStatus = statusFilter === 'all' ? true : agent.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Agent Directory</h2>
        <p className="text-gray-300 mb-6">
          Browse our directory of casino agents and their verification status.
        </p>
        
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0 mb-6">
          <div className="relative flex-grow">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by agent name or verification ID"
              className="w-full px-4 py-2 pl-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full md:w-auto px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white"
            >
              <option value="all" className="bg-black text-white">All Statuses</option>
              <option value="verified" className="bg-black text-white">Verified</option>
              <option value="pending" className="bg-black text-white">Pending</option>
              <option value="revoked" className="bg-black text-white">Revoked</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
        
        {filteredAgents.length === 0 && (
          <div className="col-span-full dark-box-light p-8 rounded-lg text-center">
            <p className="text-gray-300">No agents found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  return (
    <div className="dark-box-light rounded-lg overflow-hidden transition-transform hover:transform hover:scale-105">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold mb-2 text-white">{agent.name}</h3>
            <p className="text-sm text-gray-400">ID: {agent.verificationId}</p>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
            <CheckCircle className="h-4 w-4 text-green-400 mr-1" />
            Verified
          </span>
        </div>
        
        <a 
          href={agent.website}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium py-2 px-4 rounded-lg transition-all text-center flex items-center justify-center mt-4"
        >
          Visit Agent's Page
          <ExternalLink className="h-4 w-4 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default AgentDirectory;