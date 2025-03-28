import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Users, Check, AlertCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.phone && !/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after success
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
          setSubmitSuccess(false);
        }, 3000);
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };

  // Leadership team data
  const leadershipTeam = [
    // {
    //   name: "Digvijay Singh Tomar",
    //   position: "Chairman",
    //   phone: "9837542585",
    //   image: "/assets/Dijvijay.jpg"
    // },
    {
      name: "Narendra Kumar",
      position: "Tenured Chairman",
      phone: "8006666006",
      image: "/assets/narendra.jpg"
    },
    {
      name: "Suraj Singh",
      position: "General Secretary",
      phone: "7060186065",
      image: "/assets/suraj.jpg"
    },
    {
      name: "Lova Kush",
      position: "Treasurer",
      phone: "8273511939",
      image: "/assets/Lovakush.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 md:py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-orange-100">
            We'd love to hear from you! Reach out with questions, feedback, or to learn more about our charitable initiatives.
          </p>
        </div>
        
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="none">
            <path d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" fill="#fff"/>
          </svg>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10 md:-mt-16 relative z-10">
        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* <div className="bg-white p-6 rounded-xl shadow-lg transition-transform hover:-translate-y-1 duration-300">
            <Phone className="w-8 h-8 text-orange-500 mb-4" />
            <h3 className="font-semibold text-lg mb-3 text-gray-800">Phone</h3>
            <div className="space-y-2 text-gray-600">
              <p>+91 9837542585</p>
              <p>+91 8006666006</p>
              <p>+91 7060186065</p>
              <p>+91 8273511939</p>
            </div>
          </div> */}
          
          <div className="bg-white p-6 rounded-xl shadow-lg transition-transform hover:-translate-y-1 duration-300">
            <Mail className="w-8 h-8 text-orange-500 mb-4" />
            <h3 className="font-semibold text-lg mb-3 text-gray-800">Email</h3>
            <p className="text-gray-600 break-words">charity.mbct@gmail.com</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg transition-transform hover:-translate-y-1 duration-300">
            <MapPin className="w-8 h-8 text-orange-500 mb-4" />
            <h3 className="font-semibold text-lg mb-3 text-gray-800">Address</h3>
            <div className="text-gray-600">
              <p>Bhadroli, Bah</p>
              <p>Agra, UP - 283113</p>
              <p className="mt-2 text-sm text-orange-500 cursor-pointer hover:underline">Get Directions →</p>
            </div>
          </div>
        </div>
        
        {/* Leadership Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Users className="w-7 h-7 text-orange-500 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">Our Leadership Team</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="bg-orange-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    style={{ objectPosition: "center 20%" }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">{member.name}</h3>
                  <p className="text-orange-600 text-sm mb-2">{member.position}</p>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href={`tel:+91${member.phone}`} className="hover:text-orange-500 transition-colors">
                      +91 {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact Form and Map */}
        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-3 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <Send className="w-6 h-6 mr-3 text-orange-500" />
              Send us a Message
            </h2>
            
            {submitSuccess ? (
              <div className="flex flex-col items-center justify-center py-10 space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-medium text-gray-800">Message Sent Successfully!</h3>
                <p className="text-gray-600 text-center">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                        errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                        errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                        errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Your Phone Number"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                      placeholder="Message Subject"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                      errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Your Message"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-colors duration-300 font-medium flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
          {/* Map or Additional Contact Info */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-orange-500" />
                Visit Us
              </h2>
              
              <div className="aspect-video rounded-lg overflow-hidden mb-6 border border-gray-200">
                {/* Embed Google Map iframe - Replace with actual embed code */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.7083255733493!2d78.18683627546818!3d27.501040976228153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39773f03b5730c1f%3A0x9fcfffa33bed81c5!2sBhadroli%2C%20Uttar%20Pradesh%20283113!5e0!3m2!1sen!2sin!4v1711585824035!5m2!1sen!2sin" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MBCT Location"
                  className="w-full h-full"
                ></iframe>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Visiting Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;