"use client";

const transactions = [
  {
    id: 1,
    type: "Deposit",
    amount: 200,
    status: "Success",
    time: "2025-07-10 10:30 AM",
  },
  {
    id: 2,
    type: "Withdraw",
    amount: 150,
    status: "Pending",
    time: "2025-07-10 02:00 PM",
  },
  {
    id: 3,
    type: "Match - 1v1",
    amount: 100,
    status: "Win",
    time: "2025-07-11 01:30 PM",
  },
  {
    id: 4,
    type: "Match - 1v4",
    amount: 50,
    status: "Lost",
    time: "2025-07-11 03:00 PM",
  },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">📋 Transaction History</h2>

        <div className="space-y-4">
          {transactions.map((txn) => (
            <div key={txn.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-semibold text-gray-700">{txn.type}</p>
                <p className="text-sm text-gray-500">{txn.time}</p>
              </div>

              <div className="text-right">
                <p
                  className={`font-bold text-lg ${
                    txn.status === "Success" || txn.status === "Win"
                      ? "text-green-600"
                      : txn.status === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {txn.status === "Win" || txn.type === "Deposit" ? "+" : "-"} ₹{txn.amount}
                </p>
                <p className="text-sm text-gray-600">{txn.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import Link from "next/link";