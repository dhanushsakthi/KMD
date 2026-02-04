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

  const getNumericPrice = (product) => {
    const value = product.price || product.retailPrice || product.mrp || '0';
    return parseInt(value.toString().replace(/[₹,\s]/g, '') || 0);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    if (search) setSearchQuery(search);
  }, [location]);

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      selectedCategory === 'all' ||
      product.category?.toLowerCase().replace(/\s+/g, '-') === selectedCategory;

    const text = `${product.name ?? ''} ${product.description ?? ''}`.toLowerCase();
    const matchesSearch = text.includes(searchQuery.toLowerCase());

    const matchesBenefits =
      selectedBenefits.length === 0 ||
      selectedBenefits.some(b => product.benefits?.includes(b));

    const price = getNumericPrice(product);
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];

    return matchesCategory && matchesSearch && matchesBenefits && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return getNumericPrice(a) - getNumericPrice(b);
    if (sortBy === 'price-high') return getNumericPrice(b) - getNumericPrice(a);
    if (sortBy === 'rating') return (b.rating ?? 0) - (a.rating ?? 0);
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

  const renderProductGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {sortedProducts.map(product => (
        <div key={product.id}>
          <ProductCard product={product} />
          <div className="mt-2 text-center">
            <span className="text-lg font-bold text-gray-900">
              {product.retailPrice || product.mrp}
            </span>
            {product.mrp && product.retailPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                {product.mrp}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderProductList = () => (
    <div className="space-y-4">
      {sortedProducts.map(product => (
        <div key={product.id} className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-6">
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-display font-bold">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <span className="text-sm text-gray-500">{product.weight}</span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">
                  {product.retailPrice || product.mrp}
                </div>
                {product.mrp && product.retailPrice && (
                  <div className="text-sm text-gray-500 line-through">
                    {product.mrp}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/20">
      {/* Hero */}
      <div className="bg-gradient-to-r from-amber-600 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Premium Health Foods
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-6">
            Discover our collection of specially crafted wellness products
          </p>
          <div className="text-sm font-medium text-white/90 bg-white/10 backdrop-blur-sm inline-block px-4 py-2 rounded-lg border border-white/20">
            * All prices include GST 5% and courier charges (Tamilnadu only). <span className="underline italic">Conditions apply.</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Product Grid */}
        <div className="lg:col-span-3">
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

          {sortedProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow">
              <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            </div>
          ) : viewMode === 'grid' ? (
            renderProductGrid()
          ) : (
            renderProductList()
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;