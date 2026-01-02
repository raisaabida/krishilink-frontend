import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    photo: ""
  });

  async function submit(e) {
    e.preventDefault();
    try {
      await register(
        form.email,
        form.password,
        form.name,
        form.photo
      );
      toast.success("Account created!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <form onSubmit={submit} className="bg-white p-8 rounded-xl w-96 shadow">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Register
        </h2>

        {["name", "email", "password", "photo"].map((field) => (
          <input
            key={field}
            type={field === "password" ? "password" : "text"}
            placeholder={field.toUpperCase()}
            className="input input-bordered w-full mb-3"
            value={form[field]}
            onChange={e =>
              setForm({ ...form, [field]: e.target.value })
            }
            required={field !== "photo"}
          />
        ))}

        <button className="btn bg-green-600 text-white w-full">
          Register
        </button>

        <p className="text-center mt-3 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-green-700 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
