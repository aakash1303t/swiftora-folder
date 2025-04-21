import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import CurrentInventoryPage from "./pages/supplier/CurrentInventoryPage";
import MySupermarkets from "./pages/supplier/MySupermarkets";
import Orders from "./pages/supplier/Orders";
import SupplierProfilePage from "./pages/supplier/SupplierProfilePage";
import SupplierDashboard from "./pages/supplier/SupplierDashboard";
import SupermarketDashboard from "./pages/supermarket/SupermarketDashboard";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
      <Route path="/supermarket-dashboard" element={<SupermarketDashboard />} />
      <Route path="/my-supermarkets" element={<MySupermarkets />} />
      <Route path="/inventory" element={<CurrentInventoryPage />} />
      <Route path="/my-orders" element={<Orders />} />
      <Route path="/supplier-profile" element={<SupplierProfilePage />} />
    </Routes>
  );
}

export default App;