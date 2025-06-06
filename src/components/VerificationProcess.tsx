import React from 'react';
import { ClipboardCheck, FileBadge, Shield, UserCheck } from 'lucide-react';

const VerificationProcess: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Our Verification Process</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Learn how we verify casino agents to ensure they meet our strict standards for player safety and fair practices.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-red-500 to-gold-500"></div>
            
            {/* Step 1 */}
            <div className="relative md:flex items-center mb-12">
              <div className="hidden md:block w-1/2 pr-8 text-right">
                <div className="dark-box-light p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-white">Application Review</h3>
                  <p className="text-gray-300">
                    Agents submit detailed applications including business information, licensing details, and operational practices.
                  </p>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-full h-12 w-12 flex items-center justify-center z-10 border-2 border-white shadow-lg">
                  <ClipboardCheck className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="md:hidden mb-4">
                <div className="dark-box-light p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-white">Application Review</h3>
                  <p className="text-gray-300">
                    Agents submit detailed applications including business information, licensing details, and operational practices.
                  </p>
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
            </div>
            
            {/* Step 2 */}
            <div className="relative md:flex items-center mb-12">
              <div className="hidden md:block w-1/2 pr-8"></div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-full h-12 w-12 flex items-center justify-center z-10 border-2 border-white shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-8">
                <div className="dark-box-light p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-white">Background Investigation</h3>
                  <p className="text-gray-300">
                    Our team conducts thorough background checks, verifies licenses, and reviews the agent's history and reputation.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative md:flex items-center mb-12">
              <div className="hidden md:block w-1/2 pr-8 text-right">
                <div className="dark-box-light p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-white">Compliance Check</h3>
                  <p className="text-gray-300">
                    We verify that the agent follows responsible gambling practices, has fair terms and conditions, and maintains proper security measures.
                  </p>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-full h-12 w-12 flex items-center justify-center z-10 border-2 border-white shadow-lg">
                  <FileBadge className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="md:hidden mb-4">
                <div className="dark-box-light p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-white">Compliance Check</h3>
                  <p className="text-gray-300">
                    We verify that the agent follows responsible gambling practices, has fair terms and conditions, and maintains proper security measures.
                  </p>
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
            </div>
            
            {/* Step 4 */}
            <div className="relative md:flex items-center">
              <div className="hidden md:block w-1/2 pr-8"></div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-full h-12 w-12 flex items-center justify-center z-10 border-2 border-white shadow-lg">
                  <UserCheck className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-8">
                <div className="dark-box-light p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-white">Certificate Issuance</h3>
                  <p className="text-gray-300">
                    Approved agents receive a unique verification ID and certificate, which is regularly reviewed to ensure ongoing compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 dark-box p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-white">Continuous Monitoring</h3>
            <p className="text-gray-300 mb-4">
              Verification is not a one-time process. We continuously monitor verified agents to ensure they maintain our standards:
            </p>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Regular re-verification checks</li>
              <li>Player complaint investigation</li>
              <li>Financial stability assessment</li>
              <li>Verification can be revoked if standards are not maintained</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationProcess;