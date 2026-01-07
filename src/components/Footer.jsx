import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="text-xl font-bold mb-3">KrishiLink 🌾</h3>
          <p className="text-green-200 text-sm">
            Empowering farmers with digital trade.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-green-200">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/all-crops">All Crops</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-green-200 text-sm">support@krishilink.com</p>
          <p className="text-green-200 text-sm">Bangladesh 🇧🇩</p>
        </div>

      </div>

      <div className="text-center text-sm text-green-300 pb-4">
        © {new Date().getFullYear()} KrishiLink. All rights reserved.
      </div>
    </footer>
  );
}
