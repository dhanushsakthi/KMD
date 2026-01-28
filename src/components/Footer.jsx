// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart,
  Shield, Truck, RefreshCw, FileText, Cookie
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
  };

  const policyButtons = [
    {
      title: 'Shipping Policy',
      icon: <Truck className="w-4 h-4" />,
      color: 'bg-blue-900/30',
      iconColor: 'text-blue-400',
      to: '/shipping-policy'
    },
    {
      title: 'Return & Refund',
      icon: <RefreshCw className="w-4 h-4" />,
      color: 'bg-green-900/30',
      iconColor: 'text-green-400',
      to: '/return-policy'
    },
    {
      title: 'Terms & Conditions',
      icon: <FileText className="w-4 h-4" />,
      color: 'bg-amber-900/30',
      iconColor: 'text-amber-400',
      to: '/terms'
    },
    {
      title: 'Privacy Policy',
      icon: <Shield className="w-4 h-4" />,
      color: 'bg-purple-900/30',
      iconColor: 'text-purple-400',
      to: '/privacy'
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Policy Buttons Section */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-semibold mb-8 text-amber-100">
            Important Policies & Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {policyButtons.map((policy) => (
              <Link
                key={policy.title}
                to={policy.to}
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="p-6 flex flex-col items-center text-center space-y-3">
                  <div className={`w-14 h-14 ${policy.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className={policy.iconColor}>
                      {policy.icon}
                    </div>
                  </div>
                  <span className="font-medium text-sm group-hover:text-amber-300 transition-colors">
                    {policy.title}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold">KMD FOOD PRODUCTS</h2>
                <p className="text-sm text-amber-200">Premium Health Foods</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Bringing you the finest natural food products, sourced directly from farmers with love and care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-amber-600 flex items-center justify-center transition-colors group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-amber-600 flex items-center justify-center transition-colors group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-amber-600 flex items-center justify-center transition-colors group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-4 text-amber-100">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link 
                      to="#" 
                      className="text-gray-300 hover:text-amber-300 transition-colors text-sm flex items-center group"
                    >
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-amber-900/30 flex items-center justify-center group">
              <Phone className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <div className="text-sm text-gray-300">Call Us</div>
              <div className="font-semibold hover:text-amber-300 transition-colors cursor-pointer">
                +91 9884060089
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-amber-900/30 flex items-center justify-center group">
              <Mail className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <div className="text-sm text-gray-300">Email Us</div>
              <div className="font-semibold hover:text-amber-300 transition-colors cursor-pointer">
                kmdfoodproducts2023@gmail.com
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-amber-900/30 flex items-center justify-center group">
              <MapPin className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <div className="text-sm text-gray-300">Visit Us</div>
              <div className="font-semibold">Chennai, Tamil Nadu</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 KMD FOODS. All rights reserved. Made with ❤️ in India.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-gray-300 text-sm">Accepted Payments:</span>
              <div className="flex items-center space-x-2">
                <div className="px-3 py-1.5 bg-white/10 rounded-lg text-xs hover:bg-white/20 transition-colors cursor-pointer">Visa</div>
                <div className="px-3 py-1.5 bg-white/10 rounded-lg text-xs hover:bg-white/20 transition-colors cursor-pointer">Mastercard</div>
                <div className="px-3 py-1.5 bg-white/10 rounded-lg text-xs hover:bg-white/20 transition-colors cursor-pointer">UPI</div>
                <div className="px-3 py-1.5 bg-white/10 rounded-lg text-xs hover:bg-white/20 transition-colors cursor-pointer">Net Banking</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;