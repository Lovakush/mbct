import React, { useState } from 'react';
import { Shield, Users, AlertTriangle, FileText, Book, Gavel, Key, Lock, CoinsIcon, Banknote } from 'lucide-react';

const SimpleTrustPolicy = () => {
  const [activeSection, setActiveSection] = useState('basic');
  
  const sections = [
    { id: 'basic', title: 'मूल नियम', icon: <Shield /> },
    { id: 'board', title: 'अधिकृत सदस्य', icon: <Users /> },
    { id: 'decision', title: 'निर्णय प्रक्रिया', icon: <Gavel /> },
    { id: 'finance', title: 'धन प्रबंधन', icon: <Banknote /> },
    { id: 'removal', title: 'निष्कासन नियम', icon: <AlertTriangle /> }
  ];

  // Current leadership team
  const leadershipTeam = [
    {
      name: "श्री दिग्विजय सिंह तोमर",
      position: "Chairman",
      role: "अध्यक्ष"
    },
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 pb-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16 md:py-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">माँ भगवती चैरिटेबल ट्रस्ट</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-amber-100">
            ट्रस्ट के नियम और प्रावधान (सरल भाषा में)
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
                {/* Basic Rules Section */}
                {activeSection === 'basic' && (
                  <div className="space-y-8">
                    <div className="flex items-center space-x-3 border-b border-amber-200 pb-3">
                      <Shield className="h-7 w-7 text-amber-500" />
                      <h2 className="text-2xl font-bold text-amber-800">मूल नियम</h2>
                    </div>
                    
                    <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
                      <h3 className="text-xl font-bold text-amber-800 mb-4">हमारा संकल्प</h3>
                      <p className="text-gray-700 mb-6 text-lg">
                        माँ भगवती चैरिटेबल ट्रस्ट का हर सदस्य ईमानदारी, पारदर्शिता और सेवा भाव के साथ कार्य करने के लिए प्रतिबद्ध है। 
                        हम समाज की भलाई के लिए काम करते हैं और किसी भी गलत काम या भ्रष्टाचार को बर्दाश्त नहीं करते हैं।
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-amber-700">महत्वपूर्ण मूल सिद्धांत</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="bg-amber-100 p-2 rounded-full mr-3">
                              <span className="text-amber-700 text-xl font-bold">1</span>
                            </div>
                            <h4 className="font-bold text-amber-800">सामूहिक निर्णय</h4>
                          </div>
                          <p className="text-gray-700">
                            ट्रस्ट में कोई भी बड़ा या मध्यम निर्णय अकेले नहीं लिया जा सकता। हर महत्वपूर्ण निर्णय के लिए अधिकृत सदस्यों 
                            की सहमति आवश्यक है। कोई भी व्यक्ति अपनी मर्जी से ट्रस्ट का धन या संपत्ति का उपयोग नहीं कर सकता।
                          </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="bg-amber-100 p-2 rounded-full mr-3">
                              <span className="text-amber-700 text-xl font-bold">2</span>
                            </div>
                            <h4 className="font-bold text-amber-800">पारदर्शिता</h4>
                          </div>
                          <p className="text-gray-700">
                            हर निर्णय, हर खर्च और हर गतिविधि का पूरा रिकॉर्ड रखा जाता है। सभी वित्तीय लेनदेन का हिसाब-किताब स्पष्ट 
                            और पारदर्शी होना चाहिए। सभी दस्तावेज सदस्यों द्वारा जांच के लिए उपलब्ध रहेंगे।
                          </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="bg-amber-100 p-2 rounded-full mr-3">
                              <span className="text-amber-700 text-xl font-bold">3</span>
                            </div>
                            <h4 className="font-bold text-amber-800">कार्यकाल</h4>
                          </div>
                          <p className="text-gray-700">
                            सभी अधिकृत सदस्यों का कार्यकाल 2 साल का होता है। हर 2 साल में पदों का चुनाव ट्रस्ट के मंडल द्वारा 
                            किया जाएगा। ये व्यवस्था सत्ता के दुरुपयोग को रोकने के लिए है।
                          </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="bg-amber-100 p-2 rounded-full mr-3">
                              <span className="text-amber-700 text-xl font-bold">4</span>
                            </div>
                            <h4 className="font-bold text-amber-800">जवाबदेही</h4>
                          </div>
                          <p className="text-gray-700">
                            हर अधिकृत सदस्य अपने कामों के लिए जवाबदेह है। नियमों का उल्लंघन करने वाले को तुरंत पद से हटाया जा 
                            सकता है और उसकी सुरक्षा राशि जब्त की जा सकती है। गंभीर मामलों में कानूनी कार्रवाई भी की जा सकती है।
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                      <h3 className="text-lg font-bold text-red-800 mb-2">याद रखें</h3>
                      <p className="text-gray-700">
                        माँ भगवती चैरिटेबल ट्रस्ट जनता के विश्वास पर चलने वाली संस्था है। किसी भी प्रकार का अनैतिक या अनुचित कार्य 
                        न केवल ट्रस्ट के नियमों के खिलाफ है, बल्कि समाज और देवी माँ के प्रति अपराध भी है। हम ऐसा कोई भी कार्य 
                        बर्दाश्त नहीं करेंगे जो ट्रस्ट के उद्देश्यों और मूल्यों के विरुद्ध हो।
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Board Members Section */}
                {activeSection === 'board' && (
                  <div className="space-y-8">
                    <div className="flex items-center space-x-3 border-b border-amber-200 pb-3">
                      <Users className="h-7 w-7 text-amber-500" />
                      <h2 className="text-2xl font-bold text-amber-800">अधिकृत सदस्य</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-lg text-gray-700">
                        ट्रस्ट के कामकाज को सुचारू रूप से चलाने के लिए चार प्रमुख अधिकृत सदस्य होते हैं। इन चारों के बिना कोई भी 
                        महत्वपूर्ण निर्णय नहीं लिया जा सकता और सभी बड़े फैसलों के लिए इनकी सहमति आवश्यक है।
                      </p>
                      
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
                        {leadershipTeam.map((member, index) => (
                          <div key={index} className="bg-amber-50 p-5 rounded-lg border border-amber-100 shadow-sm hover:shadow-md transition-all">
                            <h4 className="font-bold text-amber-800 text-lg">{member.name}</h4>
                            <p className="text-amber-600">{member.position}</p>
                            <p className="text-lg text-amber-500 font-semibold">{member.role}</p>
                            <div className="h-1 w-12 bg-amber-400 mt-3"></div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="space-y-6 mt-6">
                        <h3 className="text-xl font-semibold text-amber-700">प्रमुख अधिकृत सदस्यों की भूमिका</h3>
                        
                        <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
                          <h4 className="font-bold text-amber-800 mb-3">अध्यक्ष (Chairman)</h4>
                          <ul className="list-disc ml-6 space-y-1 text-gray-700">
                            <li>ट्रस्ट का प्रतिनिधित्व करना और सभी बैठकों की अध्यक्षता करना</li>
                            <li>समाज में ट्रस्ट की छवि बनाना और महत्वपूर्ण लोगों से संपर्क बनाए रखना</li>
                            <li>सभी प्रमुख दस्तावेजों पर हस्ताक्षर करना</li>
                            <li>ट्रस्ट की दीर्घकालिक योजनाओं के लिए मार्गदर्शन करना</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
                          <h4 className="font-bold text-amber-800 mb-3">संस्थापक अध्यक्ष (Tenured Chairman)</h4>
                          <ul className="list-disc ml-6 space-y-1 text-gray-700">
                            <li>ट्रस्ट के मूल उद्देश्यों और सिद्धांतों की सुरक्षा सुनिश्चित करना</li>
                            <li>प्रमुख निर्णयों में परामर्श देना और अध्यक्ष के साथ मिलकर काम करना</li>
                            <li>नई पहल और परिवर्तनों के लिए अपना अनुमोदन देना</li>
                            <li>ट्रस्ट के वरिष्ठ सलाहकार के रूप में सेवा करना</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
                          <h4 className="font-bold text-amber-800 mb-3">महासचिव (General Secretary)</h4>
                          <ul className="list-disc ml-6 space-y-1 text-gray-700">
                            <li>ट्रस्ट के दैनिक प्रशासन को संभालना और समस्त कार्यों का समन्वय करना</li>
                            <li>बैठकों का आयोजन करना और उनका रिकॉर्ड रखना</li>
                            <li>सरकारी विभागों और अन्य संस्थाओं से पत्राचार करना</li>
                            <li>ट्रस्ट की योजनाओं और गतिविधियों का क्रियान्वयन सुनिश्चित करना</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
                          <h4 className="font-bold text-amber-800 mb-3">कोषाध्यक्ष (Treasurer)</h4>
                          <ul className="list-disc ml-6 space-y-1 text-gray-700">
                            <li>ट्रस्ट के सभी वित्तीय मामलों की देखरेख करना</li>
                            <li>आय और व्यय का हिसाब रखना और नियमित वित्तीय रिपोर्ट तैयार करना</li>
                            <li>बैंक खातों का प्रबंधन और वित्तीय लेनदेन पर हस्ताक्षर करना</li>
                            <li>बजट तैयार करना और वित्तीय नियोजन में सहायता करना</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500 mt-4">
                        <h3 className="text-lg font-semibold text-amber-800 mb-2">कार्यकाल और चुनाव</h3>
                        <p className="text-gray-700 mb-3">
                          <strong>कार्यकाल:</strong> सभी अधिकृत सदस्यों का कार्यकाल 2 साल का होगा। कोई भी व्यक्ति अधिकतम 2 कार्यकाल (यानी 4 वर्ष) 
                          लगातार एक ही पद पर रह सकता है।
                        </p>
                        <p className="text-gray-700 mb-3">
                          <strong>चुनाव प्रक्रिया:</strong> हर 2 साल में ट्रस्ट के मंडल द्वारा चुनाव आयोजित किया जाएगा। चुनाव प्रक्रिया में न्यूनतम 
                          7 सदस्यों की उपस्थिति अनिवार्य है। चुनाव में बहुमत से निर्णय लिया जाएगा।
                        </p>
                        <p className="text-gray-700">
                          <strong>अपवाद:</strong> संस्थापक अध्यक्ष का पद स्थायी है, जब तक कि वे स्वयं त्यागपत्र न दें या गंभीर कदाचार के कारण 
                          उन्हें पद से हटाया न जाए (जिसके लिए तीन-चौथाई बहुमत आवश्यक है)।
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Decision Making Section */}
                {activeSection === 'decision' && (
                  <div className="space-y-8">
                    <div className="flex items-center space-x-3 border-b border-amber-200 pb-3">
                      <Gavel className="h-7 w-7 text-amber-500" />
                      <h2 className="text-2xl font-bold text-amber-800">निर्णय प्रक्रिया</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-lg text-gray-700">
                        ट्रस्ट में कोई भी अकेला व्यक्ति महत्वपूर्ण निर्णय नहीं ले सकता। यह सुनिश्चित करने के लिए कि कोई गलत काम न हो, 
                        निर्णय प्रक्रिया को तीन स्तरों में बांटा गया है। हर निर्णय के लिए अलग-अलग अनुमोदन की आवश्यकता होती है।
                      </p>
                      
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg p-6 text-white">
                        <h3 className="text-xl font-bold mb-4">बड़े निर्णय (सभी अधिकृत सदस्यों का अनुमोदन आवश्यक)</h3>
                        <div className="space-y-4">
                          <p>
                            निम्नलिखित निर्णयों के लिए सभी चार अधिकृत सदस्यों (अध्यक्ष, संस्थापक अध्यक्ष, महासचिव और कोषाध्यक्ष) की उपस्थिति और 
                            अनुमोदन अनिवार्य है:
                          </p>
                          <ul className="list-disc ml-6 space-y-2">
                            <li className="text-white">₹1,00,000 (एक लाख रुपये) से अधिक का कोई भी खर्च</li>
                            <li className="text-white">ट्रस्ट की संपत्ति का क्रय, विक्रय या किराया</li>
                            <li className="text-white">नए सदस्यों की नियुक्ति या किसी सदस्य को निकालना</li>
                            <li className="text-white">ट्रस्ट के नियमों में संशोधन</li>
                            <li className="text-white">बैंक खाते खोलना या बंद करना</li>
                            <li className="text-white">किसी संस्था या व्यक्ति के साथ लंबी अवधि का समझौता</li>
                            <li className="text-white">नई योजना या प्रोजेक्ट की शुरुआत</li>
                          </ul>
                          <p className="mt-2 font-medium">
                            इन निर्णयों के लिए एक औपचारिक बैठक आयोजित की जाएगी और सभी विवरण लिखित में दर्ज किए जाएंगे। 
                            सभी अधिकृत सदस्यों के हस्ताक्षर आवश्यक हैं।
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-amber-800 mb-4">मध्यम निर्णय (न्यूनतम दो अधिकृत सदस्यों का अनुमोदन आवश्यक)</h3>
                        <div className="space-y-4 text-gray-700">
                          <p>
                            निम्नलिखित निर्णयों के लिए कम से कम दो अधिकृत सदस्यों का अनुमोदन आवश्यक है, जिसमें से एक अध्यक्ष या 
                            संस्थापक अध्यक्ष होना चाहिए:
                          </p>
                          <ul className="list-disc ml-6 space-y-2">
                            <li>₹25,000 से ₹1,00,000 के बीच का खर्च</li>
                            <li>मौजूदा कार्यक्रमों या योजनाओं में बदलाव</li>
                            <li>अल्पकालिक समझौते या अनुबंध</li>
                            <li>कर्मचारियों की नियुक्ति या सेवा समाप्ति</li>
                            <li>उपसमिति का गठन</li>
                          </ul>
                          <p className="mt-2 font-medium">
                            इन निर्णयों का विवरण एक रजिस्टर में दर्ज किया जाएगा और अगली बोर्ड मीटिंग में इसकी जानकारी दी जाएगी। 
                            दोनों अधिकृत सदस्यों के हस्ताक्षर आवश्यक हैं।
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-amber-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-amber-800 mb-4">छोटे निर्णय (एक अधिकृत सदस्य ले सकता है)</h3>
                        <div className="space-y-4 text-gray-700">
                          <p>
                            निम्नलिखित मामलों में एक अधिकृत सदस्य अपने स्तर पर निर्णय ले सकता है:
                          </p>
                          <ul className="list-disc ml-6 space-y-2">
                            <li>₹25,000 से कम का खर्च (जो मंजूर बजट के अंतर्गत हो)</li>
                            <li>दैनिक प्रशासनिक कार्य</li>
                            <li>नियमित पत्राचार</li>
                            <li>स्वीकृत कार्यक्रमों का आयोजन</li>
                          </ul>
                          <p className="mt-2 font-medium">
                            लेकिन इन निर्णयों का भी रिकॉर्ड रखा जाएगा और मासिक बैठक में इसकी सूचना दी जाएगी। किसी भी स्थिति में 
                            व्यक्तिगत लाभ के लिए अधिकारों का दुरुपयोग नहीं किया जा सकता।
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                        <h3 className="text-lg font-semibold text-red-800 mb-2">महत्वपूर्ण सावधानियां</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>कोई भी अधिकृत सदस्य ऐसा निर्णय नहीं ले सकता जिसमें उसका व्यक्तिगत हित जुड़ा हो</li>
                          <li>हर निर्णय का स्पष्ट दस्तावेजीकरण होना चाहिए</li>
                          <li>निर्णय प्रक्रिया का उल्लंघन करने वाले किसी भी सदस्य के खिलाफ तुरंत कार्रवाई की जाएगी</li>
                          <li>यदि कोई सदस्य इन नियमों को दरकिनार कर अपनी मनमानी करता है, तो उसे तुरंत पद से हटाया जा सकता है</li>
                          <li>ऐसे निर्णय जो इस प्रक्रिया का पालन नहीं करते, वे अमान्य माने जाएंगे</li>
                        </ul>
                      </div>
                      
                      <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
                        <h3 className="text-lg font-semibold text-amber-800 mb-2">आपातकालीन निर्णय</h3>
                        <p className="text-gray-700 mb-3">
                          किसी आपात स्थिति में, जहां तत्काल निर्णय की आवश्यकता हो और सभी अधिकृत सदस्यों से संपर्क करना संभव न हो, अध्यक्ष या संस्थापक 
                          अध्यक्ष आवश्यक निर्णय ले सकते हैं, लेकिन:
                        </p>
                        <ul className="list-disc ml-6 space-y-1 text-gray-700">
                          <li>इस निर्णय की जानकारी 24 घंटे के भीतर सभी अधिकृत सदस्यों को देनी होगी</li>
                          <li>7 दिनों के भीतर एक विशेष बैठक बुलाकर इस निर्णय पर चर्चा करनी होगी</li>
                          <li>इस अधिकार का दुरुपयोग करने पर गंभीर कार्रवाई की जाएगी</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Finance Management Section */}
                {activeSection === 'finance' && (
                  <div className="space-y-8">
                    <div className="flex items-center space-x-3 border-b border-amber-200 pb-3">
                      <Banknote className="h-7 w-7 text-amber-500" />
                      <h2 className="text-2xl font-bold text-amber-800">धन प्रबंधन</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-lg text-gray-700">
                        ट्रस्ट के धन का प्रबंधन सबसे महत्वपूर्ण और संवेदनशील विषय है। इसे सख्त नियंत्रण में रखना जरूरी है ताकि हर पैसे का 
                        सही उपयोग हो और किसी भी प्रकार के दुरुपयोग को रोका जा सके।
                      </p>
                      
                      <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
                        <h3 className="text-xl font-bold text-amber-800 mb-4">बैंक खाते का संचालन</h3>
                        <ul className="list-disc ml-6 space-y-2 text-gray-700">
                          <li>ट्रस्ट का हर बैंक खाता <strong>संयुक्त संचालन</strong> के अधीन होगा</li>
                          <li>हर चेक या ऑनलाइन भुगतान के लिए कम से कम दो अधिकृत सदस्यों के हस्ताक्षर/अनुमोदन आवश्यक हैं</li>
                          <li>इनमें से एक हस्ताक्षरकर्ता कोषाध्यक्ष होना अनिवार्य है</li>
                          <li>₹1,00,000 से अधिक के भुगतान के लिए तीन हस्ताक्षर आवश्यक हैं (कोषाध्यक्ष + अध्यक्ष/संस्थापक अध्यक्ष + महासचिव)</li>
                        </ul>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
                          <h3 className="text-xl font-bold text-amber-800 mb-4">दान और चंदा</h3>
                          <ul className="list-disc ml-6 space-y-2 text-gray-700">
                            <li>सभी दान और चंदे की रसीद काटी जाएगी</li>
                            <li>हर रसीद पर एक यूनिक नंबर होगा</li>
                            <li>सभी दान सीधे ट्रस्ट के बैंक खाते में जमा किए जाएंगे</li>
                            <li>₹2,000 से अधिक के नकद दान को 3 दिन के अंदर बैंक में जमा करना होगा</li>
                            <li>हर महीने दान का पूरा हिसाब प्रस्तुत करना होगा</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
                          <h3 className="text-xl font-bold text-amber-800 mb-4">खर्च और भुगतान</h3>
                          <ul className="list-disc ml-6 space-y-2 text-gray-700">
                            <li>हर खर्च का उचित बिल/वाउचर होना चाहिए</li>
                            <li>₹5,000 से अधिक के खर्च के लिए पहले से अनुमोदन लेना जरूरी है</li>
                            <li>नकद भुगतान को न्यूनतम रखा जाएगा</li>
                            <li>अधिकतम भुगतान चेक या ऑनलाइन ट्रांसफर से होगा</li>
                            <li>किसी भी खर्च का कारण स्पष्ट रूप से लिखा जाना चाहिए</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
                        <h3 className="text-xl font-bold text-amber-800 mb-4">वित्तीय रिपोर्टिंग</h3>
                        <ul className="list-disc ml-6 space-y-2 text-gray-700">
                          <li>हर महीने आय-व्यय का विवरण तैयार किया जाएगा</li>
                          <li>हर तिमाही में बैंक खाते का मिलान (reconciliation) किया जाएगा</li>
                          <li>हर वर्ष एक विस्तृत आर्थिक रिपोर्ट प्रकाशित की जाएगी</li>
                          <li>हर दो वर्ष में एक बाहरी ऑडिटर द्वारा ट्रस्ट के खातों का ऑडिट कराया जाएगा</li>
                          <li>सभी वित्तीय रिकॉर्ड कम से कम 7 वर्षों तक सुरक्षित रखे जाएंगे</li>
                        </ul>
                      </div>
                      
                      <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
                        <h3 className="text-lg font-semibold text-amber-800 mb-2">सुरक्षा जमा राशि</h3>
                        <p className="text-gray-700 mb-3">
                          हर अधिकृत सदस्य को अपनी जिम्मेदारी संभालने से पहले एक सुरक्षा राशि जमा करनी होगी:
                        </p>
                        <ul className="list-disc ml-6 space-y-1 text-gray-700">
                          <li>अध्यक्ष: ₹1,00,000</li>
                          <li>महासचिव: ₹50,000</li>
                          <li>कोषाध्यक्ष: ₹50,000</li>
                          <li>अन्य महत्वपूर्ण सदस्य: ₹25,000</li>
                        </ul>
                        <p className="mt-3 text-gray-700">
                          <strong>नोट:</strong> यदि कोई सदस्य गलत काम में शामिल पाया जाता है या ट्रस्ट को आर्थिक नुकसान पहुंचाता है, 
                          तो यह राशि जब्त कर ली जाएगी। सम्मानजनक इस्तीफे पर यह राशि लौटा दी जाएगी।
                        </p>
                      </div>
                      
                      <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                        <h3 className="text-lg font-semibold text-red-800 mb-2">वित्तीय अनियमितता पर कड़ी कार्रवाई</h3>
                        <p className="text-gray-700 mb-3">
                          किसी भी तरह की वित्तीय अनियमितता को बर्दाश्त नहीं किया जाएगा। ऐसे मामलों में:
                        </p>
                        <ul className="list-disc ml-6 space-y-1 text-gray-700">
                          <li>संबंधित व्यक्ति को तुरंत पद से हटाया जाएगा</li>
                          <li>उसकी सुरक्षा जमा राशि जब्त की जाएगी</li>
                          <li>गलत तरीके से लिए गए सभी धन की वसूली की जाएगी</li>
                          <li>गंभीर मामलों में कानूनी कार्रवाई की जाएगी, जिसमें पुलिस में प्राथमिकी दर्ज कराना शामिल है</li>
                          <li>ऐसे व्यक्ति को ट्रस्ट के किसी भी पद पर दोबारा नियुक्त नहीं किया जाएगा</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Removal Rules Section */}
                {activeSection === 'removal' && (
                  <div className="space-y-8">
                    <div className="flex items-center space-x-3 border-b border-amber-200 pb-3">
                      <AlertTriangle className="h-7 w-7 text-amber-500" />
                      <h2 className="text-2xl font-bold text-amber-800">निष्कासन नियम</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-lg text-gray-700">
                        ट्रस्ट के नियमों का उल्लंघन करने वाले, गलत काम करने वाले या ट्रस्ट के हितों के विरुद्ध काम करने वाले किसी भी सदस्य के 
                        खिलाफ कड़ी कार्रवाई की जाएगी। यह सुनिश्चित करता है कि ट्रस्ट की साख और संपत्ति की रक्षा हो सके।
                      </p>
                      
                      <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-lg p-6 border border-red-100 shadow-sm">
                        <h3 className="text-xl font-semibold text-amber-800 mb-4">निष्कासन के आधार</h3>
                        
                        <div className="space-y-4">
                          <div className="bg-white p-5 rounded border-l-4 border-red-500">
                            <h4 className="font-bold text-red-800 mb-2">गंभीर उल्लंघन</h4>
                            <ul className="space-y-1 text-gray-700">
                              <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>ट्रस्ट के धन या संपत्ति का दुरुपयोग या गबन</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>जालसाजी, धोखाधड़ी या किसी भी प्रकार की अवैध गतिविधि</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>ट्रस्ट की संपत्ति या प्रतिष्ठा को जानबूझकर नुकसान पहुंचाना</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>गोपनीय जानकारी को अनधिकृत तरीके से साझा करना</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>यौन उत्पीड़न या किसी भी प्रकार का भेदभाव</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-5 rounded border-l-4 border-amber-500">
                            <h4 className="font-bold text-amber-800 mb-2">प्रदर्शन संबंधी कारण</h4>
                            <ul className="space-y-1 text-gray-700">
                              <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>अपनी जिम्मेदारियों को बार-बार पूरा न करना</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>चेतावनी के बावजूद ट्रस्ट के नियमों का उल्लंघन करना</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>बिना सूचना के बैठकों से लगातार अनुपस्थित रहना</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>ट्रस्ट के हितों के विरुद्ध काम करना</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 border border-amber-200 shadow-sm">
                        <h3 className="text-lg font-semibold text-amber-800 mb-3">निष्कासन प्रक्रिया</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-amber-700 mb-2">1. जांच और आरोप</h4>
                            <p className="text-gray-700">
                              किसी भी सदस्य के खिलाफ शिकायत या आरोप मिलने पर, अध्यक्ष और संस्थापक अध्यक्ष द्वारा प्रारंभिक जांच की जाएगी। 
                              यदि आरोप प्रथम दृष्टया सही लगते हैं, तो आरोपित सदस्य को लिखित में सूचित किया जाएगा।
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-amber-700 mb-2">2. सुनवाई का अवसर</h4>
                            <p className="text-gray-700">
                              आरोपित सदस्य को अपना पक्ष रखने का मौका दिया जाएगा। उसे लिखित या मौखिक रूप से अपनी सफाई पेश करने के लिए 
                              7 दिन का समय दिया जाएगा (गंभीर मामलों को छोड़कर जहां तत्काल कार्रवाई आवश्यक हो)।
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-amber-700 mb-2">3. मंडल द्वारा निर्णय</h4>
                            <p className="text-gray-700">
                              सभी चार अधिकृत सदस्यों की विशेष बैठक में मामले पर विचार किया जाएगा। निष्कासन के लिए आवश्यक बहुमत:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
                              <li>गंभीर उल्लंघनों के लिए: साधारण बहुमत (50% से अधिक)</li>
                              <li>प्रदर्शन संबंधी कारणों के लिए: दो-तिहाई बहुमत (66% से अधिक)</li>
                              <li>संस्थापक अध्यक्ष के मामले में: तीन-चौथाई बहुमत (75% से अधिक)</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-amber-700 mb-2">4. निष्कासन और परिणाम</h4>
                            <p className="text-gray-700">
                              निष्कासन के बाद:
                            </p>
                            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
                              <li>निष्कासित सदस्य को औपचारिक पत्र दिया जाएगा</li>
                              <li>उसकी सुरक्षा जमा राशि जब्त की जाएगी</li>
                              <li>सभी अधिकार और दस्तावेज तुरंत वापस लिए जाएंगे</li>
                              <li>गंभीर मामलों में कानूनी कार्रवाई शुरू की जाएगी</li>
                              <li>रिक्त पद को अस्थायी रूप से भरा जाएगा जब तक अगला चुनाव न हो</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
                        <h3 className="text-lg font-semibold text-amber-800 mb-2">तत्काल निलंबन</h3>
                        <p className="text-gray-700 mb-3">
                          गंभीर मामलों में, जहां तत्काल कार्रवाई आवश्यक हो (जैसे ट्रस्ट के धन का गबन या आपराधिक गतिविधि), अध्यक्ष और 
                          संस्थापक अध्यक्ष संयुक्त रूप से किसी सदस्य को तत्काल निलंबित कर सकते हैं।
                        </p>
                        <p className="text-gray-700">
                          निलंबन के 15 दिनों के भीतर पूर्ण सुनवाई और निर्णय होना अनिवार्य है। इस अवधि के दौरान, निलंबित सदस्य ट्रस्ट 
                          के किसी भी कार्य या संपत्ति से संबंधित कोई भी काम नहीं कर सकता।
                        </p>
                      </div>
                      
                      <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                        <h3 className="text-lg font-semibold text-red-800 mb-2">कानूनी कार्रवाई</h3>
                        <p className="text-gray-700">
                          ट्रस्ट अपने हितों की रक्षा के लिए निम्नलिखित कानूनी कार्रवाई कर सकता है:
                        </p>
                        <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
                          <li>धन या संपत्ति के दुरुपयोग के मामले में आपराधिक मुकदमा दर्ज कराना</li>
                          <li>धोखाधड़ी, जालसाजी या आपराधिक विश्वासघात के लिए पुलिस में प्राथमिकी (FIR) दर्ज कराना</li>
                          <li>नुकसान की भरपाई के लिए दीवानी मुकदमा</li>
                          <li>ट्रस्ट की प्रतिष्ठा को बदनाम करने के मामले में मानहानि का मुकदमा</li>
                        </ul>
                        <p className="mt-3 text-sm font-semibold text-red-700">
                          कोई भी व्यक्ति जो ट्रस्ट के साथ धोखाधड़ी या गबन करता है, वह न केवल ट्रस्ट के नियमों के तहत कार्रवाई का पात्र 
                          होगा, बल्कि भारतीय दंड संहिता के तहत भी आपराधिक कार्रवाई का सामना करेगा।
                        </p>
                      </div>
                      
                      <div className="mt-8 text-center border-t border-amber-200 pt-6">
                        <p className="text-amber-800 font-semibold mb-2">
                          ये नियम 29 अप्रैल, 2024 से प्रभावी हैं और सभी सदस्यों पर बाध्यकारी हैं।
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 max-w-3xl mx-auto">
                          <div className="text-center">
                            <p className="font-medium text-amber-800">श्री दिग्विजय सिंह तोमर</p>
                            <p className="text-gray-700">अध्यक्ष</p>
                          </div>
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

export default SimpleTrustPolicy;