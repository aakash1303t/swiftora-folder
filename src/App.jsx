import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import CurrentInventoryPage from "./pages/supplier/CurrentInventoryPage";
// import StockAvailabilityPage from "./pages/supermarket/StockAvailabilityPage";
import MySupermarkets from "./pages/supplier/MySupermarkets";
import MySuppliers from "./pages/supermarket/MySuppliers";
import Orders from "./pages/supplier/Orders";
import SalesOverviewPage from "./pages/supermarket/SalesOverviewPage";
import TransactionHistory from "./pages/supermarket/TransactionHistoryPage";
import SupplierProfilePage from "./pages/supplier/SupplierProfilePage";
import SupermarketProfilePage from "./pages/supermarket/SupermarketProfilePage";
import SupplierDashboard from "./pages/supplier/SupplierDashboard";
import SupermarketDashboard from "./pages/supermarket/SupermarketDashboard";
import Login from "./pages/Login";
import TransactionHistoryPage from "./pages/supermarket/TransactionHistoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
      <Route path="/supermarket-dashboard" element={<SupermarketDashboard />} />
      <Route path="/my-supermarkets" element={<MySupermarkets />} />
      <Route path="/inventory" element={<CurrentInventoryPage />} />
      <Route path="/barcode-scanner" element={<BarcodeScanner />} />
      <Route path="/my-orders" element={<Orders />} />
      <Route path="/supplier-profile" element={<SupplierProfilePage />} />
      <Route path="/supermarket-profile" element={<SupermarketProfilePage />} />
      <Route path="/supplier-list" element={<MySuppliers />} />
      {/* <Route path="/stock-details" element={<StockAvailability />} /> */}
      <Route path="/sales-overview" element={<SalesOverviewPage/>} />
      <Route path="/transaction-history" element={<TransactionHistoryPage />} />
    </Routes>
  );
}

export default App;
