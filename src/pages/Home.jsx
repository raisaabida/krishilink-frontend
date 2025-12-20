import React from "react";
import { Link } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Images
import tomatoImg from "../assets/tomato.jpg";
import cornImg from "../assets/corn.jpg";
import potatoImg from "../assets/potato.jpg";
import onionImg from "../assets/onion.jpg";
import riceImg from "../assets/rice.jpg";
import juteImg from "../assets/jute.jpg";
import caneImg from "../assets/cane.jpg";
import paddyImg from "../assets/paddy.jpg";
import carrotImg from "../assets/carrot.jpg";
import turmericImg from "../assets/turmeric.jpg";
import crops from "../data/crops";
export default function Home({ user }) {
 

const latest = crops.slice(0, 5);


  return (
    <div className="space-y-24 pb-16">

      {/* ================= HERO ================= */}
      <section className="rounded-3xl overflow-hidden shadow-2xl">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop
          className="h-[440px]"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80')",
              }}
            >
              <div className="h-full bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
                <div className="max-w-6xl px-10 text-white">
                  <h1 className="text-5xl font-extrabold leading-tight">
                    Connecting Farmers,
                    <span className="text-yellow-300 block">
                      Growing Futures 🌾
                    </span>
                  </h1>
                  <p className="mt-4 text-lg max-w-xl opacity-90">
                    KrishiLink builds a trusted agro-network for farmers, buyers,
                    and communities across Bangladesh.
                  </p>

                  <div className="mt-6 flex gap-4">
                    <Link
                      to="/all-crops"
                      className="btn bg-yellow-400 text-black border-none rounded-full px-6 hover:bg-yellow-300"
                    >
                      Browse Crops
                    </Link>

                    {!user && (
                      <Link
                        to="/register"
                        className="btn bg-yellow-400 text-black border-none rounded-full px-6 hover:bg-yellow-300"
                      >
                        Join Free
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80')",
              }}
            >
              <div className="h-full bg-gradient-to-r from-green-900/70 to-green-900/30 flex items-center">
                <div className="max-w-5xl px-10 text-white">
                  <h1 className="text-4xl font-bold">
                    Buy • Sell • Connect
                  </h1>
                  <p className="mt-3 text-lg opacity-90">
                    A transparent digital marketplace for agricultural growth.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* ================= LATEST CROPS ================= */}
      <section className="rounded-3xl bg-gradient-to-br from-green-100 via-lime-50 to-yellow-100 p-10 shadow-xl">
        <h2 className="text-3xl font-extrabold text-green-800">
          🌾 Latest Crop Listings
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
          {latest.map((crop) => (
            <Link
              key={crop.id}
              to={`/crop/${crop.id}`}
              className="group text-center"
            >
              <div className="rounded-2xl overflow-hidden bg-white/80 backdrop-blur shadow hover:shadow-lg transition">
                <img
                  src={crop.image}
                  alt={crop.name}
                  className="h-32 w-full object-cover group-hover:scale-110 transition"
                />
              </div>
              <p className="mt-3 font-semibold text-green-700 group-hover:text-yellow-600">
                {crop.name}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-right mt-6">
          <Link to="/all-crops" className="link text-green-700 font-semibold">
            View All →
          </Link>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          { step: "🌱", title: "Post Crops", desc: "List what you grow or sell." },
          { step: "🤝", title: "Connect", desc: "Find buyers & farmers nearby." },
          { step: "📈", title: "Grow Together", desc: "Build trust & profits." },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white p-8 shadow hover:shadow-xl transition border border-green-200"
          >
            <div className="text-4xl">{item.step}</div>
            <h3 className="mt-3 text-xl font-bold text-green-700">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* ================= COMMUNITY ================= */}
      <section className="rounded-3xl bg-gradient-to-r from-green-500 to-lime-500 text-white p-12 text-center shadow-xl">
        <h2 className="text-3xl font-bold">
          🌿 Built for Farmers & Communities
        </h2>
        <p className="mt-3 max-w-2xl mx-auto opacity-90">
          Share stories, learn modern practices, and grow smarter together.
        </p>

        <Link
          to="/register"
          className="btn bg-yellow-300 text-black border-none rounded-full mt-6 px-8"
        >
          Join the Community
        </Link>
      </section>

    </div>
  );
}
