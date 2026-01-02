import React from "react";
import { Link } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import crops from "../data/crops";

export default function Home({ user }) {
  const latest = crops.slice(0, 5);

  return (
    <div className="space-y-10 pb-12 pt-20">


      {/* ========== HERO / CAROUSEL ========== */}
      <section className="rounded-3xl overflow-hidden shadow-2xl">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop
          className="h-[65vh]"
        >
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')",
              }}
            >
              <div className="h-full bg-black/60 flex items-center">
                <div className="px-10 text-white max-w-5xl">
                  <h1 className="text-5xl font-extrabold">
                    Connecting Farmers
                    <span className="block text-yellow-300">
                      Growing Futures 🌾
                    </span>
                  </h1>
                  <p className="mt-4 max-w-xl">
                    A trusted digital agro marketplace for Bangladesh.
                  </p>

                  <div className="mt-6 flex gap-4">
                    <Link
                      to="/all-crops"
                      className="btn bg-yellow-400 text-black rounded-full"
                    >
                      Browse Crops
                    </Link>

                    {!user && (
                      <Link
                        to="/register"
                        className="btn bg-white text-green-700 rounded-full"
                      >
                        Join Free
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6')",
              }}
            />
          </SwiperSlide>
        </Swiper>

        <div className="text-center mt-4 animate-bounce text-green-700 font-semibold">
          ↓ Scroll to explore ↓
        </div>
      </section>

      {/* ========== LATEST CROPS ========== */}
      <section className="p-10 rounded-3xl bg-green-50">
        <h2 className="text-3xl font-bold text-green-700">
          🌾 Latest Crop Listings
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-6">
          {latest.map((crop) => (
            <Link key={crop.id} to={`/crop/${crop.id}`}>
              <div className="bg-white rounded-xl shadow p-4 text-center">
                <img
                  src={crop.image}
                  alt={crop.name}
                  className="h-28 w-full object-cover rounded"
                />
                <p className="mt-2 font-semibold">{crop.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          "Post Crops",
          "Connect Buyers",
          "Grow Together",
        ].map((item, i) => (
          <div
            key={i}
            className="p-8 bg-white rounded-2xl shadow text-center"
          >
            <h3 className="font-bold text-xl text-green-700">{item}</h3>
          </div>
        ))}
      </section>

      {/* ========== FEATURES ========== */}
      <section className="grid md:grid-cols-4 gap-6">
        {["Verified Farmers", "Fair Prices", "Secure Deals", "Fast Support"].map(
          (f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="font-semibold">{f}</h3>
            </div>
          )
        )}
      </section>

      {/* ========== STATISTICS ========== */}
      <section className="bg-green-100 p-10 rounded-3xl text-center">
        <div className="grid md:grid-cols-3 gap-6">
          <div><h2 className="text-3xl font-bold">5K+</h2><p>Farmers</p></div>
          <div><h2 className="text-3xl font-bold">2K+</h2><p>Listings</p></div>
          <div><h2 className="text-3xl font-bold">98%</h2><p>Success Rate</p></div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="p-10 bg-white rounded-3xl shadow">
        <h2 className="text-2xl font-bold">💬 Testimonials</h2>
        <p className="mt-3 italic">
          "KrishiLink helped me sell my crops faster and fairly."
        </p>
      </section>

      {/* ========== BLOGS ========== */}
      <section className="p-10 bg-lime-50 rounded-3xl">
        <h2 className="text-2xl font-bold">📘 Farming Tips</h2>
        <p className="mt-2">Modern techniques for better yield.</p>
      </section>

      {/* ========== FAQ ========== */}
      <section className="p-10">
        <h2 className="text-2xl font-bold">❓ FAQ</h2>
        <p>How do I sell crops? → Register & post listing.</p>
      </section>

      {/* ========== NEWSLETTER ========== */}
      <section className="bg-green-700 text-white p-10 rounded-3xl text-center">
        <h2 className="text-2xl font-bold">📩 Stay Updated</h2>
        <input
          type="email"
          placeholder="Your email"
          className="mt-4 p-2 rounded text-black"
        />
      </section>

      {/* ========== COMMUNITY CTA ========== */}
      <section className="bg-gradient-to-r from-green-500 to-lime-500 p-12 rounded-3xl text-center text-white">
        <h2 className="text-3xl font-bold">
          🌿 Built for Farmers & Communities
        </h2>
        {!user && (
          <Link
            to="/register"
            className="btn bg-yellow-300 text-black rounded-full mt-6"
          >
            Join the Community
          </Link>
        )}
      </section>
    </div>
  );
}
