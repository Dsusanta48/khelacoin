export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
      
      <p className="mb-4">
        Welcome to <strong>Khelacoin</strong>. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        - Name, email address, and mobile number<br />
        - Device and browser information<br />
        - Gameplay activities and wallet transactions
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use your information to:<br />
        - Create and manage your account<br />
        - Process deposits and withdrawals<br />
        - Improve our services and user experience<br />
        - Send promotional offers (with your consent)
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Data Security</h2>
      <p className="mb-4">
        We implement industry-standard security measures to protect your data from unauthorized access or disclosure.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Third-Party Sharing</h2>
      <p className="mb-4">
        We do not sell or rent your personal data. We may share data with trusted partners who assist in running the platform (e.g., payment gateways).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Cookies & Tracking</h2>
      <p className="mb-4">
        We may use cookies to enhance your experience. You can control cookie preferences in your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Updates to Policy</h2>
      <p className="mb-4">
        This policy may be updated from time to time. Changes will be posted on this page with updated dates.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:
        <br />
        📧 <a href="mailto:support@khelacoin.in" className="text-blue-600 underline">support@khelacoin.in</a>
      </p>

      <p className="text-sm text-gray-500 mt-10 text-center">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
