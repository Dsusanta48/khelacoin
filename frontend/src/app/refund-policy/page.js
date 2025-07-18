export default function RefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Refund Policy</h1>

      <p className="mb-4">
        At <strong>Khelacoin</strong>, we prioritize transparency and fairness. This refund policy outlines the situations in which refunds may or may not be applicable.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Entry Fees</h2>
      <p className="mb-4">
        Once a player joins a paid contest, the entry fee is considered final and non-refundable under normal circumstances.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Technical Errors</h2>
      <p className="mb-4">
        If a game is disrupted due to server error, app crash, or internet failure — please contact support. Refunds will be issued only after verifying the issue.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Unauthorized Payments</h2>
      <p className="mb-4">
        If you suspect unauthorized transactions, report immediately to <a href="mailto:support@khelacoin.in" className="text-blue-600 underline">support@khelacoin.in</a>. We may initiate refunds after internal investigation.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Withdrawal Cancellations</h2>
      <p className="mb-4">
        Once a withdrawal is processed, it cannot be reversed or refunded unless credited incorrectly or duplicated.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Processing Time</h2>
      <p className="mb-4">
        Approved refunds will be processed within 3–7 business days to your original payment method or wallet.
      </p>

      <p className="text-sm text-gray-500 mt-10 text-center">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
