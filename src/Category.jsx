import React from "react";
import "./styling/Category.css";
import PageHeader from "./components/PageHeader";

function Category() {
  return (
    <div className="category-page">
      {/* Page header with section name and address */}
      <PageHeader sectionName="Add/Edit Category" />

      <nav className="breadcrumb">Dashboard / Categories / Add/Edit Category</nav>

      <h3 className="section-heading">GENERAL DETAILS</h3>

      <div className="form-row">
        <label>Category Name*</label>
        <input type="text" placeholder="Enter Category Name" />
      </div>

      <div className="button-row">
        <button className="save-btn">Save</button>
        <button className="back-btn">Back</button>
      </div>
    </div>
  );
}

export default Category;
