import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCrops } from "../lib/api";

export default function AllCrops() {
  const [search, setSearch] = useState("");
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCrops()
      .then(setCrops)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);


  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <p className="text-center mt-20">Loading crops...</p>;
  }


  
  return (
    <div className="p-6 max-w-7xl mx-auto">

      <h1 className="text-3xl font-extrabold text-green-700 mb-6">
        🌾 All Crops
      </h1>

      <div className="mb-8">
        <input
          type="text"
          placeholder="🔍 Search crops (e.g. Rice, Tomato...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-3 rounded-xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 shadow"
        />
      </div>

      {filteredCrops.length === 0 && (
        <div className="text-center text-gray-600 mt-10">
          <p className="text-xl font-semibold">❌ No crops found</p>
          <p className="mt-2">Try searching with a different name.</p>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCrops.map((crop) => (
          <div
            key={crop._id}
            className="rounded-2xl overflow-hidden shadow bg-white hover:shadow-xl transition"
          >
            <img
              src={crop.image}
              alt={crop.name}
              className="w-full h-40 object-cover"
            />

            <div className="p-4 space-y-2">
              <h3 className="text-lg font-bold text-green-800">
                {crop.name}
              </h3>

              <p className="text-sm text-gray-600">
                📍 {crop.location}
              </p>

              <p className="text-sm font-semibold text-gray-800">
                💰 ৳{crop.pricePerUnit}/{crop.unit}
              </p>

              <Link
                to={`/crop/${crop._id}`}
                className="inline-block mt-3 w-full text-center bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
