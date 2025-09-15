import React, { useState } from 'react';
import './PartyDetails.css';

// Hardcoded example states and districts
const statesWithDistricts = {
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra"],
  "Delhi": ["New Delhi", "Old Delhi"],
  "Karnataka": ["Bengaluru", "Mysuru", "Mangalore"],
  // Add more states/districts as needed
};

function PartyDetails() {
  const [formData, setFormData] = useState({
    name: '',
    nickName: '',
    phone: '',
    email: '',
    address: '',
    state: '',
    district: '',
    city: '',
    gstNo: '',
    partyImage: null,
    partyImageProgress: 0,
    signatureImage: null,
    signatureProgress: 0,
    bankAccountNo: '',
    bankIfsc: '',
    bankName: '',
  });

  const [districts, setDistricts] = useState([]);
  const [showAddBank, setShowAddBank] = useState(false);

  // Simulate file upload progress
  const simulateUpload = (file, type) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (progress > 100) {
        progress = 100;
        clearInterval(interval);
      }
      setFormData(prev => ({
        ...prev,
        ...(type === 'party'
          ? { partyImageProgress: progress }
          : { signatureProgress: progress }),
        ...(type === 'party' ? { partyImage: file } : { signatureImage: file }),
      }));
    }, 200);
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'state') {
      setDistricts(statesWithDistricts[value] || []);
      setFormData(prev => ({ ...prev, state: value, district: '' })); // Reset district on state change
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Handle party image upload with size validation and simulated progress
  const handlePartyImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 50 * 1024) {
      simulateUpload(file, 'party');
    } else {
      alert('Party image size must be 50KB or less');
    }
  };

  // Handle signature image upload with size validation and simulated progress
  const handleSignatureChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 50 * 1024) {
      simulateUpload(file, 'signature');
    } else {
      alert('Signature image size must be 50KB or less');
    }
  };

  const toggleAddBank = () => setShowAddBank(!showAddBank);

  // Save only handler
  const handleSave = (e) => {
    e.preventDefault();
    alert('Details saved locally.');
  };

  // Save and submit handler
  const handleSaveAndSubmit = (e) => {
    e.preventDefault();
    // Implement submission logic here (e.g., send data to backend)
    alert('Details saved and submitted!');
  };

  const handleBack = () => {
    alert('Going back or clearing form - implement as needed.');
  };

  return (
    <div className="party-details-container">
      <h2>Party Details</h2>
      <form className="party-form">
        {/* Inputs arranged two per row */}
        <div className="input-row">
          <label>
            Name*
            <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Enter name" />
          </label>
          <label>
            Nick Name
            <input type="text" name="nickName" value={formData.nickName} onChange={handleChange} placeholder="Enter nickname" />
          </label>
        </div>

        <div className="input-row">
          <label>
            Phone No.*
            <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Enter phone number" />
          </label>
          <label>
            Email ID*
            <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Enter email" />
          </label>
        </div>

        <label>
          Address
          <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Enter address"></textarea>
        </label>

        <div className="input-row">
          <label>
            State*
            <select name="state" value={formData.state} onChange={handleChange} required>
              <option value="">-- Select State --</option>
              {Object.keys(statesWithDistricts).map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </label>
          <label>
            District*
            <select name="district" value={formData.district} onChange={handleChange} required disabled={!formData.state}>
              <option value="">-- Select District --</option>
              {districts.map(district => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="input-row">
          <label>
            City
            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Enter city" />
          </label>
          <label>
            GST No.
            <input type="text" name="gstNo" value={formData.gstNo} onChange={handleChange} placeholder="Enter GST number" />
          </label>
        </div>

        {/* Upload section with preview boxes */}
        <div className="upload-section">
          <h3>Party Images</h3>
          <div className="image-upload-wrapper">
            <div className="upload-box">
              <label htmlFor="partyImage">Upload Photo</label>
              <input id="partyImage" type="file" accept="image/*" onChange={handlePartyImageChange} />
              <progress max="100" value={formData.partyImageProgress}></progress>
            </div>

            <div className="preview-box">
              {formData.partyImage ? (
                <img
                  src={URL.createObjectURL(formData.partyImage)}
                  alt="Party Preview"
                  className="preview-image"
                />
              ) : (
                <div className="placeholder-box">Passport Size Photo</div>
              )}
            </div>

            <div className="upload-box">
              <label htmlFor="signatureImage">Upload Signature</label>
              <input id="signatureImage" type="file" accept="image/*" onChange={handleSignatureChange} />
              <progress max="100" value={formData.signatureProgress}></progress>
            </div>

            <div className="preview-box">
              {formData.signatureImage ? (
                <img
                  src={URL.createObjectURL(formData.signatureImage)}
                  alt="Signature Preview"
                  className="preview-image"
                />
              ) : (
                <div className="placeholder-box">Signature Box</div>
              )}
            </div>

            <p className="upload-caution-text">Document upload max size: 50 KB</p>
          </div>
        </div>

        <h3>Bank Details</h3>
        <div className="bank-details-limited">
          <label>
            Account No.
            <input type="text" name="bankAccountNo" value={formData.bankAccountNo} onChange={handleChange} placeholder="Enter account number" />
          </label>
          <label>
            IFSC Code
            <input type="text" name="bankIfsc" value={formData.bankIfsc} onChange={handleChange} placeholder="Enter IFSC code" />
          </label>
          <label>
            Bank Name
            <input type="text" name="bankName" value={formData.bankName} onChange={handleChange} placeholder="Enter bank name" />
          </label>
        </div>

        <button type="button" className="add-bank-btn" onClick={toggleAddBank}>
          {showAddBank ? 'Hide New Bank Details' : 'Add New Bank Details'}
        </button>

        <div className="form-buttons">
          <button type="button" className="save-btn" onClick={handleSave}>Save</button>
          <button type="button" className="save-submit-btn" onClick={handleSaveAndSubmit}>Save and Submit</button>
          <button type="button" className="back-btn" onClick={handleBack}>Back</button>
        </div>
      </form>
    </div>
  );
}

export default PartyDetails;
