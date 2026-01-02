import React, { useEffect, useMemo, useState } from "react";
import { getCrops } from "../lib/api";
import CropCard from "../components/CropCard";

const ITEMS_PER_PAGE = 8;

export default function AllCrops() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCrops()
      .then(setCrops)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const locations = useMemo(
    () => [...new Set(crops.map(c => c.location))],
    [crops]
  );

  const filtered = useMemo(() => {
    let data = crops.filter(c =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );

    if (location) data = data.filter(c => c.location === location);

    if (sort === "price")
      data.sort((a, b) => a.pricePerUnit - b.pricePerUnit);

    if (sort === "newest")
      data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return data;
  }, [crops, search, location, sort]);

  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold text-green-700 mb-6">
        🌾 Explore Crops
      </h1>

      {/* Controls */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <input
          placeholder="🔍 Search"
          className="input input-bordered"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select
          className="select select-bordered"
          value={location}
          onChange={e => setLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          {locations.map(l => (
            <option key={l}>{l}</option>
          ))}
        </select>

        <select
          className="select select-bordered"
          value={sort}
          onChange={e => setSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="price">Price (Low → High)</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* Skeleton */}
      {loading && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-[320px] bg-gray-200 rounded-2xl animate-pulse"
            />
          ))}
        </div>
      )}

      {/* Cards */}
      {!loading && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginated.map(crop => (
              <CropCard key={crop._id} crop={crop} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  page === i + 1
                    ? "bg-green-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
