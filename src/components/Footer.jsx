import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white w-full mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold mb-3">KrishiLink 🌾</h3>
          <p className="text-green-200 text-sm leading-relaxed">
            KrishiLink is a digital agriculture platform designed to connect
            farmers and buyers, enabling transparent crop trading and market
            access.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-green-200 text-sm">
            <li>
              <Link to="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/all-crops" className="hover:text-white">All Crops</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-green-200 text-sm">Email: support@krishilink.com</p>
          <p className="text-green-200 text-sm">Location: Bangladesh 🇧🇩</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800 text-center text-sm text-green-300 py-4">
        © {new Date().getFullYear()} KrishiLink. Academic Project. All rights reserved.
      </div>
    </footer>
  );
}
