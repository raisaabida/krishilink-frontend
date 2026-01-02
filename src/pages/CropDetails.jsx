import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCropById, getCrops, sendInterest } from "../lib/api";
import { useAuth } from "../context/AuthContext";

export default function CropDetails() {
  const { id } = useParams();
  const { user } = useAuth();

  const [crop, setCrop] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getCropById(id), getCrops()])
      .then(([data, all]) => {
        setCrop(data);
        setRelated(all.filter((c) => c._id !== id).slice(0, 4));
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="text-center mt-20">Loading crop...</p>;
  }

  if (!crop) {
    return <p className="text-center mt-20">Crop not found</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">

      {/* Images */}
      <section className="grid md:grid-cols-2 gap-6">
        {[crop.image, crop.image, crop.image].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={crop.name}
            className="rounded-2xl h-72 w-full object-cover shadow"
          />
        ))}
      </section>

      {/* Overview */}
      <section>
        <h1 className="text-3xl font-extrabold text-green-700">
          {crop.name}
        </h1>
        <p className="mt-3 text-gray-700">
          {crop.description}
        </p>
      </section>

      {/* Key Info */}
      <section className="bg-green-50 p-6 rounded-2xl grid md:grid-cols-3 gap-4">
        <p>📍 Location: <strong>{crop.location}</strong></p>
        <p>💰 Price: <strong>৳{crop.pricePerUnit}/{crop.unit}</strong></p>
        <p>📦 Available Quantity: <strong>{crop.quantity}</strong></p>
      </section>

      {/* Action */}
      <section>
        {user ? (
          <button
            onClick={() => alert("Interest sent")}
            className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
          >
            Send Interest
          </button>
        ) : (
          <p>
            Please{" "}
            <Link to="/login" className="text-green-700 font-semibold">
              login
            </Link>{" "}
            to contact seller.
          </p>
        )}
      </section>

      {/* Related Crops */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          🌱 Related Crops
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map((c) => (
            <Link
              key={c._id}
              to={`/crop/${c._id}`}
              className="bg-white p-3 rounded-xl shadow hover:shadow-lg"
            >
              <img
                src={c.image}
                alt={c.name}
                className="h-32 w-full object-cover rounded"
              />
              <p className="mt-2 font-semibold">{c.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
