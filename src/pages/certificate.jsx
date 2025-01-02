import React from 'react';
import { CheckCircle } from 'lucide-react';

const CertificatePage = () => {
  const certificates = [
    {
      id: 1,
      title: "12A Registration",
      number: "AAJTM3961FE20241",
      description: "Income Tax Section Registration for Charitable Trust",
      icon: "📜"
    },
    {
      id: 2,
      title: "80G Registration",
      number: "AAJTM3961FF20241",
      description: "Tax Exemption Certificate for Donations",
      icon: "🏛️"
    },
    {
      id: 3,
      title: "TAN Number",
      number: "AGRM15567G",
      description: "Tax Deduction Account Number",
      icon: "📊"
    },
    {
      id: 4,
      title: "Trust Registration",
      number: "202400770004605",
      description: "Official Trust Registration Number",
      icon: "⚖️"
    },
    {
      id: 5,
      title: "PAN Number",
      number: "AAJTM3961M",
      description: "Permanent Account Number",
      icon: "💳"
    },
    {
      id: 6,
      title: "Niti Aayog",
      number: "UP/2025/0486390",
      description: "NGO Darpan Registration Number",
      icon: "🏛️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-800 text-center mb-12">
          Our Certifications
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white">{cert.title}</h2>
                  <span className="text-3xl">{cert.icon}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="font-mono text-lg text-orange-800 mb-3 bg-orange-50 rounded-lg px-4 py-2">
                  {cert.number}
                </div>
                <p className="text-gray-600">{cert.description}</p>
              </div>

              <div className="px-6 pb-4">
                <div className="flex items-center text-orange-600 hover:text-orange-700">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">Verified Certificate</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;