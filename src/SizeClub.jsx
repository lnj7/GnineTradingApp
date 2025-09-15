import React, { useState } from 'react';
import './SizeClub.css';

function SizeClub() {
  const [sizeClubName, setSizeClubName] = useState('');

  const handleSave = () => {
    if (sizeClubName.trim() === '') {
      alert('Please enter a size club name before saving.');
      return;
    }
    alert(`Size Club Name saved: ${sizeClubName}`);
  };

  const handleBack = () => {
    alert('Back button clicked');
  };

  return (
    <div className="size-club-wrapper">
      <h2>Size Club Name*</h2>
      <div className="size-club-box">
        <input
          type="text"
          value={sizeClubName}
          onChange={(e) => setSizeClubName(e.target.value)}
          placeholder="Enter size club name"
          className="size-club-input"
        />
      </div>
      <div className="buttons-container">
        <button className="save-btn" onClick={handleSave}>Save</button>
        <button className="back-btn" onClick={handleBack}>Back</button>
      </div>
    </div>
  );
}

export default SizeClub;
