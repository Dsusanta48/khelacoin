"use client";
import Link from "next/link"; // Only for Next.js
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / Logo */}
        <div>
          <h3 className="text-2xl font-bold mb-2 text-yellow-400">Khelacoin</h3>
          <p className="text-gray-400">
            Play. Compete. Win Real Money. India’s Most Trusted MultiPlayer Ludo Arena.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-yellow-400">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-yellow-400">Terms & Conditions</Link></li>
            <li><Link href="/refund-policy" className="hover:text-yellow-400">Refund Policy</Link></li>
            <li><Link href="/disclaimer" className="hover:text-yellow-400">Disclaimer</Link></li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Connect</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              Email:{" "}
              <a href="mailto:support@khelacoin.in" className="hover:text-yellow-400">
                support@khelacoin.in
              </a>
            </li>
            <li>
              WhatsApp:{" "}
              <a href="https://wa.me/9382265422" className="hover:text-yellow-400">
                Chat Now
              </a>
            </li>
          </ul>

          <div className="flex gap-4 mt-4">
            <a href="https://t.me/khelacoin" title="Telegram" className="text-gray-400 hover:text-yellow-400 text-xl">
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a href="https://instagram.com/khelacoin" title="Instagram" className="text-gray-400 hover:text-yellow-400 text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com/khelacoin" title="Facebook" className="text-gray-400 hover:text-yellow-400 text-xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://wa.me/9382265422" title="WhatsApp" className="text-gray-400 hover:text-green-400 text-xl">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Khelacoin. All rights reserved.
      </div>
    </footer>
  );
}
