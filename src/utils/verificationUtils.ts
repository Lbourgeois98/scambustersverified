import { agents } from '../data/agents';
import { VerificationResult } from '../types';

export const verifyAgent = (verificationId: string): VerificationResult => {
  const searchTerm = verificationId.trim().toLowerCase();
  
  // Search by verification ID or agent name (case-insensitive)
  const agent = agents.find(a => 
    a.verificationId.toLowerCase() === searchTerm || 
    a.name.toLowerCase().includes(searchTerm)
  );
  
  if (!agent) {
    return { found: false };
  }
  
  return {
    found: true,
    agent
  };
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'verified':
      return 'text-green-500 bg-green-100';
    case 'pending':
      return 'text-yellow-500 bg-yellow-100';
    case 'revoked':
      return 'text-red-500 bg-red-100';
    default:
      return 'text-gray-500 bg-gray-100';
  }
};

export const formatDate = (dateString?: string): string => {
  if (!dateString) return 'N/A';
  
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};