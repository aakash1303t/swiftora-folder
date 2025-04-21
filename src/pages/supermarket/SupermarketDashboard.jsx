import React from "react";
import SupermarketSidebar from "../../components/supermarket/SupermarketSidebar"; 
import MySuppliers from "./MySuppliers";
import StockAvailability from "../../components/supermarket/StockAvailability"; 
import SalesOverviewPage from "../../components/supermarket/SalesOverview"; 
import TransactionHistory from "../../components/supermarket/TransactionHistory"; 
import { ShoppingCart, Box, Users } from "react-feather";

const SupermarketDashboard = () => { 
  // Sample Data
  const stockdetails = [ 
    { id: 1, name: "Organic Apples", sku: "APL-001", stock: 500, lastUpdated: "2 hours ago", status: "In Stock" },
    { id: 2, name: "Fresh Milk", sku: "MLK-002", stock: 50, lastUpdated: "1 hour ago", status: "Low Stock" },
    { id: 3, name: "Whole Grain Bread", sku: "BRD-003", stock: 0, lastUpdated: "30 minutes ago", status: "Out of Stock" }
  ];

  const salesoverview = [ 
    { id: "#ORD123", product: "Organic Apples", quantity: 120, date: "March 12, 2025", status: "Delivered" },
    { id: "#ORD124", product: "Fresh Milk", quantity: 80, date: "March 10, 2025", status: "Processing" },
    { id: "#ORD125", product: "Whole Grain Bread", quantity: 50, date: "March 8, 2025", status: "Canceled" }
  ];

  const transactionhistory = [
    { id: "#TXN101", amount: "£200", type: "Credit", date: "March 10, 2025" },
    { id: "#TXN102", amount: "£150", type: "Debit", date: "March 12, 2025" },
    { id: "#TXN103", amount: "£500", type: "Credit", date: "March 14, 2025" }
  ];

  return (
    <div className="flex min-h-screen bg-[#f7f4f3]">
      {/* Sidebar */}
      <SupermarketSidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 transition-all duration-300">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#5b2333]">Supermarket Dashboard</h1>

        {/* Top Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6 mb-6">
          {/* Active Products */} 
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-[#5b2333]" />
              <h2 className="text-md md:text-lg font-semibold text-[#5b2333]">Active Products</h2> 
            </div>
            <p className="text-2xl md:text-3xl font-bold text-black mt-2">12</p>
          </div>

          {/* Total Suppliers */} 
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5 text-[#5b2333]" />
              <h2 className="text-md md:text-lg font-semibold text-[#5b2333]">Total Suppliers</h2> 
            </div>
            <p className="text-2xl md:text-3xl font-bold text-black mt-2">326</p>
          </div>

          {/* Monthly Revenue */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col">
            <div className="flex items-center space-x-2">
              <Box className="h-5 w-5 text-[#5b2333]" />
              <h2 className="text-md md:text-lg font-semibold text-[#5b2333]">Monthly Revenue</h2>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-black mt-2">£156,000</p>
          </div>
        </div>

        {/* Dashboard Sections */}
        <div className="space-y-6 md:space-y-8">
          <MySuppliers /> 
          <StockAvailability stockdetails={stockdetails} /> 
          <SalesOverviewPage salesoverview={salesoverview} /> 
          <TransactionHistory transactionhistory={transactionhistory} /> 
        </div>
      </div>
    </div>
  );
};

export default SupermarketDashboard;
