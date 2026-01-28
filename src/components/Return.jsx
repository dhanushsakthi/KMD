// src/pages/ReturnPolicy.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  RefreshCw, Package, Clock, Mail, AlertCircle, 
  ArrowLeft, CheckCircle, XCircle, DollarSign, Phone , Truck, FileText, Shield
} from 'lucide-react';

const ReturnPolicy = () => {
  const nonReturnableItems = [
    'Personalized or customized products',
    'Products damaged due to misuse',
    'Products without original packaging',
    'Used or opened products (unless defective)',
    'Perishable items past expiration date',
    'Products missing parts or accessories'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link 
              to="/"
              className="flex items-center space-x-2 text-emerald-100 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3">
              <RefreshCw className="w-8 h-8" />
              <span className="text-sm opacity-90">Return & Refund Policy</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl mb-6">
            <RefreshCw className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Return & Refund Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: December 1, 2024
          </p>
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mt-4">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Please read our policy carefully</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-gray-700 text-lg">
              <span className="font-bold text-emerald-700">KMD FOOD PRODUCTS</span> aims to ensure complete customer satisfaction.
            </p>
            <div className="mt-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <p className="text-emerald-800">
                Our policy is designed to be fair, transparent, and customer-friendly.
              </p>
            </div>
          </div>
        </div>

        {/* Returns Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="border-l-4 border-emerald-500">
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Returns
                  </h2>
                  
                  {/* Return Period */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <Clock className="w-5 h-5 text-emerald-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-800">Return Period</h3>
                    </div>
                    <div className="bg-blue-50 p-5 rounded-lg">
                      <p className="text-gray-700">
                        Returns are accepted within <span className="font-bold text-blue-700">7 business days</span> from the date of delivery.
                      </p>
                    </div>
                  </div>

                  {/* Condition */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-800">Product Condition</h3>
                    </div>
                    <div className="bg-emerald-50 p-5 rounded-lg">
                      <p className="text-gray-700">
                        Products must be <span className="font-bold">unused, in original packaging, and in resalable condition</span>.
                      </p>
                    </div>
                  </div>

                  {/* Initiation Process */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <Mail className="w-5 h-5 text-emerald-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-800">Initiate Return</h3>
                    </div>
                    <div className="bg-purple-50 p-5 rounded-lg">
                      <p className="text-gray-700 mb-2">
                        To initiate a return, contact us at <span className="font-bold text-purple-700">kmdfoodproducts2023@gmail.com</span> with your order details.
                      </p>
                      <p className="text-gray-700">
                        Include your order number and reason for return in the email.
                      </p>
                    </div>
                  </div>

                  {/* Pickup Timeline */}
                  <div>
                    <div className="flex items-center mb-3">
                      <Package className="w-5 h-5 text-emerald-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-800">Pickup Timeline</h3>
                    </div>
                    <div className="bg-amber-50 p-5 rounded-lg">
                      <p className="text-gray-700">
                        Return once initiated will be picked within <span className="font-bold text-amber-700">3-5 working days</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Refunds Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="border-l-4 border-emerald-500">
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Refunds
                  </h2>
                  
                  {/* Processing Time */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <Clock className="w-5 h-5 text-emerald-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-800">Processing Time</h3>
                    </div>
                    <div className="bg-green-50 p-5 rounded-lg">
                      <p className="text-gray-700">
                        Refunds will be credited within <span className="font-bold text-green-700">5-7 business days</span> after receiving the returned product.
                      </p>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-800">Refund Method</h3>
                    </div>
                    <div className="bg-blue-50 p-5 rounded-lg">
                      <p className="text-gray-700">
                        Refunds will be made to the <span className="font-bold">original payment method</span> used for purchase.
                      </p>
                    </div>
                  </div>

                  {/* Shipping Charges */}
                  <div>
                    <div className="flex items-center mb-3">
                      <AlertCircle className="w-5 h-5 text-emerald-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-800">Shipping Charges</h3>
                    </div>
                    <div className="bg-red-50 p-5 rounded-lg">
                      <p className="text-gray-700">
                        Shipping charges are <span className="font-bold text-red-700">non-refundable</span> unless the return is due to our error.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Non-returnable Items */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="border-l-4 border-red-500">
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Non-returnable Items
                  </h2>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <XCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Personalized or customized products</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Products damaged due to misuse</span>
                      </li>
                      {nonReturnableItems.slice(2).map((item, index) => (
                        <li key={index} className="flex items-start">
                          <XCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-center text-white mb-8">
          <h2 className="text-2xl font-bold mb-4">Need Help with Returns?</h2>
          <p className="mb-6 opacity-90">
            Our customer support team is ready to assist you with the return process
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="mailto:kmdfoodproducts2023@gmail.com"
              className="px-6 py-3 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email for Returns
            </a>
            <a
              href="tel:+919884060089"
              className="px-6 py-3 bg-emerald-800 text-white font-semibold rounded-lg hover:bg-emerald-900 transition-colors flex items-center justify-center"
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
              to="/shipping-policy"
              className="p-4 bg-gray-50 hover:bg-blue-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Truck className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-blue-700">Shipping Policy</h4>
                  <p className="text-sm text-gray-500">Delivery information</p>
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
            For return inquiries: <a href="mailto:kmdfoodproducts2023@gmail.com" className="text-emerald-600 hover:text-emerald-700">kmdfoodproducts2023@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

// Note: Need to add these missing imports at the top
// import { Phone } from 'lucide-react';
// import { Truck } from 'lucide-react';
// import { FileText } from 'lucide-react';
// import { Shield } from 'lucide-react';

export default ReturnPolicy;