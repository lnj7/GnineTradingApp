import React, { useState } from "react";
import "./Categories.css";

function Categories() {
  const [expanded, setExpanded] = useState(null);

  const menuItems = [
    {
      name: "Category",
      children: ["Category 1", "Category 2", "Category 3"],
    },
    {
      name: "Sub Category",
      children: ["Sub 1", "Sub 2", "Sub 3"],
    },
    {
      name: "Third Category",
      children: ["Third 1", "Third 2", "Third 3"],
    },
  ];

  const toggleDropdown = (name) => {
    setExpanded(expanded === name ? null : name);
  };

  return (
    <div className="categories-container">
      <h2>Categories Page</h2>
      <div className="categories-menu">
        {menuItems.map((item, index) => (
          <div key={index} className="categories-item">
            <button
              className="categories-button"
              onClick={() => toggleDropdown(item.name)}
            >
              {item.name}
              <span className={`arrow ${expanded === item.name ? "down" : "right"}`}>
                ▼
              </span>
            </button>

            {/* Submenu appears below */}
            {expanded === item.name && (
              <div className="categories-submenu">
                {item.children.map((child, idx) => (
                  <button key={idx} className="categories-submenu-button">
                    {child}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
