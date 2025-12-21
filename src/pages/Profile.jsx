import React from "react";
import { useAuth } from "../context/AuthContext";


export default function Profile() {
  const { user, loading } = useAuth();

  // While Firebase is loading
  if (loading) {
    return <p className="text-center mt-20">Loading profile...</p>;
  }


  // If user is not logged in
  if (!user) {
    return (
      <p className="text-center mt-20 text-red-500">
        You are not logged in
      </p>
    );
  }


  return (
    <div className="max-w-xl mx-auto mt-10 card bg-base-100 shadow p-6 space-y-4">
      <h2 className="text-2xl font-bold text-green-700">
        My Profile
      </h2>

      <p>
        <strong>Name:</strong>{" "}
        {user.displayName || "No name set"}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      {user.photoURL && (
        <img
          src={user.photoURL}
          alt="Profile"
          className="w-24 h-24 rounded-full border"
        />
      )}
    </div>
  );
}
