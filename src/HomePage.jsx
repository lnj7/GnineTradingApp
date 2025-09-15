import React, { useState } from 'react';
import './App.css';
import BankDetails from './BankDetails';
import PartyDetails from './PartyDetails';
import SizeClub from './SizeClub';
import Category from './Category';


function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Dashboard');
  const [breadcrumb, setBreadcrumb] = useState(['Dashboard']);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const menuOptions = [
    { name: "Dashboard", emoji: "📊" },
    { name: "Bank details", emoji: "🏦" },
    { name: "Party details", emoji: "🎉" },
    { name: "Size club", emoji: "📏" },
    { name: "Categories", emoji: "📂",
      submenu: [
         { name: "Category" },
         { name: "Sub Category" },
         { name: "Third Category" }
      ]
     },
    { name: "Day book", emoji: "📔" },
    { name: "Rough diary", emoji: "📓" },
    { name: "Stock management", emoji: "📦" },
    { name: "Stock out", emoji: "🚚" },
    { name: "Business summary", emoji: "💼" },
    { name: "Profit sheet", emoji: "💰" },
    { name: "Activity tracker", emoji: "🏃‍♂️" },
    { name: "Office expenses/income", emoji: "💵" },
    { name: "Attendance", emoji: "🕒" },
    { name: "Balance sheet as today", emoji: "📈" },
    { name: "Ledger sheet", emoji: "📃" },
    { name: "Bank statement", emoji: "🧾" },
    { name: "Factory activities", emoji: "🏭" },
    { name: "Factory ledger sheet", emoji: "📑" },
    { name: "Analysis", emoji: "🔍" },
    { name: "Check tracker payments", emoji: "✅" },
    { name: "Check tracker receipts", emoji: "📥" },
  ];

  // Handler when a menu button is clicked
  const handleMenuClick = (name, isSubmenu = false) => {
  setActiveSection(name);
  setBreadcrumb(['Home', name]);
  };

  // Toggle submenu (Categories) expanded state with toggle behavior
const toggleSubmenu = (name) => {
  if (expandedMenu === name) {
    setExpandedMenu(null);  // collapse if already opened
  } else {
    setExpandedMenu(name);  // open if closed or other submenu opened
  }
};



  // Render section content according to activeSection
  const renderContent = () => {
    switch (activeSection) {
      case 'Bank details':
        return <BankDetails />;
      case 'Party details':
        return <PartyDetails />; 
      case 'Size club':
        return <SizeClub />; 
      case 'Category':
        return <Category />;
      case 'Sub Category':
      case 'Third Category':
      default:


        return (
          <div>
            <h2>{activeSection}</h2>
            <p>This is the <strong>{activeSection}</strong> section content.</p>
          </div>
        );
    }
  };

  return (
    <div className="home-container">
      {/* Hamburger button */}
      <button
        className="hamburger-button"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        &#9776;
      </button>

       {/* Sidebar menu */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <nav>
          {menuOptions.map(({ name, emoji, submenu }, index) => {
            const isExpanded = expandedMenu === name;
            return (
              <div key={index}>
                <button
                  className="sidebar-menu-button"
                  onClick={() => {
                    if (submenu) {
                      toggleSubmenu(name);
                      handleMenuClick(name, false);
                    } else {
                      handleMenuClick(name, false);
                    }
                  }}
                >
                  <span className="emoji">{emoji}</span> {name}
                  {submenu && (
                    <span className={`arrow ${isExpanded ? 'down' : 'right'}`}>▼</span>
                  )}
                </button>

                {submenu && isExpanded && (
                  <div className="sidebar-submenu">
                    {submenu.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        className="sidebar-submenu-button"
                        onClick={() => handleMenuClick(subItem.name)}
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

      <main className="content">
        {/* Breadcrumb / file location */}
        <nav className="breadcrumb">
          {breadcrumb.map((crumb, index) => (
            <span key={index} className="breadcrumb-item">
              {crumb} {index < breadcrumb.length - 1 && ' / '}
            </span>
          ))}
        </nav>

        {/* Section content */}
        {renderContent()}
      </main>
    </div>
  );
}

export default HomePage;
