import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  const trustMembers = [
    {
      name: "Narendra Kumar",
      position: "Chairman",
      image: '/assets/narendra.jpg'
    },
    {
      name: "Suraj Singh",
      position: "General Secretary",
      image: '/assets/suraj.jpg'
    },
    {
      name: "Lova Kush",
      position: "Treasurer",
      image: '/assets/Lovakush.png'
    },
    {
      name: "Neeraj Kumar Shakya",
      position: "Vice President",
      image: '/assets/neerajkumar.jpg'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Temple Image */}
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <img
            src= '/assets/Bhadroli_devi.jpg'
            alt="Khatu Shyam Temple"
            className="w-full h-full object-cover object-center"
            style={{
              objectPosition: 'center 5%',
              minHeight: '100vh'
            }}
          />
        </div>
        
        {/* Overlay with Donation Button */}
        <div className="relative z-10 bg-black bg-opacity-50 min-h-screen flex flex-col items-center justify-center p-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center mb-6">
            Maa Bhagwati Charitable Trust
          </h1>
          <p className="text-white text-xl md:text-2xl mb-8 text-center">
            Join us in building the future of spirituality
          </p>
          <button
            onClick={() => navigate('/donation')}
            className="bg-orange-500 text-white px-8 py-4 rounded-lg text-xl font-semibold 
                     hover:bg-orange-600 transition-colors duration-300 shadow-lg"
          >
            Make a Donation
          </button>
        </div>
      </div>

      {/* Temple Project Section */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Khatu Shyam Temple Project
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg h-full">
              <img
                src= '/assets/Khatushyam.jpeg'
                alt="Temple Project"
                className="w-full h-full object-contain bg-white"
                // style={{ aspectRatio: '4/4' }}
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">
                2nd Biggest Khatu Shyam Temple Project
              </h3>
              <p className="text-gray-700 text-lg mb-6">
                We are embarking on an ambitious project to construct the second-largest
                Khatu Shyam temple. This sacred endeavor will create a spiritual haven
                for devotees and serve as a landmark of devotion and architectural excellence.
              </p>
              <button
                onClick={() => navigate('/khatushyam-project')}
                className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Members Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Trust Members
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {trustMembers.map((member, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center bg-amber-100 rounded-lg shadow-md 
                         hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                    style={
                      member.name === "Neeraj Kumar Shakya"
                        ? { objectFit: 'cover', objectPosition: 'center 30%' }
                        : { objectFit: 'cover', objectPosition: 'center 5%' }
                    }
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  {member.name}
                </h3>
                <p className="text-gray-600 mt-2">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;