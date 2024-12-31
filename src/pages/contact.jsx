import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

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
      // Handle form submission here
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      
      {/* Contact Information Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-orange-50 p-6 rounded-lg shadow-sm">
          <Phone className="w-8 h-8 text-orange-500 mb-4" />
          <h3 className="font-semibold text-lg mb-2">Phone</h3>
          <p className="text-gray-600">+91 8006666006</p>
          <p className="text-gray-600">+91 7060186065</p>
          <p className="text-gray-600">+91 8273511939</p>
        </div>
        
        <div className="bg-orange-50 p-6 rounded-lg shadow-sm">
          <Mail className="w-8 h-8 text-orange-500 mb-4" />
          <h3 className="font-semibold text-lg mb-2">Email</h3>
          <p className="text-gray-600">charity.mbct@gmail.com</p>
          {/* <p className="text-gray-600">charity.mbct@gmail.com</p> */}
        </div>
        
        <div className="bg-orange-50 p-6 rounded-lg shadow-sm">
          <MapPin className="w-8 h-8 text-orange-500 mb-4" />
          <h3 className="font-semibold text-lg mb-2">Address</h3>
          <p className="text-gray-600">Bhadroli, Bah</p>
          <p className="text-gray-600">Agra, UP - 283113</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your Phone Number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Message Subject"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="5"
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Your Message"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 px-6 rounded hover:bg-orange-600 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;