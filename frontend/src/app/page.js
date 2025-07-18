import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// This is the root layout for the Khelacoin application

// It includes the Navbar and sets up the ClerkProvider for authentication

// The Navbar is always present across all pages, ensuring a consistent user experience

// The main content of each page will be rendered in the <main> tag

// The metadata for the application is also defined here

// The title is set to "Khelacoin" and the description is "Real Money Gaming Platform"

// The body has a light gray background and dark text for readability
<a href="/privacy-policy" className="hover:text-yellow-400">
  Privacy Policy
</a>;

export const metadata = {
  title: "Khelacoin",

  description: "Real Money Gaming Platform",
};

export default function HomePage() {
  return (
    <>
      {/* ✅ Hero Section */}

      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white min-h-screen flex flex-col items-center justify-center text-center px-5 md:px-10 hightlight">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-yellow-300">Khelacoin</span>
        </h1>

        <p className="text-lg md:text-2x2 max-w-2x2 mb-10">
          <span className="text-red-400">Play & Win Real Cash</span>
           <br />
          Experience India’s Top Ludo Arena – Play Multiplayer, Win Real
          Money! 🎲💎
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition">
            Get Started
          </button>
        </div>

        {/* Desktop only */}
        <img
          src="/ludo-hero.png"
          alt="Ludo Illustration"
          className="w-80 mt-10 animate-bounce hidden sm:block"
        />

        {/* Mobile only */}
        <img
          src="/ludo-hero.png"
          alt="Ludo Illustration"
          className="w-60 mt-6 animate-bounce block sm:hidden mx-auto"
        />
      </section>

      {/* ✅ How to Play Section */}
      <section className="bg-white py-16 px-6">
        {/* Section Header */}
        <div className="mb-16 text-center relative">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 inline-block relative">
            <span className="relative z-10 px-4">How to Play</span>
            <span className="absolute left-0 right-0 bottom-1 h-5 bg-yellow-300 z-0 blur-md rounded"></span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            It's simple to get started and start winning. Just follow these easy
            steps!
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Step 1 */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-bold mb-2 text-blue-700">
              Join & Create Account
            </h3>
            <p className="text-gray-600">
              Quick signup via email or mobile to start playing instantly.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center">
            <div className="text-6xl mb-4">🎮</div>
            <h3 className="text-xl font-bold mb-2 text-green-600">
              Start a Game
            </h3>
            <p className="text-gray-600">
              Choose 1v1 or 1v4 and battle real players live online.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2 text-yellow-500">
              Win Coins & Cash
            </h3>
            <p className="text-gray-600">
              Play skillfully and win real money anytime with fast payouts.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
