import React from "react";

const TransactionHistory = ({ transactionhistory }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-[#5b2333]">Recent Transactions</h2>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#f2e9e8]">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#5b2333] uppercase tracking-wider">Transaction ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#5b2333] uppercase tracking-wider">Amount</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#5b2333] uppercase tracking-wider">Type</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#5b2333] uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactionhistory.map((txn) => (
              <tr key={txn.id}>
                <td className="px-4 py-3 text-sm text-gray-900">{txn.id}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{txn.amount}</td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      txn.type === "Credit"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {txn.type}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{txn.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TransactionHistory;
