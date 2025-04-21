import React from 'react';
import Sidebar from "../../components/supermarket/SupermarketSidebar";


const SalesOverviewPage = () => {
  const salesoverview = [
    { id: "#ORD123", product: "Organic Apples", quantity: 120, date: "March 12, 2025", status: "Delivered" },
    { id: "#ORD124", product: "Fresh Milk", quantity: 80, date: "March 10, 2025", status: "Processing" },
    { id: "#ORD125", product: "Whole Grain Bread", quantity: 50, date: "March 8, 2025", status: "Canceled" }
  ];

  return (
    <div className="flex min-h-screen bg-[#f7f4f3]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 transition-all duration-300">
        <h1 className="text-2xl md:text-3xl mb-4 font-semibold text-[#5b2333]">Sales Overview</h1>

        {/* Sales Overview Section */}
        <div className="space-y-6 md:space-y-8">
          <SalesOverviewPage salesoverview={salesoverview} />
        </div>
      </div>
    </div>
  );
};

export default SalesOverviewPage;
