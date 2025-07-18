"use client";

import { useUser, UserButton, SignOutButton } from "@clerk/nextjs";
import { useState } from "react";

export default function ProfilePage() {
  const { user } = useUser();
  const [upi, setUpi] = useState("user@upi");
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    setEditing(false);
    // 🔜 Future: Send updated UPI to backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 space-y-6 border border-gray-200">
        <div className="flex flex-col items-center gap-2">
          <UserButton />
          <h2 className="text-2xl font-bold text-gray-800">{user?.fullName || "Your Name"}</h2>
          <p className="text-gray-500 text-sm">{user?.primaryEmailAddress?.emailAddress}</p>
        </div>

        <div className="bg-white/80 p-4 rounded-xl shadow-sm border border-gray-100">
          <label className="block text-sm font-medium text-gray-700 mb-1">UPI ID</label>
          {editing ? (
            <input
              type="text"
              value={upi}
              onChange={(e) => setUpi(e.target.value)}
              className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          ) : (
            <p className="text-gray-800 font-semibold">{upi}</p>
          )}
          <button
            onClick={() => (editing ? handleSave() : setEditing(true))}
            className="mt-2 text-indigo-600 hover:underline text-sm"
          >
            {editing ? "💾 Save" : "✏️ Edit"}
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">Wallet Balance</p>
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
            ₹800
          </p>
        </div>

        <SignOutButton>
          <button className="w-full py-3 bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold rounded-xl shadow-lg hover:scale-[1.01] transition">
            🔒 Logout
          </button>
        </SignOutButton>
      </div>
    </div>
  );
}
import Link from "next/link";