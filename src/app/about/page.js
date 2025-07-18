
export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-indigo-900 text-white px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">About Khelacoin</h1>

        <p className="text-lg text-white/80 mb-8">
          Khelacoin is a real-money gaming platform where players can enjoy classic Ludo matches and win real cash rewards instantly. Built with fairness, speed, and transparency at its core, Khelacoin brings the excitement of traditional games into the digital world.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left mt-12">
          <div>
            <h2 className="text-2xl font-semibold text-yellow-300 mb-2">🎯 Our Mission</h2>
            <p className="text-white/80">
              To provide a fun, secure, and rewarding platform for casual gamers who want to turn their skills into earnings. We believe everyone deserves a chance to play and win in a safe and responsible environment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-300 mb-2">🚀 Our Vision</h2>
            <p className="text-white/80">
              To become India’s leading Ludo-based real-money gaming platform, empowering millions of players to experience joyful gaming and build a community of skill-based competitors.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-300 mb-2">🔒 Safe & Secure</h2>
            <p className="text-white/80">
              Khelacoin uses encrypted transactions, anti-fraud mechanisms, and real-time fair-match systems to ensure every game is safe and secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-300 mb-2">👥 Why Choose Us</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Instant withdrawal support</li>
              <li>Zero registration fees</li>
              <li>Fair and real-time matchmaking</li>
              <li>Simple & modern interface</li>
              <li>24x7 player support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}