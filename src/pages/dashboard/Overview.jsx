import React, { useEffect, useState } from "react";
import { getCrops, getInterests } from "../../lib/api";
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Overview() {
  const [crops, setCrops] = useState([]);
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getCrops(), getInterests()])
      .then(([cropsData, interestsData]) => {
        setCrops(cropsData || []);
        setInterests(interestsData || []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-20">Loading dashboard...</p>;

  const chartData = {
    labels: crops.map(c => c.name),
    datasets: [
      {
        label: "Number of Interests",
        data: crops.map(
          c => interests.filter(i => i.cropId === c._id || i.cropId === c.id).length
        ),
        backgroundColor: "rgba(34,197,94,0.7)",
      },
    ],
  };

  return (
    <div className="space-y-8">
      {/* layout untouched */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-bold mb-4">Interests per Crop</h3>
        <Bar data={chartData} />
      </div>
    </div>
  );
}
