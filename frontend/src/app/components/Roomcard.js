"use client";

export default function RoomCard({ room }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 border hover:shadow-lg transition cursor-pointer">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-gray-800">
          🎮 Room: {room.name || "Match Arena"}
        </h3>
        <span className="text-sm text-gray-500">{room.time || "Just now"}</span>
      </div>

      <div className="flex justify-between items-center mb-3">
        <p className="text-sm text-gray-700">
          👥 Players: {room.players || "2/4"}
        </p>
        <p className="text-sm font-medium text-indigo-600">
          💰 Entry: ₹{room.entryFee || 50}
        </p>
      </div>

      <div className="text-right">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-semibold transition">
          Join Now
        </button>
      </div>
    </div>
  );
}