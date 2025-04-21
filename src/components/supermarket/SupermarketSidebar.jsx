import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaStore,
  FaWarehouse,
  FaClipboardList,
  FaBox,
  FaBell,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaBarcode,
  FaHistory,
} from "react-icons/fa";
import logo from "../../assets/logo1.png"; // Make sure this path is correct

const SupermarketSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/supermarket-dashboard", icon: <FaHome className="text-xl" />, label: "Dashboard" },
    { to: "/supermarket-profile", icon: <FaUser className="text-xl" />, label: "Profile" },
    { to: "/my-suppliers", icon: <FaStore className="text-xl" />, label: "My Suppliers" },
    { to: "/sales-overview", icon: <FaClipboardList className="text-xl" />, label: "Sales Overview" },
    { to: "/stock-details", icon: <FaBox className="text-xl" />, label: "Stock Availability" },
    { to: "/transaction-history", icon: <FaHistory className="text-xl" />, label: "Transaction History" },
  ];

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <button
        className="lg:hidden fixed top-4 right-4 z-50 bg-[#87475a] text-white p-2 rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* SupermarketSidebar */}
      <div
        className={`fixed lg:relative top-0 left-0 h-screen w-64 bg-[#5b2333] text-white flex flex-col shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo + Title */}
        <div className="flex items-center py-4 px-6 border-b border-white gap-3">
          <img src={logo} alt="Swiftora Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-lg font-semibold">Swiftora</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col flex-1 mt-4">
          {navItems.map(({ to, icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 text-lg transition-all duration-300 hover:bg-[#87475a] ${
                  isActive ? "bg-[#87475a]" : ""
                }`
              }
              onClick={() => setIsOpen(false)} // Close on mobile
            >
              {icon} {label}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="mt-auto">
          <NavLink
            to="/"
            className="flex items-center gap-3 px-6 py-3 text-lg transition-all duration-300 hover:bg-[#87475a]"
          >
            <FaSignOutAlt className="text-xl" /> Logout
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SupermarketSidebar;
