import React from "react";
import "../App.css"; // sidebar styles are in App.css

function Sidebar({ sidebarOpen, menuOptions, expandedMenu, toggleSubmenu, handleMenuClick }) {
  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <nav>
        {menuOptions.map(({ name, emoji, submenu }, index) => {
          const isExpanded = expandedMenu === name;

          return (
            <div key={index} className="sidebar-item">
              <button
                className="sidebar-menu-button"
                onClick={() => {
                  if (submenu) {
                    toggleSubmenu(name);
                  } else {
                    handleMenuClick(name);
                  }
                }}
              >
                <span className="emoji">{emoji}</span>
                {name}
                {submenu && (
                  <span className={`arrow ${isExpanded ? "down" : "right"}`}>
                    {isExpanded ? "▲" : "▼"}
                  </span>
                )}
              </button>

              {/* Dropdown submenu */}
              {submenu && isExpanded && (
                <div className="dropdown-menu">
                  {submenu.map((subItem, subIndex) => (
                    <button
                      key={subIndex}
                      className="dropdown-item"
                      onClick={() => handleMenuClick(subItem.name, true, name)}
                    >
                      {subItem.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
