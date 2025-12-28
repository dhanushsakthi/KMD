import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products, categories } from '../data/products';
import { Filter, Package, Truck, Globe, Download, Phone, FileText } from 'lucide-react';

const ProductsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const filteredProducts = selectedCategory === 'All Products'
    ? products
    : products.filter(product => product.category === selectedCategory);

  // Get featured products (only show when viewing all products)
  const featuredProducts = selectedCategory === 'All Products' 
    ? products.filter(product => product.featured).slice(0, 3)
    : [];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-2 rounded-full mb-6">
            <Package className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">EXPORT COLLECTION</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Premium Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carefully curated health food products meeting international quality standards
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Filter by Category</h3>
            <div className="flex items-center text-gray-600">
              <Filter className="w-4 h-4 mr-2" />
              <span>{filteredProducts.length} Products</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('All Products')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${selectedCategory === 'All Products' ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              All Products ({products.length})
            </button>
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${selectedCategory === category.name ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
        
        {/* Featured Products Section - ONLY when viewing All Products */}
        {selectedCategory === 'All Products' && featuredProducts.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Featured Products</h3>
              <div className="text-sm text-blue-600 font-medium">Premium Selection</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {featuredProducts.map((product) => (
                <div key={`featured-${product.id}`} className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {product.image ? (
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain p-2"
                        />
                      ) : (
                        <span className="text-2xl">{product.icon}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-900">{product.name}</h4>
                        {product.tag && (
                          <span className="text-xs bg-gradient-to-r from-blue-500 to-blue-600 text-white px-2 py-1 rounded">
                            {product.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{product.description.substring(0, 60)}...</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold text-gray-900">{product.price}</span>
                          <div className="text-xs text-gray-500">Shelf: {product.shelfLife}</div>
                        </div>
                        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                          View Details →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Product Grid - All products */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'All Products' ? 'All Products' : selectedCategory}
            </h3>
            <div className="text-sm text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 mb-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Products Found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We don't have any products in this category yet. Please check back soon or browse other categories.
            </p>
            <button
              onClick={() => setSelectedCategory('All Products')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:shadow-lg transition-all"
            >
              View All Products
            </button>
          </div>
        )}
        
        {/* Export Features */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-8 mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Why Choose KMD for Export?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium quality health food products with seamless export experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-100">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Global Network</h4>
              <p className="text-gray-600">Exporting to 50+ countries with reliable logistics</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border border-gray-100">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg mb-6">
                <Package className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Quality Packaging</h4>
              <p className="text-gray-600">ISO standard packaging for maximum freshness</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border border-gray-100">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg mb-6">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Fast Shipping</h4>
              <p className="text-gray-600">Timely delivery with real-time tracking</p>
            </div>
          </div>

          {/* Export Benefits */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <div className="text-center mb-6">
              <h4 className="text-lg font-bold text-gray-900">Export Benefits</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 text-lg">✓</span>
                </div>
                <div className="text-sm text-gray-700">Customs Cleared</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-red-600 text-lg">⚡</span>
                </div>
                <div className="text-sm text-gray-700">Quick Dispatch</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-yellow-600 text-lg">📦</span>
                </div>
                <div className="text-sm text-gray-700">Bulk Discounts</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-600 text-lg">📄</span>
                </div>
                <div className="text-sm text-gray-700">Documentation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-2 rounded-full mb-6">
            <FileText className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">EXPORT READY</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Export Our Premium Products?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us for bulk orders, custom packaging, and export inquiries. Get competitive pricing and premium quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:shadow-lg transition-all">
              <Phone className="w-5 h-5 mr-2" />
              Get Export Quote
            </button>
            <button className="group inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-5 h-5 mr-2" />
              Download Catalog
            </button>
            <button className="group inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-lg hover:shadow-lg transition-all">
              <FileText className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductsGrid;