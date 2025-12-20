import React, { useEffect, useState } from "react";
import { getCrops } from "../lib/api";
import { useAuth } from "../context/AuthContext";

export default function MyInterests() {
  const { user } = useAuth();
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    getCrops()
      .then((crops) => {
        const myInterests = [];

        crops.forEach((crop) => {
          crop.interests?.forEach((interest) => {
            if (interest.userEmail === user.email) {
              myInterests.push({
                _id: interest._id,
                cropName: crop.name,
                sellerName: crop.sellerName,
                pricePerUnit: crop.pricePerUnit,
                unit: crop.unit,
                quantity: interest.quantity,
                status: interest.status,
              });
            }
          });
        });

        setInterests(myInterests);
      })
      .finally(() => setLoading(false));
  }, [user.email]);

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div data-aos="fade-up" className="space-y-6">
      <h2 className="text-3xl font-bold text-green-700">
        My Interests
      </h2>

      {interests.length === 0 ? (
        <div className="card bg-base-100 shadow p-6 border border-green-200">
          <p>You have not shown interest in any crops yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow border border-green-200">
          <table className="table table-zebra">
            <thead className="bg-green-600 text-white">
              <tr>
                <th>Crop</th>
                <th>Seller</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {interests.map((i) => (
                <tr key={i._id}>
                  <td className="font-semibold">{i.cropName}</td>
                  <td>{i.sellerName}</td>
                  <td className="text-green-700 font-semibold">
                    ৳{i.pricePerUnit}/{i.unit}
                  </td>
                  <td>{i.quantity}</td>
                  <td>
                    <span className="badge badge-warning">
                      {i.status}
                    </span>
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
