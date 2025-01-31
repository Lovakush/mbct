import React, { useState } from 'react';
import { BadgeCheck } from 'lucide-react';

const Barcode = ({ value }) => {
  const generateBarcodeData = (str) => {
    const numeric = str.split('').map(char => 
      char.charCodeAt(0).toString().padStart(3, '0')
    ).join('');
    
    const bars = ['101'];
    for (let i = 0; i < numeric.length; i++) {
      const digit = parseInt(numeric[i]);
      bars.push(['0011', '0110', '1100', '1001', '0101', '1010'][digit % 6]);
    }
    bars.push('101');
    return bars.join('');
  };

  return (
    <svg viewBox="0 0 180 60" className="w-full h-10">
      {generateBarcodeData(value).split('').map((bit, i) => 
        bit === '1' && (
          <rect key={i} x={i * 2} y="0" width="2" height="60" fill="black" />
        )
      )}
    </svg>
  );
};

const keyPersons = [
  // {
  //   name: "Layak Singh",
  //   position: "सचिव",
  //   mobile: "+91 8827113948",
  //   gender: "Male",
  //   idNumber: "MBCT/AGR/KP/S/1001",
  //   verified: true,
  //   photo: '/assets/trustee/layaksingh.jpg',
  // },
  {
    name: "Vijaypal Thakur",
    position: "Regional Head",
    mobile: "+91 9368825785",
    gender: "Male",
    idNumber: "MBCT/AGR/KP/S/1002",
    verified: true,
    photo: '/assets/trustee/vijaypalthakur.jpg',
  },
  {
    name: "Brajmohan Singh",
    position: "Executive Director",
    mobile: "+91 8171638618",
    gender: "Male",
    idNumber: "MBCT/AGR/KP/S/D/1001",
    verified: true,
    photo: '/assets/trustee/brajmohansingh.jpg',
  }
  // {
  //   name: "Tapendra Singh",
  //   position: "कार्यक्रम प्रबंधक",
  //   mobile: "+91 9536655206",
  //   gender: "Male",
  //   idNumber: "MBCT/AGR/KP/S/1003",
  //   verified: true,
  //   photo: '/assets/trustee/tapendrasingh.jpg',
  // },
];

const trustees = [
  {
    name: "Ajay Pal",
    position: "स्वयंसेवक समन्वयक",
    mobile: "+91 8445285063",
    gender: "Male",
    idNumber: "MBCT/AGR/TR/M/501",
    verified: true,
    photo: '/assets/trustee/ajaypal.jpg',
  }
  // {
  //   name: "Pradeep",
  //   position: "सदस्य",
  //   mobile: "+91 9870856590",
  //   gender: "Male",
  //   idNumber: "MBCT/AGR/TR/M/502",
  //   verified: true,
  //   photo: '/assets/trustee/pradeep.jpg',
  // }
];

const IDCard = ({ member, type }) => {
  return (
    <div className="w-full max-w-[300px] mx-auto">
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-0.5 rounded-xl">
        <div className="bg-white rounded-xl p-4 relative overflow-hidden">
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <span className="text-6xl font-great-vibes transform -rotate-45">MBCT</span>
          </div>

          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-lg font-bold text-blue-600">MBCT Trust</h2>
              <div className="flex items-center mt-1">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm text-gray-600">
                  {type === 'keyPerson' ? 'Key Person' : 'Trustee'}
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="w-16 h-16 rounded-lg overflow-hidden">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {member.verified && (
                <BadgeCheck className="absolute -top-1 -right-1 w-5 h-5 text-green-500 bg-white rounded-full" />
              )}
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-3 text-sm mb-4">
            <div>
              <p className="text-xs text-gray-500">Full Name</p>
              <p className="font-medium">{member.name}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Position</p>
              <p className="font-medium">{member.position}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Mobile</p>
              <p className="font-medium">{member.mobile}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Gender</p>
              <p className="font-medium">{member.gender}</p>
            </div>
          </div>

          {/* ID and Barcode */}
          <div>
            <p className="text-xs text-gray-500">ID Number</p>
            <p className="text-sm font-medium mb-2">{member.idNumber}</p>
            <Barcode value={member.idNumber} />
          </div>
        </div>
      </div>
    </div>
  );
};

const IDCardPage = () => {
  const [selectedType, setSelectedType] = useState('keyPerson');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center space-x-3 mb-6">
          <button
            onClick={() => setSelectedType('keyPerson')}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              selectedType === 'keyPerson'
                ? 'bg-blue-500 text-white shadow'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Key Persons
          </button>
          <button
            onClick={() => setSelectedType('trustee')}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              selectedType === 'trustee'
                ? 'bg-blue-500 text-white shadow'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Trustees
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {selectedType === 'keyPerson' && 
            keyPersons.map((person) => (
              <IDCard key={person.idNumber} member={person} type="keyPerson" />
            ))
          }
          {selectedType === 'trustee' && 
            trustees.map((trustee) => (
              <IDCard key={trustee.idNumber} member={trustee} type="trustee" />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default IDCardPage;