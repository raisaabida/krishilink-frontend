import { Link } from "react-router-dom";

export default function Navbar({ user, handleLogout }) {
  return (
    <div className="navbar fixed top-0 z-50 bg-green-700 text-white px-6">
      
      {/* Logo */}
      <Link to="/" className="text-xl font-bold">
        KrishiLink 🌾
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 ml-10">
        <Link to="/">Home</Link>
        <Link to="/all-crops">Crops</Link>
        <Link to="/about">About</Link>

        {user && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/my-crops">My Crops</Link>
          </>
        )}
      </div>

      {/* Right Side */}
      <div className="ml-auto">
        {!user ? (
          <div className="flex gap-3">
            <Link to="/login" className="btn btn-sm bg-yellow-400 text-black">
              Login
            </Link>
            <Link to="/register" className="btn btn-sm bg-white text-green-700">
              Register
            </Link>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-sm">
              {user.name || "Profile"} ⬇
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white text-black rounded-box w-40 shadow"
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
