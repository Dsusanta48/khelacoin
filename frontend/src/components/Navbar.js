"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { useState } from "react";

// Menu configs
const fullMenu = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Deposit", href: "/deposit" },
  { name: "Withdraw", href: "/withdraw" },
  { name: "Play", href: "/play" },
  { name: "History", href: "/history" },
  { name: "Profile", href: "/profile" },
];

const limitedMenu = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Dashboard", href: "/dashboard" },
];

// APK detection
const isMobileApp = () => {
  if (typeof navigator !== "undefined") {
    return navigator.userAgent.includes("KhelacoinApp");
  }
  return false;
};

export default function Navbar() {
  const pathname = usePathname();
  const navItems = isMobileApp() ? fullMenu : limitedMenu;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* ✅ Logo to homepage */}
        <Link href="/" className="flex items-center space-x-2" >
          <img src="/ludo-logo.png" alt="Khelacoin Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-indigo-700">Khelacoin</span>
        </Link>
        {/* ✅ Mobile Logo */}
        <Link href="/" className="md:hidden flex items-center space-x-2">
          <img src="/ludo-logo.png" alt="Khelacoin Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-indigo-700">Khelacoin</span>
        </Link>

        {/* ✅ Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition hover:text-indigo-600 ${
                pathname === item.href
                  ? "text-indigo-700 font-semibold underline underline-offset-4"
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* ✅ Auth */}
        <div className="hidden md:flex items-center space-x-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold text-sm shadow">
                Login
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* ✅ Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu Links */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block text-sm font-medium ${
                pathname === item.href
                  ? "text-indigo-700 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="mt-2">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold text-sm">
                  Login
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
}
