import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Leaf, Package, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

const products = [
  {
    icon: Leaf,
    title: "Fox Nuts (Makhana)",
    description: "Premium quality fox nuts sourced from the finest farms in India. Rich in protein and essential nutrients.",
    image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=400&h=300&fit=crop",
    category: "Health Foods"
  },
  {
    icon: Package,
    title: "Spices & Seasonings",
    description: "Authentic Indian spices and seasonings that bring flavor to kitchens worldwide.",
    image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=400&h=300&fit=crop",
    category: "Condiments"
  },
  {
    icon: ShoppingBag,
    title: "Consumer Goods",
    description: "Everyday consumer products including packaged foods, beverages, and household items.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    category: "FMCG"
  }
];

export default function Products() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Product Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in high-quality FMCG products that meet international standards and consumer preferences across global markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {product.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <product.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </div>
                <CardDescription className="text-base text-gray-600">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="group-hover:text-blue-600 p-0 h-auto font-medium">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}