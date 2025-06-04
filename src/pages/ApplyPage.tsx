import React, { useEffect } from 'react';

const ApplyPage: React.FC = () => {
  useEffect(() => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeYH_a1WojCnwy_qVJXPq5zR_ARUgpzcRdisZ66nmCsCnpubg/viewform?usp=header';
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-600">Redirecting to verification application form...</p>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;