import React from "react";

const StockAvailability = ({ stockdetails = [] }) => {
  const lowStockCount = stockdetails.filter((item) => item.status === "Low Stock").length;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date) ? "N/A" : date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-semibold text-[#5b2333]">Stock Availability</h2>
      <p className="text-sm text-gray-700 mt-2">
        {stockdetails.length} item{stockdetails.length !== 1 ? "s" : ""} in stock, {lowStockCount} low stock alert{lowStockCount !== 1 ? "s" : ""}
      </p>

      {/* Stock Details */}
      <div className="mt-4 space-y-4">
        {stockdetails.length === 0 ? (
          <p className="text-gray-500">No stock data available.</p>
        ) : (
          stockdetails.map((item) => (
            <div key={item.id || item.sku} className="flex justify-between items-center py-3 border-b">
              <div>
                <h3 className="text-lg font-semibold text-black">{item.name || "Unnamed Item"}</h3>
                <p className="text-sm text-gray-600">
                  SKU: {item.sku || "N/A"} • Last Updated: {formatDate(item.lastUpdated)}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-black">{item.stock ?? "N/A"} units</p>
                <span
                  className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    item.status === "In Stock"
                      ? "bg-green-200 text-green-800"
                      : item.status === "Low Stock"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {item.status || "Unknown"}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default StockAvailability;
