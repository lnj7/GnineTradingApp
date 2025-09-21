import React from "react";
import "./styling/Category.css";
import PageHeader from "./components/PageHeader";

function ThirdCategory() {
  return (
    <div className="category-page">
      <PageHeader sectionName="Add/Edit Third Category" />

      <nav className="breadcrumb">Dashboard / Categories / Add/Edit Third Category</nav>

      <h3 className="section-heading">GENERAL DETAILS</h3>

      <div className="form-row">
        <label>Category*</label>
        <select>
          <option>Select Category</option>
        </select>
      </div>

      <div className="form-row">
        <label>Sub Category*</label>
        <select>
          <option>Select Sub Category</option>
        </select>
      </div>

      <div className="form-row">
        <label>Third Category Name*</label>
        <input type="text" placeholder="Enter Third Category Name" />
      </div>

      <div className="button-row">
        <button className="save-btn">Save</button>
        <button className="back-btn">Back</button>
      </div>
    </div>
  );
}

export default ThirdCategory;
