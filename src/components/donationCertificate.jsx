import jsPDF from "jspdf";
import React, { useState, useEffect } from "react";
import { getCertificateDataByPaymentID } from "../api/donation";
import amountToWords from "../utils/amountTowords";
import { useLocation } from 'react-router-dom';

const DonationCertificate = () => {
  const location = useLocation();
  const { payment_id } = location.state || {};
  // const payment_id = "pay_PmKfGA0S5ODHow";
  const [donationDetails, setDonationDetails] = useState(null);

  useEffect(() => {
    const fetchDonationDetails = async () => {
      try {
        const data = await getCertificateDataByPaymentID(payment_id);
        setDonationDetails(data);
      } catch (error) {
        console.error("Error fetching donation details:", error);
      }
    };
    fetchDonationDetails();
  }, [payment_id]);

  const generatePDF = () => {
    if (!donationDetails) return;

    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    // Certificate border
    doc.setDrawColor(255, 215, 0); // Gold
    doc.setLineWidth(3);
    doc.rect(10, 10, 277, 190);

    // Title and organization details
    doc.setFont("times", "bold");
    doc.setFontSize(26);
    doc.setTextColor(255, 0, 0); // Red
    doc.text("Maa Bhagwati Charitable Trust", 148.5, 30, { align: "center" });

    doc.setFont("helvetica", "italic");
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0); // Black
    doc.text("Bhadroli, Bhadrauli, Bah, Agra, Uttar Pradesh - 283113, PAN: AAJTM3961M", 148.5, 40, { align: "center" });

    doc.setFont("times", "bold");
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 128); // Blue
    doc.text("Donation Receipt", 148.5, 50, { align: "center" });

    // Receipt number and printed date
    doc.setFontSize(14);
    doc.setFont("times", "normal");
    doc.text("Receipt No.:", 20, 70);
    doc.text(donationDetails.data.receiptNumber || "N/A", 50, 70);

    const printedDate = new Date().toLocaleString();
    doc.text("Printed Date:", 160, 70);
    doc.text(printedDate, 200, 70);

    // Received with thanks
    doc.text("Received With Thanks From:", 20, 80);
    doc.text(donationDetails.data.name, 80, 80); // Empty right side

    // Address of donor
    doc.text("Address of the Donor:", 20, 90);
    doc.text(donationDetails.data.full_address || "N/A", 65, 90);

    // PAN number and purpose of donation
    const panNumberY = 100;
    doc.text("PAN Number:", 20, panNumberY);
    doc.text(donationDetails.data.pan_number || "N/A", 60, panNumberY);

    const purposeLines = doc.splitTextToSize(donationDetails.data.purpose || "N/A", 100);
    doc.text("Purpose of Donation:", 160, panNumberY);
    purposeLines.forEach((line, index) => {
      doc.text(line, 210, panNumberY + index * 6);
    });

    // Mobile number, email ID, and other details
    const factor = purposeLines.length > 1 ? 6 : 0;
    const detailsStartY = panNumberY + purposeLines.length * factor + 10;
    doc.text("Mobile Number:", 20, detailsStartY);
    doc.text(donationDetails.data.mobile || "N/A", 60, detailsStartY);

    doc.text("Email ID:", 20, detailsStartY + 10);
    doc.text(donationDetails.data.email || "N/A", 60, detailsStartY + 10);

    doc.text("Mode of Donation:", 160, detailsStartY);
    doc.text(donationDetails.data.payment_method || "N/A", 210, detailsStartY);

    doc.text("PG Reference Number:", 160, detailsStartY + 10);
    doc.text(donationDetails.data.order_id || "N/A", 210, detailsStartY + 10);

    const donationDate = donationDetails.data.payment_date?.split("T")[0] || "N/A";
    doc.text("Date of Donation:", 20, detailsStartY + 20);
    doc.text(donationDate, 60, detailsStartY + 20);

    doc.text("Amount of Donation:", 160, detailsStartY + 20);
    doc.text(`${donationDetails.data.amount || "N/A"}`, 210, detailsStartY + 20);

    // Amount in words
    const amountInWords = amountToWords(donationDetails.data.amount || 0);
    doc.text("Amount in Words:", 20, detailsStartY + 30);
    doc.text(amountInWords, 60, detailsStartY + 30);

    // Treasurer signature and details
    const signatureImg = "/assets/signature.jpeg"; // Replace with actual path
    doc.addImage(signatureImg, "PNG", 230, detailsStartY + 27, 27, 18);

    doc.text("Lova Kush", 235, detailsStartY + 45);
    doc.text("(Treasurer)", 235, detailsStartY + 50);

    // Footer
    doc.setFont("times", "italic");
    doc.setFontSize(12);
    doc.setTextColor(128, 128, 128); // Gray
    doc.text(
      "50% of the voluntary contribution is eligible for deduction under Section 80G(2)(b) of the Income Tax Act, 1961.",
      148.5,
      175,
      { align: "center" }
    );

    doc.text("Email: charity.mbct@gmail.com", 148.5, 185, { align: "center" });
    doc.text("Mobile: +91-8006666006, +91-8273511939, +91-7060186065", 148.5, 190, { align: "center" });

    // Save the PDF
    doc.save(`${donationDetails.data.name}_MBCT_Donation.pdf`);
  };

  if (!donationDetails) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-amber-50 text-orange-600 text-lg">
        Loading...
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="max-w-3xl mx-auto p-4 sm:p-6">
        <h2 className="text-orange-500 text-lg border-b border-orange-300 pb-2 mb-6 font-semibold">
          Donation Certificate
        </h2>
  
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-700 text-center mb-4">
            Thank you for supporting Maa Bhagwati Charitable Trust!
          </p>
  
          <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
            <h3 className="text-orange-600 text-md font-semibold mb-4">
              Donation Details
            </h3>
            <p>
              <strong>Receipt No.:</strong> {donationDetails.data.receiptNumber || "N/A"}
            </p>
            <p>
              <strong>Donor Name:</strong> {donationDetails.data.name || "N/A"}
            </p>
            <p>
              <strong>Address:</strong> {donationDetails.data.full_address || "N/A"}
            </p>
            <p>
              <strong>PAN Number:</strong> {donationDetails.data.pan_number || "N/A"}
            </p>
            <p>
              <strong>Purpose:</strong> {donationDetails.data.purpose || "N/A"}
            </p>
            <p>
              <strong>Mobile:</strong> {donationDetails.data.mobile || "N/A"}
            </p>
            <p>
              <strong>Email:</strong> {donationDetails.data.email || "N/A"}
            </p>
            <p>
              <strong>Donation Amount:</strong> ₹{donationDetails.data.amount || "N/A"}
            </p>
            <p>
              <strong>Amount in Words:</strong> {amountToWords(donationDetails.data.amount || 0)}
            </p>
          </div>
  
          <div className="text-center mt-6">
            <button
              onClick={generatePDF}
              className="px-6 py-2 bg-orange-500 text-white font-medium rounded hover:bg-orange-600 transition"
            >
              Download Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCertificate;
