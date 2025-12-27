// src/pages/ProductDetail.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { Star, ShoppingBag, Truck, Shield, Check, Heart, Share2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-amber-600 hover:text-amber-700 font-semibold">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-700 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <div>
            <div className="bg-gradient-to-br from-amber-50 to-emerald-50 rounded-3xl p-8 shadow-xl border border-amber-100">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-100 to-emerald-100 flex items-center justify-center">
                <div className="text-9xl">
                  {product.category === 'Malts' ? '🌾' : 
                   product.category === 'Flour Mixes' ? '🥣' :
                   product.category === 'Ready Mixes' ? '⚡' :
                   product.category === 'Fruit Powders' ? '🍌' : '🥘'}
                </div>
              </div>
            </div>

            {/* Product Tags */}
            <div className="flex flex-wrap gap-3 mt-6">
              {product.tag && (
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  {product.tag}
                </span>
              )}
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
                {product.category}
              </span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                {product.weight}
              </span>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 mb-6">{product.description}</p>
              
              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <span className="text-lg font-bold text-gray-900">{product.rating}/5.0</span>
                <span className="text-gray-500">(128 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-6">
              <div className="text-4xl font-bold text-gray-900">{product.price}</div>
              {product.originalPrice && (
                <div className="text-2xl text-gray-400 line-through">{product.originalPrice}</div>
              )}
              {product.originalPrice && (
                <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold">
                  Save ₹{parseInt(product.originalPrice.replace('₹', '').replace(',', '')) - parseInt(product.price.replace('₹', '').replace(',', ''))}
                </div>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${product.stock > 10 ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                <span className="font-medium">
                  {product.stock > 10 ? 'In Stock' : 'Low Stock'} ({product.stock} units)
                </span>
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Key Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* Health Benefits */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Health Benefits</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <div className="flex items-center border border-gray-300 rounded-xl">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 text-gray-600 hover:text-gray-900"
                    >
                      -
                    </button>
                    <span className="px-4 py-3 font-semibold text-gray-900 border-x border-gray-300">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-3 text-gray-600 hover:text-gray-900"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex-1">
                  <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3">
                    <ShoppingBag className="w-6 h-6" />
                    Add to Cart - ₹{parseInt(product.price.replace('₹', '').replace(',', '')) * quantity}
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 py-3.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-amber-500 hover:text-amber-600 transition-colors">
                  <Heart className="w-5 h-5" />
                  Add to Wishlist
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-amber-500 hover:text-amber-600 transition-colors">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              {[
                { icon: <Truck className="w-6 h-6" />, text: "Free Shipping", subtext: "Above ₹999" },
                { icon: <Shield className="w-6 h-6" />, text: "Quality Guarantee", subtext: "100% Natural" },
                { icon: <Check className="w-6 h-6" />, text: "Easy Returns", subtext: "7 Days Policy" }
              ].map((feature, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mx-auto mb-2">
                    {feature.icon}
                  </div>
                  <div className="font-semibold text-gray-900">{feature.text}</div>
                  <div className="text-sm text-gray-500">{feature.subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    <div className="h-48 bg-gradient-to-br from-amber-50 to-emerald-50 flex items-center justify-center">
                      <div className="text-5xl">
                        {relatedProduct.category === 'Malts' ? '🌾' : 
                         relatedProduct.category === 'Flour Mixes' ? '🥣' :
                         relatedProduct.category === 'Ready Mixes' ? '⚡' :
                         relatedProduct.category === 'Fruit Powders' ? '🍌' : '🥘'}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-gray-900">
                          {relatedProduct.price}
                        </span>
                        <span className="text-sm text-gray-500">{relatedProduct.weight}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;