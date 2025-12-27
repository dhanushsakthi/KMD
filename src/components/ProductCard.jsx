// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Heart, Zap, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-amber-50 to-emerald-50">
          {/* Image Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-amber-100 to-emerald-100 flex items-center justify-center">
              <div className="text-5xl">
                {product.category === 'Malts' ? '🌾' : 
                 product.category === 'Flour Mixes' ? '🥣' :
                 product.category === 'Ready Mixes' ? '⚡' :
                 product.category === 'Fruit Powders' ? '🍌' : '🥘'}
              </div>
            </div>
          </div>

          {/* Tags */}
          {product.tag && (
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                product.tag === 'Best Seller' 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white' 
                  : product.tag === 'Premium'
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white'
                  : product.tag === 'Popular'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                  : 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
              } shadow-lg`}>
                {product.tag}
              </span>
            </div>
          )}

          {/* Wishlist Button */}
          <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
            <Heart className="w-5 h-5 text-gray-600 hover:text-rose-500 transition-colors" />
          </button>

          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Quick View
            </span>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full">
            {product.category}
          </span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="ml-1.5 text-sm font-semibold text-gray-900">{product.rating}</span>
          </div>
        </div>

        <Link to={`/product/${product.id}`}>
          <h3 className="text-xl font-display font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[40px]">
          {product.shortDesc}
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.benefits.slice(0, 2).map((benefit, index) => (
            <span key={index} className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
              {benefit}
            </span>
          ))}
        </div>

        {/* Price & Weight */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-2xl font-bold text-gray-900">{product.price}</span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                {product.originalPrice}
              </span>
            )}
          </div>
          <span className="text-sm font-medium text-gray-500">{product.weight}</span>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3.5 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
          <ShoppingBag className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;