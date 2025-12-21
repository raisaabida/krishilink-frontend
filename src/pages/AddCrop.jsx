import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { addCrop } from "../lib/api";

export default function AddCrop() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    image: "",
    location: "",
    pricePerUnit: "",
    unit: "",
    quantity: "",
    description: "",
  });


  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!user?.email) return alert("You must be logged in to add a crop!");

    const newCrop = {
      ...form,
      ownerEmail: user.email,               // <-- important for MyPosts
      sellerName: user.displayName || user.email,
      createdAt: new Date(),
      interests: [],                        // make sure backend has this
    };

    try {
      await addCrop(newCrop, user.email);   // send ownerEmail too
      navigate("/my-posts");
    } catch (err) {
      console.error(err);
      alert("Failed to add crop. Try again.");
    }
  }


  
  return (
    <div data-aos="fade-up" className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-green-700 mb-6">
        Add New Crop
      </h2>

      <form
        onSubmit={handleSubmit}
        className="card bg-base-100 shadow-xl border border-green-200 p-6 space-y-4"
      >
        <input
          name="name"
          placeholder="Crop Name"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />

        <input
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />

        <input
          name="location"
          placeholder="Location"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />

        <div className="flex gap-3">
          <input
            name="pricePerUnit"
            placeholder="Price"
            type="number"
            className="input input-bordered w-full"
            onChange={handleChange}
            required
          />

          <input
            name="unit"
            placeholder="Unit (kg, ton)"
            className="input input-bordered w-full"
            onChange={handleChange}
            required
          />
        </div>

        <input
          name="quantity"
          placeholder="Quantity"
          type="number"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          rows="4"
          onChange={handleChange}
        />

        <button className="btn bg-green-600 hover:bg-green-700 text-white w-full">
          Add Crop
        </button>
      </form>
    </div>
  );
}
