import React, { useState } from 'react';
import './Category.css';

function Category() {
  const [categoryName, setCategoryName] = useState('');

  const handleSave = () => {
    if (categoryName.trim() === '') {
      alert('Please enter a category name before saving.');
      return;
    }
    alert(`Category Name saved: ${categoryName}`);
  };

  const handleBack = () => {
    alert('Back button clicked');
  };

  return (
    <div className="category-wrapper">
      <h2>Category Name*</h2>
      <div className="category-box">
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Enter category name"
          className="category-input"
        />
      </div>
      <div className="buttons-container">
        <button className="save-btn" onClick={handleSave}>Save</button>
        <button className="back-btn" onClick={handleBack}>Back</button>
      </div>
    </div>
  );
}

export default Category;
