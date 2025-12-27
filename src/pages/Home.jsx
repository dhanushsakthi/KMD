import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductsGrid';
import StorySection from '../components/StorySection';

const Home = () => {
  return (
    <>
      <Hero />
      <ProductGrid />
      <StorySection />
      
      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-r from-spice-primary to-spice-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Join Our Spice Journey
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-100">
            Subscribe to get exclusive offers, new product alerts, and authentic recipes 
            delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="btn-primary bg-white text-spice-primary hover:bg-gray-100 whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-200 mt-4">
            By subscribing, you agree to our Privacy Policy
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;