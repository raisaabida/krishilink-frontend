import React, { useEffect, useState } from "react";
import { getCrops, deleteCrop } from "../lib/api";
import { useAuth } from "../context/AuthContext";

export default function MyPosts() {
  const { user } = useAuth();
  const [myPosts, setMyPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    getCrops()
      .then((data) => {
        // Case-insensitive email match
        const mine = data.filter(
          (c) => c.ownerEmail?.toLowerCase() === user.email.toLowerCase()
        );
        setMyPosts(mine);
      })
      .finally(() => setLoading(false));
  }, [user.email]);

  async function handleDelete(id) {
    if (!confirm("Are you sure to delete this crop?")) return;

    try {
      await deleteCrop(id);
      setMyPosts((prev) => prev.filter((c) => c._id !== id));
    } catch {
      alert("Failed to delete crop");
    }
  }

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div data-aos="fade-up" className="space-y-6">
      <h2 className="text-3xl font-bold text-green-700">My Crop Posts</h2>

      {myPosts.length === 0 ? (
        <div className="card bg-base-100 shadow p-6 border border-green-200">
          <p>You have not added any crops yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow border border-green-200">
          <table className="table table-zebra">
            <thead className="bg-green-600 text-white text-left">
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {myPosts.map((c) => (
                <tr key={c._id} className="hover:bg-green-50">
                  <td>{c.name}</td>
                  <td className="font-semibold">
                    {c.quantity} {c.unit}
                  </td>
                  <td className="font-semibold text-green-700">
                    ৳{c.pricePerUnit}
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText(JSON.stringify(c))
                      }
                      className="btn btn-xs btn-neutral mr-2"
                    >
                      Copy
                    </button>

                    <button
                      onClick={() => handleDelete(c._id)}
                      className="btn btn-xs btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
