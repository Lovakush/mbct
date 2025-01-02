import React from 'react';

const TrustAuthorityPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-amber-100">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-800 mb-2">
            माँ भगवती चैरिटेबल ट्रस्ट
          </h1>
          <div className="h-1 w-32 bg-amber-500 mx-auto"></div>
          <h2 className="text-2xl mt-4 text-amber-700">प्राधिकृत सदस्य नीति एवं अधिकार</h2>
        </div>

        <div className="space-y-8">
          <section className="bg-amber-50 rounded-lg p-6 shadow-inner">
            <h2 className="text-2xl font-bold text-amber-900 mb-4 border-b-2 border-amber-200 pb-2">
              मुख्य प्राधिकृत सदस्य
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "श्री नरेंद्र कुमार",
                  role: "अध्यक्ष",
                },
                {
                  name: "श्री सूरज सिंह",
                  role: "महासचिव",
                },
                {
                  name: "श्री लव कुश",
                  role: "कोषाध्यक्ष",
                }
              ].map((member) => (
                <div key={member.aadhar} className="bg-white rounded-lg p-4 shadow-md">
                  <h3 className="text-lg font-semibold text-amber-800">{member.name}</h3>
                  <p className="text-amber-700">{member.role}</p>
                  {/* <p className="text-sm text-amber-600">आधार: {member.aadhar}</p> */}
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">विशेष अधिकार एवं शक्तियां</h2>
            <div className="space-y-4">
              <div className="bg-white/80 rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">नीति परिवर्तन अधिकार</h3>
                <p className="text-amber-900">उपरोक्त तीनों मुख्य सदस्यों को निम्नलिखित अधिकार प्राप्त हैं:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-amber-800">
                  <li>ट्रस्ट की नीतियों में समय-समय पर संशोधन करना</li>
                  <li>नए सदस्यों की नियुक्ति एवं वर्तमान सदस्यों की सेवा समाप्ति</li>
                  <li>ट्रस्ट के नाम पर हस्ताक्षर करने का अधिकार</li>
                  <li>वित्तीय लेनदेन का अनुमोदन</li>
                </ul>
              </div>

              <div className="bg-white/80 rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">हस्ताक्षर प्राधिकरण</h3>
                <p className="text-amber-900">केवल इन तीन सदस्यों के हस्ताक्षर मान्य होंगे:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-amber-800">
                  <li>सभी कानूनी दस्तावेजों पर</li>
                  <li>बैंक खातों के संचालन में</li>
                  <li>संपत्ति से संबंधित लेनदेन में</li>
                  <li>अनुबंधों और समझौतों पर</li>
                </ul>
              </div>

              <div className="bg-white/80 rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">विशेष प्रावधान</h3>
                <ul className="list-disc pl-6 space-y-2 text-amber-800">
                  <li>किसी भी महत्वपूर्ण निर्णय के लिए कम से कम दो प्राधिकृत सदस्यों की सहमति आवश्यक है</li>
                  <li>एक प्राधिकृत सदस्य की अनुपस्थिति में, अन्य दो सदस्य निर्णय ले सकते हैं</li>
                  <li>प्राधिकृत सदस्य की मृत्यु या त्यागपत्र की स्थिति में, शेष सदस्य नए सदस्य की नियुक्ति कर सकते हैं</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="mt-8 bg-amber-50 rounded-lg p-6 text-center">
            <p className="text-amber-800 font-semibold">
              यह नीति दिनांक 29/04/2024 से प्रभावी है
            </p>
            <section className="bg-amber-50 rounded-lg p-6 shadow-inner">
            <h2 className="text-2xl font-bold text-amber-900 mb-4 border-b-2 border-amber-200 pb-2">
              मुख्य प्राधिकृत सदस्य
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "श्री नरेंद्र कुमार",
                  role: "अध्यक्ष",
                },
                {
                  name: "श्री सूरज सिंह",
                  role: "महासचिव",
                },
                {
                  name: "श्री लव कुश",
                  role: "कोषाध्यक्ष",
                }
              ].map((member) => (
                <div key={member.aadhar} className="bg-white rounded-lg p-4 shadow-md">
                  <h3 className="text-lg font-semibold text-amber-800">{member.name}</h3>
                  <p className="text-amber-700">{member.role}</p>
                  {/* <p className="text-sm text-amber-600">आधार: {member.aadhar}</p> */}
                </div>
              ))}
            </div>
          </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustAuthorityPolicy;