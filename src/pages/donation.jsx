import React, { useState, useEffect } from 'react';
import {createOrder, verifyPayment, saveDonationDetails, paymentDetailsByID } from '../api/payment';
import { toast } from 'react-toastify'; 
import { VITE_RAZORPAY_KEY_ID } from '../../constants/index';
import { useNavigate } from 'react-router-dom';



const DonationForm = () => {
  const [formData, setFormData] = useState({
    donorType: 'Indian',
    donorName: '',
    purpose: '',
    panNumber: '',
    donationAmount: '',
    addressLine1: '',
    addressLine2: '',
    country: 'India',
    state: '',
    district: '',
    pincode: '',
    email: '',
    mobile: ''
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormTouched, setIsFormTouched] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateMobile = (mobile) => {
    return /^[0-9]{10}$/.test(mobile);
  };

  const validatePAN = (pan) => {
    return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan);
  };

  const validatePincode = (pincode) => {
    return /^[0-9]{6}$/.test(pincode);
  };

  const validateForm = () => {
    const newErrors = {};
    
      if (!formData.donorName.trim()) newErrors.donorName = 'Donor name is required';
      if (!formData.purpose) newErrors.purpose = 'Purpose is required';
   
      if (!formData.donationAmount || Number(formData.donationAmount) < 10) {
        newErrors.donationAmount = 'Minimum donation amount is ₹10';
      }
   
      if (!formData.addressLine1.trim()) newErrors.addressLine1 = 'Address is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.district) newErrors.district = 'District is required';
      
      if (!formData.pincode) {
        newErrors.pincode = 'Pincode is required';
      } else if (!validatePincode(formData.pincode)) {
        newErrors.pincode = 'Invalid pincode format';
      }
   
    //   if (!formData.email) {
    //     newErrors.email = 'Email is required';
    //   } else if (!validateEmail(formData.email)) {
    //     newErrors.email = 'Invalid email format';
    //   }
   
      if (!formData.mobile) {
        newErrors.mobile = 'Mobile number is required';
      } else if (!validateMobile(formData.mobile)) {
        newErrors.mobile = 'Invalid mobile number';
      }
   
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
        const isValid = validateForm();
        setIsFormValid(isValid);
  }, [formData]);

  const handleInputChange = (e) => {
        const { name, value } = e.target;
        setIsFormTouched(true);
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
  
    try {
      const requestData = {
        amount: Number(formData.donationAmount),
        name: formData.donorName,
        email: formData.email,
        mobile: formData.mobile
      };
  
      const data = await createOrder(requestData);
  
      if (!data.success || !data.order) {
        throw new Error('Invalid response structure from server');
      }
  
      const options = {
        key: VITE_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: 'INR',
        name: "Maa Bhagwati Charitable Trust",
        description: "Thanks for your donation",
        order_id: data.order.id,
        prefill: {
          name : formData.donorName,
          email: formData.email,
          contact: formData.mobile,
        },
        handler: async function (razorpayResponse) {
          try {
            const verifyData = await verifyPayment({
              razorpay_payment_id: razorpayResponse.razorpay_payment_id,
              razorpay_signature: razorpayResponse.razorpay_signature,
              order_id : data.order.id,
            });
            if (verifyData.success) {
              const payment_details = await paymentDetailsByID(razorpayResponse.razorpay_payment_id);
              if(payment_details.success){
                await saveDonationDetails(payment_details.data, formData);
                toast.success('🎉 Payment Successful! Thank you for your donation.', {
                  position: 'top-center',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'colored',
                });
                navigate('/donation-certificate', { state: { payment_id: razorpayResponse.razorpay_payment_id } });
                handleReset();
              }
            } else {
              throw new Error(verifyData.message || 'Payment verification failed');
            }
          } catch (error) {
            console.error('Verification error:', error);
            toast.error('Payment verification failed. Please contact support.', {
              position: 'top-center',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            });
          }
        },
        modal: {
          ondismiss: function() {
            console.log('Payment window closed');
          }
        },
        theme: {
          color: "#F37254"
        }
      };
  
      const razorpay = new window.Razorpay(options);
      razorpay.open();
  
    } catch (error) {
      console.error('Payment error:', error);
      let errorMessage = 'Payment initialization failed';
      
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      alert(errorMessage);
    }
  };

  const handleReset = () => {
      setFormData({
        donorType: 'Indian',
        donorName: '',
        purpose: '',
        panNumber: '',
        donationAmount: '',
        addressLine1: '',
        addressLine2: '',
        country: 'India',
        state: '',
        district: '',
        pincode: '',
        email: '',
        mobile: ''
      });
      setErrors({});
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="max-w-3xl mx-auto p-4 sm:p-6">
        <h2 className="text-orange-500 text-lg border-b border-orange-300 pb-2 mb-6 font-semibold">
          Donation
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Donor Type */}
          <div className="mb-4">
            <label className="font-medium text-gray-800">Donor Type</label>
            <div className="flex gap-6 mt-1">
              <label className="flex items-center text-gray-800">
                <input
                  type="radio"
                  name="donorType"
                  checked={formData.donorType === 'Indian'}
                  onChange={() => setFormData(prev => ({ ...prev, donorType: 'Indian' }))}
                  className="mr-2 accent-orange-500"
                />
                Indian
              </label>
              <label className="flex items-center text-gray-800">
                <input
                  type="radio"
                  name="donorType"
                  checked={formData.donorType === 'Non-Indian'}
                  onChange={() => setFormData(prev => ({ ...prev, donorType: 'Non-Indian' }))}
                  className="mr-2 accent-orange-500"
                />
                Non-Indian
              </label>
            </div>
          </div>

          {/* Main Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium text-gray-800 mb-1">
                Name of Donor/ Organization
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="donorName"
                value={formData.donorName}
                onChange={handleInputChange}
                placeholder="Enter Donor Name"
                className={`w-full px-3 py-2 border rounded bg-white text-gray-800 placeholder-gray-500 ${
                  errors.donorName ? 'border-red-500' : ''
                }`}
              />
              {errors.donorName && (
                <p className="text-red-500 text-sm mt-1">{errors.donorName}</p>
              )}
            </div>

            <div>
              <label className="block font-medium text-gray-800 mb-1">
                Purpose Of Donation
                <span className="text-red-500">*</span>
              </label>
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded bg-white text-gray-800 ${
                  errors.purpose ? 'border-red-500' : ''
                }`}
              >
                <option value="">Select Purpose of Donation</option>
                <option value="Khatu Shyam Temple Project">Khatu Shyam Temple Project</option>
              </select>
              {errors.purpose && (
                <p className="text-red-500 text-sm mt-1">{errors.purpose}</p>
              )}
            </div>

            <div>
              <label className="block font-medium text-gray-800 mb-1">
                Donor PAN Number
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleInputChange}
                placeholder="Enter Pan Number"
                className={`w-full px-3 py-2 border rounded bg-white text-gray-800 placeholder-gray-500 ${
                  errors.panNumber ? 'border-red-500' : ''
                }`}
              />
              {errors.panNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.panNumber}</p>
              )}
            </div>
          </div>

          {/* Donation Amount */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">
              Donation Amount (₹)
              <span className="text-red-500">*</span>
            </label>
            <div className="max-w-md">
              <input
                type="number"
                name="donationAmount"
                value={formData.donationAmount}
                onChange={handleInputChange}
                placeholder="Enter Donation Amount"
                min="10"
                className={`w-full px-3 py-2 border rounded bg-white text-gray-800 placeholder-gray-500 ${
                  errors.donationAmount ? 'border-red-500' : ''
                }`}
              />
              {errors.donationAmount ? (
                <p className="text-red-500 text-sm mt-1">{errors.donationAmount}</p>
              ) : (
                <p className="text-sm text-gray-600 mt-1">(Minimum Contribution accepted is ₹10)</p>
              )}
            </div>
          </div>

          {/* Address Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-800 mb-1">
                Address Line 1
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleInputChange}
                placeholder="House/Flat No., Apartment/Building Name"
                className={`w-full px-3 py-2 border rounded bg-white text-gray-800 placeholder-gray-500 ${
                  errors.addressLine1 ? 'border-red-500' : ''
                }`}
              />
              {errors.addressLine1 && (
                <p className="text-red-500 text-sm mt-1">{errors.addressLine1}</p>
              )}
            </div>
            <div>
              <label className="block font-medium text-gray-800 mb-1">
                Address Line 2
              </label>
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleInputChange}
                placeholder="Street Address, Landmark (Optional)"
                className="w-full px-3 py-2 border rounded bg-white text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Location Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block font-medium text-gray-800 mb-1">
                Country
                <span className="text-red-500">*</span>
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded bg-white text-gray-800"
              >
                <option value="India">India</option>
              </select>
            </div>
            <div>
              <label className="block font-medium text-gray-800 mb-1">
                State
                <span className="text-red-500">*</span>
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded bg-white text-gray-800 ${
                  errors.state ? 'border-red-500' : ''
                }`}
              >
                <option value="">Select State</option>
                <option value="andhra_pradesh">Andhra Pradesh</option>
                <option value="arunachal_pradesh">Arunachal Pradesh</option>
                <option value="assam">Assam</option>
                <option value="bihar">Bihar</option>
                <option value="chhattisgarh">Chhattisgarh</option>
                <option value="goa">Goa</option>
                <option value="gujarat">Gujarat</option>
                <option value="haryana">Haryana</option>
                <option value="himachal_pradesh">Himachal Pradesh</option>
                <option value="jharkhand">Jharkhand</option>
                <option value="karnataka">Karnataka</option>
                <option value="kerala">Kerala</option>
                <option value="madhya_pradesh">Madhya Pradesh</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="manipur">Manipur</option>
                <option value="meghalaya">Meghalaya</option>
                <option value="mizoram">Mizoram</option>
                <option value="nagaland">Nagaland</option>
                <option value="odisha">Odisha</option>
                <option value="punjab">Punjab</option>
                <option value="rajasthan">Rajasthan</option>
                <option value="sikkim">Sikkim</option>
                <option value="tamil_nadu">Tamil Nadu</option>
                <option value="telangana">Telangana</option>
                <option value="tripura">Tripura</option>
                <option value="uttar_pradesh">Uttar Pradesh</option>
                <option value="uttarakhand">Uttarakhand</option>
                <option value="west_bengal">West Bengal</option>
                {/* Union Territories */}
                <option value="andaman_and_nicobar_islands">Andaman and Nicobar Islands</option>
                <option value="chandigarh">Chandigarh</option>
                <option value="dadra_and_nagar_haveli_and_daman_and_diu">Dadra and Nagar Haveli and Daman and Diu</option>
                <option value="delhi">Delhi</option>
                <option value="jammu_and_kashmir">Jammu and Kashmir</option>
                <option value="ladakh">Ladakh</option>
                <option value="lakshadweep">Lakshadweep</option>
                <option value="puducherry">Puducherry</option>
              </select>
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">{errors.state}</p>
              )}
            </div>
            <div>
            <label className="block font-medium text-gray-800 mb-1">
                District
                <span className="text-red-500">*</span>
            </label>
            <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleInputChange}
                placeholder="Enter District"
                className={`w-full px-3 py-2 border rounded bg-white text-gray-800 placeholder-gray-500 ${
                errors.district ? 'border-red-500' : ''
                }`}
            />
            {errors.district && (
                <p className="text-red-500 text-sm mt-1">{errors.district}</p>
            )}
            </div>
            <div>
              <label className="block font-medium text-gray-800 mb-1">
                Pincode
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                placeholder="Enter Pincode"
                maxLength="6"
                className={`w-full px-3 py-2 border rounded bg-white text-gray-800 placeholder-gray-500 ${
                  errors.pincode ? 'border-red-500' : ''
                }`}
              />
              {errors.pincode && (
                <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>
              )}
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-800 mb-1">
                Email ID
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter Email ID"
                className={`w-full px-3 py-2 border rounded bg-white text-gray-800 placeholder-gray-500 ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block font-medium text-gray-800 mb-1">
                Mobile Number
                <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Enter Mobile Number"
                maxLength="10"
                className={`w-full px-3 py-2 border rounded bg-white text-gray-800 placeholder-gray-500 ${
                  errors.mobile ? 'border-red-500' : ''
                }`}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2 bg-gray-200 rounded text-gray-700 hover:bg-gray-300 font-medium"
            >
              RESET
            </button>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`px-6 py-2 rounded text-white font-medium ${
                isFormValid 
                ? 'bg-orange-400 hover:bg-orange-500' 
                : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              DONATE
            </button>
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default DonationForm;