import React from 'react';
import { ArrowRight, Globe, Award, Clock, Shield } from 'lucide-react';
import Logo from './Logo';

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center">
          
          {/* Logo Section */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex flex-col items-center">
              <Logo size="lg" variant="premium" />
              <div className="mt-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-3">
                  Welcome to KMD Foods
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-red-600">
                  Exporting Indian Goodness to the World
                </h2>
              </div>
            </div>
          </div>

          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-2 rounded-full mb-8">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Premium Export Quality</span>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Premium quality Indian food products, crafted with traditional methods and 
            exported worldwide. Experience authentic flavors that transcend borders.
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <button className="group inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:shadow-lg transition-all">
              View Our Products
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Premium Stats with Logo Accent */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-100 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Logo size="sm" variant="default" />
              </div>
              <div className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-700 font-medium">Countries</div>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-100 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Logo size="sm" variant="default" />
              </div>
              <div className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                <div className="text-gray-700 font-medium">Products</div>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-100 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Logo size="sm" variant="default" />
              </div>
              <div className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-4">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="text-3xl font-bold text-yellow-600 mb-2">25+</div>
                <div className="text-gray-700 font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Logo Trust Badge */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col items-center">
              <div className="text-sm text-gray-600 mb-4">Certified & Trusted by</div>
              <Logo size="md" variant="premium" />
              <div className="mt-3 text-lg font-medium text-gray-900">KMD Foods International</div>
            </div>
          </div>
        </div>
      </div>

      {/* Color Accent */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500"></div>
    </div>
  );
};

export default Hero;