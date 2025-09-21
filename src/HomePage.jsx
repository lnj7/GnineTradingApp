import React, { useState } from "react";
import "./App.css";

// Components
import Sidebar from "./components/Sidebar";
import BankDetails from "./BankDetails";
import PartyDetails from "./PartyDetails";
import SizeClub from "./SizeClub";
import DayBookCurrency from "./DayBookCurrency";
import DayBookPurchase from "./DayBookPurchase";
import DayBookSales from "./DayBookSales";
import DayBookThirdParty from "./DayBookThirdParty";
import DayBookBalance from "./DayBookBalance";

// Category Pages
import Category from "./Category";
import SubCategory from "./SubCategory";
import ThirdCategory from "./ThirdCategory";

// Category CSS
import "./styling/Category.css";

function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [breadcrumb, setBreadcrumb] = useState(["Dashboard"]);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const menuOptions = [
    { name: "Dashboard", emoji: "📊" },
    { name: "Bank details", emoji: "🏦" },
    { name: "Party details", emoji: "🎉" },
    { name: "Size club", emoji: "📏" },
    {
      name: "Categories",
      emoji: "📂",
      submenu: [
        { name: "Category" },
        { name: "Sub - Category" },
        { name: "Third - Category" },
      ],
    },
    {
      name: "Day book",
      emoji: "📔",
      submenu: [
        { name: "Day book - Currency" },
        { name: "Day book - Purchase" },
        { name: "Day book - Sales" },
        { name: "Day book - Third Party" },
        { name: "Bal. as on (date)" },
      ],
    },
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

  const handleMenuClick = (name, isSubmenu = false, parent = null) => {
    setActiveSection(name);
    if (isSubmenu && parent) {
      setBreadcrumb(["Home", parent, name]);
    } else {
      setBreadcrumb(["Home", name]);
    }
    setSidebarOpen(true);
  };

  const toggleSubmenu = (name) => {
    setExpandedMenu((prev) => (prev === name ? null : name));
  };

  const renderContent = () => {
    switch (activeSection) {
      // Bank/Party/Size
      case "Bank details":
        return <BankDetails />;
      case "Party details":
        return <PartyDetails />;
      case "Size club":
        return <SizeClub />;

      // Category Pages
      case "Category":
        return <Category breadcrumb={breadcrumb} />;
      case "Sub - Category":
        return <SubCategory breadcrumb={breadcrumb} />;
      case "Third - Category":
        return <ThirdCategory breadcrumb={breadcrumb} />;

      // Day Book Pages
      case "Day book - Currency":
        return <DayBookCurrency />;
      case "Day book - Purchase":
        return <DayBookPurchase />;
      case "Day book - Sales":
        return <DayBookSales />;
      case "Day book - Third Party":
        return <DayBookThirdParty />;
      case "Bal. as on (date)":
        return <DayBookBalance />;

      default:
        return (
          <div>
            <h2>{activeSection}</h2>
            <p>
              This is the <strong>{activeSection}</strong> section content.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="home-container">
      {/* Hamburger */}
      <button
        className="hamburger-button"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        &#9776;
      </button>

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        menuOptions={menuOptions}
        expandedMenu={expandedMenu}
        toggleSubmenu={toggleSubmenu}
        handleMenuClick={handleMenuClick}
      />

      {/* Main Content */}
      <main className="content">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          {breadcrumb.map((crumb, index) => (
            <span key={index} className="breadcrumb-item">
              {crumb} {index < breadcrumb.length - 1 && " / "}
            </span>
          ))}
        </nav>

        {renderContent()}
      </main>
    </div>
  );
}

export default HomePage;
