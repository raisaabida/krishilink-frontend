// src/layouts/DashboardLayout.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function DashboardLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-green-800 text-white flex flex-col">
        {/* User Info */}
        <div className="p-6 flex flex-col items-center border-b border-green-700">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName || "User"}
              className="w-20 h-20 rounded-full object-cover border-2 border-white mb-2"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-green-600 flex items-center justify-center text-xl font-bold mb-2">
              {user?.displayName ? user.displayName.charAt(0) : "U"}
            </div>
          )}
          <p className="font-semibold">{user?.displayName || "User"}</p>
          <p className="text-sm text-green-300">{user?.email}</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex flex-col p-6 gap-2">
          <Link to="/dashboard" className="hover:bg-green-700 px-3 py-2 rounded">
            Overview
          </Link>
          <Link to="/dashboard/my-posts" className="hover:bg-green-700 px-3 py-2 rounded">
            My Crops
          </Link>
          <Link to="/dashboard/profile" className="hover:bg-green-700 px-3 py-2 rounded">
            Profile
          </Link>

          {user?.role === "admin" && (
            <Link to="/dashboard/admin/users" className="hover:bg-green-700 px-3 py-2 rounded">
              Users
            </Link>
          )}

          <button
            onClick={logout}
            className="mt-auto bg-white text-green-800 px-3 py-2 rounded hover:bg-green-200"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
