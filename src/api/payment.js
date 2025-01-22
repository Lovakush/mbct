// src/api/payment.js

import { VITE_API_BASE_URL } from '../../constants/index';


export const createOrder =  async(orderData) => {
    try {
      const response = await fetch(`${VITE_API_BASE_URL}/payment/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Create order error:', error);
      throw error;
    }
}

export const verifyPayment = async (paymentData) => {
    try {
      const response = await fetch(`${VITE_API_BASE_URL}/payment/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(paymentData)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `Verification failed with status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Verify payment error:', error);
      throw error;
    }
}

// Function to save donation details
export const saveDonationDetails = async (payment_data, donor_data) => {
    try {
      const response = await fetch(`${VITE_API_BASE_URL}/donations/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            payment_data,
            donor_data
        })
      });
  
      if (!response.ok) {
        throw new Error('Failed to save donation details');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error saving donation:', error);
      throw error;
    }
};

export const paymentDetailsByID = async (payment_id) => {
    if (!payment_id) {
      throw new Error('Payment ID is required');
    }
    try {
      const response = await fetch(`${VITE_API_BASE_URL}/payment/details/${payment_id}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
  
      // Check if the response is OK
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const errorMessage = errorData?.message || `Failed to fetch payment details. Status: ${response.status}`;
        throw new Error(errorMessage);
      }
  
      // Parse and return JSON data
      const payment_data = await response.json();
      return payment_data;
  
    } catch (error) {
      throw new Error(`Error fetching payment details: ${error.message}`);
    }
};


export const paymentCallback = async (razorpayResponse) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = razorpayResponse;

  try {
    const response = await fetch(`${VITE_API_BASE_URL}/payment/callback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      }),
    });

    const data = await response.json();

    if (data.success) {
      return { success: true };  // If backend responds successfully, proceed further
    } else {
      throw new Error(data.message || 'Payment callback failed');
    }
  } catch (error) {
    console.error('Error in paymentCallback:', error);
    return { success: false, message: error.message || 'Payment callback failed' };
  }
};

  
// check health of the API
export const checkHealth = async () => {
  try {
    const response = await axios.get('https://mbct-api-services-latest.onrender.com/healthz');
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error during health check:', error);
    throw error; // Re-throw the error for handling in the caller
  }
};