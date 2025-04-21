import React from "react";

const SalesOverview = ({ salesoverview }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-[#5b2333]">Recent Sales</h2>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#f2e9e8]">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#5b2333] uppercase tracking-wider">Order ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#5b2333] uppercase tracking-wider">Product</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#5b2333] uppercase tracking-wider">Quantity</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#5b2333] uppercase tracking-wider">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#5b2333] uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {salesoverview.map((order) => (
              <tr key={order.id}>
                <td className="px-4 py-3 text-sm text-gray-900">{order.id}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{order.product}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{order.quantity}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{order.date}</td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.status === "Delivered"
                        ? "bg-green-200 text-green-800"
                        : order.status === "Processing"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SalesOverview;
