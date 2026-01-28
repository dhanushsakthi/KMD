// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Truck, Award, CheckCircle } from "lucide-react";
import heroBackground from "../assets/image.jpg";

const Hero = () => {
  const features = [
    { icon: <Shield className="w-5 h-5" />, label: "Premium Quality" },
    { icon: <Globe className="w-5 h-5" />, label: "Global Export" },
    { icon: <Truck className="w-5 h-5" />, label: "Fast Dispatch" },
    { icon: <CheckCircle className="w-5 h-5" />, label: "Certified Products" }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Deep Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/40" />

      {/* Subtle Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:`url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 39h40v1H0z' fill='%23ffffff'/%3E%3C/svg%3E")`
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-28 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-300/40 bg-white/10 backdrop-blur-md mb-6">
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          <span className="text-amber-200 text-sm tracking-wide">
            Export Quality • Since 2023
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
          Bringing Authentic<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
            Indian Goodness
          </span>{" "}
          to the World
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
          Premium millet & malt-based food products crafted with traditional care,
          trusted globally for quality, purity and taste.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
          <Link
            to="/products"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
          >
            Explore Our Products
            <ArrowRight className="inline-block w-5 h-5 ml-2" />
          </Link>

          <Link
            to="/about"
            className="px-8 py-4 rounded-xl border border-white/40 text-white hover:bg-white/10 transition"
          >
            Learn About Us
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex flex-col items-center hover:bg-white/20 transition"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center mb-2">
                {f.icon}
              </div>
              <span className="text-sm font-medium">{f.label}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 text-white/90">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-amber-300">50+</h3>
            <p>Product Variants</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-amber-300">25+</h3>
            <p>Countries Served</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-amber-300">100%</h3>
            <p>Quality Assurance</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-amber-300">4</h3>
            <p>Award Recognitions</p>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500" />
    </section>
  );
};

export default Hero;
