import React, { useState } from 'react';
import { Menu, X, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      to={to}
      className="text-gray-600 hover:text-gray-900 transition-colors"
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold text-primary-900">
              SocialPro
            </NavLink>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/about">Over Ons</NavLink>
            <NavLink to="/services">Diensten</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Start Nu
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <NavLink to="/about">Over Ons</NavLink>
            <NavLink to="/services">Diensten</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <Link
              to="/contact"
              className="block px-3 py-2 bg-primary-600 text-white rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Start Nu
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}