"use client";

import { useState } from "react";

export default function WithdrawPage() {
  const [amount, setAmount] = useState("");
  const [upi, setUpi] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWithdraw = (e) => {
    e.preventDefault();

    if (parseInt(amount) < 100) {
      alert("Minimum withdrawal is ₹100");
      return;
    }

    if (!upi.includes("@")) {
      alert("Please enter a valid UPI ID");
      return;
    }

    setSubmitted(true);
    // 🔜 Later: Send data to backend
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-b from-yellow-100 to-white">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">📤 Withdraw Money</h2>

        {submitted ? (
          <div className="text-center space-y-4">
            <p className="text-lg font-semibold text-yellow-700">✅ Withdrawal Request Submitted!</p>
            <p className="text-sm text-gray-600">
              Our team will review and transfer to your UPI within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleWithdraw} className="space-y-4">
            <input
              type="number"
              placeholder="Enter Amount (₹)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border p-3 rounded-md"
              required
            />

            <input
              type="text"
              placeholder="Enter your UPI ID (e.g. user@upi)"
              value={upi}
              onChange={(e) => setUpi(e.target.value)}
              className="w-full border p-3 rounded-md"
              required
            />

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-md font-semibold"
            >
              Submit Withdraw Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
// This code defines a WithdrawPage component that allows users to withdraw coins from their account. It includes a form for entering the withdrawal amount and UPI ID, with validation to ensure a minimum withdrawal of ₹100 and a valid UPI format. Upon submission, it displays a confirmation message indicating that the request has been submitted. The component uses Tailwind CSS for styling and provides a responsive layout. 