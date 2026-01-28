// src/pages/PrivacyPolicy.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, Lock, Eye, Mail, Phone, MapPin, 
  FileText, Cookie, Server, Globe, 
  Users, Bell, ArrowLeft, CheckCircle,
  Database, ShieldCheck, Key
} from 'lucide-react';

const PrivacyPolicy = () => {
  const dataRights = [
    {
      right: 'Access',
      description: 'Request access to personal information we hold about you',
      icon: <Eye className="w-5 h-5" />
    },
    {
      right: 'Correction',
      description: 'Request correction of inaccurate or incomplete data',
      icon: <FileText className="w-5 h-5" />
    },
    {
      right: 'Deletion',
      description: 'Request deletion of your personal data',
      icon: <Database className="w-5 h-5" />
    },
    {
      right: 'Objection',
      description: 'Object to processing of your information',
      icon: <Bell className="w-5 h-5" />
    },
    {
      right: 'Restriction',
      description: 'Request restriction of processing under certain conditions',
      icon: <Lock className="w-5 h-5" />
    },
    {
      right: 'Portability',
      description: 'Request transfer of your data to another organization',
      icon: <Server className="w-5 h-5" />
    }
  ];

  const personalInfo = [
    'Name',
    'Email address',
    'Mailing address',
    'Phone number',
    'Payment information (processed securely through third-party gateways)'
  ];

  const usageData = [
    'IP address',
    'Browser type and version',
    'Pages visited and time spent',
    'Referring websites',
    'Device type and operating system'
  ];

  const cookiePurposes = [
    'Remember your preferences and login status',
    'Analyze Website traffic and user behavior',
    'Deliver relevant advertising'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link 
              to="/"
              className="flex items-center space-x-2 text-purple-100 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8" />
              <span className="text-sm opacity-90">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl mb-6">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Last Updated: December 1, 2024
          </p>
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
            <Lock className="w-4 h-4" />
            <span className="text-sm font-medium">Your privacy and data security are our priority</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              At <span className="font-bold text-purple-700">KMD FOOD PRODUCTS</span> ("we," "our," or "us"), your privacy and data security are very important to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit or make a purchase on our website, <a href="https://kmdfoodproducts.com/" className="text-purple-600 hover:text-purple-700">https://kmdfoodproducts.com/</a> ("Website").
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By using our Website, you agree to the collection and use of information in accordance with this policy. Please read it carefully.
            </p>
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500">
              <p className="text-purple-800 text-sm">
                <strong>Important:</strong> This Privacy Policy applies to all visitors, users, and customers of our Website. By accessing or using our services, you acknowledge that you have read and understood this policy.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: Information We Collect */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="border-l-4 border-purple-500">
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Information We Collect
                  </h2>
                  <p className="text-gray-700 mb-6">
                    We collect different types of information to provide and improve our services:
                  </p>

                  {/* Personal Information */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-600" />
                      a. Personal Identification Information
                    </h3>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <p className="text-gray-700 mb-4">
                        When you place an order, create an account, subscribe to newsletters, or contact us, we may collect personal details including:
                      </p>
                      <ul className="space-y-2">
                        {personalInfo.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-blue-500 mr-3" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Usage Data */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Database className="w-5 h-5 mr-2 text-green-600" />
                      b. Usage Data
                    </h3>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <p className="text-gray-700 mb-4">
                        We automatically collect information on how you access and use our Website, including:
                      </p>
                      <ul className="space-y-2">
                        {usageData.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Cookies */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Cookie className="w-5 h-5 mr-2 text-amber-600" />
                      c. Cookies and Tracking Technologies
                    </h3>
                    <div className="bg-amber-50 p-6 rounded-lg">
                      <p className="text-gray-700">
                        We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and provide personalized content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: How We Use Your Information */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="border-l-4 border-purple-500">
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    How We Use Your Information
                  </h2>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">
                      We use your information for the following purposes:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                        <span className="text-gray-700">To process and fulfill your orders</span>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                        <span className="text-gray-700">To communicate order updates, promotions, and customer support</span>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                        <span className="text-gray-700">To improve our Website, products, and services</span>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                        <span className="text-gray-700">To comply with legal obligations and protect our rights</span>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-white rounded-lg md:col-span-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                        <span className="text-gray-700">To personalize your shopping experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: How We Share Your Information */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="border-l-4 border-purple-500">
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    How We Share Your Information
                  </h2>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">
                      We do not sell, trade, or rent your personal data to third parties. However, we may share information with:
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Users className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-800">Service Providers</h4>
                          <p className="text-gray-700 text-sm">Trusted partners who assist us in operating the Website, processing payments, shipping orders, or marketing.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-800">Legal Authorities</h4>
                          <p className="text-gray-700 text-sm">When required by law, to protect legal rights or safety.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-100 rounded">
                      <p className="text-blue-800 text-sm">
                        All third parties are obligated to keep your information secure and confidential.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Your Data Protection Rights */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="border-l-4 border-purple-500">
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Your Data Protection Rights
                  </h2>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-6">
                      Depending on your location, you may have the right to:
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {dataRights.map((right, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg border border-green-200">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                              {right.icon}
                            </div>
                            <h4 className="font-semibold text-gray-800">{right.right}</h4>
                          </div>
                          <p className="text-gray-600 text-sm">{right.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-white rounded-lg">
                      <p className="text-gray-700">
                        To exercise these rights, please contact us at <span className="font-bold text-purple-700">kmdfoodproducts2023@gmail.com</span>. We will respond within a reasonable timeframe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Data Security */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="border-l-4 border-purple-500">
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">5</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Data Security
                  </h2>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <Lock className="w-8 h-8 text-red-600" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Secure Data Protection</h4>
                        <p className="text-gray-700 text-sm">Enterprise-grade security measures</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <div className="p-4 bg-white rounded-lg border border-red-200">
                      <p className="text-red-800">
                        <strong>Note:</strong> However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Cookies Policy */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="border-l-4 border-purple-500">
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">6</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Cookies Policy
                  </h2>
                  <div className="bg-amber-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <Cookie className="w-8 h-8 text-amber-600" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Cookie Usage</h4>
                        <p className="text-gray-700 text-sm">Enhancing your browsing experience</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Our Website uses cookies to:
                    </p>
                    <ul className="space-y-2 mb-4">
                      {cookiePurposes.map((purpose, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-amber-500 mr-3" />
                          <span className="text-gray-700">{purpose}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-gray-700">
                        You can manage or disable cookies via your browser settings, but this may affect some Website features.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 7: International Data Transfers */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="border-l-4 border-purple-500">
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">7</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    International Data Transfers
                  </h2>
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <Globe className="w-8 h-8 text-indigo-600" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Global Data Handling</h4>
                        <p className="text-gray-700 text-sm">Cross-border data protection</p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      If you are located outside India, please be aware that your information may be transferred to, stored, and processed in India or other countries where our servers or service providers are located. By using the Website, you consent to this transfer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 8: Changes to This Privacy Policy */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="border-l-4 border-purple-500">
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">8</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Changes to This Privacy Policy
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700">
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. Please review this page periodically to stay informed about how we protect your information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 9: Contact Us */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="border-l-4 border-purple-500">
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">9</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Contact Us
                  </h2>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-6">
                      If you have any questions or concerns about this Privacy Policy or your data, please contact us at:
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                          <Mail className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Email</div>
                          <div className="font-semibold text-gray-900">kmdfoodproducts2023@gmail.com</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                          <Phone className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Phone</div>
                          <div className="font-semibold text-gray-900">+91 9884060089</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mt-1">
                          <MapPin className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Address</div>
                          <div className="font-semibold text-gray-900">
                            K.M.D. FOOD PRODUCTS<br />
                            1/250, 5th Street, Palaniappa Nagar<br />
                            Vanagaram, Chennai, Thiruvallur<br />
                            Tamil Nadu - 600095
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agreement Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Privacy Protection Agreement</h2>
          <p className="mb-6 opacity-90">
            By using our Website and services, you acknowledge that you have read and understood our Privacy Policy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/"
              className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Return to Homepage
            </Link>
            <a
              href="mailto:kmdfoodproducts2023@gmail.com"
              className="px-8 py-3 bg-purple-800 text-white font-semibold rounded-lg hover:bg-purple-900 transition-colors"
            >
              Contact Privacy Officer
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} KMD FOOD PRODUCTS. All rights reserved.
          </p>
          <p className="mt-2">
            This Privacy Policy is effective from December 1, 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;