import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductsGrid';
import StorySection from '../components/StorySection';
import { Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProductGrid />
      <StorySection />
      
      {/* Premium Newsletter */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-6">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Stay Updated with KMD Foods
              </h3>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Get exclusive export offers, new product launches, and industry insights delivered to your inbox.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:shadow-md transition-all">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;