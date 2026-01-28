import React from 'react';
import { Star, Truck, Package, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  // Color assignment based on category
  const getColorClass = (category) => {
    switch (category) {
      case 'Malt Products':
        return {
          bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
          border: 'border-blue-200',
          text: 'text-blue-600',
          iconBg: 'bg-blue-100'
        };
      case 'Flour Mixes':
        return {
          bg: 'bg-gradient-to-br from-red-50 to-red-100',
          border: 'border-red-200',
          text: 'text-red-600',
          iconBg: 'bg-red-100'
        };
      case 'Porridge Mixes':
        return {
          bg: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
          border: 'border-yellow-200',
          text: 'text-yellow-600',
          iconBg: 'bg-yellow-100'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-green-50 to-green-100',
          border: 'border-green-200',
          text: 'text-green-600',
          iconBg: 'bg-green-100'
        };
    }
  };

  const colorClass = getColorClass(product.category);

  return (
    <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden cursor-pointer">
          <div className={`aspect-square ${colorClass.bg} ${colorClass.border} flex items-center justify-center p-4 relative`}>
            {/* Show actual product image if available, otherwise show icon */}
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className={`w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 ${product.imageClass || ''}`}
              />
            ) : (
              <div className={`text-6xl group-hover:scale-110 transition-transform duration-300 ${colorClass.iconBg} p-6 rounded-2xl`}>
                {product.icon}
              </div>
            )}

            {/* KMD Logo Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="text-3xl font-bold">
                <span className="text-blue-600">K</span>
                <span className="text-red-600">M</span>
                <span className="text-yellow-600">D</span>
              </div>
            </div>
          </div>

          {/* Category & Tags */}
          <div className="absolute top-3 left-3 right-3 flex justify-between">
            <div className="bg-white px-3 py-1.5 rounded-lg shadow-sm">
              <span className={`text-xs font-bold ${colorClass.text}`}>
                {product.category}
              </span>
            </div>

            {product.tag && (
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1.5 rounded-lg shadow-sm">
                <span className="text-xs font-bold">{product.tag}</span>
              </div>
            )}
          </div>

          {/* Shelf Life Badge */}
          <div className="absolute bottom-3 right-3">
            <div className="bg-white px-3 py-1.5 rounded-lg shadow-sm flex items-center">
              <Clock className="w-3 h-3 mr-1 text-gray-600" />
              <span className="text-xs font-medium text-gray-700">{product.shelfLife}</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-6">
        {/* Product Name with KMD Logo */}
        <Link to={`/product/${product.id}`} className="block">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900 line-clamp-1 hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
            <div className="text-xs font-bold">
              <span className="text-blue-600">K</span>
              <span className="text-red-600">M</span>
              <span className="text-yellow-600">D</span>
            </div>
          </div>
        </Link>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 ${star <= product.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            {product.rating} (Export Quality)
          </span>
        </div>

        {/* Price & Shelf Life */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-right">
            <div className="text-sm font-medium text-gray-700">Shelf Life</div>
            <div className="text-sm text-gray-600">{product.shelfLife}</div>
          </div>
        </div>

        {/* CTA Button */}
        <Link to={`/product/${product.id}`}>
          <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:shadow-md transition-all mb-4">
            View Details
          </button>
        </Link>

        {/* Export Info with KMD Logo */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <div className="text-xs font-bold mr-2">
                <span className="text-blue-600">K</span>
                <span className="text-red-600">M</span>
                <span className="text-yellow-600">D</span>
              </div>
            </div>
            <div className="flex items-center">
              <Package className="w-3 h-3 mr-1 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Quick Benefits */}
        {product.benefits && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {product.benefits.slice(0, 2).map((benefit, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;