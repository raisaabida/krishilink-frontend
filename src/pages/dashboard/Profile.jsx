// src/pages/dashboard/Profile.jsx
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase.config";

export default function Profile() {
  const { user } = useAuth();
  const [name, setName] = useState(user.displayName || "");
  const [photo, setPhoto] = useState(user.photoURL || "");

  async function saveProfile() {
    try {
      await updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
      alert("Profile updated!");
    } catch (err) {
      alert("Failed to update profile");
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-xl space-y-4">
      <h2 className="text-2xl font-bold text-green-700">My Profile</h2>

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

      <button className="btn bg-green-600 w-full text-white hover:bg-green-700" onClick={saveProfile}>
        Save Profile
      </button>
    </div>
  );
}
