export default function Footer() {
  return (
    <footer className="bg-green-800 text-white mt-24">
      <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="text-xl font-bold">KrishiLink 🌾</h3>
          <p className="mt-2 opacity-90">
            Connecting farmers, buyers, and communities digitally.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>Home</li>
            <li>All Crops</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>Email: support@krishilink.com</p>
          <p>Phone: +880 1234 567890</p>
          <p className="mt-2">Facebook • LinkedIn • Twitter</p>
        </div>

      </div>

      <div className="text-center py-4 bg-green-900 text-sm">
        © {new Date().getFullYear()} KrishiLink. All rights reserved.
      </div>
    </footer>
  );
}
