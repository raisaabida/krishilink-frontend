import { Link } from "react-router-dom";

export default function CropCard({ crop }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition flex flex-col h-full">
      
      {/* Image */}
      <img
        src={crop.image}
        alt={crop.name}
        className="h-40 w-full object-cover rounded-t-2xl"
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-green-700">
          {crop.name}
        </h3>

        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {crop.description || "Fresh quality crop directly from farmer."}
        </p>

        {/* Meta Info */}
        <div className="mt-3 text-sm space-y-1">
          <p>📍 {crop.location}</p>
          <p className="font-semibold text-gray-800">
            💰 ৳{crop.pricePerUnit}/{crop.unit}
          </p>
        </div>

        {/* Button */}
        <Link
          to={`/crop/${crop._id}`}
          className="mt-auto block text-center bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition mt-4"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
