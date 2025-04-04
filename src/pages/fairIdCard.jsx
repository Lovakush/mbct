import React, { useState, useRef } from 'react';
import { 
  Calendar, 
  MapPin, 
  Phone, 
  Shield, 
  BadgeCheck, 
  Download, 
  Clipboard, 
  Camera,
  Sparkles
} from 'lucide-react';
import html2canvas from 'html2canvas';
import { QRCodeSVG } from 'qrcode.react';

  // QR Code generation function
const generateQRCode = (member) => {
    // In a real implementation, we would encode a URL that points to a verification page
    // For example: https://mbct.org/verify?id=BM-2025-1234
    // When scanned, this URL would open a page with member details and verification status
    
    // Format the data that would be encoded in the QR code
    const dataString = JSON.stringify({
      trust: "Maa Bhagwati Charitable Trust",
      event: "Bhadrauli Mela 2025",
      id: member.idNumber || "BM-2025-XXXX",
      name: member.name || "Name not provided",
      position: member.position || "Position not specified",
      zone: member.zone || "Zone not assigned",
      verified: true
    });
    
    // In a real implementation, we would generate an actual QR code with this data
    // For now, we're using a visual representation
    return (
      <div className="flex items-center justify-center h-full w-full relative">
        <QrCode className="w-full h-full text-gray-800" />
        {/* Hidden data that would be encoded in the actual QR code */}
        <div className="absolute text-xs opacity-0">{dataString}</div>
      </div>
    );
  };

const FairIDCard = () => {
  const [cardType, setCardType] = useState('trustee'); // 'trustee' or 'volunteer'
  const [cardInfo, setCardInfo] = useState({
    name: '',
    position: '',
    idNumber: '',
    contactNumber: '',
    zone: 'मुख्य मंडप', // Default zone assignment
    photo: null
  });
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const cardRef = useRef(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({
      ...cardInfo,
      [name]: value
    });
  };

  // Handle photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewPhoto(reader.result);
        setCardInfo({
          ...cardInfo,
          photo: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Generate random ID number
  const generateID = () => {
    const prefix = cardType === 'trustee' ? 'BM-TR-' : 'BM-SV-';
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    const year = new Date().getFullYear();
    const generatedID = `${prefix}${year}-${randomNumber}`;
    
    setCardInfo({
      ...cardInfo,
      idNumber: generatedID
    });
  };

  // Set example data
  const setExampleData = () => {
    if (cardType === 'trustee') {
      setCardInfo({
        ...cardInfo,
        name: 'Narendra Kumar',
        position: 'मेला प्रबंधक',
        contactNumber: '8006666006',
        zone: 'मुख्य मंडप'
      });
    } else {
      setCardInfo({
        ...cardInfo,
        name: 'Ajay Pal',
        position: 'मेला सहयोगी',
        contactNumber: '8445285063',
        zone: 'प्रवेश द्वार'
      });
    }
  };

  // Download ID card as image
  const downloadCard = () => {
    if (cardRef.current) {
      html2canvas(cardRef.current).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = imgData;
        downloadLink.download = `${cardInfo.name || 'fair'}-id-card.png`;
        downloadLink.click();
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
                      <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-3">
            <img src="/api/placeholder/100/100" alt="Maa Bhagwati" className="h-16 w-16 rounded-full border-2 border-orange-500 shadow-lg object-cover" />
          </div>
          <h1 className="text-3xl font-bold text-orange-800 mb-2">भद्रौली मेला ID कार्ड</h1>
          <p className="text-lg text-orange-600">माँ भगवती चैरिटेबल ट्रस्ट - मेला 2025</p>
          <div className="h-1 w-32 bg-orange-500 mx-auto mt-2"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* ID Card Form */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
              <Clipboard className="mr-2 h-5 w-5" />
              ID कार्ड विवरण
            </h2>

            <div className="space-y-4">
              {/* Card Type */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">कार्ड प्रकार</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="cardType"
                      value="trustee"
                      checked={cardType === 'trustee'}
                      onChange={() => setCardType('trustee')}
                      className="mr-2 text-orange-500 focus:ring-orange-500"
                    />
                    <span>ट्रस्टी</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="cardType"
                      value="volunteer"
                      checked={cardType === 'volunteer'}
                      onChange={() => setCardType('volunteer')}
                      className="mr-2 text-orange-500 focus:ring-orange-500"
                    />
                    <span>स्वयंसेवक</span>
                  </label>
                </div>
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">नाम</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={cardInfo.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="पूरा नाम दर्ज करें"
                />
              </div>

              {/* Position */}
              <div>
                <label htmlFor="position" className="block text-gray-700 font-medium mb-2">पद</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={cardInfo.position}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="पद दर्ज करें"
                />
              </div>

              {/* ID Number */}
              <div>
                <label htmlFor="idNumber" className="block text-gray-700 font-medium mb-2">
                  ID नंबर
                  <button 
                    onClick={generateID} 
                    className="ml-2 text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded hover:bg-orange-200"
                  >
                    जनरेट करें
                  </button>
                </label>
                <input
                  type="text"
                  id="idNumber"
                  name="idNumber"
                  value={cardInfo.idNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="ID नंबर दर्ज करें"
                />
              </div>

              {/* Contact Number */}
              <div>
                <label htmlFor="contactNumber" className="block text-gray-700 font-medium mb-2">संपर्क नंबर</label>
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  value={cardInfo.contactNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="मोबाइल नंबर दर्ज करें"
                />
              </div>

              {/* Zone Assignment */}
              <div>
                <label htmlFor="zone" className="block text-gray-700 font-medium mb-2">कार्य क्षेत्र</label>
                <select
                  id="zone"
                  name="zone"
                  value={cardInfo.zone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="मुख्य मंडप">मुख्य मंडप</option>
                  <option value="प्रवेश द्वार">प्रवेश द्वार</option>
                  <option value="भंडारा क्षेत्र">भंडारा क्षेत्र</option>
                  <option value="प्रसाद वितरण">प्रसाद वितरण</option>
                  <option value="सुरक्षा व्यवस्था">सुरक्षा व्यवस्था</option>
                  <option value="पार्किंग व्यवस्था">पार्किंग व्यवस्था</option>
                </select>
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">फोटो अपलोड करें</label>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-gray-100 border border-gray-300 rounded-md overflow-hidden flex items-center justify-center">
                    {previewPhoto ? (
                      <img 
                        src={previewPhoto} 
                        alt="Preview" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Camera className="h-8 w-8 text-gray-400" />
                    )}
                  </div>
                  <label className="flex-1 cursor-pointer">
                    <span className="block px-4 py-2 bg-orange-100 text-orange-700 rounded text-center hover:bg-orange-200">
                      फोटो चुनें
                    </span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handlePhotoUpload} 
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <button
                  onClick={setExampleData}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                >
                  उदाहरण डेटा सेट करें
                </button>
                <button
                  onClick={downloadCard}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center"
                  disabled={!cardInfo.name}
                >
                  <Download className="h-4 w-4 mr-1" />
                  ID कार्ड डाउनलोड करें
                </button>
              </div>
            </div>
          </div>

          {/* ID Card Preview */}
          <div>
            <h2 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
              <Camera className="mr-2 h-5 w-5" />
              ID कार्ड प्रीव्यू
            </h2>
            
            {/* ID Card Design */}
            <div ref={cardRef}>
              <div className={`w-full max-w-[350px] mx-auto mb-8 ${cardType === 'trustee' ? 'bg-gradient-to-r from-orange-50 to-amber-100' : 'bg-gradient-to-r from-blue-50 to-indigo-100'} p-1 rounded-xl shadow-xl`}>
                <div className="bg-white rounded-lg overflow-hidden">
                  {/* Header - Improved Design */}
                  <div className={`${cardType === 'trustee' ? 'bg-gradient-to-r from-orange-500 to-amber-600' : 'bg-gradient-to-r from-blue-500 to-indigo-600'} relative text-white overflow-hidden`}>
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                      <Sparkles className="w-full h-full" />
                    </div>
                    
                    {/* Top Banner */}
                    <div className="bg-gradient-to-r from-yellow-500 to-amber-500 h-2"></div>
                    
                    <div className="p-4 relative z-10">
                      <div className="flex items-center">
                        <div className="w-14 h- bg-white rounded-full flex items-center justify-center mr-3 p-0.5 border-2 border-yellow-300 shadow-lg">
                          <img 
                            src="/assets/Bhadroli_devi.jpg" 
                            alt="Maa Bhagwati" 
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">भद्रौली मेला 2025</h3>
                          <p className="text-xs text-yellow-200">माँ भगवती चैरिटेबल ट्रस्ट द्वारा आयोजित</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-4">
                    <div className="flex">
                      {/* Photo */}
                      <div className="w-24 h-28 mr-4 border-2 border-gray-300 rounded-md overflow-hidden bg-gray-50 flex items-center justify-center">
                        {previewPhoto ? (
                          <img 
                            src={previewPhoto} 
                            alt="ID Photo" 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Camera className="h-10 w-10 text-gray-300" />
                        )}
                      </div>
                      
                      {/* Details */}
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-800">{cardInfo.name || 'पूरा नाम'}</h3>
                        <p className={`text-sm ${cardType === 'trustee' ? 'text-orange-600' : 'text-blue-600'} font-medium mb-2`}>
                          {cardInfo.position || 'पद का नाम'}
                        </p>
                        
                        <div className="space-y-1 text-sm text-gray-600">
                          <p className="flex items-center">
                            <Phone className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            <span>{cardInfo.contactNumber || '+91 XXXXXXXXXX'}</span>
                          </p>
                          <p className="flex items-center">
                            <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            <span>
                              कार्य क्षेत्र: {cardInfo.zone || 'मुख्य मंडप'}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* ID Number and QR */}
                    <div className="flex mt-4 pt-3 border-t border-gray-200">
                      <div className="flex-1">
                        <p className="text-xs text-gray-500">ID नंबर</p>
                        <p className="font-mono text-sm font-bold">{cardInfo.idNumber || 'MBCT-XXX-2025'}</p>
                        
                        <div className="mt-2 flex items-center">
                          <Shield className={`h-4 w-4 ${cardType === 'trustee' ? 'text-orange-600' : 'text-blue-600'} mr-1`} />
                          <span className={`text-xs font-medium ${cardType === 'trustee' ? 'text-orange-600' : 'text-blue-600'}`}>
                            {cardType === 'trustee' ? 'मेला प्रबंधन समिति' : 'मेला सहयोगी'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="w-20 h-20 relative">
                        <div className="h-full w-full flex items-center justify-center">
                          <QRCodeSVG 
                            value={`https://mbct.shop/`}
                            size={80}
                            level={"H"}
                            includeMargin={true}
                          />
                        </div>
                        {/* Moved badge outside of QR code area */}
                        <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-0.5 shadow-md">
                          <BadgeCheck className={`h-5 w-5 ${cardType === 'trustee' ? 'text-orange-500' : 'text-blue-500'}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div className={`${cardType === 'trustee' ? 'bg-orange-50' : 'bg-blue-50'} px-4 py-2 text-center text-xs`}>
                    <div className="flex items-center justify-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>भद्रौली, बाह, आगरा, उत्तर प्रदेश - 283113</span>
                    </div>
                    <div className="mt-1 pt-1 border-t border-gray-200 text-xs flex items-center justify-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>Mela Duration: 03 Apr to 04 Apr 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center text-gray-500 text-sm mt-2">
              <p>ID कार्ड को डाउनलोड करने के लिए ऊपर दिए गए बटन का उपयोग करें</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairIDCard;