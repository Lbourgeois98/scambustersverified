export interface Agent {
  id: string;
  name: string;
  verificationId: string;
  status: 'verified' | 'pending' | 'revoked';
  verifiedSince?: string;
  expiryDate?: string;
  website?: string;
  description?: string;
  services?: string[];
  contactEmail?: string;
}

export interface VerificationResult {
  found: boolean;
  agent?: Agent;
}