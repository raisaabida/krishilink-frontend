/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        krishi: {
          "primary": "#4CAF50",
          "secondary": "#A3E635",
          "accent": "#FDE047",
          "neutral": "#166534",
          "base-100": "#F9FAF6",
          "info": "#3ABFF8",
          "success": "#4ADE80",
          "warning": "#FACC15",
          "error": "#F75555"
        },
      },
    ],
  },
};
