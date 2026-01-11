import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function Login() {
  const { login, googleLogin } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      toast.error("Invalid email or password");
    }
  }

  const demoLogin = async () => {
    try {
      await login("demo@user.com", "123456");
      toast.success("Demo login successful!");
      navigate("/");
    } catch {
      toast.error("Demo login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <form
        onSubmit={submit}
        className="bg-white p-8 rounded-xl w-full max-w-md shadow"
      >
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-3"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full mb-4"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button className="btn bg-green-600 text-white w-full mb-2">
          Login
        </button>

        <button
          type="button"
          onClick={demoLogin}
          className="btn btn-outline w-full mb-3"
        >
          Login as Demo User
        </button>

        <button
          type="button"
          onClick={googleLogin}
          className="btn btn-outline w-full"
        >
          Continue with Google
        </button>

        {/* DEMO INFO (IMPORTANT FOR EXAMINER) */}
        <div className="mt-4 p-3 bg-gray-100 rounded text-sm text-center">
          <p className="font-semibold">Demo Credentials</p>
          <p>Email: demo@user.com</p>
          <p>Password: 123456</p>
        </div>

        <p className="text-center mt-4 text-sm">
          New here?{" "}
          <Link to="/register" className="text-green-700 font-semibold">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
