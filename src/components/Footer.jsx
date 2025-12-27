// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Shop: ['All Products', 'Malts', 'Flour Mixes', 'Ready Mixes', 'Health Mixes'],
    Company: ['About Us', 'Our Story', 'Quality', 'Farmers', 'Careers'],
    Support: ['Contact Us', 'Shipping', 'Returns', 'FAQ', 'Recipes'],
    Legal: ['Privacy', 'Terms', 'Cookies', 'Compliance']
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold">KMD FOODS</h2>
                <p className="text-sm text-amber-200">Premium Health Foods Since 1985</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md">
              For three generations, we've been crafting premium health foods using 
              traditional wisdom and modern nutrition science. Pure nourishment, 
              delivered to your home.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-amber-600 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-amber-600 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-amber-600 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
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
                      className="text-gray-300 hover:text-amber-300 transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 p-8 bg-white/5 rounded-2xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-amber-900/30 flex items-center justify-center">
              <Phone className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <div className="text-sm text-gray-300">Call Us</div>
              <div className="font-semibold">+91 98765 43210</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-amber-900/30 flex items-center justify-center">
              <Mail className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <div className="text-sm text-gray-300">Email Us</div>
              <div className="font-semibold">hello@kmdfoods.com</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-amber-900/30 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-amber-400" />
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
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-300">Accepted Payments:</span>
              <div className="flex items-center space-x-2">
                <div className="px-3 py-1.5 bg-white/10 rounded text-xs">Visa</div>
                <div className="px-3 py-1.5 bg-white/10 rounded text-xs">Mastercard</div>
                <div className="px-3 py-1.5 bg-white/10 rounded text-xs">UPI</div>
                <div className="px-3 py-1.5 bg-white/10 rounded text-xs">PayPal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;