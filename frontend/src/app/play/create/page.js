"use client";

import { useState } from "react";

export default function CreateRoomPage() {
  const [roomName, setRoomName] = useState("");
  const [gameType, setGameType] = useState("1v1");
  const [entryFee, setEntryFee] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ roomName, gameType, entryFee });
    // 🔜 Later: Send to backend or Firebase
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">🛠 Create Game Room</h2>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <input
            type="text"
            placeholder="Room Name"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className="w-full border p-3 rounded-md focus:outline-none"
            required
          />

          <select
            value={gameType}
            onChange={(e) => setGameType(e.target.value)}
            className="w-full border p-3 rounded-md"
          >
            <option value="1v1">1 vs 1</option>
            <option value="1v2">1 vs 2</option>
            <option value="1v3">1 vs 3</option>
          </select>

          <input
            type="number"
            placeholder="Entry Fee (₹)"
            value={entryFee}
            onChange={(e) => setEntryFee(e.target.value)}
            className="w-full border p-3 rounded-md"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold"
          >
            ➕ Create Room
          </button>
        </form>
      </div>
    </div>
  );
}
// This code defines a CreateRoomPage component that allows users to create a game room by entering a room name, selecting a game type, and specifying an entry fee. It uses Tailwind CSS for styling and includes form validation. The form submission currently logs the input values to the console, with a comment indicating where to send the data to the backend or Firebase later.