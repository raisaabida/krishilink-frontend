// src/pages/dashboard/Profile.jsx
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase.config";
import toast from "react-hot-toast";

export default function Profile() {
  const { user, setUser } = useAuth(); // we’ll update context after editing
  const [name, setName] = useState(user.displayName || "");
  const [photo, setPhoto] = useState(user.photoURL || "");
  const [loading, setLoading] = useState(false);

  async function saveProfile() {
    if (!name.trim()) {
      toast.error("Name cannot be empty");
      return;
    }

    setLoading(true);
    try {
      await updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
      toast.success("Profile updated successfully!");
      setUser({ ...auth.currentUser }); // update context to reflect new info
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-xl space-y-6">
      <h2 className="text-2xl font-bold text-green-700">My Profile</h2>

      {/* Profile Picture Preview */}
      {photo && (
        <div className="flex justify-center mb-4">
          <img
            src={photo}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-green-600"
          />
        </div>
      )}

      <div className="space-y-4">
        <input
          placeholder="Name"
          className="input input-bordered w-full"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          placeholder="Photo URL"
          className="input input-bordered w-full"
          value={photo}
          onChange={e => setPhoto(e.target.value)}
        />
      </div>

      <button
        className={`btn w-full text-white ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
        onClick={saveProfile}
        disabled={loading}
      >
        {loading ? "Saving..." : "Save Profile"}
      </button>
    </div>
  );
}
