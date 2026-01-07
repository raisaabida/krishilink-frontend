import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthContext";

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
import About from "./pages/About";
import Contact from "./pages/Contact";

import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/dashboard/Overview";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ ADD THIS

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <p className="text-center mt-20">Loading...</p>;
  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  const { user, logout } = useAuth();

  return (
    <>
      <Toaster position="top-center" />

      <Navbar user={user} handleLogout={logout} />

      {/* Page Content */}
      <main className="container mx-auto py-8 min-h-[70vh] px-4">
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/all-crops" element={<AllCrops />} />
          <Route path="/crop/:id" element={<CropDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/add-crop" element={<PrivateRoute><AddCrop /></PrivateRoute>} />
          <Route path="/my-posts" element={<PrivateRoute><MyPosts /></PrivateRoute>} />
          <Route path="/my-interests" element={<PrivateRoute><MyInterests /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />

          <Route path="/dashboard" element={<PrivateRoute><DashboardLayout /></PrivateRoute>}>
            <Route index element={<Overview />} />
            <Route path="my-posts" element={<MyPosts />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* ✅ FULL WIDTH FOOTER */}
      <Footer />
    </>
  );
}
