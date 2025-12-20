import React from "react";

export default function NotFound() {
  return (
    <div
      className="min-h-[70vh] flex items-center justify-center px-4"
      data-aos="zoom-in"
    >
      <div className="text-center space-y-4">
        <h1 className="text-7xl font-extrabold text-green-700 drop-shadow">
          404
        </h1>

        <p className="text-lg opacity-80">Oops… This page doesn’t exist.</p>

        <a
          href="/"
          className="btn bg-green-700 hover:bg-green-800 text-white rounded-full px-6"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

