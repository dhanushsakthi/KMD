import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search, Package, Globe } from 'lucide-react';
import logo from '../assets/kmd-logo.jpg';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Awards', path: '/awards' },
    { name: 'Export', path: '/export' },
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
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-14 h-14 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                {/* Replace this with your actual logo image */}
                <img 
                  src={logo}
                  alt="KMD Foods" 
                  className="h-10 w-auto"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">KMD Foods</h1>
              <p className="text-xs text-blue-600 font-medium">Exporting Indian Goodness</p>
            </div>
          </Link>

          {/* Desktop Navigation & Search */}
          <div className="hidden lg:flex items-center space-x-10 flex-1 max-w-2xl mx-12">
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors relative group ${
                      isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                    }`
                  }
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              ))}
            </nav>

            <form onSubmit={handleSearch} className="flex-1 relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search export products..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            </form>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors relative group">
              <Globe className="w-5 h-5" />
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Export Inquiry
              </div>
            </button>
            
            <button className="p-2.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors relative group">
              <User className="w-5 h-5" />
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Account
              </div>
            </button>
            
            <button className="p-2.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors relative group">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                3
              </span>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Export Cart
              </div>
            </button>

            <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:shadow-md transition-all">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-gray-200 mt-2">
            
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search export products..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </form>

            {/* Mobile Navigation */}
            <div className="space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 px-4 rounded-lg font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 border border-blue-100'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <Globe className="w-4 h-4" />
                <span className="font-medium text-sm">Export</span>
              </button>
              
              <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <User className="w-4 h-4" />
                <span className="font-medium text-sm">Account</span>
              </button>
              
              <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors relative">
                <ShoppingCart className="w-4 h-4" />
                <span className="font-medium text-sm">Cart</span>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  3
                </span>
              </button>
            </div>

            {/* Mobile CTA */}
            <button className="w-full mt-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:shadow-md transition-all">
              Get Export Quote
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;