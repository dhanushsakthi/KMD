import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ShoppingCart, Truck, Package, Clock, Shield, 
  Star, Globe, Heart, Share2, Minus, Plus, Check, Award, Users
} from 'lucide-react';
import { products } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('500g');

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <button 
            onClick={() => navigate('/products')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const weightOptions = ['250g', '500g', '1kg', '5kg'];
  const benefits = product.benefits || ['Premium Quality', 'Export Ready', 'Long Shelf Life'];

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  const calculateTotal = () => {
    const price = parseInt(product.price.replace('₹', '').replace(',', ''));
    return price * quantity;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column - Product Images & Details */}
          <div>
            {/* Product Image */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-8">
              <div className="aspect-square bg-white rounded-xl flex items-center justify-center p-8">
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-8xl">{product.icon}</div>
                )}
              </div>
              
              {/* Image Badges */}
              <div className="flex justify-center gap-4 mt-6">
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center">
                  <Shield className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Export Certified</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center">
                  <Award className="w-4 h-4 text-yellow-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Premium Quality</span>
                </div>
              </div>
            </div>

            {/* Product Highlights */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Product Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Description */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Product Description</h3>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      100% Natural Ingredients
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      No Artificial Preservatives
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Traditional Preparation
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Quality Standards</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      FSSAI Certified
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      ISO 22000 Certified
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Export Quality
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Info & Order */}
          <div>
            {/* Product Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 text-sm font-medium rounded-full mb-2">
                    {product.category}
                  </span>
                  <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="p-2 rounded-lg hover:bg-gray-100">
                    <Heart className="w-6 h-6 text-gray-400 hover:text-red-500" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-gray-100">
                    <Share2 className="w-6 h-6 text-gray-400 hover:text-blue-500" />
                  </button>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${star <= product.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">({product.rating} Rating)</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-green-600 font-medium">In Stock</span>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="text-4xl font-bold text-gray-900">{product.price}</div>
                <div className="text-gray-500">Export Price (Excluding Shipping)</div>
              </div>
            </div>

            {/* Weight Options */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Package Size</h3>
              <div className="flex flex-wrap gap-3">
                {weightOptions.map((weight) => (
                  <button
                    key={weight}
                    onClick={() => setSelectedWeight(weight)}
                    className={`px-6 py-3 rounded-lg border transition-all ${selectedWeight === weight ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'}`}
                  >
                    {weight}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quantity</h3>
              <div className="flex items-center">
                <button
                  onClick={decreaseQuantity}
                  className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-l-lg hover:bg-gray-50"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <div className="w-20 h-12 flex items-center justify-center border-t border-b border-gray-300">
                  <span className="text-xl font-semibold">{quantity}</span>
                </div>
                <button
                  onClick={increaseQuantity}
                  className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-r-lg hover:bg-gray-50"
                >
                  <Plus className="w-5 h-5" />
                </button>
                <div className="ml-6">
                  <div className="text-sm text-gray-500">Minimum Order: {product.moq}</div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Price ({quantity} units)</span>
                  <span className="font-semibold">₹{calculateTotal()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600">Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Customs & Duties</span>
                  <span className="text-blue-600">Included</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Export Cart
                </button>
                <button className="w-full py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all">
                  Request Quote for Bulk Order
                </button>
              </div>
            </div>

            {/* Product Specifications */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-500">Category</div>
                    <div className="font-medium">{product.category}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Shelf Life</div>
                    <div className="font-medium flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      {product.shelfLife}
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-500">MOQ (Minimum Order Quantity)</div>
                    <div className="font-medium flex items-center">
                      <Package className="w-4 h-4 mr-2 text-gray-400" />
                      {product.moq}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Export Ready</div>
                    <div className="font-medium flex items-center text-green-600">
                      <Check className="w-4 h-4 mr-2" />
                      Yes, Worldwide
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Truck className="w-5 h-5 mr-2 text-blue-600" />
                Shipping Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Delivery Time</span>
                  <span className="font-semibold">15-25 Business Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Shipping Method</span>
                  <span className="font-semibold">Air & Sea Freight Available</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Countries Served</span>
                  <span className="font-semibold flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    50+ Countries
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Information */}
        <div className="mt-16">
          {/* Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <div className="flex space-x-8">
              <button className="py-3 px-1 border-b-2 border-blue-600 text-blue-600 font-semibold">
                Product Details
              </button>
              <button className="py-3 px-1 text-gray-500 hover:text-gray-700">
                Export Documentation
              </button>
              <button className="py-3 px-1 text-gray-500 hover:text-gray-700">
                Reviews & Ratings
              </button>
              <button className="py-3 px-1 text-gray-500 hover:text-gray-700">
                FAQs
              </button>
            </div>
          </div>

          {/* Additional Details */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h4>
              <p className="text-gray-600">Every batch undergoes 7-step quality check for international standards.</p>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Customer Support</h4>
              <p className="text-gray-600">Dedicated export support team available 24/7 for your queries.</p>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Certifications</h4>
              <p className="text-gray-600">ISO, FSSAI, Halal certified with all export documentation ready.</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Export {product.name}?</h3>
              <p className="text-blue-100 mb-6">Get competitive pricing and premium export service</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100">
                  Download Product Brochure
                </button>
                <button className="px-8 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900">
                  Contact Export Manager
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;