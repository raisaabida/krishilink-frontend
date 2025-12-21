import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";


export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await register(email, password, name, photo);
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

        <input
          placeholder="Name"
          className="input input-bordered w-full mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          placeholder="Photo URL (optional)"
          className="input input-bordered w-full mb-4"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />

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
