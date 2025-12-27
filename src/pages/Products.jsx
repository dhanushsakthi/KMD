// src/pages/Products.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories, healthBenefits } from '../data/products';
import { Filter, Search, Grid, List, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Products = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBenefits, setSelectedBenefits] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Parse search query from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    if (search) {
      setSearchQuery(search);
    }
  }, [location]);

  const filteredProducts = products.filter(product => {
    // Category filter
    const matchesCategory = selectedCategory === 'all' || 
      product.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
    
    // Search filter
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Benefits filter
    const matchesBenefits = selectedBenefits.length === 0 || 
      selectedBenefits.some(benefit => product.benefits.includes(benefit));
    
    // Price filter
    const price = parseInt(product.price.replace('₹', '').replace(',', ''));
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
    
    return matchesCategory && matchesSearch && matchesBenefits && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') {
      const priceA = parseInt(a.price.replace('₹', '').replace(',', ''));
      const priceB = parseInt(b.price.replace('₹', '').replace(',', ''));
      return priceA - priceB;
    }
    if (sortBy === 'price-high') {
      const priceA = parseInt(a.price.replace('₹', '').replace(',', ''));
      const priceB = parseInt(b.price.replace('₹', '').replace(',', ''));
      return priceB - priceA;
    }
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  const toggleBenefit = (benefit) => {
    setSelectedBenefits(prev =>
      prev.includes(benefit)
        ? prev.filter(b => b !== benefit)
        : [...prev, benefit]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/20">
      {/* Hero */}
      <div className="bg-gradient-to-r from-amber-600 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Premium Health Foods
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Discover our collection of 14 specially crafted products for your wellness journey
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Search */}
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search health foods..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filter Toggle for Mobile */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex items-center gap-2 bg-amber-50 text-amber-700 font-semibold px-6 py-3.5 rounded-xl"
            >
              <Filter className="w-5 h-5" />
              Filters
              <ChevronDown className={`w-5 h-5 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* View and Sort Controls */}
            <div className="flex items-center gap-4">
              {/* View Toggle */}
              <div className="flex items-center bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 rounded-lg ${viewMode === 'grid' ? 'bg-white shadow' : ''}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2.5 rounded-lg ${viewMode === 'list' ? 'bg-white shadow' : ''}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-xl px-6 py-3.5 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="featured">Featured</option>
                  <option value="name">Name A-Z</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Mobile Filter Panel */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-6 pt-6 border-t border-gray-200 overflow-hidden"
              >
                <div className="space-y-6">
                  {/* Category Filter */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            selectedCategory === category.id
                              ? 'bg-amber-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {category.icon} {category.name} ({category.count})
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Health Benefits Filter */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Health Benefits</h3>
                    <div className="flex flex-wrap gap-2">
                      {healthBenefits.slice(0, 8).map((benefit) => (
                        <button
                          key={benefit}
                          onClick={() => toggleBenefit(benefit)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                            selectedBenefits.includes(benefit)
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {benefit}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
                    </h3>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Desktop Sidebar Filters */}
          <div className="hidden lg:block space-y-8">
            {/* Category Filter */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-display font-bold text-xl text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all ${
                      selectedCategory === category.id
                        ? 'bg-amber-50 text-amber-800 border border-amber-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Health Benefits Filter */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-display font-bold text-xl text-gray-900 mb-4">Health Benefits</h3>
              <div className="space-y-2">
                {healthBenefits.map((benefit) => (
                  <button
                    key={benefit}
                    onClick={() => toggleBenefit(benefit)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                      selectedBenefits.includes(benefit)
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${
                      selectedBenefits.includes(benefit) ? 'bg-emerald-500' : 'bg-gray-300'
                    }`}></div>
                    <span className="text-sm font-medium">{benefit}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                Price Range
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-600"
                />
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {/* Results Info */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{sortedProducts.length}</span> of {products.length} products
              </p>
              {selectedBenefits.length > 0 && (
                <button
                  onClick={() => setSelectedBenefits([])}
                  className="text-sm text-amber-700 hover:text-amber-800 font-medium"
                >
                  Clear filters
                </button>
              )}
            </div>

            {/* Products Grid/List */}
            {sortedProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl shadow">
                <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedBenefits([]);
                    setPriceRange([0, 1000]);
                  }}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold px-8 py-3 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 flex items-center gap-6">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-amber-50 to-emerald-50 flex items-center justify-center flex-shrink-0">
                      <div className="text-4xl">
                        {product.category === 'Malts' ? '🌾' : 
                         product.category === 'Flour Mixes' ? '🥣' :
                         product.category === 'Ready Mixes' ? '⚡' :
                         product.category === 'Fruit Powders' ? '🍌' : '🥘'}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 mb-3">{product.description}</p>
                          <div className="flex items-center gap-4">
                            <span className="text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                              {product.category}
                            </span>
                            <span className="text-sm text-gray-500">{product.weight}</span>
                            <div className="flex items-center">
                              <span className="text-amber-500">★</span>
                              <span className="ml-1 text-sm font-medium">{product.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">{product.price}</div>
                          {product.originalPrice && (
                            <div className="text-sm text-gray-500 line-through">{product.originalPrice}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;