import React from 'react';

const IndustryExperts = () => {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Industry Experts Commend our Work
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Several platforms and industry experts have acknowledged our seasoned engineers' technical proficiency in various domains.
            </p>
          </div>
          
          {/* Logos */}
          <div className="flex items-center justify-center gap-8">
            <div className="grid grid-cols-3 gap-8 items-center">
              {/* P@SHA Logo */}
              <div className="w-24 h-16">
                <img
                  src="/path-to-pasha-logo.png"
                  alt="P@SHA Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Clutch Badge */}
              <div className="w-24 h-16">
                <img
                  src="/path-to-clutch-badge.png"
                  alt="Clutch Badge"
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* PSEB Logo */}
              <div className="w-24 h-16">
                <img
                  src="/path-to-pseb-logo.png"
                  alt="PSEB Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryExperts;