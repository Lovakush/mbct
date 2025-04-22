import React, { useState } from 'react';
import { 
  Shield, 
  Users, 
  AlertTriangle, 
  FileText, 
  Gavel, 
  CoinsIcon, 
  ScrollText, 
  BookOpen, 
  ChevronRight, 
  CheckCircle2, 
  Key,
  UserCog,
  IndianRupee,
  DollarSign,
  LayoutDashboard
} from 'lucide-react';

const ModernMemberPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  
  const sections = [
    { id: 'introduction', title: 'नीति परिचय', icon: <ScrollText /> },
    { id: 'roles', title: 'सदस्य भूमिकाएँ', icon: <Users /> },
    { id: 'authority', title: 'अधिकार सीमा', icon: <Key /> },
    { id: 'financial', title: 'वित्तीय प्रोटोकॉल', icon: <IndianRupee /> },
    { id: 'conduct', title: 'आचार संहिता', icon: <BookOpen /> },
    { id: 'accountability', title: 'जवाबदेही', icon: <Gavel /> },
  ];

  // Leadership team data structure
  const leadershipTeam = [
    {
      name: "श्री दिग्विजय सिंह तोमर",
      position: "Chairman",
      role: "अध्यक्ष",
      authorities: ["ट्रस्ट का प्रतिनिधित्व", "महत्वपूर्ण दस्तावेजों पर हस्ताक्षर", "नीतिगत निर्णय"],
      responsibilities: ["नेतृत्व प्रदान करना", "बाहरी संस्थाओं से संबंध", "धार्मिक उद्देश्यों की पूर्ति"]
    },
    {
      name: "श्री नरेंद्र कुमार",
      position: "Tenured Chairman",
      role: "संस्थापक अध्यक्ष",
      authorities: ["संविधान संरक्षण", "विशेष अधिकार", "महत्वपूर्ण दस्तावेजों पर हस्ताक्षर"],
      responsibilities: ["मूल सिद्धांतों की रक्षा", "मार्गदर्शन प्रदान करना", "महत्वपूर्ण निर्णयों की समीक्षा"]
    },
    {
      name: "श्री सूरज सिंह",
      position: "General Secretary",
      role: "महासचिव",
      authorities: ["दैनिक प्रशासन", "₹25,000 तक के खर्च का अनुमोदन", "रिकॉर्ड प्रबंधन"],
      responsibilities: ["बैठकों का आयोजन", "दस्तावेज़ रखरखाव", "कार्यक्रमों का निष्पादन", "समन्वय"]
    },
    {
      name: "श्री लव कुश",
      position: "Treasurer",
      role: "कोषाध्यक्ष",
      authorities: ["खाता प्रबंधन", "₹10,000 तक के दैनिक खर्च", "वित्तीय निर्णय सलाह"],
      responsibilities: ["लेखा-जोखा", "आय-व्यय विवरण", "वित्तीय रिपोर्टिंग", "बजट तैयार करना"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 md:py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">माँ भगवती चैरिटेबल ट्रस्ट</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-indigo-100">
            सदस्य/पदाधिकारी नीति एवं आचार संहिता
          </p>
        </div>
        
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="none">
            <path d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" fill="#F3E8FF"/>
          </svg>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10 md:-mt-16 relative z-10">
        {/* Main content container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-purple-100">
          {/* Tab Navigation */}
          <div className="md:flex">
            <div className="md:w-1/4 bg-gradient-to-b from-indigo-50 to-purple-50">
              <nav className="sticky top-32 p-4">
                <div className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-md'
                          : 'text-gray-700 hover:bg-indigo-100'
                      }`}
                    >
                      <span className="mr-3">{section.icon}</span>
                      <span>{section.title}</span>
                    </button>
                  ))}
                </div>
                
                {/* Seal of Authority */}
                <div className="mt-8 p-4 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 border border-indigo-200 shadow-inner">
                  <div className="text-center">
                    <div className="inline-block rounded-full p-3 bg-white/50 mb-2">
                      <Shield className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="text-indigo-800 font-semibold">आधिकारिक अनुमोदन</h3>
                    <p className="text-indigo-600 text-sm mt-1">अप्रैल 29, 2024</p>
                    <div className="flex justify-center mt-2">
                      <div className="h-px w-16 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            
            <div className="md:w-3/4">
              <div className="p-6 md:p-10">
                {/* Introduction Section */}
                {activeSection === 'introduction' && (
                  <div className="space-y-8">
                    <div className="flex items-center space-x-3 border-b border-purple-200 pb-3">
                      <ScrollText className="h-7 w-7 text-purple-600" />
                      <h2 className="text-2xl font-bold text-purple-900">नीति परिचय</h2>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-6 shadow-inner">
                      <h3 className="text-xl font-bold text-purple-800 mb-4">उद्देश्य एवं दायरा</h3>
                      <p className="text-gray-700 mb-4">
                        माँ भगवती चैरिटेबल ट्रस्ट के सदस्य और पदाधिकारी ट्रस्ट के प्राण हैं। यह नीति दस्तावेज़ सभी सदस्यों और पदाधिकारियों के कर्तव्यों, अधिकारों, 
                        जिम्मेदारियों और आचरण के मानकों को परिभाषित करता है। इस नीति का उद्देश्य ट्रस्ट के सुचारु, पारदर्शी और न्यायसंगत संचालन को सुनिश्चित करना है।
                      </p>
                      <p className="text-gray-700">
                        यह नीति सभी मौजूदा और भविष्य के सदस्यों, पदाधिकारियों, स्वयंसेवकों और ट्रस्ट से जुड़े सभी व्यक्तियों पर लागू होती है। इस नीति का पालन 
                        करना सभी संबंधित व्यक्तियों के लिए अनिवार्य है और इसका उल्लंघन गंभीर परिणामों का कारण बन सकता है।
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-6 text-white">
                      <h3 className="text-xl font-bold mb-4">मूल सिद्धांत</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center">
                            <CheckCircle2 className="h-5 w-5 mr-2" />
                            सत्यनिष्ठा
                          </h4>
                          <p className="text-indigo-100">
                            सभी सदस्य ईमानदारी, नैतिकता और सत्यनिष्ठा के साथ कार्य करेंगे, और ट्रस्ट के हितों को अपने व्यक्तिगत हितों से ऊपर रखेंगे।
                          </p>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center">
                            <CheckCircle2 className="h-5 w-5 mr-2" />
                            पारदर्शिता
                          </h4>
                          <p className="text-indigo-100">
                            सभी निर्णय, वित्तीय लेनदेन और कार्यवाहियां पारदर्शी होंगी और सभी सदस्यों के लिए जानकारी सुलभ होगी।
                          </p>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center">
                            <CheckCircle2 className="h-5 w-5 mr-2" />
                            सामूहिक निर्णय
                          </h4>
                          <p className="text-indigo-100">
                            महत्वपूर्ण निर्णय सामूहिक रूप से लिए जाएंगे, और कोई भी व्यक्ति अकेले महत्वपूर्ण निर्णय लेने का अधिकारी नहीं होगा।
                          </p>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center">
                            <CheckCircle2 className="h-5 w-5 mr-2" />
                            जवाबदेही
                          </h4>
                          <p className="text-indigo-100">
                            प्रत्येक सदस्य अपने कार्यों और निर्णयों के लिए जवाबदेह होगा और अपनी जिम्मेदारियों का निर्वहन करने में विफलता के परिणाम भुगतेगा।
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white border border-purple-200 rounded-lg p-6 shadow-sm">
                      <h3 className="text-xl font-bold text-purple-800 mb-4">नीति आधार और स्रोत</h3>
                      <p className="text-gray-700 mb-4">
                        यह सदस्य नीति निम्नलिखित दस्तावेजों और सिद्धांतों पर आधारित है:
                      </p>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>ट्रस्ट मूल दस्तावेज़:</strong> माँ भगवती चैरिटेबल ट्रस्ट डीड एवं पंजीकरण दस्तावेज़</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>भारतीय कानून:</strong> भारतीय ट्रस्ट अधिनियम, धर्मार्थ और धार्मिक ट्रस्ट अधिनियम, सोसायटी पंजीकरण अधिनियम</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>अंतरराष्ट्रीय मानक:</strong> अंतरराष्ट्रीय गैर-लाभकारी संगठन मानक और अच्छे शासन सिद्धांत</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>शास्त्रीय मूल्य:</strong> हिंदू धर्मशास्त्र से मार्गदर्शित मूल्य और नैतिक सिद्धांत</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500 shadow-md">
                      <h3 className="text-xl font-bold text-purple-800 mb-4">प्रयोज्यता</h3>
                      <p className="text-gray-700 mb-4">
                        यह नीति निम्नलिखित व्यक्तियों पर लागू होती है:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <div className="bg-purple-200 rounded-full p-1 mr-3 mt-0.5">
                            <Users className="h-4 w-4 text-purple-700" />
                          </div>
                          <span>मंडल के सभी अधिकृत सदस्य और पदाधिकारी</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-purple-200 rounded-full p-1 mr-3 mt-0.5">
                            <Users className="h-4 w-4 text-purple-700" />
                          </div>
                          <span>सभी कार्यकारी और गैर-कार्यकारी सदस्य</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-purple-200 rounded-full p-1 mr-3 mt-0.5">
                            <Users className="h-4 w-4 text-purple-700" />
                          </div>
                          <span>नियमित स्वयंसेवक और ट्रस्ट के प्रतिनिधि</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-purple-200 rounded-full p-1 mr-3 mt-0.5">
                            <Users className="h-4 w-4 text-purple-700" />
                          </div>
                          <span>ट्रस्ट की समितियों और उप-समितियों के सदस्य</span>
                        </li>
                      </ul>
                      <p className="mt-4 text-purple-800 font-medium text-sm">
                        नोट: यह नीति ट्रस्ट के आंतरिक अनुमोदन की तिथि (29 अप्रैल, 2024) से प्रभावी है और अगले संशोधन तक लागू रहेगी।
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Member Roles Section */}
                {activeSection === 'roles' && (
                  <div className="space-y-8">
                    <div className="flex items-center space-x-3 border-b border-purple-200 pb-3">
                      <Users className="h-7 w-7 text-purple-600" />
                      <h2 className="text-2xl font-bold text-purple-900">सदस्य भूमिकाएँ एवं दायित्व</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-lg text-gray-700">
                        ट्रस्ट की सफलता और प्रभावशीलता के लिए विभिन्न भूमिकाओं की स्पष्ट परिभाषा आवश्यक है। प्रत्येक पद के अधिकार, जिम्मेदारियां और कर्तव्य 
                        निर्धारित हैं ताकि ट्रस्ट का संचालन सुचारु और व्यवस्थित ढंग से हो सके।
                      </p>
                      
                      {/* Leadership Team Cards */}
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {leadershipTeam.map((member, index) => (
                          <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-md overflow-hidden border border-indigo-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 text-white">
                              <h3 className="font-bold text-lg">{member.name}</h3>
                              <p className="text-indigo-100 text-sm">{member.position}</p>
                              <p className="text-xl font-semibold mt-1">{member.role}</p>
                            </div>
                            
                            <div className="p-4">
                              <div className="mb-3">
                                <h4 className="text-indigo-700 font-medium mb-2 flex items-center">
                                  <Key className="h-4 w-4 mr-2" />
                                  अधिकार
                                </h4>
                                <ul className="space-y-1 text-gray-700 text-sm">
                                  {member.authorities.map((authority, i) => (
                                    <li key={i} className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>{authority}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="text-indigo-700 font-medium mb-2 flex items-center">
                                  <UserCog className="h-4 w-4 mr-2" />
                                  जिम्मेदारियां
                                </h4>
                                <ul className="space-y-1 text-gray-700 text-sm">
                                  {member.responsibilities.map((responsibility, i) => (
                                    <li key={i} className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>{responsibility}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Detailed Role Descriptions */}
                      <div className="bg-purple-50 rounded-lg p-6 shadow-inner mt-8">
                        <h3 className="text-xl font-bold text-purple-800 mb-6 border-b border-purple-200 pb-2">विस्तृत भूमिका विवरण</h3>
                        
                        <div className="space-y-8">
                          {/* Chairman Section (Commented out) */}
                          {<div>
                            <h4 className="text-lg font-semibold text-purple-700 mb-3 flex items-center">
                              <LayoutDashboard className="h-5 w-5 mr-2 text-purple-600" />
                              अध्यक्ष (Chairman)
                            </h4>
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                              <p className="text-gray-700 mb-3">
                                अध्यक्ष ट्रस्ट का सर्वोच्च नेतृत्वकर्ता है और ट्रस्ट के समग्र विकास के लिए उत्तरदायी है।
                              </p>
                              
                              <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div>
                                  <h5 className="font-medium text-purple-700 mb-2">प्रमुख अधिकार:</h5>
                                  <ul className="space-y-1 text-gray-700">
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>बोर्ड की बैठकों की अध्यक्षता करना</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>विवादों में अंतिम निर्णय लेना (संस्थापक अध्यक्ष के परामर्श से)</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>ट्रस्ट के प्रतिनिधि के रूप में बाहरी संगठनों से बातचीत करना</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>आपातकालीन स्थिति में तत्काल निर्णय लेना (बाद में अनुमोदन आवश्यक)</span>
                                    </li>
                                  </ul>
                                </div>
                                
                                <div>
                                  <h5 className="font-medium text-purple-700 mb-2">प्रमुख दायित्व:</h5>
                                  <ul className="space-y-1 text-gray-700">
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>ट्रस्ट के लिए रणनीतिक दिशा-निर्देश तैयार करना</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>बोर्ड के सदस्यों के बीच समन्वय सुनिश्चित करना</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>ट्रस्ट के उद्देश्यों और मिशन की पूर्ति सुनिश्चित करना</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>ट्रस्ट की प्रगति की नियमित समीक्षा करना</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              
                              <div className="mt-4 pt-3 border-t border-purple-100">
                                <h5 className="font-medium text-purple-700 mb-2">सीमाएँ:</h5>
                                <ul className="space-y-1 text-gray-700">
                                  <li className="flex items-start">
                                    <AlertTriangle className="h-4 w-4 text-amber-500 mr-1 flex-shrink-0 mt-0.5" />
                                    <span>₹1,00,000 से अधिक के किसी भी खर्च के लिए बोर्ड की अनुमति आवश्यक है</span>
                                  </li>
                                  <li className="flex items-start">
                                    <AlertTriangle className="h-4 w-4 text-amber-500 mr-1 flex-shrink-0 mt-0.5" />
                                    <span>नीति परिवर्तन या संविधान संशोधन के लिए संस्थापक अध्यक्ष और बोर्ड की अनुमति आवश्यक है</span>
                                  </li>
                                  <li className="flex items-start">
                                    <AlertTriangle className="h-4 w-4 text-amber-500 mr-1 flex-shrink-0 mt-0.5" />
                                    <span>अकेले किसी भी सदस्य को निष्कासित करने का अधिकार नहीं है</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>}
                          
                          {/* Founding Chairman */}
                          <div>
                            <h4 className="text-lg font-semibold text-purple-700 mb-3 flex items-center">
                              <Shield className="h-5 w-5 mr-2 text-purple-600" />
                              संस्थापक अध्यक्ष (Tenured Chairman)
                            </h4>
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                              <p className="text-gray-700 mb-3">
                                संस्थापक अध्यक्ष ट्रस्ट के मूल सिद्धांतों और उद्देश्यों के संरक्षक हैं, जिन्हें ट्रस्ट के आधारभूत मूल्यों की रक्षा का विशेष उत्तरदायित्व प्राप्त है।
                              </p>
                              
                              <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div>
                                  <h5 className="font-medium text-purple-700 mb-2">प्रमुख अधिकार:</h5>
                                  <ul className="space-y-1 text-gray-700">
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>ट्रस्ट के मूल सिद्धांतों से जुड़े निर्णयों पर वीटो पावर</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>ट्रस्ट के संविधान में परिवर्तन पर अनिवार्य अनुमति</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>महत्वपूर्ण धार्मिक कार्यों पर अंतिम निर्णय</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>विशेष परिस्थितियों में बोर्ड की आपातकालीन बैठक बुलाना</span>
                                    </li>
                                  </ul>
                                </div>
                                
                                <div>
                                  <h5 className="font-medium text-purple-700 mb-2">प्रमुख दायित्व:</h5>
                                  <ul className="space-y-1 text-gray-700">
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>ट्रस्ट के मूल उद्देश्यों की रक्षा करना</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>अन्य पदाधिकारियों को मार्गदर्शन प्रदान करना</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>ट्रस्ट की दीर्घकालिक विरासत सुनिश्चित करना</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>धार्मिक और आध्यात्मिक गतिविधियों की निगरानी करना</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              
                              <div className="mt-4 pt-3 border-t border-purple-100">
                                <h5 className="font-medium text-purple-700 mb-2">कार्यकाल:</h5>
                                <p className="text-gray-700">
                                  संस्थापक अध्यक्ष का पद आजीवन होता है, जब तक कि वे स्वेच्छा से त्यागपत्र न दें या तीन-चौथाई बहुमत से बोर्ड द्वारा हटाए न जाएं 
                                  (केवल गंभीर कदाचार के मामले में)।
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          {/* General Secretary */}
                          <div>
                            <h4 className="text-lg font-semibold text-purple-700 mb-3 flex items-center">
                              <FileText className="h-5 w-5 mr-2 text-purple-600" />
                              महासचिव (General Secretary)
                            </h4>
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                              <p className="text-gray-700 mb-3">
                                महासचिव ट्रस्ट के दैनिक प्रशासन का प्रमुख होता है और सभी कार्यात्मक गतिविधियों के लिए उत्तरदायी होता है। यह पद ट्रस्ट के संचालन 
                                का केंद्र बिंदु है।
                              </p>
                              
                              <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div>
                                  <h5 className="font-medium text-purple-700 mb-2">प्रमुख अधिकार:</h5>
                                  <ul className="space-y-1 text-gray-700">
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>₹25,000 तक के दैनिक प्रशासनिक खर्च का अनुमोदन</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>बैठकों का आयोजन और कार्यसूची तय करना</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>ट्रस्ट की ओर से पत्राचार और संचार</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>कर्मचारियों और स्वयंसेवकों का प्रबंधन</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>स्वीकृत योजनाओं का क्रियान्वयन</span>
                                    </li>
                                  </ul>
                                </div>
                                
                                <div>
                                  <h5 className="font-medium text-purple-700 mb-2">प्रमुख दायित्व:</h5>
                                  <ul className="space-y-1 text-gray-700">
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>बैठकों के कार्यवृत्त और दस्तावेजों का रखरखाव</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>बोर्ड के निर्णयों का क्रियान्वयन सुनिश्चित करना</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>सरकारी विभागों में आवश्यक फाइलिंग और अनुपालन</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>मासिक प्रगति रिपोर्ट तैयार करना</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>विभिन्न समितियों के बीच समन्वय</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              
                              <div className="mt-4 pt-3 border-t border-purple-100">
                                <h5 className="font-medium text-purple-700 mb-2">सीमाएँ:</h5>
                                <ul className="space-y-1 text-gray-700">
                                  <li className="flex items-start">
                                    <AlertTriangle className="h-4 w-4 text-amber-500 mr-1 flex-shrink-0 mt-0.5" />
                                    <span>₹25,000 से अधिक के किसी भी खर्च के लिए कोषाध्यक्ष या अध्यक्ष का अनुमोदन आवश्यक है</span>
                                  </li>
                                  <li className="flex items-start">
                                    <AlertTriangle className="h-4 w-4 text-amber-500 mr-1 flex-shrink-0 mt-0.5" />
                                    <span>मौजूदा नीतियों या कार्यक्रमों में बड़े बदलाव के लिए बोर्ड का अनुमोदन आवश्यक है</span>
                                  </li>
                                  <li className="flex items-start">
                                    <AlertTriangle className="h-4 w-4 text-amber-500 mr-1 flex-shrink-0 mt-0.5" />
                                    <span>बोर्ड को सूचित किए बिना महत्वपूर्ण समझौते या अनुबंध नहीं कर सकते</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          
                          {/* Treasurer */}
                          <div>
                            <h4 className="text-lg font-semibold text-purple-700 mb-3 flex items-center">
                              <IndianRupee className="h-5 w-5 mr-2 text-purple-600" />
                              कोषाध्यक्ष (Treasurer)
                            </h4>
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                              <p className="text-gray-700 mb-3">
                                कोषाध्यक्ष ट्रस्ट के सभी वित्तीय मामलों का प्रमुख अधिकारी है और वित्तीय सत्यनिष्ठा, पारदर्शिता और उचित वित्तीय प्रबंधन सुनिश्चित करने के लिए उत्तरदायी है।
                              </p>
                              
                              <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div>
                                  <h5 className="font-medium text-purple-700 mb-2">प्रमुख अधिकार:</h5>
                                  <ul className="space-y-1 text-gray-700">
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>₹10,000 तक के नियमित खर्चों को स्वतंत्र रूप से मंजूरी देना</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>बैंक खातों का संचालन (संयुक्त हस्ताक्षर के साथ)</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>रसीदें जारी करना और दान स्वीकार करना</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>वित्तीय योजना और बजट तैयार करना</span>
                                    </li>
                                  </ul>
                                </div>
                                
                                <div>
                                  <h5 className="font-medium text-purple-700 mb-2">प्रमुख दायित्व:</h5>
                                  <ul className="space-y-1 text-gray-700">
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>सभी वित्तीय लेनदेन का सटीक रिकॉर्ड रखना</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>मासिक और वार्षिक वित्तीय रिपोर्ट तैयार करना</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>वित्तीय लेनदेन की जांच और सत्यापन</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>कर विवरणी और अन्य वित्तीय अनुपालन सुनिश्चित करना</span>
                                    </li>
                                    <li className="flex items-start">
                                      <ChevronRight className="h-4 w-4 text-purple-500 mr-1 flex-shrink-0 mt-0.5" />
                                      <span>बोर्ड को नियमित वित्तीय अपडेट प्रदान करना</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              
                              <div className="mt-4 pt-3 border-t border-purple-100">
                                <h5 className="font-medium text-purple-700 mb-2">विशेष शक्तियां:</h5>
                                <ul className="space-y-1 text-gray-700">
                                  <li className="flex items-start">
                                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-1 flex-shrink-0 mt-0.5" />
                                    <span>किसी भी संदिग्ध वित्तीय अनियमितता पर भुगतान रोकने की शक्ति</span>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-1 flex-shrink-0 mt-0.5" />
                                    <span>बिना उचित दस्तावेज के किसी भी भुगतान को अस्वीकार करने का अधिकार</span>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-1 flex-shrink-0 mt-0.5" />
                                    <span>वार्षिक लेखा परीक्षा के लिए स्वतंत्र लेखा परीक्षक नियुक्त करना (बोर्ड के अनुमोदन से)</span>
                                  </li>
                                </ul>
                              </div>
                              
                              <div className="mt-4 pt-3 border-t border-purple-100">
                                <h5 className="font-medium text-purple-700 mb-2">सीमाएँ:</h5>
                                <ul className="space-y-1 text-gray-700">
                                  <li className="flex items-start">
                                    <AlertTriangle className="h-4 w-4 text-amber-500 mr-1 flex-shrink-0 mt-0.5" />
                                    <span>₹10,000 से अधिक के खर्च के लिए महासचिव या अध्यक्ष का अनुमोदन आवश्यक है</span>
                                  </li>
                                  <li className="flex items-start">
                                    <AlertTriangle className="h-4 w-4 text-amber-500 mr-1 flex-shrink-0 mt-0.5" />
                                    <span>₹50,000 से अधिक के खर्च के लिए बोर्ड की मंजूरी आवश्यक है</span>
                                  </li>
                                  <li className="flex items-start">
                                    <AlertTriangle className="h-4 w-4 text-amber-500 mr-1 flex-shrink-0 mt-0.5" />
                                    <span>वित्तीय नीतियों में परिवर्तन के लिए पूर्ण बोर्ड की मंजूरी आवश्यक है</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Other Member Types */}
                      <div className="bg-indigo-50 rounded-lg p-6 shadow-inner mt-8">
                        <h3 className="text-xl font-bold text-indigo-800 mb-6 border-b border-indigo-200 pb-2">अन्य सदस्य प्रकार</h3>
                        
                        <div className="space-y-6">
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-indigo-700 mb-2">सामान्य सदस्य</h4>
                            <p className="text-gray-700 mb-2">
                              सामान्य सदस्य ट्रस्ट के आधार हैं जो विभिन्न गतिविधियों में भाग लेते हैं और ट्रस्ट के उद्देश्यों को आगे बढ़ाते हैं।
                            </p>
                            <ul className="space-y-1 text-gray-700">
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                                <span><strong>पात्रता:</strong> 18 वर्ष से अधिक आयु, अच्छा चरित्र, ट्रस्ट के उद्देश्यों के प्रति प्रतिबद्धता</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                                <span><strong>अधिकार:</strong> बैठकों में भाग लेना, सुझाव देना, स्वयंसेवा करना</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                                <span><strong>वार्षिक शुल्क:</strong> ₹501 (वार्षिक)</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-indigo-700 mb-2">आजीवन सदस्य</h4>
                            <p className="text-gray-700 mb-2">
                              आजीवन सदस्य एक बार के योगदान के साथ ट्रस्ट के साथ जीवन भर जुड़े रहते हैं और इसके विकास में महत्वपूर्ण भूमिका निभाते हैं।
                            </p>
                            <ul className="space-y-1 text-gray-700">
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                                <span><strong>पात्रता:</strong> 21 वर्ष से अधिक आयु, ट्रस्ट के प्रति समर्पण का प्रमाणित इतिहास</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                                <span><strong>अधिकार:</strong> सामान्य सदस्यों के अधिकारों के अलावा, विशेष समारोहों में आमंत्रित, ट्रस्ट की विशेष रिपोर्ट प्राप्त करना</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                                <span><strong>एकमुश्त शुल्क:</strong> ₹11,000 (आजीवन)</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-indigo-700 mb-2">संरक्षक सदस्य</h4>
                            <p className="text-gray-700 mb-2">
                              संरक्षक सदस्य वे महत्वपूर्ण दानदाता और समर्थक हैं जो ट्रस्ट के बड़े लक्ष्यों और परियोजनाओं में योगदान देते हैं।
                            </p>
                            <ul className="space-y-1 text-gray-700">
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                                <span><strong>पात्रता:</strong> ट्रस्ट को महत्वपूर्ण वित्तीय या अन्य योगदान</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                                <span><strong>अधिकार:</strong> विशेष मान्यता, समारोहों में सम्मानित स्थान, ट्रस्ट के प्रकाशनों में उल्लेख</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                                <span><strong>योगदान:</strong> ₹1,00,000 या अधिक</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-indigo-700 mb-2">स्वयंसेवक</h4>
                            <p className="text-gray-700 mb-2">
                              स्वयंसेवक ट्रस्ट की विभिन्न गतिविधियों में अपना समय और कौशल योगदान देते हैं, लेकिन औपचारिक सदस्य नहीं होते।
                            </p>
                            <ul className="space-y-1 text-gray-700">
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                                <span><strong>पात्रता:</strong> कोई विशेष योग्यता नहीं, सेवा भाव और समर्पण</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                                <span><strong>अधिकार:</strong> कार्यक्रमों में भाग लेना, प्रशिक्षण प्राप्त करना, प्रमाणपत्र पाना</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                                <span><strong>शुल्क:</strong> कोई नहीं</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Authority Limitations Section */}
                {activeSection === 'authority' && (
                  <div className="space-y-8">
                    <div className="flex items-center space-x-3 border-b border-purple-200 pb-3">
                      <Key className="h-7 w-7 text-purple-600" />
                      <h2 className="text-2xl font-bold text-purple-900">अधिकार सीमा</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-lg text-gray-700">
                        कोई भी अधिकारी या पदाधिकारी असीमित शक्तियों का धारक नहीं है। स्पष्ट अधिकार सीमाएँ सत्ता के दुरुपयोग को रोकती हैं और 
                        सामूहिक निर्णय प्रक्रिया सुनिश्चित करती हैं। यहां विभिन्न पदों की अधिकार सीमाएँ विस्तार से दी गई हैं।
                      </p>
                      
                      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-6 text-white">
                        <h3 className="text-xl font-bold mb-4">निर्णय अधिकार की श्रेणियाँ</h3>
                        <div className="space-y-4">
                          <p>ट्रस्ट के निर्णयों को निम्नलिखित तीन श्रेणियों में वर्गीकृत किया गया है, जिनके लिए अलग-अलग अनुमोदन स्तर आवश्यक हैं:</p>
                          
                          <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                              <h4 className="font-semibold mb-2">श्रेणी ए - प्रमुख निर्णय</h4>
                              <p className="text-indigo-100 text-sm mb-2">
                                इन निर्णयों के लिए पूर्ण बोर्ड (न्यूनतम 4 सदस्य) का अनुमोदन आवश्यक है।
                              </p>
                              <ul className="space-y-1 text-white text-sm">
                                <li>• ₹1,00,000 से अधिक का खर्च</li>
                                <li>• सदस्यों की नियुक्ति/पदच्युति</li>
                                <li>• नीति परिवर्तन</li>
                                <li>• संपत्ति का क्रय/विक्रय</li>
                                <li>• बैंक खाता खोलना/बंद करना</li>
                                <li>• बड़े अनुबंध/समझौते</li>
                              </ul>
                            </div>
                            
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                              <h4 className="font-semibold mb-2">श्रेणी बी - मध्यम निर्णय</h4>
                              <p className="text-indigo-100 text-sm mb-2">
                                इन निर्णयों के लिए कम से कम दो अधिकृत सदस्यों का अनुमोदन आवश्यक है।
                              </p>
                              <ul className="space-y-1 text-white text-sm">
                                <li>• ₹25,000 से ₹1,00,000 का खर्च</li>
                                <li>• मौजूदा कार्यक्रमों में परिवर्तन</li>
                                <li>• अल्पकालिक अनुबंध</li>
                                <li>• स्वयंसेवकों की नियुक्ति</li>
                                <li>• विक्रेताओं का चयन</li>
                                <li>• उपसमितियों का गठन</li>
                              </ul>
                            </div>
                            
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                              <h4 className="font-semibold mb-2">श्रेणी सी - रूटीन निर्णय</h4>
                              <p className="text-indigo-100 text-sm mb-2">
                                इन निर्णयों को एक अधिकृत सदस्य अपने अधिकार क्षेत्र में ले सकता है।
                              </p>
                              <ul className="space-y-1 text-white text-sm">
                                <li>• महासचिव: ₹25,000 तक का प्रशासनिक खर्च</li>
                                <li>• कोषाध्यक्ष: ₹10,000 तक का नियमित खर्च</li>
                                <li>• दैनिक प्रशासनिक निर्णय</li>
                                <li>• नियमित पत्राचार</li>
                                <li>• स्वीकृत कार्यक्रमों का आयोजन</li>
                                <li>• रूटीन मरम्मत और रखरखाव</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-purple-200 rounded-lg p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-purple-800 mb-4">पदों के अनुसार विशिष्ट अधिकार सीमाएँ</h3>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold text-purple-700 mb-3">अध्यक्ष की अधिकार सीमाएँ</h4>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start">
                                <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <strong>वित्तीय सीमा:</strong> ₹50,000 तक के खर्च कोषाध्यक्ष के साथ संयुक्त रूप से अनुमोदित कर सकते हैं, 
                                  इससे अधिक के लिए पूर्ण बोर्ड की मंजूरी आवश्यक है।
                                </span>
                              </li>
                              <li className="flex items-start">
                                <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <strong>नीतिगत सीमा:</strong> मौजूदा नीतियों में किसी भी संशोधन के लिए पूर्ण बोर्ड और संस्थापक अध्यक्ष की सहमति आवश्यक है।
                                </span>
                              </li>
                              <li className="flex items-start">
                                <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <strong>संपत्ति संबंधी सीमा:</strong> किसी भी संपत्ति के अधिग्रहण, विक्रय या हस्तांतरण के लिए पूर्ण बोर्ड का अनुमोदन आवश्यक है।
                                </span>
                              </li>
                              <li className="flex items-start">
                                <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <strong>मानव संसाधन सीमा:</strong> प्रमुख पदों पर नियुक्ति या पदच्युति के लिए पूर्ण बोर्ड की सहमति आवश्यक है।
                                </span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-purple-700 mb-3">महासचिव की अधिकार सीमाएँ</h4>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start">
                                <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <strong>वित्तीय सीमा:</strong> स्वतंत्र रूप से ₹25,000 तक के प्रशासनिक खर्च, इससे अधिक के लिए अन्य पदाधिकारियों 
                                  की मंजूरी आवश्यक है।
                                </span>
                              </li>
                              <li className="flex items-start">
                                <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <strong>कार्यक्रम सीमा:</strong> स्वीकृत कार्यक्रमों में बड़े बदलाव के लिए अध्यक्ष और कोषाध्यक्ष का अनुमोदन आवश्यक है।
                                </span>
                              </li>
                              <li className="flex items-start">
                                <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <strong>अनुबंध सीमा:</strong> ₹50,000 से अधिक मूल्य के अनुबंध के लिए पूर्ण बोर्ड की मंजूरी आवश्यक है।
                                </span>
                              </li>
                              <li className="flex items-start">
                                <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <strong>प्रतिनिधित्व सीमा:</strong> महत्वपूर्ण बाहरी संगठनों या सरकारी निकायों के साथ औपचारिक प्रतिनिधित्व के 
                                  लिए अध्यक्ष का अनुमोदन आवश्यक है।
                                </span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-purple-700 mb-3">कोषाध्यक्ष की अधिकार सीमाएँ</h4>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start">
                                <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <strong>स्वतंत्र खर्च सीमा:</strong> ₹10,000 तक के नियमित खर्च स्वतंत्र रूप से, इससे अधिक के लिए अन्य 
                                  पदाधिकारियों का अनुमोदन आवश्यक है।
                                </span>
                              </li>
                              <li className="flex items-start">
                                <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <strong>बैंकिंग सीमा:</strong> सभी बैंकिंग लेनदेन के लिए संयुक्त हस्ताक्षर अनिवार्य हैं, अकेले कोई भी फंड ट्रांसफर नहीं कर सकते।
                                </span>
                              </li>
                              <li className="flex items-start">
                                <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <strong>निवेश सीमा:</strong> किसी भी प्रकार के निवेश के लिए पूर्ण बोर्ड का अनुमोदन आवश्यक है।
                                </span>
                              </li>
                              <li className="flex items-start">
                                <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <strong>ऋण सीमा:</strong> ट्रस्ट की ओर से किसी भी प्रकार का ऋण लेने या देने के लिए पूर्ण बोर्ड का अनुमोदन आवश्यक है।
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
                        <h3 className="text-lg font-semibold text-amber-800 mb-2">आपातकालीन अधिकार प्रोटोकॉल</h3>
                        <p className="text-gray-700 mb-4">
                          आपातकालीन स्थितियों में, जहां विलंब से ट्रस्ट को महत्वपूर्ण क्षति या नुकसान हो सकता है, निम्नलिखित प्रोटोकॉल लागू होता है:
                        </p>
                        <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                          <li>
                            अध्यक्ष या संस्थापक अध्यक्ष तत्काल निर्णय ले सकते हैं, लेकिन 24 घंटे के भीतर सभी अधिकृत सदस्यों को सूचित करना अनिवार्य है।
                          </li>
                          <li>
                            ऐसे निर्णयों की औपचारिक समीक्षा और अनुमोदन के लिए 7 दिनों के भीतर विशेष बोर्ड मीटिंग बुलाई जानी चाहिए।
                          </li>
                          <li>
                            आपातकालीन वित्तीय लेनदेन के लिए भी कम से कम दो अधिकृत हस्ताक्षरकर्ताओं का अनुमोदन आवश्यक है, जिनमें से एक कोषाध्यक्ष होना चाहिए।
                          </li>
                          <li>
                            आपातकालीन खर्च की सीमा ₹1,00,000 से अधिक नहीं होनी चाहिए; इससे अधिक के लिए विशेष बोर्ड मीटिंग आवश्यक है।
                          </li>
                        </ol>
                        <p className="mt-4 text-sm font-semibold text-amber-800">
                          आपातकालीन अधिकारों का दुरुपयोग गंभीर अनुशासनात्मक कार्रवाई का कारण बनेगा, जिसमें पदच्युति और कानूनी कार्रवाई शामिल हो सकती है।
                        </p>
                      </div>
                      
                      <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                        <h3 className="text-lg font-semibold text-red-800 mb-2">प्रतिबंधित कार्य</h3>
                        <p className="text-gray-700 mb-4">
                          निम्नलिखित कार्य पूर्णतया प्रतिबंधित हैं और किसी भी पदाधिकारी या सदस्य द्वारा किसी भी परिस्थिति में नहीं किए जा सकते:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>ट्रस्ट की संपत्ति या धन का व्यक्तिगत उपयोग या लाभ के लिए इस्तेमाल</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>अनधिकृत दान संग्रह या ट्रस्ट के नाम का दुरुपयोग</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>ट्रस्ट का धन किसी भी राजनीतिक दल या गतिविधि के लिए उपयोग करना</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>ट्रस्ट के नाम पर अनधिकृत ऋण या उधार देना या लेना</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>पारदर्शिता के सिद्धांतों का उल्लंघन करते हुए गोपनीय वित्तीय लेनदेन</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>ट्रस्ट के उद्देश्यों के विपरीत किसी भी गतिविधि या कार्य का समर्थन</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Financial Protocol Section */}
                {activeSection === 'financial' && (
                  <div className="space-y-8">
                    <div className="flex items-center space-x-3 border-b border-purple-200 pb-3">
                      <IndianRupee className="h-7 w-7 text-purple-600" />
                      <h2 className="text-2xl font-bold text-purple-900">वित्तीय प्रोटोकॉल</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-lg text-gray-700">
                        ट्रस्ट के वित्तीय मामले उसकी अखंडता का आधार हैं। ये प्रोटोकॉल पारदर्शिता, जवाबदेही और ट्रस्ट के संसाधनों के 
                        उचित उपयोग को सुनिश्चित करते हैं। सभी सदस्यों और पदाधिकारियों के लिए इन नियमों का कड़ाई से पालन अनिवार्य है।
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-purple-100">
                          <div className="flex items-center mb-4">
                            <div className="bg-purple-100 p-2.5 rounded-full mr-4">
                              <DollarSign className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-purple-800">बैंकिंग प्रोटोकॉल</h3>
                          </div>
                          
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>संयुक्त खाता संचालन:</strong> सभी बैंक खाते कम से कम दो अधिकृत हस्ताक्षरकर्ताओं द्वारा संचालित होंगे, 
                              जिनमें से एक कोषाध्यक्ष होना अनिवार्य है।</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>खाता खोलना:</strong> नए बैंक खाते खोलने के लिए पूर्ण बोर्ड का अनुमोदन आवश्यक है, साथ ही एक 
                              औपचारिक संकल्प पारित किया जाएगा।</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>ऑनलाइन बैंकिंग:</strong> ऑनलाइन लेनदेन के लिए भी दो-स्तरीय अनुमोदन आवश्यक है; एक सदस्य लेनदेन शुरू 
                              करेगा और दूसरा अधिकृत करेगा।</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>पासबुक/स्टेटमेंट:</strong> बैंक स्टेटमेंट की मासिक समीक्षा कोषाध्यक्ष और महासचिव द्वारा संयुक्त रूप से की जाएगी।</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>खाता मिलान:</strong> हर तिमाही में बैंक खाते का मिलान किया जाएगा और रिपोर्ट बोर्ड को प्रस्तुत की जाएगी।</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-purple-100">
                          <div className="flex items-center mb-4">
                            <div className="bg-purple-100 p-2.5 rounded-full mr-4">
                              <IndianRupee className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-purple-800">दान प्रोटोकॉल</h3>
                          </div>
                          
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>रसीद जारी करना:</strong> प्रत्येक दान के लिए क्रमांकित रसीद जारी करना अनिवार्य है, चाहे राशि कितनी भी छोटी हो।</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>दान की प्राप्ति:</strong> प्राप्त सभी दान 3 कार्य दिवसों के भीतर ट्रस्ट के बैंक खाते में जमा किए जाने चाहिए।</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>दानदाता सूची:</strong> सभी दानदाताओं का विवरण एक रजिस्टर में रखा जाएगा, जिसमें सभी आवश्यक विवरण दर्ज किए जाएंगे।</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>80G प्रमाणपत्र:</strong> कोषाध्यक्ष द्वारा दानदाताओं को समय पर 80G प्रमाणपत्र जारी किए जाएंगे।</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>विशेष दान:</strong> ₹1,00,000 से अधिक के दान या सशर्त दान के लिए बोर्ड की स्वीकृति आवश्यक है।</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 rounded-lg p-6 shadow-inner">
                        <h3 className="text-xl font-bold text-purple-800 mb-4 border-b border-purple-200 pb-2">खर्च अनुमोदन प्रक्रिया</h3>
                        
                        <div className="space-y-5">
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-purple-700 mb-2">₹10,000 तक के खर्च</h4>
                            <p className="text-gray-700 mb-3">
                              ये खर्च कोषाध्यक्ष द्वारा स्वतंत्र रूप से अनुमोदित किए जा सकते हैं, लेकिन अनुमोदन और भुगतान का रिकॉर्ड रखना आवश्यक है।
                            </p>
                            <ol className="list-decimal list-inside text-gray-700 space-y-1">
                              <li>कोषाध्यक्ष द्वारा अनुमोदन</li>
                              <li>खर्च विवरण रजिस्टर में दर्ज करना</li>
                              <li>वाउचर/बिल सत्यापन</li>
                              <li>भुगतान प्रक्रिया (चेक/ऑनलाइन ट्रांसफर)</li>
                              <li>खर्च की रिपोर्ट अगली बैठक में प्रस्तुत करना</li>
                            </ol>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-purple-700 mb-2">₹10,001 से ₹25,000 तक के खर्च</h4>
                            <p className="text-gray-700 mb-3">
                              इस श्रेणी के खर्च महासचिव द्वारा अनुमोदित किए जा सकते हैं, लेकिन कोषाध्यक्ष की सहमति आवश्यक है।
                            </p>
                            <ol className="list-decimal list-inside text-gray-700 space-y-1">
                              <li>महासचिव द्वारा खर्च प्रस्ताव</li>
                              <li>कोषाध्यक्ष द्वारा वित्तीय अनुमोदन</li>
                              <li>औपचारिक स्वीकृति दस्तावेज़</li>
                              <li>कोटेशन/विक्रेता चयन (यदि लागू हो)</li>
                              <li>भुगतान और दस्तावेज़ीकरण</li>
                            </ol>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-purple-700 mb-2">₹25,001 से ₹1,00,000 तक के खर्च</h4>
                            <p className="text-gray-700 mb-3">
                              इस स्तर के खर्च के लिए कम से कम दो अधिकृत सदस्यों का अनुमोदन आवश्यक है, जिनमें से एक अध्यक्ष या संस्थापक अध्यक्ष होना चाहिए।
                            </p>
                            <ol className="list-decimal list-inside text-gray-700 space-y-1">
                              <li>औपचारिक प्रस्ताव तैयार करना</li>
                              <li>कम से कम दो अधिकृत सदस्यों के हस्ताक्षर और अनुमोदन</li>
                              <li>न्यूनतम तीन कोटेशन/बिड (जहां लागू हो)</li>
                              <li>विक्रेता का औपचारिक चयन</li>
                              <li>भुगतान अनुसूची और निगरानी</li>
                            </ol>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-purple-700 mb-2">₹1,00,000 से अधिक के खर्च</h4>
                            <p className="text-gray-700 mb-3">
                              इस स्तर के खर्च के लिए पूर्ण बोर्ड (न्यूनतम 4 सदस्य) का अनुमोदन आवश्यक है।
                            </p>
                            <ol className="list-decimal list-inside text-gray-700 space-y-1">
                              <li>विस्तृत प्रस्ताव और बजट</li>
                              <li>विशेष बोर्ड बैठक या नियमित बैठक में अनुमोदन</li>
                              <li>औपचारिक संकल्प पारित करना</li>
                              <li>पारदर्शी बिडिंग प्रक्रिया</li>
                              <li>चरणबद्ध भुगतान और निगरानी</li>
                              <li>परियोजना पूर्णता रिपोर्ट</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-purple-100">
                          <div className="flex items-center mb-4">
                            <div className="bg-purple-100 p-2.5 rounded-full mr-4">
                              <FileText className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-purple-800">रिपोर्टिंग प्रक्रिया</h3>
                          </div>
                          
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>मासिक रिपोर्ट:</strong> कोषाध्यक्ष द्वारा हर महीने आय-व्यय का विवरण तैयार किया जाएगा और 
                              सभी अधिकृत सदस्यों के साथ साझा किया जाएगा।</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>त्रैमासिक रिपोर्ट:</strong> हर तिमाही में एक विस्तृत वित्तीय रिपोर्ट तैयार की जाएगी, जिसमें 
                              बैंक मिलान और सभी प्रमुख लेनदेन शामिल होंगे।</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>वार्षिक रिपोर्ट:</strong> वित्तीय वर्ष के अंत में एक विस्तृत रिपोर्ट तैयार की जाएगी, जिसमें 
                              आय-व्यय का पूर्ण विश्लेषण होगा।</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>ऑडिट:</strong> हर वर्ष एक स्वतंत्र चार्टर्ड अकाउंटेंट द्वारा ट्रस्ट के खातों का ऑडिट कराया जाएगा।</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-purple-100">
                          <div className="flex items-center mb-4">
                            <div className="bg-purple-100 p-2.5 rounded-full mr-4">
                              <Shield className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-purple-800">वित्तीय सुरक्षा उपाय</h3>
                          </div>
                          
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>जमानत राशि:</strong> सभी वित्तीय अधिकारी व पदाधिकारियों को ₹25,000 से ₹50,000 की सुरक्षा जमा राशि 
                              जमा करनी होगी।</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>बीमा:</strong> ट्रस्ट संपत्ति और महत्वपूर्ण वस्तुओं का उचित बीमा कराया जाएगा।</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>डिजिटल सुरक्षा:</strong> डिजिटल बैंकिंग के लिए मजबूत सुरक्षा प्रोटोकॉल और टू-फैक्टर 
                              ऑथेंटिकेशन का उपयोग किया जाएगा।</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>आरक्षित कोष:</strong> ट्रस्ट के पास आपात स्थितियों के लिए एक आरक्षित कोष रखा जाएगा, 
                              जिसका उपयोग केवल अत्यंत आवश्यक स्थितियों में ही किया जा सकेगा।</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                        <h3 className="text-lg font-semibold text-red-800 mb-2">वित्तीय नियमों का उल्लंघन</h3>
                        <p className="text-gray-700 mb-4">
                          वित्तीय नियमों का उल्लंघन एक गंभीर अपराध माना जाता है। ऐसे उल्लंघन के परिणाम निम्नलिखित हो सकते हैं:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>
                              <strong>तत्काल निलंबन:</strong> वित्तीय अनियमितता का प्रमाण मिलने पर संबंधित सदस्य को तुरंत निलंबित किया जा सकता है।
                            </span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>
                              <strong>सुरक्षा जमा राशि का जब्त होना:</strong> साबित दुरुपयोग की स्थिति में सुरक्षा जमा राशि जब्त की जाएगी।
                            </span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>
                              <strong>नुकसान की भरपाई:</strong> दुरुपयोग की गई राशि की पूर्ण वसूली के साथ 12% वार्षिक ब्याज।
                            </span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>
                              <strong>कानूनी कार्रवाई:</strong> गंभीर मामलों में आपराधिक विश्वासघात (IPC 406) के तहत कानूनी कार्रवाई की जाएगी।
                            </span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>
                              <strong>स्थायी निष्कासन:</strong> वित्तीय अनियमितता के दोषी व्यक्ति को ट्रस्ट से स्थायी रूप से निष्कासित किया जाएगा।
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Conduct Code Section */}
                {activeSection === 'conduct' && (
                  <div className="space-y-8">
                    <div className="flex items-center space-x-3 border-b border-purple-200 pb-3">
                      <BookOpen className="h-7 w-7 text-purple-600" />
                      <h2 className="text-2xl font-bold text-purple-900">आचार संहिता</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-lg text-gray-700">
                        आचार संहिता ट्रस्ट के सदस्यों और पदाधिकारियों के व्यवहार के मानकों को परिभाषित करती है। यह संहिता ट्रस्ट की प्रतिष्ठा, 
                        विश्वसनीयता और उसके धार्मिक एवं समाजसेवी उद्देश्यों की रक्षा करती है।
                      </p>
                      
                      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-6 text-white">
                        <h3 className="text-xl font-bold mb-4">मूल मूल्य</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">सत्यनिष्ठा</h4>
                            <p className="text-indigo-100 text-sm">
                              सभी सदस्यों को सत्य, ईमानदारी और नैतिकता के उच्चतम मानकों का पालन करना होगा। 
                              झूठ, धोखाधड़ी या मिथ्या प्रस्तुति किसी भी रूप में स्वीकार्य नहीं है।
                            </p>
                          </div>
                          
                          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">निष्पक्षता</h4>
                            <p className="text-indigo-100 text-sm">
                              सभी सदस्यों को बिना किसी भेदभाव, पक्षपात या व्यक्तिगत लाभ के विचार के अपने कर्तव्यों का पालन करना होगा, 
                              और हितों के टकराव से बचना होगा।
                            </p>
                          </div>
                          
                          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">सेवा भाव</h4>
                            <p className="text-indigo-100 text-sm">
                              ट्रस्ट के सभी सदस्यों को समाज और धर्म की सेवा के उद्देश्य से कार्य करना होगा, व्यक्तिगत लाभ या प्रतिष्ठा से ऊपर उठकर।
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 rounded-lg p-6 shadow-inner">
                        <h3 className="text-xl font-bold text-purple-800 mb-4 border-b border-purple-200 pb-2">व्यावहारिक दिशानिर्देश</h3>
                        
                        <div className="space-y-6">
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-purple-700 mb-2">दायित्वों का निर्वहन</h4>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>सभी सदस्यों को अपने पद के दायित्वों का निष्ठापूर्वक और समय पर निर्वहन करना होगा।</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>सौंपे गए कार्यों को पूरा करने में लापरवाही या देरी नहीं करनी चाहिए।</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>यदि कोई सदस्य अपने दायित्वों को पूरा करने में असमर्थ है, तो उसे तुरंत यह स्थिति अपने वरिष्ठ पदाधिकारी को सूचित करनी चाहिए।</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-purple-700 mb-2">हितों का टकराव</h4>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>सदस्यों को ऐसी स्थितियों से बचना चाहिए जहां उनके व्यक्तिगत हित ट्रस्ट के हितों से टकराते हों।</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>यदि हितों का टकराव उत्पन्न होता है, तो सदस्य को इसकी तुरंत घोषणा करनी चाहिए और संबंधित निर्णय प्रक्रिया से स्वयं को अलग कर लेना चाहिए।</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>आत्मीय संबंधियों या मित्रों को ट्रस्ट के अनुबंध या रोजगार देने से बचना चाहिए, जब तक कि इसका पूर्ण प्रकटीकरण न हो और विशेष अनुमोदन न मिले।</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-purple-700 mb-2">गोपनीयता</h4>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>सदस्यों को ट्रस्ट के गोपनीय मामलों, दानदाताओं की जानकारी और आंतरिक चर्चाओं को बाहर प्रकट नहीं करना चाहिए।</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>ट्रस्ट दस्तावेजों और जानकारी को सुरक्षित रखना चाहिए और अनधिकृत पहुंच से बचाना चाहिए।</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>पद छोड़ने के बाद भी गोपनीयता बनाए रखने का दायित्व जारी रहता है।</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-purple-700 mb-2">विनम्रता और शिष्टाचार</h4>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>सभी सदस्यों को अपने साथियों, दानदाताओं, समुदाय के सदस्यों और जनता के साथ विनम्रता और सम्मान से व्यवहार करना चाहिए।</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>अहंकार, क्रोध, अपमानजनक भाषा या आक्रामक व्यवहार किसी भी परिस्थिति में स्वीकार्य नहीं है।</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>समझौता और टीम भावना से काम करना आवश्यक है।</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-purple-100">
                          <h3 className="text-lg font-semibold text-purple-800 mb-3">तपरित एवं प्रतिष्ठित आचरण</h3>
                          <p className="text-gray-700 mb-3">
                            ट्रस्ट के सदस्य होने के नाते, आपका व्यक्तिगत आचरण ट्रस्ट की छवि पर प्रभाव डालता है। अतः:
                          </p>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>सदस्यों को अपने व्यक्तिगत जीवन में भी उच्च नैतिक मानकों का पालन करना चाहिए।</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>किसी भी प्रकार के अवैध, अनैतिक या समाज विरोधी गतिविधियों से दूर रहना चाहिए।</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>सार्वजनिक रूप से ट्रस्ट का प्रतिनिधित्व करते समय उचित और मर्यादित व्यवहार करना चाहिए।</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-purple-100">
                          <h3 className="text-lg font-semibold text-purple-800 mb-3">सोशल मीडिया नीति</h3>
                          <p className="text-gray-700 mb-3">
                            सोशल मीडिया पर ट्रस्ट के सदस्यों के रूप में आपकी गतिविधियां ट्रस्ट की छवि पर प्रभाव डालती हैं। अतः:
                          </p>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>बिना अधिकार के ट्रस्ट की ओर से कोई भी बयान या घोषणा नहीं करनी चाहिए।</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>ट्रस्ट के बारे में गोपनीय जानकारी शेयर नहीं करनी चाहिए।</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>विवादास्पद, भड़काऊ या अनुचित सामग्री पोस्ट करने से बचना चाहिए, विशेष रूप से धार्मिक मामलों में।</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
                        <h3 className="text-lg font-semibold text-amber-800 mb-2">धार्मिक एवं सांस्कृतिक अनुशासन</h3>
                        <p className="text-gray-700 mb-4">
                          माँ भगवती चैरिटेबल ट्रस्ट एक धार्मिक और सांस्कृतिक संस्था है, अतः सभी सदस्यों को:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>धार्मिक स्थलों, प्रतीकों और अनुष्ठानों का सम्मान करना चाहिए।</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>मंदिर और धार्मिक कार्यक्रमों में उचित वस्त्र और व्यवहार बनाए रखना चाहिए।</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>सभी धर्मों और विश्वासों के प्रति सम्मान प्रदर्शित करना चाहिए।</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>धार्मिक-सांस्कृतिक मूल्यों को बनाए रखने और बढ़ावा देने में सक्रिय रूप से योगदान देना चाहिए।</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                        <h3 className="text-lg font-semibold text-red-800 mb-2">निषिद्ध व्यवहार</h3>
                        <p className="text-gray-700 mb-4">
                          निम्नलिखित व्यवहार किसी भी परिस्थिति में स्वीकार नहीं किए जाएंगे और तुरंत कार्रवाई का कारण बन सकते हैं:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>किसी भी प्रकार का भ्रष्टाचार, धोखाधड़ी या आर्थिक अनियमितता</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>उत्पीड़न, भेदभाव या किसी भी प्रकार का दुर्व्यवहार</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>धार्मिक स्थलों, प्रतीकों या भावनाओं का अपमान</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>ट्रस्ट की प्रतिष्ठा को नुकसान पहुंचाने वाले कृत्य</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>अनधिकृत रूप से मीडिया से संपर्क या जानकारी साझा करना</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>ड्रग्स, अल्कोहल या अन्य नशीले पदार्थों का ट्रस्ट परिसर में उपयोग</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Accountability Section */}
                {activeSection === 'accountability' && (
                  <div className="space-y-8">
                    <div className="flex items-center space-x-3 border-b border-purple-200 pb-3">
                      <Gavel className="h-7 w-7 text-purple-600" />
                      <h2 className="text-2xl font-bold text-purple-900">जवाबदेही एवं अनुशासन</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-lg text-gray-700">
                        ट्रस्ट के सदस्यों और पदाधिकारियों को अपने कार्यों और निर्णयों के लिए जवाबदेह होना अनिवार्य है। यह खंड जवाबदेही सुनिश्चित करने
                        और अनुशासन प्रक्रियाओं को स्पष्ट करता है।
                      </p>
                      
                      <div className="bg-purple-50 rounded-lg p-6 shadow-inner">
                        <h3 className="text-xl font-bold text-purple-800 mb-4 border-b border-purple-200 pb-2">उल्लंघन की रिपोर्टिंग प्रक्रिया</h3>
                        
                        <div className="space-y-5">
                          <p className="text-gray-700">
                            किसी भी नीति, नियम या आचार संहिता के उल्लंघन की रिपोर्ट करने के लिए निम्नलिखित प्रक्रिया अपनाई जाएगी:
                          </p>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                              <h4 className="font-semibold text-purple-700 mb-2">रिपोर्ट करना</h4>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                  <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <span>उल्लंघन की रिपोर्ट लिखित रूप में करनी चाहिए।</span>
                                </li>
                                <li className="flex items-start">
                                  <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <span>रिपोर्ट में उल्लंघन का विस्तृत विवरण, तिथि, समय, स्थान और गवाह (यदि कोई हों) शामिल हों।</span>
                                </li>
                                <li className="flex items-start">
                                  <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <span>रिपोर्ट महासचिव को प्रस्तुत की जानी चाहिए; यदि महासचिव ही आरोपी हैं, तो संस्थापक अध्यक्ष को प्रस्तुत करें।</span>
                                </li>
                              </ul>
                            </div>
                            
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                              <h4 className="font-semibold text-purple-700 mb-2">प्रारंभिक जांच</h4>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                  <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <span>रिपोर्ट प्राप्त होने के 7 दिनों के भीतर प्रारंभिक जांच की जाएगी।</span>
                                </li>
                                <li className="flex items-start">
                                  <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <span>महासचिव (या अन्य नामित अधिकारी) प्रथम दृष्टया प्रमाण एकत्र करेंगे।</span>
                                </li>
                                <li className="flex items-start">
                                  <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <span>यदि प्रथम दृष्टया मामला बनता है, तो एक औपचारिक जांच शुरू की जाएगी।</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                              <h4 className="font-semibold text-purple-700 mb-2">औपचारिक जांच</h4>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                  <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <span>एक तीन-सदस्यीय जांच समिति गठित की जाएगी।</span>
                                </li>
                                <li className="flex items-start">
                                  <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <span>आरोपित सदस्य को लिखित आरोप पत्र दिया जाएगा और अपना पक्ष रखने का मौका दिया जाएगा।</span>
                                </li>
                                <li className="flex items-start">
                                  <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <span>जांच 30 दिनों के भीतर पूरी की जाएगी (विशेष मामलों में विस्तार संभव)।</span>
                                </li>
                                <li className="flex items-start">
                                  <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <span>जांच समिति अपनी अनुशंसाओं के साथ एक विस्तृत रिपोर्ट प्रस्तुत करेगी।</span>
                                </li>
                              </ul>
                            </div>
                            
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                              <h4 className="font-semibold text-purple-700 mb-2">निर्णय और कार्रवाई</h4>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                  <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <span>जांच रिपोर्ट के आधार पर, बोर्ड निर्णय लेगा और उचित कार्रवाई करेगा।</span>
                                </li>
                                <li className="flex items-start">
                                  <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <span>कार्रवाई उल्लंघन की गंभीरता के अनुरूप होगी (चेतावनी से लेकर निष्कासन तक)।</span>
                                </li>
                                <li className="flex items-start">
                                  <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <span>गंभीर मामलों में कानूनी कार्रवाई भी की जा सकती है।</span>
                                </li>
                                <li className="flex items-start">
                                  <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <span>निर्णय के 15 दिनों के भीतर निर्णय कार्यान्वित किया जाएगा।</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-purple-200 rounded-lg p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-purple-800 mb-4">अनुशासनात्मक कार्रवाई की श्रेणियां</h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-purple-700 mb-3">हल्के उल्लंघन के लिए</h4>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>मौखिक चेतावनी:</strong> पहली बार के छोटे उल्लंघन के लिए</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>लिखित चेतावनी:</strong> दोहराए गए छोटे उल्लंघन के लिए</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>प्रशिक्षण/काउंसलिंग:</strong> जागरूकता की कमी से उत्पन्न उल्लंघन के लिए</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>क्षमायाचना:</strong> गलती स्वीकार करने और सुधार का वचन देने पर</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-purple-700 mb-3">मध्यम उल्लंघन के लिए</h4>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>अस्थायी निलंबन:</strong> 1-3 महीने की अवधि के लिए सदस्यता/पद से निलंबन</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>जिम्मेदारियों में कमी:</strong> कुछ दायित्वों या अधिकारों को वापस लेना</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>अतिरिक्त जमानत राशि:</strong> नुकसान की भरपाई या अतिरिक्त सुरक्षा के रूप में</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>सार्वजनिक क्षमायाचना:</strong> ट्रस्ट की बैठक में अन्य सदस्यों के समक्ष क्षमायाचना</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <h4 className="text-lg font-semibold text-purple-700 mb-3">गंभीर उल्लंघन के लिए</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>स्थायी निष्कासन:</strong> ट्रस्ट से स्थायी निष्कासन और सभी अधिकारों का समाप्त होना</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>सुरक्षा जमा राशि जब्त:</strong> नुकसान की भरपाई के लिए जमानत राशि का जब्त होना</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>कानूनी कार्रवाई:</strong> आपराधिक मामलों में पुलिस/अदालत में शिकायत दर्ज करना</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>क्षतिपूर्ति की मांग:</strong> वित्तीय या अन्य नुकसान की भरपाई की मांग</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>काली सूची में डालना:</strong> भविष्य में किसी भी पद या सदस्यता के लिए अयोग्य घोषित करना</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
                        <h3 className="text-lg font-semibold text-amber-800 mb-2">अपील प्रक्रिया</h3>
                        <p className="text-gray-700 mb-3">
                          किसी भी अनुशासनात्मक कार्रवाई के विरुद्ध अपील की जा सकती है। अपील प्रक्रिया निम्न प्रकार है:
                        </p>
                        <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                          <li>
                            अनुशासनात्मक निर्णय मिलने के 15 दिनों के भीतर लिखित अपील संस्थापक अध्यक्ष को प्रस्तुत की जा सकती है।
                          </li>
                          <li>
                            अपील में निर्णय के विरुद्ध ठोस कारण और साक्ष्य प्रस्तुत करने होंगे।
                          </li>
                          <li>
                            एक विशेष अपील समिति गठित की जाएगी, जिसमें मूल जांच समिति के सदस्य शामिल नहीं होंगे।
                          </li>
                          <li>
                            अपील समिति 30 दिनों के भीतर निर्णय देगी, जो अंतिम और बाध्यकारी होगा।
                          </li>
                          <li>
                            अपील के दौरान, मूल अनुशासनात्मक कार्रवाई प्रभावी रहेगी, जब तक कि अपील समिति द्वारा स्थगित न की जाए।
                          </li>
                        </ol>
                      </div>
                      
                      <div className="bg-indigo-50 rounded-lg p-6 shadow-md">
                        <h3 className="text-lg font-semibold text-indigo-800 mb-3">निष्पक्षता और सुरक्षा</h3>
                        <p className="text-gray-700 mb-4">
                          जवाबदेही प्रक्रिया की निष्पक्षता और सत्यनिष्ठा सुनिश्चित करने के लिए:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-indigo-700 mb-2">रिपोर्टकर्ता का संरक्षण</h4>
                            <ul className="space-y-1 text-gray-700">
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                                <span>सद्भावना से रिपोर्ट करने वालों के विरुद्ध कोई प्रतिशोधात्मक कार्रवाई नहीं की जाएगी</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                                <span>रिपोर्टकर्ता की पहचान गोपनीय रखी जाएगी</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                                <span>झूठी रिपोर्ट के मामले में कार्रवाई की जाएगी</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-indigo-700 mb-2">निष्पक्ष प्रक्रिया</h4>
                            <ul className="space-y-1 text-gray-700">
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                                <span>जांच समिति में किसी भी पक्षपात वाले सदस्य को शामिल नहीं किया जाएगा</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                                <span>दोनों पक्षों को सुने बिना कोई निर्णय नहीं लिया जाएगा</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                                <span>सभी प्रक्रियाओं का विस्तृत रिकॉर्ड रखा जाएगा</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                        <h3 className="text-lg font-semibold text-red-800 mb-2">जवाबदेही प्रक्रिया का उल्लंघन</h3>
                        <p className="text-gray-700 mb-4">
                          जवाबदेही प्रक्रिया की अखंडता बनाए रखना अत्यंत महत्वपूर्ण है। निम्नलिखित कृत्य स्वयं में गंभीर उल्लंघन माने जाएंगे:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>
                              जांच प्रक्रिया में बाधा डालना या प्रभावित करने का प्रयास करना
                            </span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>
                              गवाहों को धमकाना, प्रभावित करना या उन पर दबाव डालना
                            </span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>
                              झूठे साक्ष्य या गवाही देना
                            </span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>
                              जांच से संबंधित दस्तावेजों या साक्ष्यों को नष्ट करना या छिपाना
                            </span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>
                              जांच प्रक्रिया के दौरान गोपनीयता का उल्लंघन करना
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Final Policy Statement and Signatures */}
                    <div className="mt-12 pt-8 border-t border-purple-200">
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-bold text-indigo-800 mb-4 text-center">विधिक अनुमोदन एवं प्रभावी तिथि</h3>
                        
                        <p className="text-gray-700 mb-6 text-center">
                          यह माँ भगवती चैरिटेबल ट्रस्ट सदस्य/पदाधिकारी नीति एवं आचार संहिता दिनांक 29 अप्रैल, 2024 को आयोजित बोर्ड बैठक में सर्वसम्मति से अनुमोदित की गई है।
                          यह नीति तत्काल प्रभाव से लागू है और अगले संशोधन तक वैध रहेगी। इस दस्तावेज़ में निहित सभी नियम और प्रावधान ट्रस्ट के सभी मौजूदा और भविष्य के 
                          सदस्यों पर बाध्यकारी हैं।
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
                          <div className="text-center">
                            <div className="h-px w-32 bg-indigo-300 mx-auto mb-2"></div>
                            <p className="font-medium text-indigo-800">श्री दिग्विजय सिंह तोमर</p>
                            <p className="text-gray-600">अध्यक्ष</p>
                          </div>
                          
                          <div className="text-center">
                            <div className="h-px w-32 bg-indigo-300 mx-auto mb-2"></div>
                            <p className="font-medium text-indigo-800">श्री नरेंद्र कुमार</p>
                            <p className="text-gray-600">संस्थापक अध्यक्ष</p>
                          </div>
                          
                          <div className="text-center">
                            <div className="h-px w-32 bg-indigo-300 mx-auto mb-2"></div>
                            <p className="font-medium text-indigo-800">श्री सूरज सिंह</p>
                            <p className="text-gray-600">महासचिव</p>
                          </div>
                          
                          <div className="text-center">
                            <div className="h-px w-32 bg-indigo-300 mx-auto mb-2"></div>
                            <p className="font-medium text-indigo-800">श्री लव कुश</p>
                            <p className="text-gray-600">कोषाध्यक्ष</p>
                          </div>
                        </div>
                        
                        <div className="mt-8 text-center">
                          <div className="inline-block rounded-full p-3 bg-indigo-100 mb-2">
                            <Shield className="h-8 w-8 text-indigo-600" />
                          </div>
                          <p className="text-sm text-gray-500">
                            माँ भगवती चैरिटेबल ट्रस्ट • भद्रोली, बाह, आगरा, उत्तर प्रदेश - 283113
                          </p>
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

export default ModernMemberPolicy;