import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; // ✅ Navbar from /components
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>

// This is the root layout for the Khelacoin application
// It includes the Navbar and sets up the ClerkProvider for authentication
// The Navbar is always present across all pages, ensuring a consistent user experience
// The main content of each page will be rendered in the <main> tag
// The metadata for the application is also defined here
// The title is set to "Khelacoin" and the description is "Real Money Gaming Platform"
// The body has a light gray background and dark text for readability
export const metadata = {
  title: "Khelacoin",
  description: "Real Money Gaming Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <Navbar />
          <main>{children}</main>
          <Footer /> {/* 👈 This must be added */}
        </ClerkProvider>
      </body>
    </html>
  );
}

