// src/layouts/DashboardLayout.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function DashboardLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-green-800 text-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>

        <nav className="flex flex-col gap-3">
          <Link to="/dashboard" className="hover:bg-green-700 px-3 py-2 rounded">Overview</Link>
          <Link to="/dashboard/my-crops" className="hover:bg-green-700 px-3 py-2 rounded">My Crops</Link>
          <Link to="/dashboard/profile" className="hover:bg-green-700 px-3 py-2 rounded">Profile</Link>

          {user?.role === "admin" && (
            <Link to="/dashboard/admin/users" className="hover:bg-green-700 px-3 py-2 rounded">Users</Link>
          )}

          <button
            onClick={logout}
            className="mt-auto bg-white text-green-800 px-3 py-2 rounded hover:bg-green-200"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
