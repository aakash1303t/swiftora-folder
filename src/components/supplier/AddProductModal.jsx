import React, { useState, useEffect } from "react";
import axios from "axios";

const AddProductModal = ({ onClose, onProductAdded }) => {
  const [productData, setProductData] = useState({
    productName: "",
    sku: "",
    barcode: "",
    category: "",
    company: "",
    costPrice: "",
    purchasePrice: "",
    salesPrice: "",
    mrpPrice: "",
    discount: "",
    expiryDate: "",
    hsnNo: "",
    stock: "",
    unit: "",
  });

  const [supplierId, setSupplierId] = useState("");

  useEffect(() => {
    fetchSupplierId();
  }, []);

  const fetchSupplierId = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("https://swiftora.vercel.app/api/suppliers/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSupplierId(response.data.supplierId);
    } catch (error) {
      console.error("Error fetching supplier ID:", error);
    }
  };

  const handleChange = (e) => {
    setProductData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const newProduct = {
        ...productData,
        supplierId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      await axios.post("https://swiftora.vercel.app/api/products/add", newProduct, {
        headers: { Authorization: `Bearer ${token}` },
      });

      onProductAdded();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-semibold text-[#5b2333] mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            "productName",
            "sku",
            "barcode",
            "category",
            "company",
            "costPrice",
            "purchasePrice",
            "salesPrice",
            "mrpPrice",
            "discount",
            "expiryDate",
            "hsnNo",
            "stock",
            "unit",
          ].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
              <input
                type="text"
                name={field}
                value={productData[field]}
                onChange={handleChange}
                className="w-full border p-2 rounded-md focus:ring-[#5b2333] focus:border-[#5b2333]"
                required
              />
            </div>
          ))}

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#5b2333] text-white rounded-md hover:bg-[#4a1c29]"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
