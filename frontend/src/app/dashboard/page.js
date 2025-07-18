"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabaseClient.js";
import { useUser } from "@clerk/nextjs";

// Dashboard page to display user balance and transactions

export default function DashboardPage() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const { user } = useUser();
const userId = user?.id;
  // For Clerk, you can get the user ID like this:
  // const userId = user?.id; // Clerk user ID
  // const userId = "example-user-id"; // Replace with actual user ID from Clerk or Supabase
  /*if (!userId) {
    return <p className="text-center text-red-500">Please log in to view your dashboard.</p>;
  }*/

    useEffect(() => {
  if (!userId) return; // ✅ Jodi user ready na, tahole fetch bondho thakbe

  async function fetchData() {
    const { data: user } = await supabase
      .from("users")
      .select("balance")
      .eq("id", userId)
      .single();

    const { data: txList } = await supabase
      .from("transactions")
      .select("*")
      .eq("user_id", userId)
      .order("date", { ascending: false });

    if (user) setBalance(user.balance);
    if (txList) setTransactions(txList);
  }

  fetchData();
}, [userId]);


  return (
    <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">

      {/* 💰 Wallet Section */}
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Wallet Balance</h2>
        <p className="text-4xl font-bold">₹ {balance}</p>
        <div className="mt-4 flex gap-4">
          <Link href="/deposit" className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold">
            Deposit
          </Link>
          <Link href="/withdraw" className="bg-white hover:bg-gray-100 text-indigo-800 px-6 py-2 rounded-full font-semibold">
            Withdraw
          </Link>
        </div>
      </section>

      {/* 🧾 Transactions */}
      <section className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Recent Transactions</h3>
        {transactions.length === 0 ? (
          <p className="text-gray-500">No transactions yet.</p>
        ) : (
          <div className="divide-y">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex justify-between py-3">
                <div>
                  <p className="font-medium text-gray-700">{tx.type}</p>
                  <p className="text-sm text-gray-500">{tx.date}</p>
                </div>
                <p className={`text-lg font-bold ${tx.amount < 0 ? "text-red-600" : "text-green-600"}`}>
                  ₹ {tx.amount}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 🎯 Game Stats (Static for now) */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <p className="text-2xl font-bold text-indigo-700">12</p>
          <p className="text-sm text-gray-600">Matches Played</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <p className="text-2xl font-bold text-green-600">8</p>
          <p className="text-sm text-gray-600">Matches Won</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <p className="text-2xl font-bold text-yellow-500">₹540</p>
          <p className="text-sm text-gray-600">Total Won</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <p className="text-2xl font-bold text-gray-800">2</p>
          <p className="text-sm text-gray-600">Pending Withdrawals</p>
        </div>
      </section>

      {/* 📢 Announcement */}
      <section className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-900 p-4 rounded-lg shadow">
        <p><strong>📢 Notice:</strong> Withdrawals are processed within 24 hours. Play fair, earn more!</p>
      </section>
      
      {/* 🎁 Referral Info (App Only) */}
      <section className="bg-white p-6 rounded-xl shadow-md text-center">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">Referral Program</h3>
        <p className="text-red-600">Invite friends and earn ₹100 for each successful referral!</p>
        <Link href="/referral" className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-full font-semibold">
          Refer a Friend
        </Link>
      </section>

    </main>
  );
}
