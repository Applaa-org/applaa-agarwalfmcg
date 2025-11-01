import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready to Expand Your Global Trade?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Partner with Agarwal Trading International LLP for reliable, efficient, and profitable 
                international trade solutions. Let's connect your business to global markets.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+91 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@agarwaltrading.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>

            <Link to="/contact" className="[&.active]:font-medium">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Trading with Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Import Services</h3>
                <p className="text-gray-300 mb-4">
                  Source high-quality products from our global network of trusted suppliers. 
                  We handle everything from procurement to delivery.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Product sourcing and procurement</li>
                  <li>• Quality inspection and certification</li>
                  <li>• Logistics and customs clearance</li>
                  <li>• Door-to-door delivery</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Export Services</h3>
                <p className="text-gray-300 mb-4">
                  Market your products globally with our comprehensive export solutions. 
                  We connect you with international buyers and manage the entire process.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Market research and buyer identification</li>
                  <li>• Product positioning and marketing</li>
                  <li>• International compliance and documentation</li>
                  <li>• Global distribution network</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}