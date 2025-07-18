export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Disclaimer</h1>

      <p className="mb-4">
        <strong>Khelacoin</strong> provides a skill-based gaming platform that allows users to play and earn real money. However, we make no guarantees regarding earnings or outcomes.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Skill-Based Gaming</h2>
      <p className="mb-4">
        Our platform is designed for games of skill. Any resemblance to gambling is unintended. Users must play responsibly.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Legal Compliance</h2>
      <p className="mb-4">
        It is the user’s responsibility to ensure that participation in real-money games is legal in their state or region in India.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. No Financial Advice</h2>
      <p className="mb-4">
        We do not offer financial advice or investment services. Playing on Khelacoin is for entertainment and skill development.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Platform Stability</h2>
      <p className="mb-4">
        While we strive for uninterrupted service, we are not liable for downtimes, technical issues, or user device errors.
      </p>

      <p className="text-sm text-gray-500 mt-10 text-center">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
