// src/pages/ShippingPolicy.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Package, 
  Clock, 
  MapPin, 
  ArrowLeft,
  Globe, 
  CreditCard, 
  Info, 
  Navigation, 
  CheckCircle, 
  FileText, 
  Shield,
  Mail,
  Phone
} from 'lucide-react';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link 
              to="/"
              className="flex items-center space-x-2 text-amber-100 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3">
              <Truck className="w-8 h-8" />
              <span className="text-sm opacity-90">Shipping Policy</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl mb-6">
            <Package className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Shipping Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: December 1, 2024
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg">
              At <span className="font-semibold text-amber-700">KMD FOOD PRODUCTS</span>, we strive to deliver your products promptly and efficiently.
            </p>
          </div>
        </div>

        {/* Processing Time */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="border-l-4 border-amber-500">
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Processing Time
                  </h2>
                  <div className="bg-amber-50 p-6 rounded-lg">
                    <p className="text-gray-700 text-lg">
                      Orders are processed within <span className="font-bold text-amber-700">2-3 business days</span> after payment confirmation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Time */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="border-l-4 border-amber-500">
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Truck className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Delivery Time
                  </h2>
                  
                  {/* Domestic Shipping */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-amber-600" />
                      Domestic Shipping
                    </h3>
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                      <p className="text-gray-700 text-lg">
                        <span className="font-bold text-blue-700">5-7 business days</span> from dispatch
                      </p>
                      <p className="text-gray-600 mt-2 text-sm">
                        *Business days exclude weekends and public holidays
                      </p>
                    </div>
                  </div>

                  {/* International Shipping */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-amber-600" />
                      International Shipping
                    </h3>
                    <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                      <p className="text-gray-700 text-lg">
                        <span className="font-bold text-green-700">10-15 business days</span> depending on the destination and customs
                      </p>
                      <p className="text-gray-600 mt-2 text-sm">
                        *Delivery time may vary based on customs clearance and local holidays
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Charges */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="border-l-4 border-amber-500">
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Shipping Charges
                  </h2>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <p className="text-gray-700 text-lg">
                      Shipping charges will be calculated at checkout based on your location
                    </p>
                    <div className="mt-4 flex items-center text-gray-600">
                      <Info className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        Exact shipping cost will be displayed before payment
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tracking */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="border-l-4 border-amber-500">
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Navigation className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Tracking
                  </h2>
                  <div className="bg-amber-50 p-6 rounded-lg">
                    <p className="text-gray-700 text-lg">
                      You will receive a tracking number once your order is shipped
                    </p>
                    <div className="mt-4 flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">
                        Tracking updates will be sent to your registered email
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-center text-white mb-8">
          <h2 className="text-2xl font-bold mb-4">Need Help with Shipping?</h2>
          <p className="mb-6 opacity-90">
            Our support team is here to assist you with any shipping-related queries
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="mailto:kmdfoodproducts2023@gmail.com"
              className="px-6 py-3 bg-white text-amber-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </a>
            <a
              href="tel:+919884060089"
              className="px-6 py-3 bg-amber-800 text-white font-semibold rounded-lg hover:bg-amber-900 transition-colors flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: +91 9884060089
            </a>
          </div>
        </div>

        {/* Related Links */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Policies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/return-policy"
              className="p-4 bg-gray-50 hover:bg-green-50 rounded-lg border border-gray-200 hover:border-green-300 transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Package className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-green-700">Return Policy</h4>
                  <p className="text-sm text-gray-500">Returns & refunds</p>
                </div>
              </div>
            </Link>
            <Link
              to="/terms"
              className="p-4 bg-gray-50 hover:bg-amber-50 rounded-lg border border-gray-200 hover:border-amber-300 transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                  <FileText className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-amber-700">Terms & Conditions</h4>
                  <p className="text-sm text-gray-500">Complete terms</p>
                </div>
              </div>
            </Link>
            <Link
              to="/privacy"
              className="p-4 bg-gray-50 hover:bg-purple-50 rounded-lg border border-gray-200 hover:border-purple-300 transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-purple-700">Privacy Policy</h4>
                  <p className="text-sm text-gray-500">Data protection</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} KMD FOOD PRODUCTS. All rights reserved.
          </p>
          <p className="mt-2">
            For shipping inquiries: <a href="mailto:kmdfoodproducts2023@gmail.com" className="text-amber-600 hover:text-amber-700">kmdfoodproducts2023@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;