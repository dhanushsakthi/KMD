// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import ProductsGrid from '../components/ProductsGrid';
import StorySection from '../components/StorySection';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductsGrid limit={8} />
      <StorySection />
      
      {/* Health Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-sm mb-4">
              Health Benefits
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Nourish Your <span className="text-emerald-600">Body</span> & 
              <span className="text-amber-600 block">Soul</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our products are designed to provide complete nutrition while supporting 
              your health journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '💪', title: 'Energy Boost', desc: 'Natural energy from whole grains' },
              { icon: '❤️', title: 'Heart Health', desc: 'Supports cardiovascular wellness' },
              { icon: '🩺', title: 'Digestive Aid', desc: 'High fiber for gut health' },
              { icon: '🛡️', title: 'Immunity', desc: 'Rich in antioxidants and vitamins' },
              { icon: '🧠', title: 'Brain Health', desc: 'Nutrients for cognitive function' },
              { icon: '⚖️', title: 'Weight Management', desc: 'Low glycemic, high protein' },
              { icon: '🦴', title: 'Bone Strength', desc: 'Calcium and mineral rich' },
              { icon: '🌿', title: 'Detox', desc: 'Natural cleansing properties' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Join Our Health Journey
            </h2>
            <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to get exclusive offers, health tips, and new product alerts.
            </p>
            <form className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-amber-700 font-semibold px-8 py-4 rounded-xl hover:bg-amber-50 transition-colors">
                Subscribe
              </button>
            </form>
            <p className="text-amber-200 text-sm mt-4">
              By subscribing, you agree to our Privacy Policy
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;