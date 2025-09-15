import React, { useState } from 'react';
import './BankDetails.css';

function BankDetails() {
  const [formData, setFormData] = useState({
    accountName: '',
    accountNumber: '',
    ifscCode: '',
    bankName: '',
    mobileNumber: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Function to mask sensitive data except last 4 characters
  const maskValue = (value) => {
    if (!value) return '';
    const length = value.length;
    if (length <= 4) return '****';
    return '*'.repeat(length - 4) + value.slice(length - 4);
  };

  // Reset form for editing
  const handleEdit = () => {
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bank-details-container">
        <h2>Bank Details Saved Successfully</h2>
        <div className="saved-details">
          <p><strong>Account Name:</strong> {formData.accountName}</p>
          <p><strong>Account Number:</strong> {maskValue(formData.accountNumber)}</p>
          <p><strong>IFSC Code:</strong> {formData.ifscCode}</p>
          <p><strong>Bank Name:</strong> {formData.bankName}</p>
          <p><strong>Mobile Number:</strong> {maskValue(formData.mobileNumber)}</p>
        </div>
        <button className="edit-button" onClick={handleEdit}>Edit Details</button>
      </div>
    );
  }

  return (
    <div className="bank-details-container">
      <h2>Bank Details</h2>
      <form onSubmit={handleSubmit} className="bank-details-form">
        <label>
          Account Name*
          <input
            type="text"
            name="accountName"
            value={formData.accountName}
            onChange={handleChange}
            required
            placeholder="Enter account name"
          />
        </label>

        <label>
          Account Number*
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            required
            placeholder="Enter account number"
          />
        </label>

        <label>
          IFSC Code*
          <input
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleChange}
            required
            placeholder="Enter IFSC code"
          />
        </label>

        <label>
          Bank Name*
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            required
            placeholder="Enter bank name"
          />
        </label>

        <label>
          Mobile Number*
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            placeholder="Enter mobile number"
          />
        </label>

        <button type="submit" className="submit-button">Save Details</button>
      </form>
    </div>
  );
}

export default BankDetails;
