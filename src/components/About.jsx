// src/pages/About.jsx
import React from "react";
import { Award, Leaf, Target, Users, ShoppingBag, Globe2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 to-emerald-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to K M D Food Products
          </h1>
          <p className="text-lg text-amber-100">
            Blending traditional nutrition with modern convenience
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">

        {/* Company Story */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-gray-700 leading-relaxed">
            K.M.D Food Products was founded in Chennai, Tamil Nadu, with a vision to
            bring traditional nutrition into convenient, modern food formats.
            Our range focuses on millet-based value-added products and malt-based
            nutrition, available in 100g, 250g, and 500g pack sizes to suit
            everyday consumption needs.
          </p>
        </div>

        {/* Who We Serve + Product Focus */}
        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-emerald-700" />
              <h3 className="font-semibold text-emerald-800">Who We Serve</h3>
            </div>
            <p className="text-gray-700">
              Our products are crafted for working women, children, food lovers, 
              and health-conscious individuals who seek nutritious, natural, and 
              easy-to-prepare food options.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Leaf className="w-5 h-5 text-amber-700" />
              <h3 className="font-semibold text-amber-800">Product Focus</h3>
            </div>
            <p className="text-gray-700">
              Our core offerings include millet value-added foods and malt-based 
              nutritional products designed to support healthy lifestyles while 
              preserving authentic taste and tradition.
            </p>
          </div>

        </div>

        {/* Revenue Channels */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
          <div className="flex items-center gap-3 mb-3">
            <ShoppingBag className="w-5 h-5 text-amber-600" />
            <h2 className="text-xl font-bold text-gray-900">Where We Sell</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our revenue is generated through multiple channels including direct sales,
            supermarkets, online platforms, retail networks, distributors, and export markets.
          </p>
        </div>

        {/* Achievements & Future Goals */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-5 h-5 text-purple-700" />
              <h3 className="font-semibold text-purple-800">Awards & Recognition</h3>
            </div>
            <p className="text-gray-700">
              K.M.D Food Products has been honored with four awards in recognition
              of our commitment to quality, innovation, and natural food excellence.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-5 h-5 text-blue-700" />
              <h3 className="font-semibold text-blue-800">Our Future Vision</h3>
            </div>
            <p className="text-gray-700">
              Over the coming years, we aim to expand our market presence across India,
              introduce new millet-based product variants, strengthen digital branding,
              and grow our export portfolio.
            </p>
          </div>

        </div>

        {/* Market Outlook */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <Globe2 className="w-5 h-5 text-blue-700" />
            <h3 className="font-semibold text-blue-800">Market Opportunity</h3>
          </div>
          <p className="text-gray-700">
            With increasing awareness of healthy eating, natural food choices, and 
            millet-based nutrition, K.M.D Food Products is positioned to serve a 
            rapidly growing consumer segment seeking quality, authenticity, and convenience.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
