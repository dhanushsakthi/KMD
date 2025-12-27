// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-amber-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl flex items-center justify-center shadow-lg">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </motion.div>
            <div>
              <h1 className="text-2xl font-display font-bold text-gray-900">KMD FOODS</h1>
              <p className="text-xs text-amber-700 font-medium">Premium Health Foods</p>
            </div>
          </Link>

          {/* Desktop Navigation & Search */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 max-w-2xl mx-12">
            <form onSubmit={handleSearch} className="flex-1 relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search health foods..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>
            </form>

            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `font-medium text-gray-700 hover:text-amber-700 transition-colors relative group ${
                      isActive ? 'text-amber-700 font-semibold' : ''
                    }`
                  }
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="p-3 rounded-xl bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors relative group">
              <User className="w-5 h-5" />
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Account
              </div>
            </button>
            
            <button className="p-3 rounded-xl bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors relative group">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold shadow">
                3
              </span>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Cart (3 items)
              </div>
            </button>

            <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-amber-700 hover:to-amber-800 transition-all shadow-lg hover:shadow-xl">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-xl bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden pb-6 border-t border-amber-100 mt-2"
          >
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </form>

            {/* Mobile Navigation */}
            <div className="space-y-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 px-4 rounded-xl font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 border border-amber-200'
                        : 'text-gray-700 hover:bg-amber-50'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-4 mt-6 pt-6 border-t border-amber-100">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-amber-50 text-amber-700 rounded-xl hover:bg-amber-100 transition-colors">
                <User className="w-5 h-5" />
                <span className="font-medium">Account</span>
              </button>
              
              <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-amber-50 text-amber-700 rounded-xl hover:bg-amber-100 transition-colors relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="font-medium">Cart</span>
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                  3
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;