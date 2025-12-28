import React from 'react';
import logo from '../assets/kmd-logo.jpg';

const Logo = ({ size = 'md', variant = 'default' }) => {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28'
  };

  const variants = {
    default: 'bg-white border border-gray-200 shadow-sm',
    premium: 'bg-gradient-to-br from-blue-50 to-gray-50 border border-blue-100 shadow-md',
    dark: 'bg-gray-900 border-gray-800',
    simple: 'bg-transparent border-none shadow-none'
  };

  return (
    <div className={`${sizes[size]} ${variants[variant]} rounded-lg flex items-center justify-center p-2`}>
      {/* Replace this with your actual logo image path */}
      <img 
        src={logo}
        alt="KMD Foods" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;