import { ArrowRight, Globe, TrendingUp, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Connecting Global Markets Through
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  {" "}Premium Trade
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Agarwal Trading International LLP specializes in import and export of premium FMCG products, 
                including fox nuts, spices, and consumer goods. We bridge markets worldwide with quality and trust.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Get In Touch
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Global Reach</h3>
                <p className="text-sm text-gray-600">25+ Countries</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Package className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Premium Products</h3>
                <p className="text-sm text-gray-600">100+ Varieties</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Trusted Partner</h3>
                <p className="text-sm text-gray-600">15+ Years</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf4e4?w=800&h=600&fit=crop"
                alt="Global Trade"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold">Global Trade Excellence</h3>
                <p className="text-sm opacity-90">Connecting markets worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}