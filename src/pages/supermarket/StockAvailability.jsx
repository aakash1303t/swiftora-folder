import React from 'react';  
import SupermarketSidebar from '../../components/supermarket/SupermarketSidebar';
import StockAvailability from '../../components/supermarket/StockAvailability';

const StockAvailabilityPage = () => { 
  const stockdetails = [ 
    { id: 1, name: "Organic Apples", sku: "APL-001", stock: 500, lastUpdated: "2 hours ago", status: "In Stock" },
    { id: 2, name: "Fresh Milk", sku: "MLK-002", stock: 50, lastUpdated: "1 hour ago", status: "Low Stock" },
    { id: 3, name: "Whole Grain Bread", sku: "BRD-003", stock: 0, lastUpdated: "30 minutes ago", status: "Out of Stock" }
  ];

  return (
    <div className="flex min-h-screen bg-[#f7f4f3]">
      {/* Sidebar */}
      <SupermarketSidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 transition-all duration-300">
        <h1 className="text-2xl md:text-3xl mb-4 font-semibold text-[#5b2333]">Inventory</h1>

        {/* Dashboard Sections */}
        <div className="space-y-6 md:space-y-8">
          <StockAvailability stockdetails={stockdetails} /> 
        </div>
      </div>
    </div>
  );
};

export default StockAvailability;
