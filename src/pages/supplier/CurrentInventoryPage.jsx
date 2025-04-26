import React, { useState, useEffect } from "react";
import Sidebar from "../../components/supplier/Sidebar";
import CurrentInventory from "../../components/supplier/CurrentInventory";
import AddProductModal from "../../components/supplier/AddProductModal";
import axios from "axios";

const CurrentInventoryPage = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token not found");

      const response = await axios.get("https://swiftora.vercel.app/api/products/all", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const products = response.data.products || []; // ← Make sure this matches API response

      const mappedProducts = products.map((product) => {
        let status = "Out of Stock";
        if (product.stock > 10) {
          status = "In Stock";
        } else if (product.stock > 0 && product.stock <= 10) {
          status = "Low Stock";
        }

        return {
          id: product._id,
          name: product.productName,
          sku: product.sku,
          stock: product.stock,
          lastUpdated: new Date(product.updatedAt).toLocaleString(),
          status: status,
        };
      });

      setInventoryItems(mappedProducts);
      setLoading(false);

    } catch (err) {
      console.error("Error fetching inventory:", err);
      setError("Failed to load inventory.");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f7f4f3]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 transition-all duration-300">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#5b2333]">Inventory</h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#87475a] text-white px-4 py-2 rounded-md hover:bg-[#5b2333]"
          >
            + Add Product
          </button>
        </div>

        {/* Dashboard Sections */}
        <div className="space-y-6 md:space-y-8">
          <CurrentInventory inventoryItems={inventoryItems} />
        </div>

        {showModal && (
          <AddProductModal
            onClose={() => setShowModal(false)}
            onProductAdded={() => {
              fetchInventory();
              setShowModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CurrentInventoryPage;
