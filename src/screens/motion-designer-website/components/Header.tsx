import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/motion-designer-website' },
    { name: 'Gallery', href: '/motion-designer-website/gallery' },
    { name: 'About', href: '/motion-designer-website/about' },
    { name: 'Brief', href: '/motion-designer-website/brief' },
    { name: 'Contact', href: '/motion-designer-website/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/motion-designer-website') {
      return (
        location.pathname === '/motion-designer-website' ||
        location.pathname === '/motion-designer-website/'
      );
    }
    return location.pathname === href;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link
              to="/motion-designer-website"
              className="flex items-center gap-2 font-semibold"
            >
              <img
                src="/fill.svg"   // логотип из public
                alt="RM Logo"
                className="h-6 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-[accent]'
                    : 'text-gray-700 hover:text-[accent]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[accent] focus:outline-none focus:ring-2 focus:ring-[accent] focus:ring-offset-2 rounded-md p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-[accent] bg-gray-50'
                      : 'text-gray-700 hover:text-[accent] hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
