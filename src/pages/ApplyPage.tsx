import React, { useState } from 'react';
import { FileText, Send, AlertCircle, CheckCircle, ExternalLink } from 'lucide-react';

const ApplyPage: React.FC = () => {
  const handleFormSubmit = () => {
    // Open Google Form in new tab
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeYH_a1WojCnwy_qVJXPq5zR_ARUgpzcRdisZ66nmCsCnpubg/viewform?usp=sharing&ouid=116238890859301378420', '_blank');
  };

  return (
    <div className="min-h-screen pt-16 md:pt-20 pb-8 md:pb-16">
      <div className="container mx-auto px-3 md:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-10">
            <div className="inline-flex justify-center items-center p-2 bg-red-600 rounded-full mb-4">
              <FileText className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white px-4">
              Join the <span className="text-gold-500">Elite</span> Network of Verified Agents
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base px-4">
              Boost your revenue by up to 400% and gain access to premium players. Complete our verification application to get started.
            </p>
          </div>

          {/* Benefits Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="dark-box p-3 md:p-4 rounded-lg text-center">
              <div className="text-lg md:text-2xl font-bold text-gold-500 mb-1">400%</div>
              <div className="text-xs md:text-sm text-gray-300">Revenue Boost</div>
            </div>
            <div className="dark-box p-3 md:p-4 rounded-lg text-center">
              <div className="text-lg md:text-2xl font-bold text-red-500 mb-1">50K+</div>
              <div className="text-xs md:text-sm text-gray-300">Players</div>
            </div>
            <div className="dark-box p-3 md:p-4 rounded-lg text-center">
              <div className="text-lg md:text-2xl font-bold text-gold-500 mb-1">24/7</div>
              <div className="text-xs md:text-sm text-gray-300">Support</div>
            </div>
            <div className="dark-box p-3 md:p-4 rounded-lg text-center">
              <div className="text-lg md:text-2xl font-bold text-red-500 mb-1">FREE</div>
              <div className="text-xs md:text-sm text-gray-300">Marketing</div>
            </div>
          </div>

          {/* Main Application Card */}
          <div className="dark-box rounded-lg p-4 md:p-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">
              Start Your Verification Application
            </h2>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
              Complete our comprehensive application form to join the elite network of verified agents. 
              Our team will review your application within 24-48 hours.
            </p>
            
            <button
              onClick={handleFormSubmit}
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center text-sm md:text-base mb-4 md:mb-6"
            >
              <ExternalLink className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Complete Application Form
            </button>
            
            <div className="text-xs md:text-sm text-gray-400">
              Secure application powered by Google Forms
            </div>
          </div>

          {/* Process Steps */}
          <div className="mt-6 md:mt-8 dark-box-light p-4 md:p-6 rounded-lg">
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 text-white text-center">Simple 3-Step Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              <div className="text-center">
                <div className="bg-red-600/20 p-2 md:p-3 rounded-full inline-block mb-2 border border-red-500/30">
                  <FileText className="h-4 w-4 md:h-6 md:w-6 text-red-400" />
                </div>
                <h4 className="font-medium text-white mb-1 text-sm md:text-base">1. Apply</h4>
                <p className="text-gray-300 text-xs md:text-sm">Fill out the comprehensive application form</p>
              </div>
              <div className="text-center">
                <div className="bg-gold-500/20 p-2 md:p-3 rounded-full inline-block mb-2 border border-gold-400/30">
                  <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-gold-400" />
                </div>
                <h4 className="font-medium text-white mb-1 text-sm md:text-base">2. Review</h4>
                <p className="text-gray-300 text-xs md:text-sm">Expert team reviews within 24-48 hours</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500/20 p-2 md:p-3 rounded-full inline-block mb-2 border border-green-500/30">
                  <Send className="h-4 w-4 md:h-6 md:w-6 text-green-400" />
                </div>
                <h4 className="font-medium text-white mb-1 text-sm md:text-base">3. Verified</h4>
                <p className="text-gray-300 text-xs md:text-sm">Get verified and start earning more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;