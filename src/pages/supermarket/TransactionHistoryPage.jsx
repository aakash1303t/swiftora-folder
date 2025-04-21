import React from 'react';
import Sidebar from "../../components/supermarket/SupermarketSidebar";
import TransactionHistory from "../../components/supermarket/TransactionHistory";

const TransactionHistoryPage = () => {
  const transactionhistory = [
    { id: "#TXN101", amount: "£200", type: "Credit", date: "March 10, 2025" },
    { id: "#TXN102", amount: "£150", type: "Debit", date: "March 12, 2025" },
    { id: "#TXN103", amount: "£500", type: "Credit", date: "March 14, 2025" }
  ];

  return (
    <div className="flex min-h-screen bg-[#f7f4f3]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 transition-all duration-300">
        <h1 className="text-2xl md:text-3xl mb-4 font-semibold text-[#5b2333]">
          Transaction History
        </h1>

        {/* Transaction History Section */}
        <div className="space-y-6 md:space-y-8">
          <TransactionHistory transactionhistory={transactionhistory} />
        </div>
      </div>
    </div>
  );
};

export default TransactionHistoryPage;
