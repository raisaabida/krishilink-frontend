import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ user, handleLogout }) {
  const [open, setOpen] = useState(false);

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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

        {/* Nav Links */}
        <nav
          className={`${
            open ? "block" : "hidden"
          } md:flex absolute md:static top-16 left-0 w-full md:w-auto bg-green-900 md:bg-transparent px-6 md:px-0 py-4 md:py-0`}
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm font-medium">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/all-crops" onClick={() => setOpen(false)}>All Crops</Link>

            {!user ? (
              <>
                <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
                <Link to="/register" onClick={() => setOpen(false)}>Register</Link>
              </>
            ) : (
              <>
                <Link to="/add-crop" onClick={() => setOpen(false)}>Add Crops</Link>
                <Link to="/my-posts" onClick={() => setOpen(false)}>My Posts</Link>
                <Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="bg-white text-green-900 px-4 py-1.5 rounded-md"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
