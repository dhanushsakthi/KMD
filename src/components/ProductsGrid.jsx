import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products, categories } from '../data/products';
import { Filter } from 'lucide-react';

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = selectedCategory === 'All Products'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return parseFloat(a.price.replace('₹', '')) - parseFloat(b.price.replace('₹', ''));
    if (sortBy === 'price-high') return parseFloat(b.price.replace('₹', '')) - parseFloat(a.price.replace('₹', ''));
    if (sortBy === 'rating') return b.rating - a.rating;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  return (
    <section className="section-padding bg-gradient-to-b from-white to-spice-light/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-spice-primary/10 text-spice-primary font-semibold text-sm mb-4">
            Premium Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Handcrafted with <span className="text-spice-primary">Passion</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each spice is carefully selected, cleaned, and blended using traditional methods 
            to preserve authenticity and maximize flavor.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category.name
                    ? 'bg-spice-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} <span className="text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-spice-primary"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Featured Products */}
        <div className="mt-16">
          <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Featured Products
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {products.filter(p => p.featured).slice(0, 3).map((product) => (
              <div key={product.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex items-center space-x-4">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center flex-shrink-0">
                  <div className="text-2xl">🌶️</div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{product.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    <button className="text-sm text-spice-primary hover:text-spice-dark font-semibold">
                      Add to Cart →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;