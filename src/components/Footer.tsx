import { Globe, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Agarwal Trading</h3>
                <p className="text-gray-400 text-sm">International LLP</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting global markets through premium FMCG trading solutions. 
              Your trusted partner for import and export services worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</Link>
              <Link to="/products" className="block text-gray-400 hover:text-white transition-colors">Products</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Import & Export</p>
              <p>Global Sourcing</p>
              <p>Quality Assurance</p>
              <p>Logistics Solutions</p>
              <p>Market Intelligence</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-blue-400" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+91 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@agarwaltrading.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Agarwal Trading International LLP. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}