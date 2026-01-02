import React, { useEffect, useState } from "react";
import { getCrops, getInterests } from "../../lib/api"; // make sure your API functions exist
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Overview() {
  const [crops, setCrops] = useState([]);
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch crops and interests
    Promise.all([getCrops(), getInterests()])
      .then(([cropsData, interestsData]) => {
        setCrops(cropsData || []);
        setInterests(interestsData || []);
      })
      .catch((err) => {
        console.error("Failed to load dashboard data:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-20">Loading dashboard...</p>;

  // Prepare chart data safely
  const chartData = {
    labels: crops.length > 0 ? crops.map(c => c.name) : ["No data"],
    datasets: [
      {
        label: "Number of Interests",
        data: crops.length > 0 ? crops.map(c => interests.filter(i => i.cropId === c._id).length) : [0],
        backgroundColor: "rgba(34,197,94,0.7)",
      },
    ],
  };

  return (
    <div className="space-y-8">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
          <h3 className="text-xl font-bold">{crops.length}</h3>
          <p>Total Crops</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
          <h3 className="text-xl font-bold">{interests.length}</h3>
          <p>Total Interests</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
          <h3 className="text-xl font-bold">{crops.filter(c => c.ownerEmail).length}</h3>
          <p>Total Sellers</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-bold mb-4">Interests per Crop</h3>
        <Bar data={chartData} />
      </div>

      {/* Data Table */}
      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <h3 className="text-lg font-bold mb-4">Crop Data</h3>
        {crops.length === 0 ? (
          <p>No crops available</p>
        ) : (
          <table className="w-full table-auto border-collapse">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Price</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Location</th>
              </tr>
            </thead>
            <tbody>
              {crops.map(c => (
                <tr key={c._id} className="even:bg-gray-100">
                  <td className="p-2">{c.name}</td>
                  <td className="p-2">৳{c.pricePerUnit}/{c.unit}</td>
                  <td className="p-2">{c.quantity}</td>
                  <td className="p-2">{c.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
