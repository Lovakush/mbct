import React, { useState } from 'react';
import { Shield, Users, AlertTriangle, FileText, Book, Gavel, Key, Lock, CoinsIcon } from 'lucide-react';

const TrustPolicy = () => {
  const [activeSection, setActiveSection] = useState('governance');
  
  const sections = [
    { id: 'governance', title: 'संस्थापक मंडल व प्रशासन', icon: <Users /> },
    { id: 'decision', title: 'निर्णय प्रक्रिया एवं अधिकार', icon: <Gavel /> },
    { id: 'security', title: 'वित्तीय सुरक्षा प्रतिभूति', icon: <CoinsIcon /> },
    { id: 'termination', title: 'पदच्युति एवं निष्कासन प्रावधान', icon: <AlertTriangle /> },
    { id: 'amendments', title: 'नीति संशोधन प्रणाली', icon: <FileText /> }
  ];

  // Current leadership team
  const leadershipTeam = [
    // {
    //   name: "श्री दिग्विजय सिंह तोमर",
    //   position: "Chairman",
    //   role: "अध्यक्ष"
    // },
    {
      name: "श्री नरेंद्र कुमार",
      position: "Tenured Chairman",
      role: "संस्थापक अध्यक्ष"
    },
    {
      name: "श्री सूरज सिंह",
      position: "General Secretary",
      role: "महासचिव"
    },
    {
      name: "श्री लव कुश",
      position: "Treasurer",
      role: "कोषाध्यक्ष"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16 md:py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">माँ भगवती चैरिटेबल ट्रस्ट</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-amber-100">
            विधिक नियमावली एवं शासी प्रावधान
          </p>
        </div>
        
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="none">
            <path d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" fill="#FFF7ED"/>
          </svg>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10 md:-mt-16 relative z-10">
        {/* Main content container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="md:flex">
            <div className="md:w-1/4 bg-gradient-to-b from-amber-50 to-orange-50">
              <nav className="sticky top-32 p-4">
                <div className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium shadow-md'
                          : 'text-gray-700 hover:bg-amber-100'
                      }`}
                    >
                      <span className="mr-3">{section.icon}</span>
                      <span>{section.title}</span>
                    </button>
                  ))}
                </div>
              </nav>
            </div>
            
            <div className="md:w-3/4">
              <div className="p-6 md:p-10">
                {/* Governance Structure Section */}
                {activeSection === 'governance' && (
                  <div className="space-y-8">
                    <div className="flex items-center space-x-3 border-b border-amber-200 pb-3">
                      <Users className="h-7 w-7 text-amber-500" />
                      <h2 className="text-2xl font-bold text-amber-800">संस्थापक मंडल व प्रशासन</h2>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-amber-700 mb-4">धारा 1: न्यासी मंडल का गठन एवं अधिकार</h3>
                      <p className="text-gray-700 mb-4">
                        1.1 तद्द्वारा यह घोषित एवं अधिनियमित किया जाता है कि माँ भगवती चैरिटेबल ट्रस्ट का शासन एवं प्रबंधन एक अधिकृत 
                        न्यासी मंडल (जिसे आगे "मंडल" के रूप में संदर्भित किया जाएगा) द्वारा किया जाएगा, जिसमें न्यूनतम चार (4) एवं अधिकतम 
                        सात (7) सदस्य शामिल होंगे। उक्त मंडल के पास ट्रस्ट के सभी मामलों पर परम अधिकार निहित रहेगा।
                      </p>
                      <p className="text-gray-700 mb-4">
                        1.2 मंडल में अनिवार्य रूप से निम्नलिखित पदाधिकारी सम्मिलित होंगे: अध्यक्ष, संस्थापक अध्यक्ष, महासचिव एवं कोषाध्यक्ष। 
                        इन चारों पदाधिकारियों की अनिवार्य उपस्थिति एवं सहमति के बिना कोई भी महत्वपूर्ण परिवर्तन अथवा निर्णय वैध नहीं माना जाएगा।
                      </p>
                      
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
                        {leadershipTeam.map((member, index) => (
                          <div key={index} className="bg-amber-50 p-4 rounded-lg border border-amber-100 shadow-sm">
                            <h4 className="font-bold text-amber-800">{member.name}</h4>
                            <p className="text-amber-600">{member.position}</p>
                            <p className="text-sm text-amber-500">{member.role}</p>
                          </div>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-amber-700 mt-8 mb-4">धारा 2: मंडल की शक्तियां एवं दायित्व</h3>
                      <div className="space-y-3 text-gray-700">
                        <p>
                          2.1 मंडल के पास ट्रस्ट के वित्तीय, प्रशासनिक, संपत्ति संबंधी एवं कानूनी मामलों पर संपूर्ण अधिकार होगा, जिसमें निम्नलिखित शामिल हैं, परंतु इन्हीं तक सीमित नहीं:
                        </p>
                        <ul className="list-disc ml-6 space-y-2">
                          <li>ट्रस्ट की संपत्ति, संसाधनों एवं धन के अधिग्रहण, प्रबंधन, हस्तांतरण अथवा निपटान का अधिकार;</li>
                          <li>ट्रस्ट की नीतियों, विनियमों एवं प्रक्रियाओं में संशोधन, परिवर्तन अथवा निरस्त करने का अधिकार;</li>
                          <li>ट्रस्ट के नाम पर अनुबंध, समझौते एवं दस्तावेज़ों पर हस्ताक्षर करने का अधिकार;</li>
                          <li>ट्रस्ट के पदाधिकारियों, कर्मचारियों एवं स्वयंसेवकों की नियुक्ति, पदोन्नति, स्थानांतरण अथवा पदच्युति का अधिकार;</li>
                          <li>ट्रस्ट के धार्मिक, सामाजिक, शैक्षिक एवं धर्मार्थ कार्यक्रमों की योजना, कार्यान्वयन एवं निरीक्षण का अधिकार।</li>
                        </ul>
                        <p>
                          2.2 मंडल के प्रत्येक सदस्य का यह परम दायित्व होगा कि वे ट्रस्ट के हितों को सर्वोपरि रखें, अपने कर्तव्यों का निष्पादन 
                          सद्भावना, परिश्रम एवं विवेक के साथ करें तथा किसी भी प्रकार के हितों के टकराव से बचें।
                        </p>
                        <p>
                          2.3 मंडल के सदस्यों को ट्रस्ट के सभी लेन-देन, निर्णयों एवं गतिविधियों का उचित एवं स्पष्ट अभिलेख रखना होगा, जिसे 
                          अधिनियमानुसार निरीक्षण हेतु प्रस्तुत किया जा सके।
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500 mt-4">
                      <h3 className="text-lg font-semibold text-amber-800 mb-2">धारा 3: पदावधि एवं उत्तराधिकार</h3>
                      <p className="text-gray-700 mb-4">
                        3.1 मंडल के सदस्यों की पदावधि तीन (3) वर्ष की होगी, जिसे मंडल के बहुमत के निर्णय द्वारा पुनः नवीनीकृत किया जा सकता है।
                      </p>
                      <p className="text-gray-700 mb-4">
                        3.2 किसी भी सदस्य की मृत्यु, त्यागपत्र, अयोग्यता अथवा पदच्युति की स्थिति में, शेष मंडल द्वारा बहुमत से एक नए सदस्य को नियुक्त 
                        किया जाएगा, जो बची हुई पदावधि के लिए कार्य करेगा।
                      </p>
                      <p className="text-gray-700 mb-4">
                        3.3 संस्थापक अध्यक्ष का पद आजीवन रहेगा, जब तक कि वे स्वयं त्यागपत्र न दें अथवा मंडल के तीन-चौथाई (3/4) बहुमत 
                        द्वारा उन्हें पदच्युत न किया जाए।
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Decision Making Section */}
                {activeSection === 'decision' && (
                  <div className="space-y-8">
                    <div className="flex items-center space-x-3 border-b border-amber-200 pb-3">
                      <Gavel className="h-7 w-7 text-amber-500" />
                      <h2 className="text-2xl font-bold text-amber-800">निर्णय प्रक्रिया एवं अधिकार</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-gray-700">
                        तद्द्वारा यह स्थापित किया जाता है कि ट्रस्ट के प्रभावी, पारदर्शी एवं न्यायसंगत प्रशासन हेतु निम्नलिखित निर्णय प्रक्रिया का कठोरता से 
                        पालन किया जाएगा। इस प्रणाली का उल्लंघन करने वाले निर्णय अमान्य एवं अप्रवर्तनीय होंगे।
                      </p>
                      
                      <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg p-6 text-white">
                        <h3 className="text-xl font-bold mb-4">धारा 4: बृहद् निर्णय प्रक्रिया</h3>
                        <div className="space-y-3">
                          <p>
                            <span className="font-semibold">4.1 पूर्ण मंडल अनुमोदन अनिवार्य</span> - निम्नलिखित मामलों में एक औपचारिक मंडल बैठक में न्यूनतम चार (4) अधिकृत सदस्यों की भौतिक उपस्थिति अनिवार्य होगी:
                          </p>
                          <ul className="list-disc ml-6 space-y-2">
                            <li>मंडल सदस्यों अथवा वरिष्ठ पदाधिकारियों की नियुक्ति, पदोन्नति अथवा पदच्युति;</li>
                            <li>वार्षिक बजट का अनुमोदन एवं ₹1,00,000/- (एक लाख रुपये) से अधिक की आर्थिक स्वीकृति;</li>
                            <li>ट्रस्ट की अचल संपत्ति का अधिग्रहण, विक्रय, हस्तांतरण अथवा महत्वपूर्ण संशोधन;</li>
                            <li>ट्रस्ट डीड, विनियमों अथवा प्रमुख नीतियों में परिवर्तन;</li>
                            <li>दीर्घकालिक अनुबंधों अथवा सहभागिता समझौतों का निष्पादन;</li>
                            <li>नई प्रमुख परियोजनाओं अथवा कार्यक्रमों का प्रारंभ।</li>
                          </ul>
                          <p className="pt-2">
                            4.2 उपरोक्त निर्णयों हेतु औपचारिक दस्तावेजीकरण, हस्ताक्षरित कार्यवृत्त एवं मंडल के बहुमत की सहमति अनिवार्य 
                            है, जिसमें अध्यक्ष अथवा संस्थापक अध्यक्ष की सहमति अवश्य सम्मिलित होनी चाहिए।
                          </p>
                          <p className="pt-2">
                            4.3 ऐसे निर्णयों के विरुद्ध किसी भी प्रकार का आक्षेप अथवा असहमति को मंडल के अध्यक्ष अथवा संस्थापक अध्यक्ष के समक्ष 
                            लिखित रूप में प्रस्तुत किया जाना चाहिए, जिस पर अंतिम निर्णय मंडल द्वारा पारित किया जाएगा।
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-amber-800 mb-4">धारा 5: मध्यवर्ती निर्णय प्रक्रिया</h3>
                        <div className="space-y-3 text-gray-700">
                          <p>
                            <span className="font-semibold">5.1 द्विसदस्यीय प्राधिकरण आवश्यक</span> - निम्नलिखित मामलों में कम से कम दो (2) अधिकृत सदस्यों का लिखित अनुमोदन अनिवार्य होगा:
                          </p>
                          <ul className="list-disc ml-6 space-y-2">
                            <li>₹25,000/- (पच्चीस हजार रुपये) से ₹1,00,000/- (एक लाख रुपये) के मध्य का व्यय;</li>
                            <li>कर्मचारियों अथवा ठेकेदारों की भर्ती एवं सेवा-समाप्ति;</li>
                            <li>वर्तमान कार्यक्रमों में परिचालन परिवर्तन;</li>
                            <li>अल्पकालिक अनुबंध अथवा समझौते;</li>
                            <li>गौण नीतिगत संशोधन।</li>
                          </ul>
                          <p className="pt-2">
                            5.2 उदाहरणार्थ: यदि अध्यक्ष किसी कार्यक्रम संशोधन का कार्यान्वयन करना चाहते हैं, तो उन्हें कम से कम एक अन्य 
                            अधिकृत सदस्य (महासचिव, कोषाध्यक्ष अथवा संस्थापक अध्यक्ष) से अनुमोदन प्राप्त करना होगा।
                          </p>
                          <p className="pt-2">
                            5.3 द्विसदस्यीय अनुमोदन का प्रमाण लिखित रूप में संरक्षित रखना होगा एवं अगली मंडल बैठक में इसकी सूचना 
                            प्रस्तुत करनी होगी।
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-amber-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-amber-800 mb-4">धारा 6: नित्य निर्णय प्रक्रिया</h3>
                        <div className="space-y-3 text-gray-700">
                          <p>
                            <span className="font-semibold">6.1 एकल प्राधिकरण अनुमत</span> - निम्नलिखित मामलों में अधिकृत सदस्य स्वतंत्र रूप से कार्य कर सकते हैं:
                          </p>
                          <ul className="list-disc ml-6 space-y-2">
                            <li>दैनिक प्रशासनिक गतिविधियां;</li>
                            <li>अनुमोदित बजट के अंतर्गत ₹25,000/- (पच्चीस हजार रुपये) से कम का व्यय;</li>
                            <li>नियमित पत्राचार एवं संचार;</li>
                            <li>नियमित गतिविधियों एवं कार्यक्रमों की समय-सारिणी।</li>
                          </ul>
                          <p className="pt-2">
                            6.2 इन निर्णयों का भी अभिलेखन करना होगा एवं नियमित बैठकों में इसकी रिपोर्ट प्रस्तुत करनी होगी, 
                            जिससे पारदर्शिता एवं जवाबदेही सुनिश्चित की जा सके।
                          </p>
                          <p className="pt-2">
                            6.3 यदि किसी भी समय यह पाया जाए कि एकल प्राधिकरण के अधिकार का दुरुपयोग किया गया है अथवा 
                            निर्धारित सीमाओं का उल्लंघन किया गया है, तो वह निर्णय स्वतः निरस्त माना जाएगा एवं संबंधित सदस्य 
                            अनुशासनात्मक कार्रवाई के अधीन होगा।
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
                        <h3 className="text-lg font-semibold text-amber-800 mb-3">धारा 7: आपातकालीन निर्णय प्रोटोकॉल</h3>
                        <p className="text-gray-700">
                          7.1 ऐसी आपात परिस्थितियों में जहां विलंब से ट्रस्ट को महत्वपूर्ण क्षति अथवा हानि हो सकती है:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                          <li>कोई भी अधिकृत सदस्य आपातकाल को संबोधित करने हेतु तत्काल कार्रवाई कर सकता है;</li>
                          <li>उक्त सदस्य को आपात स्थिति एवं की गई कार्रवाई का विस्तृत दस्तावेजीकरण करना अनिवार्य होगा;</li>
                          <li>यथाशीघ्र सभी मंडल सदस्यों को सूचित करना होगा, अधिमानतः 24 घंटे के भीतर;</li>
                          <li>आपातकालीन निर्णय की समीक्षा हेतु 7 दिवसों के भीतर एक विशेष बैठक आयोजित करनी होगी;</li>
                          <li>मंडल आवश्यकतानुसार निर्णय की पुष्टि, संशोधन अथवा निरस्त कर सकता है।</li>
                        </ul>
                        <p className="mt-3 text-sm font-semibold text-red-700">
                          7.2 आपातकालीन अधिकारों का दुरुपयोग करने वाले सदस्य के विरुद्ध अनुशासनात्मक कार्रवाई की जाएगी, जिसमें 
                          पदच्युति एवं आर्थिक दण्ड भी सम्मिलित हो सकता है।
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Security Deposit Section */}
                {activeSection === 'security' && (
                  <div className="space-y-8">
                    <div className="flex items-center space-x-3 border-b border-amber-200 pb-3">
                      <CoinsIcon className="h-7 w-7 text-amber-500" />
                      <h2 className="text-2xl font-bold text-amber-800">वित्तीय सुरक्षा प्रतिभूति</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-gray-700">
                        एतद्द्वारा यह अधिनियमित किया जाता है कि उत्तरदायित्व एवं प्रतिबद्धता सुनिश्चित करने हेतु, ट्रस्ट में अधिकृत सदस्यों 
                        एवं वित्तीय अथवा प्रशासनिक उत्तरदायित्व वाले पदाधिकारियों द्वारा निम्नानुसार सुरक्षा प्रतिभूति जमा करना अनिवार्य होगा। 
                        यह नीति ट्रस्ट की संपत्ति की सुरक्षा करेगी तथा उत्तरदायित्व हेतु एक प्रभावी तंत्र प्रदान करेगी।
                      </p>
                      
                      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border border-amber-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-amber-800 mb-4">धारा 8: प्रतिभूति आवश्यकताएं</h3>
                        
                        <table className="min-w-full bg-white rounded-lg overflow-hidden border border-amber-200">
                          <thead className="bg-amber-100">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">पद (Position)</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">प्रतिभूति राशि सीमा (Security Amount Range)</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">निर्धारण प्राधिकारी (Determined By)</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-amber-100">
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">मंडल सदस्य (Board Members)</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">₹25,000 - ₹1,00,000</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">मंडल बैठक (Board Meeting)</td>
                            </tr>
                            <tr className="bg-amber-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">विभाग प्रमुख (Department Heads)</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">₹15,000 - ₹50,000</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">मंडल बैठक (Board Meeting)</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">वित्तीय अधिकारी (Financial Handlers)</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">₹10,000 - ₹40,000</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">मंडल बैठक (Board Meeting)</td>
                            </tr>
                            <tr className="bg-amber-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">प्राधिकार युक्त सामान्य सदस्य (Regular Members with Authority)</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">₹5,000 - ₹25,000</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">न्यूनतम 2 मंडल सदस्य (At least 2 Board Members)</td>
                            </tr>
                          </tbody>
                        </table>
                        
                        <div className="mt-4 space-y-2 text-sm text-gray-700">
                          <p>* सटीक राशि उत्तरदायित्व के स्तर एवं संसाधनों तक पहुंच के आधार पर निर्धारित की जाएगी।</p>
                          <p>* आधिकारिक कर्तव्यों को ग्रहण करने से पूर्व प्रतिभूति जमा का भुगतान अनिवार्य होगा।</p>
                          <p>* बदलती परिस्थितियों के आधार पर मंडल के निर्णय द्वारा राशि में संशोधन किया जा सकता है।</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg p-6 border border-amber-200 shadow-sm">
                          <h3 className="text-lg font-semibold text-amber-800 mb-3">धारा 9: प्रतिभूति नियम एवं शर्तें</h3>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                              <span className="text-amber-500 mr-2">•</span>
                              <span>9.1 प्रतिभूति राशि का भुगतान चेक अथवा बैंक हस्तांतरण द्वारा ट्रस्ट के आधिकारिक खाते में जमा की जानी चाहिए।</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-amber-500 mr-2">•</span>
                              <span>9.2 समस्त जमा प्रतिभूति हेतु एक आधिकारिक रसीद प्रदान की जाएगी, जिसे जमाकर्ता द्वारा सुरक्षित रखा जाएगा।</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-amber-500 mr-2">•</span>
                              <span>9.3 जमा राशि एक पृथक निर्धारित खाते में रखी जाएगी और परिचालन व्यय हेतु उपयोग नहीं की जाएगी।</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-amber-500 mr-2">•</span>
                              <span>9.4 प्रतिभूति जमा पर कोई ब्याज देय नहीं होगा।</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-amber-500 mr-2">•</span>
                              <span>9.5 वर्तमान सदस्यों हेतु प्रतिभूति राशि समायोजन के लिए मंडल का अनुमोदन अनिवार्य होगा।</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-white rounded-lg p-6 border border-amber-200 shadow-sm">
                          <h3 className="text-lg font-semibold text-amber-800 mb-3">धारा 10: प्रतिभूति वापसी की शर्तें</h3>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                              <span className="text-amber-500 mr-2">•</span>
                              <span>10.1 उचित हस्तांतरण के साथ सम्मानजनक त्यागपत्र पर पूर्ण प्रतिभूति वापसी की जाएगी।</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-amber-500 mr-2">•</span>
                              <span>10.2 सभी खातों के समाधान के पश्चात् प्रतिभूति वापसी प्रक्रिया में 30 दिवस तक का समय लग सकता है।</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-amber-500 mr-2">•</span>
                              <span>10.3 किसी भी प्रकार के वैध बकाया अथवा क्षति की राशि प्रतिभूति से काटी जा सकती है।</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-amber-500 mr-2">•</span>
                              <span>10.4 कदाचार अथवा नीति उल्लंघन के कारण समाप्ति की स्थिति में कोई प्रतिभूति वापसी नहीं की जाएगी।</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
                        <h3 className="text-lg font-semibold text-amber-800 mb-2">धारा 11: प्रतिभूति जब्ती की स्थितियां</h3>
                        <p className="text-gray-700 mb-3">
                          निम्नलिखित परिस्थितियों में प्रतिभूति जमा राशि पूर्णतः जब्त कर ली जाएगी:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>11.1 ट्रस्ट धन अथवा संसाधनों का दुरुपयोग अथवा गबन;</li>
                          <li>11.2 क्षति उत्पन्न करने वाला ट्रस्ट नीतियों का जानबूझकर उल्लंघन;</li>
                          <li>11.3 उचित सूचना अथवा हस्तांतरण के बिना पद का परित्याग;</li>
                          <li>11.4 आपराधिक गतिविधियां अथवा गंभीर नैतिक उल्लंघन;</li>
                          <li>11.5 ऐसा कोई भी कार्य जिससे ट्रस्ट को वित्तीय हानि अथवा प्रतिष्ठा को क्षति हो;</li>
                          <li>11.6 कदाचार के कारण मंडल द्वारा पदच्युति।</li>
                        </ul>
                        <p className="mt-3 text-sm text-amber-800 font-medium">
                          11.7 समस्त जब्त प्रतिभूति राशि ट्रस्ट के सामान्य कोष में निहित की जाएगी एवं धर्मार्थ उद्देश्यों हेतु उपयोग की जाएगी।
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Termination Policy Section */}
                {activeSection === 'termination' && (
                  <div className="space-y-8">
                    <div className="flex items-center space-x-3 border-b border-amber-200 pb-3">
                      <AlertTriangle className="h-7 w-7 text-amber-500" />
                      <h2 className="text-2xl font-bold text-amber-800">पदच्युति एवं निष्कासन प्रावधान</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-gray-700">
                        एतद्द्वारा यह प्रख्यापित किया जाता है कि ट्रस्ट आचरण एवं प्रदर्शन हेतु कठोर मानक स्थापित करता है। यह नीति 
                        उत्तरदायित्व सुनिश्चित करने एवं ट्रस्ट की अखंडता की रक्षा हेतु अधिकृत पदों सहित सदस्यों की पदच्युति अथवा 
                        निष्कासन की स्थितियों एवं प्रक्रियाओं को परिभाषित करती है।
                      </p>
                      
                      <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-lg p-6 border border-red-100 shadow-sm">
                        <h3 className="text-xl font-semibold text-amber-800 mb-4">धारा 12: पदच्युति के आधार</h3>
                        
                        <div className="space-y-4">
                          <div className="bg-white p-4 rounded border-l-4 border-red-500">
                            <h4 className="font-medium text-red-800 mb-2">12.1 गंभीर उल्लंघन</h4>
                            <ul className="space-y-1 text-gray-700">
                              <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>ट्रस्ट धन का अपव्यय, दुरुपयोग अथवा गबन;</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>धोखाधड़ी, चोरी अथवा हिंसा सहित आपराधिक कृत्य;</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>ट्रस्ट संपत्ति अथवा प्रतिष्ठा को जानबूझकर क्षति;</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>गोपनीयता अथवा विश्वास का गंभीर उल्लंघन;</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>यौन उत्पीड़न अथवा भेदभाव।</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                            <h4 className="font-medium text-amber-800 mb-2">12.2 प्रदर्शन एवं आचरण संबंधी मुद्दे</h4>
                            <ul className="space-y-1 text-gray-700">
                              <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>उत्तरदायित्व निर्वहन में निरंतर विफलता;</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>चेतावनी के पश्चात् ट्रस्ट नीतियों का पुनरावर्ती उल्लंघन;</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>कर्तव्यों से अनधिकृत अनुपस्थिति;</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>ट्रस्ट के उद्देश्यों अथवा सामंजस्य को कमजोर करने वाले कार्य;</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>अपेक्षित नैतिक मानकों को बनाए रखने में विफलता।</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-4 rounded border-l-4 border-amber-300">
                            <h4 className="font-medium text-amber-800 mb-2">12.3 प्रशासनिक कारण</h4>
                            <ul className="space-y-1 text-gray-700">
                              <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>संरचनात्मक पुनर्गठन अथवा पद समाप्ति;</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>विस्तारित अवधि हेतु अक्षमता के कारण भूमिका को पूरा करने में असमर्थता;</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>क्षमताओं एवं पद की आवश्यकताओं के मध्य स्पष्ट असंगति।</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 border border-amber-200 shadow-sm">
                        <h3 className="text-lg font-semibold text-amber-800 mb-3">धारा 13: पदच्युति प्रक्रिया</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-amber-700 mb-2">13.1 मंडल मूल्यांकन</h4>
                            <p className="text-gray-700">
                              पदच्युति प्रस्ताव की समीक्षा हेतु एक औपचारिक मंडल बैठक आयोजित की जाएगी। इसमें न्यूनतम चार (4) अधिकृत सदस्यों की उपस्थिति अनिवार्य है, 
                              जिनमें अध्यक्ष अथवा संस्थापक अध्यक्ष सम्मिलित होना अनिवार्य है।
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-amber-700 mb-2">13.2 सुनवाई का अवसर</h4>
                            <p className="text-gray-700">
                              संबंधित सदस्य को लिखित सूचना प्रदान की जाएगी एवं अपना पक्ष प्रस्तुत करने का अवसर दिया जाएगा, 
                              सिवाय ऐसी विशेष परिस्थितियों के जहां तत्काल खतरा विद्यमान हो।
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-amber-700 mb-2">13.3 मंडल निर्णय</h4>
                            <p className="text-gray-700">
                              पदच्युति हेतु आवश्यक बहुमत निम्नानुसार निर्धारित किया जाता है:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
                              <li>गंभीर उल्लंघनों हेतु: उपस्थित मंडल सदस्यों का साधारण बहुमत (50% से अधिक);</li>
                              <li>प्रदर्शन संबंधी मुद्दों हेतु: उपस्थित मंडल सदस्यों का दो-तिहाई (2/3) बहुमत;</li>
                              <li>प्रशासनिक कारणों हेतु: उपस्थित मंडल सदस्यों का तीन-चौथाई (3/4) बहुमत।</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-amber-700 mb-2">13.4 दस्तावेजीकरण एवं निष्कासन</h4>
                            <p className="text-gray-700">
                              पदच्युति के समस्त विवरण अभिलिखित किए जाएंगे, एक औपचारिक पदच्युति पत्र जारी किया जाएगा, 
                              एवं सभी अधिकारों, दायित्वों तथा ट्रस्ट संपत्ति के हस्तांतरण को सुनिश्चित किया जाएगा।
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
                        <h3 className="text-lg font-semibold text-amber-800 mb-2">धारा 14: विशेष प्रावधान</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>14.1 गंभीर कदाचार के मामलों में मंडल तत्काल निलंबन लागू कर सकता है;</li>
                          <li>14.2 पदच्युति की स्थिति में सुरक्षा प्रतिभूति जमा राशि पूर्णतः जब्त की जाएगी;</li>
                          <li>14.3 कदाचार के कारण निष्कासित व्यक्ति भविष्य में ट्रस्ट के किसी भी पद हेतु स्थायी रूप से अयोग्य घोषित किया जाएगा;</li>
                          <li>14.4 मंडल किसी भी सदस्य को बिना पूर्व सूचना के हटाने का अधिकार सुरक्षित रखता है, यदि संगठन के सर्वोत्तम हित में आवश्यक हो;</li>
                          <li>14.5 अधिकृत सदस्य जो किसी अवैध गतिविधि में लिप्त पाए जाते हैं, उन्हें समुचित कानूनी प्राधिकारियों को अधिसूचित किया जाएगा।</li>
                        </ul>
                      </div>
                      
                      <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                        <h3 className="text-lg font-semibold text-red-800 mb-2">धारा 15: विधिक परिणाम</h3>
                        <p className="text-gray-700">
                          ट्रस्ट इस नीति का उल्लंघन करने वाले, अनुचित आचरण में लिप्त होने वाले, अथवा ट्रस्ट की प्रतिष्ठा को हानि पहुंचाने वाले किसी भी व्यक्ति 
                          के विरुद्ध कानूनी कार्रवाई का अधिकार सुरक्षित रखता है। ट्रस्ट की संपत्ति अथवा संसाधनों के दुरुपयोग के प्रकरणों में, मामले की गंभीरता के 
                          आधार पर न्यायालय में दीवानी और/अथवा आपराधिक कार्यवाही प्रारंभ की जा सकती है।
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Policy Amendments Section */}
                {activeSection === 'amendments' && (
                  <div className="space-y-8">
                    <div className="flex items-center space-x-3 border-b border-amber-200 pb-3">
                      <FileText className="h-7 w-7 text-amber-500" />
                      <h2 className="text-2xl font-bold text-amber-800">नीति संशोधन प्रणाली</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-gray-700">
                        एतद्द्वारा यह स्थापित किया जाता है कि ट्रस्ट का संचालन प्रभावी बने एवं समयानुकूल विकसित होती परिस्थितियों के अनुरूप रहे, इस हेतु 
                        नीतियों का समय-समय पर अद्यतन एवं संशोधन आवश्यक है। निम्नलिखित प्रणाली नीतिगत परिवर्तनों हेतु एक संरचित एवं पारदर्शी विधि प्रदान करती है।
                      </p>
                      
                      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border border-amber-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-amber-800 mb-4">धारा 16: प्राधिकार एवं अधिकार</h3>
                        
                        <div className="space-y-4 text-gray-700">
                          <p className="flex items-start">
                            <span className="text-amber-500 mr-2 font-bold">16.1</span>
                            <span><strong>मंडल प्राधिकार:</strong> ट्रस्ट की समस्त नीतियों को संशोधित, परिवर्तित अथवा निरस्त करने का अंतिम अधिकार मंडल के पास 
                            निहित है। ये परिवर्तन ट्रस्ट डीड, धर्मार्थ आयोग के नियमों एवं लागू विधानों के अनुकूल होने अनिवार्य हैं।</span>
                          </p>
                          
                          <p className="flex items-start">
                            <span className="text-amber-500 mr-2 font-bold">16.2</span>
                            <span><strong>परिवर्तन की आवृत्ति:</strong> मंडल बिना किसी पूर्व सूचना के किसी भी समय नीतियों में परिवर्तन कर सकता है, 
                            विशेषकर ट्रस्ट के हितों की रक्षा अथवा आपात स्थितियों में तत्काल प्रतिक्रिया हेतु।</span>
                          </p>
                          
                          <p className="flex items-start">
                            <span className="text-amber-500 mr-2 font-bold">16.3</span>
                            <span><strong>संशोधन अधिकार:</strong> कोई भी अधिकृत सदस्य नीति संशोधन का प्रस्ताव प्रस्तुत कर सकता है, 
                            परंतु अंतिम अनुमोदन मंडल द्वारा ही प्रदान किया जाएगा।</span>
                          </p>
                          
                          <p className="flex items-start">
                            <span className="text-amber-500 mr-2 font-bold">16.4</span>
                            <span><strong>अधिभावी प्रावधान:</strong> किसी भी विरोधाभास की स्थिति में, मंडल के अध्यक्ष एवं संस्थापक अध्यक्ष द्वारा 
                            संयुक्त रूप से व्याख्या अधिभावी मानी जाएगी।</span>
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 border border-amber-200 shadow-sm">
                        <h3 className="text-lg font-semibold text-amber-800 mb-3">धारा 17: संशोधन प्रक्रिया</h3>
                        
                        <ol className="list-decimal list-inside space-y-3 text-gray-700">
                          <li>
                            <span className="font-medium text-amber-700">17.1 प्रस्ताव प्रस्तुति:</span>
                            <p className="ml-6 mt-1">
                              संशोधन प्रस्ताव लिखित रूप में महासचिव को प्रस्तुत किया जाना चाहिए, जिसमें प्रस्तावित परिवर्तन एवं उसके औचित्य का विस्तृत विवरण सम्मिलित हो।
                            </p>
                          </li>
                          
                          <li>
                            <span className="font-medium text-amber-700">17.2 प्रारंभिक समीक्षा:</span>
                            <p className="ml-6 mt-1">
                              प्रस्ताव की प्राप्ति के पश्चात् अध्यक्ष, संस्थापक अध्यक्ष एवं महासचिव द्वारा प्रारंभिक समीक्षा की जाएगी, जिसमें प्रस्ताव की 
                              व्यावहारिकता, वैधता एवं ट्रस्ट के उद्देश्यों के अनुरूपता का आकलन किया जाएगा।
                            </p>
                          </li>
                          
                          <li>
                            <span className="font-medium text-amber-700">17.3 मंडल विचार-विमर्श:</span>
                            <p className="ml-6 mt-1">
                              यदि प्रारंभिक समीक्षा में प्रस्ताव उपयुक्त पाया जाता है, तो उसे अगली नियमित अथवा विशेष मंडल बैठक में प्रस्तुत किया जाएगा। 
                              जहां प्रत्येक सदस्य को अपने विचार व्यक्त करने का अवसर प्रदान किया जाएगा।
                            </p>
                          </li>
                          
                          <li>
                            <span className="font-medium text-amber-700">17.4 संशोधन अनुमोदन:</span>
                            <p className="ml-6 mt-1">
                              नीति संशोधन के अनुमोदन हेतु न्यूनतम चार (4) अधिकृत सदस्यों की उपस्थिति में बहुमत की आवश्यकता होगी। 
                              महत्वपूर्ण नीतिगत परिवर्तनों हेतु दो-तिहाई (2/3) बहुमत अनिवार्य है।
                            </p>
                          </li>
                          
                          <li>
                            <span className="font-medium text-amber-700">17.5 दस्तावेजीकरण एवं अधिसूचना:</span>
                            <p className="ml-6 mt-1">
                              अनुमोदित संशोधन को औपचारिक रूप से अभिलिखित किया जाएगा, संशोधित नीति दस्तावेज़ तैयार किया जाएगा, 
                              एवं सभी संबंधित पक्षों को अधिसूचित किया जाएगा। सभी संशोधनों की तिथि एवं विवरण का अभिलेख रखा जाएगा।
                            </p>
                          </li>
                        </ol>
                      </div>
                      
                      <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
                        <h3 className="text-lg font-semibold text-amber-800 mb-2">धारा 18: आपातकालीन संशोधन</h3>
                        <p className="text-gray-700 mb-3">
                          18.1 आपात परिस्थितियों में, जहां विलंब ट्रस्ट के हितों को हानि पहुंचा सकता है, अध्यक्ष एवं संस्थापक अध्यक्ष संयुक्त रूप से 
                          अस्थायी नीतिगत परिवर्तन कर सकते हैं, जो अगली मंडल बैठक तक प्रभावी रहेंगे।
                        </p>
                        <p className="text-gray-700 mb-3">
                          18.2 ऐसे अस्थायी परिवर्तनों को नियमित करने हेतु 30 दिवसों के भीतर एक मंडल बैठक आयोजित की जानी चाहिए, 
                          जहां उन्हें औपचारिक अनुमोदन प्राप्त करना होगा अथवा निरस्त किया जा सकता है।
                        </p>
                      </div>
                      
                      <div className="bg-white border border-amber-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-amber-800 mb-3">धारा 19: नीति व्याख्या एवं विवाद समाधान</h3>
                        <div className="space-y-3 text-gray-700">
                          <p>
                            19.1 <strong>व्याख्या प्राधिकार:</strong> इन नीतियों की व्याख्या का अंतिम अधिकार मंडल के पास है। किसी भी अस्पष्टता 
                            अथवा विरोधाभास की स्थिति में, अध्यक्ष एवं संस्थापक अध्यक्ष द्वारा संयुक्त निर्णय अधिभावी होगा।
                          </p>
                          <p>
                            19.2 <strong>विवाद समाधान:</strong> नीतियों की व्याख्या अथवा कार्यान्वयन से संबंधित विवादों का समाधान पहले मंडल द्वारा 
                            आंतरिक रूप से किया जाएगा। यदि आंतरिक समाधान संभव नहीं है, तो मामले को एक मान्यता प्राप्त मध्यस्थ के समक्ष प्रस्तुत किया जाएगा।
                          </p>
                          <p>
                            19.3 <strong>अपरिवर्तनीय प्रावधान:</strong> निम्नलिखित प्रावधान अपरिवर्तनीय हैं एवं किसी भी संशोधन प्रक्रिया के अधीन नहीं होंगे:
                          </p>
                          <ul className="list-disc list-inside ml-6 space-y-1">
                            <li>ट्रस्ट के मूल धर्मार्थ एवं मानवीय उद्देश्य;</li>
                            <li>संस्थापक अध्यक्ष का आजीवन पद (सिवाय स्वेच्छा से त्यागपत्र अथवा गंभीर कदाचार के कारण पदच्युति के);</li>
                            <li>न्यूनतम चार (4) अधिकृत सदस्यों की मंडल में उपस्थिति की आवश्यकता;</li>
                            <li>ट्रस्ट संपत्ति एवं संसाधनों के केवल धर्मार्थ उद्देश्यों हेतु उपयोग का प्रावधान।</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                        <h3 className="text-lg font-semibold text-orange-800 mb-3">धारा 20: अंतिम प्रावधान</h3>
                        <p className="text-gray-700 mb-3">
                          20.1 इस दस्तावेज में निहित सभी नीतियां एवं प्रावधान माँ भगवती चैरिटेबल ट्रस्ट के सभी अधिकृत सदस्यों, कर्मचारियों, 
                          स्वयंसेवकों एवं संबद्ध व्यक्तियों पर बाध्यकारी हैं।
                        </p>
                        <p className="text-gray-700 mb-3">
                          20.2 यह नीति दस्तावेज़ तत्काल प्रभाव से लागू माना जाएगा एवं तब तक प्रभावी रहेगा जब तक मंडल द्वारा औपचारिक रूप से संशोधित, 
                          परिवर्तित अथवा निरस्त न किया जाए।
                        </p>
                        <p className="text-gray-700 font-semibold">
                          20.3 इन नीतियों के अंतर्गत लिए गए सभी निर्णय एवं कार्रवाइयां भारतीय गणराज्य के संविधान, 
                          धर्मार्थ एवं धार्मिक ट्रस्ट अधिनियमों तथा अन्य लागू विधानों के अनुपालन में होनी चाहिए।
                        </p>
                      </div>
                      
                      <div className="mt-8 text-center border-t border-amber-200 pt-6">
                        <p className="text-amber-800 font-semibold mb-2">
                          इस नीति दस्तावेज़ को दिनांक 29 अप्रैल, 2024 को आयोजित मंडल बैठक में अनुमोदित किया गया है।
                        </p>
                        <div className="grid grid-cols-2 gap-8 mt-6 max-w-2xl mx-auto">
                          {/* <div className="text-center">
                            <p className="font-medium text-amber-800">श्री दिग्विजय सिंह तोमर</p>
                            <p className="text-gray-700">अध्यक्ष</p>
                          </div> */}
                          <div className="text-center">
                            <p className="font-medium text-amber-800">श्री नरेंद्र कुमार</p>
                            <p className="text-gray-700">संस्थापक अध्यक्ष</p>
                          </div>
                          <div className="text-center">
                            <p className="font-medium text-amber-800">श्री सूरज सिंह</p>
                            <p className="text-gray-700">महासचिव</p>
                          </div>
                          <div className="text-center">
                            <p className="font-medium text-amber-800">श्री लव कुश</p>
                            <p className="text-gray-700">कोषाध्यक्ष</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustPolicy;