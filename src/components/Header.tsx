import { Link } from '@tanstack/react-router';
import { Menu, X, Globe, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="[&.active]:font-medium">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Agarwal Trading
                </h1>
                <p className="text-xs text-gray-500">International LLP</p>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="[&.active]:font-medium text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="[&.active]:font-medium text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About Us
            </Link>
            <Link to="/products" className="[&.active]:font-medium text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Products
            </Link>
            <Link to="/contact" className="[&.active]:font-medium text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+911234567890" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 123 456 7890</span>
            </a>
            <a href="mailto:info@agarwaltrading.com" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@agarwaltrading.com</span>
            </a>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link to="/" className="[&.active]:font-medium text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="[&.active]:font-medium text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About Us
              </Link>
              <Link to="/products" className="[&.active]:font-medium text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Products
              </Link>
              <Link to="/contact" className="[&.active]:font-medium text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}