"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useUser } from "@clerk/nextjs";

export default function DepositPage() {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const { user } = useUser();

  const handleDeposit = async (e) => {
    e.preventDefault();

    if (!user) {
      setMessage("User not logged in.");
      return;
    }

    const userId = user.id;

    // Step 1: Insert transaction
    const { error: insertError } = await supabase.from("transactions").insert([
      {
        user_id: userId,
        amount: parseFloat(amount),
        type: "deposit",
        date: new Date().toISOString(),
      },
    ]);

    if (insertError) {
      console.error("Insert Error:", insertError);
      setMessage("Deposit failed. Try again.");
      return;
    }

    // Step 2: Update user balance
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("balance")
      .eq("id", userId)
      .single();

    if (userError || !userData) {
      console.error("User fetch failed:", userError);
      setMessage("User balance fetch failed.");
      return;
    }

    const updatedBalance = userData.balance + parseFloat(amount);

    const { error: updateError } = await supabase
      .from("users")
      .update({ balance: updatedBalance })
      .eq("id", userId);

    if (updateError) {
      console.error("Update Error:", updateError);
      setMessage("Deposit inserted but balance update failed.");
    } else {
      setMessage("Deposit successful!");
      setAmount("");
    }
  };

  return (
    <main className="max-w-md mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Deposit Balance</h1>

      <form onSubmit={handleDeposit} className="space-y-4 bg-white p-6 rounded-xl shadow">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Amount (₹)</label>
          <input
            type="number"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter deposit amount"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold"
        >
          Deposit
        </button>

        {message && (
          <p className={`text-center mt-4 ${message.includes("successful") ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}
      </form>
    </main>
  );
}
// This code is for the DepositPage component in a Next.js application.
// It allows users to deposit funds into their account by inserting a transaction record and updating their balance