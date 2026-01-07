import { Link } from "react-router-dom";

export default function Navbar({ user, handleLogout }) {
  return (
    <header className="w-full bg-green-900 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white text-green-900 rounded-full flex items-center justify-center font-bold">
            K
          </div>
          <span className="text-xl font-semibold">KrishiLink</span>
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/all-crops" className="hover:text-yellow-300">All Crops</Link>

          {!user ? (
            <>
              <Link to="/login" className="hover:text-yellow-300">Login</Link>
              <Link to="/register" className="hover:text-yellow-300">Register</Link>
            </>
          ) : (
            <>
              <Link to="/add-crop" className="hover:text-yellow-300">Add Crops</Link>
              <Link to="/my-posts" className="hover:text-yellow-300">My Posts</Link>
              <button
                onClick={() => handleLogout && handleLogout()}
                className="bg-white text-green-900 px-4 py-1.5 rounded-md hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
