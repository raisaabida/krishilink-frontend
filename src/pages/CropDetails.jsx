import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCropById, sendInterest } from "../lib/api";
import { useAuth } from "../context/AuthContext";

export default function CropDetails() {
  const { id } = useParams();
  const { user } = useAuth();

  const [crop, setCrop] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCropById(id)
      .then(setCrop)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  async function handleInterest() {
    try {
      await sendInterest(id, {
  userEmail: user.email,
  userName: user.displayName || user.email,
  quantity,
  message,
});

      alert("Interest sent successfully!");
      setQuantity(1);
      setMessage("");
    } catch (err) {
      alert("Failed to send interest");
    }
  }

  if (loading) {
    return <p className="text-center mt-20">Loading crop...</p>;
  }

  if (!crop) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-red-600">
          ❌ Crop not found
        </h2>
        <Link
          to="/all-crops"
          className="inline-block mt-4 text-green-700 font-semibold"
        >
          ← Back to All Crops
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">

      {/* IMAGE */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img
          src={crop.image}
          alt={crop.name}
          className="w-full h-96 object-cover"
        />
      </div>

      {/* DETAILS */}
      <div className="space-y-4">
        <h1 className="text-3xl font-extrabold text-green-700">
          {crop.name}
        </h1>

        <p className="text-gray-600">
          📍 Location: <strong>{crop.location}</strong>
        </p>

        <p className="text-gray-600">
          💰 Price: <strong>৳{crop.pricePerUnit}/{crop.unit}</strong>
        </p>

        <p className="text-gray-700">
          {crop.description || "No description available."}
        </p>

        {/* ACTION */}
        <div className="mt-6">
          {user ? (
            <>
              <label className="block text-sm font-semibold mb-1">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-24 px-3 py-2 border rounded-lg"
              />

              <textarea
                placeholder="Optional message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block w-full mt-3 p-3 border rounded-xl"
              />

              <button
                onClick={handleInterest}
                className="block mt-4 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
              >
                Send Interest
              </button>
            </>
          ) : (
            <p className="text-sm text-gray-500">
              Please{" "}
              <Link to="/login" className="text-green-700 font-semibold">
                login
              </Link>{" "}
              to send interest.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
