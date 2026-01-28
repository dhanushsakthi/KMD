// src/pages/TermsAndConditions.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText, AlertCircle, ChevronRight, CheckCircle, ArrowLeft } from 'lucide-react';

const TermsAndConditions = () => {
  const sections = [
    {
      id: 'definitions',
      title: '1. Definitions',
      content: 'Throughout these Terms and Conditions, the following terms shall have the meanings set forth below unless the context clearly indicates otherwise.',
      items: [
        'Customer, You, or User: Any individual who visits, accesses, or uses the Website, places an order, or engages in any transaction with K.M.D. FOOD PRODUCTS.',
        'Products: All goods, items, merchandise, or services offered for sale on the Website, including but not limited to food products, supplements, and related items.',
        'Website: The online platform accessible at https://kmdfoodproducts.com/ and all associated subdomains, mobile applications, and digital interfaces.',
        'Order: A legally binding contract between the Customer and K.M.D. FOOD PRODUCTS for the purchase of Products as specified in the order confirmation.',
        'Account: The personalized digital profile created by a Customer for accessing services, placing orders, and managing preferences on the Website.'
      ]
    },
    {
      id: 'account-registration',
      title: '2. Account Registration & Security',
      content: 'To access certain features of our Website, including placing orders, you may need to create an account.',
      items: [
        'You must provide accurate, current, and complete information during the registration process.',
        'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
        'You must immediately notify us of any unauthorized use of your account or any other breach of security.',
        'We reserve the right to suspend or terminate accounts that violate these Terms or are suspected of fraudulent activity.',
        'Each user may maintain only one account unless expressly permitted by K.M.D. FOOD PRODUCTS.'
      ]
    },
    {
      id: 'product-information',
      title: '3. Product Information & Accuracy',
      content: 'We strive to provide accurate and detailed information about our Products.',
      items: [
        'Product descriptions, images, specifications, and nutritional information are provided for informational purposes.',
        'Minor variations in color, texture, or appearance may occur due to natural ingredients, manufacturing processes, or digital display differences.',
        'We regularly update our Product information but do not guarantee that all details are complete, accurate, or current at all times.',
        'Prices and availability are subject to change without prior notice.',
        'All weights and measurements are approximate and may vary slightly between batches.'
      ]
    },
    {
      id: 'pricing-payment',
      title: '4. Pricing, Payment & Taxes',
      content: 'All transactions are processed securely through our payment partners.',
      items: [
        'All prices are listed in Indian Rupees (INR) and include applicable taxes unless otherwise specified.',
        'We reserve the right to modify prices at any time without prior notice, except for confirmed orders.',
        'Accepted payment methods include credit/debit cards, net banking, UPI, and digital wallets.',
        'Payments are processed through PCI-DSS compliant third-party payment gateways.',
        'You are responsible for any applicable taxes, duties, or charges imposed by your local jurisdiction.',
        'In case of payment failure, your order will not be processed until successful payment is received.'
      ]
    },
    {
      id: 'order-acceptance',
      title: '5. Order Acceptance & Cancellation',
      content: 'Order placement constitutes an offer to purchase our Products.',
      items: [
        'Order confirmation via email constitutes acceptance of your order by K.M.D. FOOD PRODUCTS.',
        'We reserve the right to refuse or cancel any order for reasons including but not limited to:',
        '• Product unavailability or discontinuation',
        '• Incorrect pricing information',
        '• Suspicion of fraudulent activity',
        '• Violation of purchase limits',
        '• Incomplete or inaccurate shipping information',
        'You may cancel an order within 1 hour of placement, provided it has not been processed for shipping.',
        'Cancellation requests must be made through your account dashboard or by contacting customer support.'
      ]
    },
    {
      id: 'shipping-delivery',
      title: '6. Shipping & Delivery',
      content: 'We aim to process and deliver your orders promptly.',
      items: [
        'Shipping timelines are estimates and may vary based on location, weather conditions, and carrier availability.',
        'Delivery charges are calculated based on weight, destination, and shipping method selected.',
        'You are responsible for providing accurate shipping information. We are not liable for delays due to incorrect addresses.',
        'Risk of loss or damage to Products transfers to you upon delivery confirmation.',
        'Signature may be required for delivery of certain high-value orders.',
        'For detailed shipping information, please refer to our separate Shipping Policy.'
      ]
    },
    {
      id: 'returns-refunds',
      title: '7. Returns, Refunds & Exchanges',
      content: 'Your satisfaction is our priority.',
      items: [
        'Returns are accepted within 7 days of delivery for damaged, defective, or incorrect Products.',
        'Products must be in original, unopened packaging with all seals intact.',
        'Perishable items and opened products cannot be returned unless defective.',
        'Refunds are processed within 7-10 business days of receiving returned Products.',
        'Refunds are issued to the original payment method used for purchase.',
        'For detailed procedures, please refer to our Return & Refund Policy.'
      ]
    },
    {
      id: 'user-conduct',
      title: '8. User Conduct & Prohibited Activities',
      content: 'You agree to use our Website responsibly and lawfully.',
      items: [
        'You must not:',
        '• Use the Website for any unlawful purpose or in violation of any applicable laws',
        '• Upload or transmit viruses, malware, or any destructive code',
        '• Attempt to gain unauthorized access to our systems or networks',
        '• Use automated systems or bots to place orders',
        '• Resell Products purchased from our Website without authorization',
        '• Post false, misleading, or defamatory content',
        '• Harass, threaten, or intimidate other users or our staff',
        'We reserve the right to investigate and prosecute violations to the fullest extent of the law.'
      ]
    },
    {
      id: 'intellectual-property',
      title: '9. Intellectual Property Rights',
      content: 'All content on this Website is protected by intellectual property laws.',
      items: [
        'All text, graphics, logos, images, audio clips, digital downloads, and software are owned by K.M.D. FOOD PRODUCTS or its licensors.',
        'The K.M.D. FOOD PRODUCTS trademark and logo are registered trademarks.',
        'You may not reproduce, distribute, modify, or create derivative works without our express written permission.',
        'You may download or print content for personal, non-commercial use only.',
        'Any unauthorized use may violate copyright, trademark, and other laws.'
      ]
    },
    {
      id: 'third-party-links',
      title: '10. Third-Party Links & Services',
      content: 'Our Website may contain links to third-party websites or services.',
      items: [
        'We provide these links for your convenience and do not endorse or assume responsibility for their content.',
        'Third-party websites have their own privacy policies and terms of use.',
        'Your interactions with third-party sites are solely between you and the third party.',
        'We are not responsible for any loss or damage arising from your use of third-party websites or services.',
        'You should review the terms and policies of any third-party sites you visit.'
      ]
    },
    {
      id: 'disclaimer-liability',
      title: '11. Disclaimers & Limitation of Liability',
      content: 'To the extent permitted by law, our liability is limited as follows:',
      items: [
        'The Website and Products are provided "as is" and "as available" without warranties of any kind.',
        'We do not guarantee uninterrupted, secure, or error-free access to our Website.',
        'We are not liable for:',
        '• Indirect, incidental, or consequential damages',
        '• Loss of profits, data, or business opportunities',
        '• Damages resulting from force majeure events',
        '• Actions or omissions of third-party service providers',
        'Our maximum liability for any claim shall not exceed the purchase price of the Products in question.',
        'Some jurisdictions do not allow limitations on liability, so these limitations may not apply to you.'
      ]
    },
    {
      id: 'indemnification',
      title: '12. Indemnification',
      content: 'You agree to protect us from certain claims and liabilities.',
      items: [
        'You agree to indemnify, defend, and hold harmless K.M.D. FOOD PRODUCTS, its affiliates, directors, employees, and agents.',
        'This includes protection against any claims, damages, losses, liabilities, costs, or expenses arising from:',
        '• Your violation of these Terms and Conditions',
        '• Your misuse of the Website or Products',
        '• Your infringement of any third-party rights',
        '• Any content you submit or transmit through our Website',
        'We reserve the right to assume exclusive defense and control of any matter subject to indemnification.'
      ]
    },
    {
      id: 'governing-law',
      title: '13. Governing Law & Dispute Resolution',
      content: 'These Terms shall be interpreted and enforced according to the laws of India.',
      items: [
        'These Terms are governed by and construed in accordance with the laws of Tamil Nadu, India.',
        'Any disputes arising from these Terms or your use of our Website shall be subject to the exclusive jurisdiction of courts in Chennai, Tamil Nadu.',
        'You agree to first attempt to resolve any dispute informally by contacting our customer support.',
        'If informal resolution fails, disputes shall be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996.',
        'The arbitration shall be conducted in English in Chennai, Tamil Nadu.'
      ]
    },
    {
      id: 'changes-terms',
      title: '14. Changes to Terms & Conditions',
      content: 'We may update these Terms periodically to reflect changes in our practices or legal requirements.',
      items: [
        'We reserve the right to modify these Terms at any time without prior notice.',
        'Material changes will be effective 30 days after posting on our Website.',
        'Your continued use of the Website after changes constitutes acceptance of the revised Terms.',
        'We recommend reviewing these Terms regularly for updates.',
        'The "Last Updated" date at the top indicates when these Terms were last revised.'
      ]
    },
    {
      id: 'contact',
      title: '15. Contact Information',
      content: 'For questions, concerns, or notices regarding these Terms and Conditions, please contact us at:',
      items: [
        'K.M.D. FOOD PRODUCTS',
        'Email: kmdfoodproducts2023@gmail.com',
        'Phone: +91 9884060089',
        'Address: 1/250, 5th Street, Palaniappa Nagar, Vanagaram, Chennai, Thiruvallur, Tamil Nadu - 600095',
        'Customer Support Hours: Monday to Saturday, 9:00 AM to 6:00 PM IST',
        'For order-related queries, please use the contact form on our Website or email us directly.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 via-amber-900/20 to-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link 
              to="/"
              className="flex items-center space-x-3 text-amber-300 hover:text-amber-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3">
              <FileText className="w-8 h-8" />
              <span className="text-sm opacity-75">Legal Document</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Last Updated: December 1, 2024
          </p>
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Please read these terms carefully before using our website</span>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <ChevronRight className="w-5 h-5 mr-2 text-amber-600" />
            Quick Navigation
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {sections.slice(0, 5).map((section) => (
              <a 
                key={section.id}
                href={`#${section.id}`}
                className="block p-3 bg-gray-50 hover:bg-amber-50 rounded-lg text-center text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors"
              >
                {section.title.split('. ')[1]}
              </a>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Welcome to <strong>K.M.D. FOOD PRODUCTS</strong>. These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("Customer," "You," or "User") and K.M.D. FOOD PRODUCTS ("Business," "we," "us," or "our") governing your access to and use of our website located at <a href="https://kmdfoodproducts.com" className="text-amber-600 hover:text-amber-700">https://kmdfoodproducts.com</a> ("Website") and your purchase of Products from us.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By accessing, browsing, or using our Website, creating an account, or placing an order, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not access or use our Website or purchase our Products.
            </p>
            <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500">
              <p className="text-amber-800 text-sm">
                <strong>Important:</strong> These Terms contain important information about your legal rights, remedies, and obligations. Please pay special attention to Sections 11 (Disclaimers & Limitation of Liability), 12 (Indemnification), and 13 (Governing Law & Dispute Resolution).
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div 
              key={section.id}
              id={section.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="border-l-4 border-amber-500">
                <div className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {section.title}
                      </h2>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {section.content}
                      </p>
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Agreement Section */}
        <div className="mt-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
          <p className="mb-6 opacity-90">
            By using our Website and purchasing our Products, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions in their entirety.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/"
              className="px-8 py-3 bg-white text-amber-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Return to Homepage
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-amber-800 text-white font-semibold rounded-lg hover:bg-amber-900 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Legal Documents</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/privacy"
              className="p-4 bg-gray-50 hover:bg-amber-50 rounded-lg border border-gray-200 hover:border-amber-300 transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-amber-700">Privacy Policy</h4>
                  <p className="text-sm text-gray-500">How we handle your data</p>
                </div>
              </div>
            </Link>
            <Link
              to="/shipping-policy"
              className="p-4 bg-gray-50 hover:bg-blue-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-blue-700">Shipping Policy</h4>
                  <p className="text-sm text-gray-500">Delivery timelines & charges</p>
                </div>
              </div>
            </Link>
            <Link
              to="/return-policy"
              className="p-4 bg-gray-50 hover:bg-green-50 rounded-lg border border-gray-200 hover:border-green-300 transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <FileText className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-green-700">Return Policy</h4>
                  <p className="text-sm text-gray-500">Returns & refunds process</p>
                </div>
              </div>
            </Link>
            <Link
              to="/contact"
              className="p-4 bg-gray-50 hover:bg-red-50 rounded-lg border border-gray-200 hover:border-red-300 transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                  <FileText className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-red-700">Contact Us</h4>
                  <p className="text-sm text-gray-500">Get help & support</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} K.M.D. FOOD PRODUCTS. All rights reserved.
          </p>
          <p className="mt-2">
            This document is legally binding. For questions regarding these Terms, please contact our legal department at{' '}
            <a href="mailto:kmdfoodproducts2023@gmail.com" className="text-amber-600 hover:text-amber-700">
              kmdfoodproducts2023@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;