import React from "react";
import "./PageHeader.css";

function PageHeader({ sectionName }) {
  return (
    <div className="page-header">
      <h1 className="page-title">{sectionName}</h1>
      <div className="page-address">

      </div>
    </div>
  );
}

export default PageHeader;
