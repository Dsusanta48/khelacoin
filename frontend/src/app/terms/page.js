export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Terms & Conditions</h1>

      <p className="mb-4">
        By using <strong>Khelacoin</strong>, you agree to the following terms and conditions. Please read them carefully before participating in any real-money games on our platform.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Eligibility</h2>
      <p className="mb-4">
        You must be at least 18 years of age and a resident of India to participate in any paid contests. By registering, you confirm your eligibility.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Account Responsibility</h2>
      <p className="mb-4">
        You are responsible for maintaining the confidentiality of your account credentials. You agree not to share your login info with anyone.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Game Fairness</h2>
      <p className="mb-4">
        Khelacoin enforces anti-cheating measures. Any player found using unfair means will be permanently banned and funds forfeited.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Payment & Withdrawals</h2>
      <p className="mb-4">
        All payments are processed securely. Withdrawals may take up to 24–48 hours to reflect in your bank/UPI.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate accounts that violate our terms or misuse the platform.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Changes to Terms</h2>
      <p className="mb-4">
        These terms may be updated. Continued use of the platform indicates your acceptance of updated terms.
      </p>

      <p className="text-sm text-gray-500 mt-10 text-center">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
