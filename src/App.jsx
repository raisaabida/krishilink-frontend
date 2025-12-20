import React from "react";
import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AllCrops from "./pages/AllCrops";
import CropDetails from "./pages/CropDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddCrop from "./pages/AddCrop";
import MyPosts from "./pages/MyPosts";
import MyInterests from "./pages/MyInterests";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthContext";

/* ===================== NAVBAR ===================== */
function Nav() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-emerald-900 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-900 font-bold">
            K
          </div>
          <div className="text-xl font-semibold">KrishiLink</div>
        </Link>

        <nav>
          <ul className="flex gap-4 items-center">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/all-crops">All Crops</Link></li>

            {user && (
              <>
                <li><Link to="/add-crop">Add Crops</Link></li>
                <li><Link to="/my-posts">My Posts</Link></li>
                <li><Link to="/my-interests">My Interests</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li>
                  <button
                    onClick={logout}
                    className="bg-white text-emerald-900 px-3 py-1 rounded"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

            {!user && (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

/* ===================== FOOTER ===================== */
function Footer() {
  return (
    <footer className="bg-slate-800 text-white mt-12">
      <div className="container mx-auto py-8 grid md:grid-cols-3 gap-4 px-4">
        <div>
          <h3 className="font-bold text-lg">KrishiLink</h3>
          <p className="text-sm">
            Connecting farmers, traders and consumers — a social agro network.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="text-sm mt-2 space-y-1">
            <li>Home</li>
            <li>All Crops</li>
            <li>Profile</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm mt-2">Email: hello@krishilink.example</p>
        </div>
      </div>

      <div className="text-center py-3 text-sm bg-black/20">
        © {new Date().getFullYear()} KrishiLink — All rights reserved
      </div>
    </footer>
  );
}

/* ===================== PROTECTED ROUTE ===================== */
function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return user ? children : <Navigate to="/login" />;
}

/* ===================== APP ===================== */
export default function App() {
  const location = useLocation();
  const hideShell = location.pathname.startsWith("/404");

  return (
    <>
      <Toaster position="top-center" />

      {!hideShell && <Nav />}

      <main className="container mx-auto py-8 min-h-[60vh] px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-crops" element={<AllCrops />} />
          <Route path="/crop/:id" element={<CropDetails />} />

          {/* AUTH */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* PROTECTED */}
          <Route
            path="/add-crop"
            element={
              <PrivateRoute>
                <AddCrop />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-posts"
            element={
              <PrivateRoute>
                <MyPosts />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-interests"
            element={
              <PrivateRoute>
                <MyInterests />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!hideShell && <Footer />}
    </>
  );
}
