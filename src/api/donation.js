import { VITE_API_BASE_URL } from '../../constants/index';

export const getCertificateDataByPaymentID = async (payment_id) => {
    if (!payment_id) {
      throw new Error('Payment ID is required');
    }
  
    try {
      const response = await fetch(`${VITE_API_BASE_URL}/donation/certificate/${payment_id}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
  
      // Check if the response is OK
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const errorMessage = errorData?.message || `Failed to fetch certificate data. Status: ${response.status}`;
        throw new Error(errorMessage);
      }
  
      // Parse and return JSON data
      const certificateData = await response.json();
      return certificateData;
  
    } catch (error) {
      throw new Error(`Error fetching certificate data: ${error.message}`);
    }
};
  