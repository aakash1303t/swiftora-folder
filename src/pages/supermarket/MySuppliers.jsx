import React from 'react';
import Sidebar from "../../components/supermarket/SupermarketSidebar"; 
import SupplierList from '../../components/Supermarket/SupplierList';
const MySuppliers = () => { 
  return (
    <div className="flex min-h-screen bg-[#f7f4f3]">

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 transition-all duration-300">
        <h1 className="text-2xl md:text-3xl mb-4 font-semibold text-[#5b2333]">
          My Suppliers
        </h1>

        {/* Dashboard Sections */}
        <div className="space-y-6 md:space-y-8">
          <SupplierList />
        </div>
      </div>
    </div>
  );
};

export default MySuppliers;
