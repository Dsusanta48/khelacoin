export default function PlayPage() {
  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-b from-indigo-100 to-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">🎮 Choose Game Mode</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="/play/create" className="bg-green-500 hover:bg-green-600 text-white rounded-xl p-6 text-center font-semibold shadow-xl">
            ➕ Create Room
          </a>
          <a href="/play/join" className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl p-6 text-center font-semibold shadow-xl">
            🔗 Join with Code
          </a>
        </div>
      </div>
    </div>
  );
}
// This code defines a simple PlayPage component that allows users to choose between creating a game room or joining one using a code.
// It uses Tailwind CSS for styling and provides a responsive layout with a gradient background. The component includes two buttons that link to the respective pages for creating or joining a game room.