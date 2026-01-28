import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {
  ArrowLeft, ShoppingCart, Truck, Package, Clock, Shield,
  Star, Heart, Share2, Minus, Plus, Check, Award,
  BookOpen, ChefHat, Droplets, Leaf
} from 'lucide-react';
import { products } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/products')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const getNumericPrice = () => {
    const value = product.retailPrice || product.mrp || product.price || '0';
    return parseInt(value.toString().replace(/[₹,\s]/g, '') || 0);
  };

  const calculateTotal = () => getNumericPrice() * quantity;

  const benefits = product.benefits || ['Premium Quality', 'Export Ready', 'Long Shelf Life'];

  const increaseQuantity = () => setQuantity(q => q + 1);
  const decreaseQuantity = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  const handlePayment = () => {
    const totalAmount = calculateTotal();

    const options = {
      key: "rzp_live_S3EmcTGtBdQizx",
      amount: totalAmount * 100, // Amount in paise
      currency: "INR",
      name: "KMD Food Products",
      description: `Purchase of ${product.name}`,
      image: product.image || "https://placeholder.com/logo.png",
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#2563EB"
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      alert("Payment Failed: " + response.error.description);
    });
    rzp1.open();
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Column */}
          <div>
            {/* Product Image */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-8">
              <div className="aspect-square bg-white rounded-xl flex items-center justify-center p-8">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                ) : (
                  <div className="text-8xl">{product.icon}</div>
                )}
              </div>

              {/* Product Tags */}
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {product.featured && (
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-1.5 rounded-full text-sm font-medium">
                    <Star className="w-4 h-4 inline mr-1" />
                    Featured
                  </div>
                )}
                {product.tag && (
                  <div className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium">
                    {product.tag}
                  </div>
                )}
                <div className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium">
                  <Shield className="w-4 h-4 inline mr-1" />
                  FSSAI Certified
                </div>
              </div>
            </div>

            {/* Ingredients Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Leaf className="w-6 h-6 mr-2 text-green-600" />
                Ingredients
              </h3>
              <p className="text-gray-700">{product.ingredients}</p>
            </div>

            {/* Directions to Use */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <ChefHat className="w-6 h-6 mr-2 text-emerald-600" />
                Directions to Use
              </h3>
              <p className="text-gray-700 whitespace-pre-line">{product.directions}</p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Product Header */}
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full mb-2 font-medium">
                {product.category}
              </span>

              <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(s => (
                    <Star key={s}
                      className={`w-5 h-5 ${s <= (product.rating || 0)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'fill-gray-200 text-gray-200'}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600 font-medium">({product.rating || '4.5'} Rating)</span>
                <span className="mx-3 text-gray-300">•</span>
                <span className="text-gray-600">{product.weight}</span>
                <span className="mx-3 text-gray-300">•</span>
                <span className="text-gray-600">Shelf: {product.shelfLife}</span>
              </div>

              {/* Price Section */}
              <div className="mb-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                <div className="flex items-end mb-2">
                  <div className="text-4xl font-bold text-gray-900">
                    {product.retailPrice || product.mrp || product.price || '₹0'}
                  </div>
                  <div className="ml-3 text-sm text-gray-500">per pack</div>
                </div>

                {product.mrp && product.mrp !== product.retailPrice && (
                  <div className="flex items-center">
                    <span className="text-lg text-gray-500 line-through mr-3">
                      MRP: {product.mrp}
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded">
                      Save ₹{getNumericPrice() - parseInt(product.mrp.toString().replace(/[₹,\s]/g, '') || 0)}
                    </span>
                  </div>
                )}

                <div className="mt-2 text-sm text-gray-500">
                  <span className="font-medium">GST:</span> {product.gst || '5%'} included
                </div>
              </div>
            </div>

            {/* Product Description */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
                Product Description
              </h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Product Benefits */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Health Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quantity</h3>
              <div className="flex items-center">
                <button onClick={decreaseQuantity}
                  className="w-12 h-12 border border-r-0 rounded-l-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                  <Minus className="w-5 h-5" />
                </button>

                <div className="w-20 h-12 flex items-center justify-center border-t border-b text-xl font-semibold text-gray-900">
                  {quantity}
                </div>

                <button onClick={increaseQuantity}
                  className="w-12 h-12 border border-l-0 rounded-r-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Price ({quantity} units)</span>
                  <span className="font-semibold">₹{calculateTotal()}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">GST ({product.gst || '5%'})</span>
                  <span className="font-semibold">Included</span>
                </div>
              </div>

              <div className="border-t border-gray-300 mt-4 pt-4 flex justify-between text-lg font-bold">
                <span>Total Amount</span>
                <span className="text-blue-700">₹{calculateTotal()}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => {
                  addToCart(product, quantity);
                  alert("Added to cart!");
                }}
                className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
              <button
                onClick={handlePayment}
                className="w-full py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Buy Now
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;