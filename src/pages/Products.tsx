import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Package, ShoppingBag, Apple, Coffee, Wheat } from 'lucide-react';

const products = [
  {
    icon: Leaf,
    title: "Fox Nuts (Makhana)",
    category: "Health Foods",
    description: "Premium quality fox nuts sourced from the finest farms in India. Rich in protein, calcium, and essential nutrients. Available in roasted, flavored, and raw varieties.",
    features: ["High in protein", "Low in calories", "Gluten-free", "Rich in antioxidants"],
    image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=400&h=300&fit=crop"
  },
  {
    icon: Coffee,
    title: "Spices & Seasonings",
    category: "Condiments",
    description: "Authentic Indian spices and seasonings that bring flavor to kitchens worldwide. From turmeric to garam masala, we offer the finest spice blends.",
    features: ["Organic certified", "Ethically sourced", "Premium quality", "Bulk packaging"],
    image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=400&h=300&fit=crop"
  },
  {
    icon: Package,
    title: "Packaged Foods",
    category: "FMCG",
    description: "Ready-to-eat meals, snacks, and packaged food products that meet international taste preferences and quality standards.",
    features: ["Long shelf life", "Convenient packaging", "International flavors", "Quality certified"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7add31366?w=400&h=300&fit=crop"
  },
  {
    icon: Apple,
    title: "Organic Products",
    category: "Health Foods",
    description: "Certified organic foods including dried fruits, nuts, and health snacks for the health-conscious consumer.",
    features: ["100% Organic", "Chemical-free", "Nutrient-rich", "Sustainably sourced"],
    image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=400&h=300&fit=crop"
  },
  {
    icon: Wheat,
    title: "Grains & Pulses",
    category: "Staples",
    description: "High-quality grains, pulses, and legumes sourced from India's agricultural heartlands for global markets.",
    features: ["Grade A quality", "Properly processed", "Export standard", "Competitive pricing"],
    image: "https://images.unsplash.com/photo-1620222900826-141b446eb4ad?w=400&h=300&fit=crop"
  },
  {
    icon: ShoppingBag,
    title: "Consumer Goods",
    category: "FMCG",
    description: "Everyday consumer products including beverages, personal care items, and household essentials.",
    features: ["Popular brands", "Affordable pricing", "Quality assured", "Wide variety"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7add3136?w=400&h=300&fit=crop"
  }
];

const categories = [
  { name: "All Products", count: 50 },
  { name: "Health Foods", count: 15 },
  { name: "Condiments", count: 12 },
  { name: "FMCG", count: 18 },
  { name: "Staples", count: 5 }
];

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Product Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of premium FMCG products sourced from trusted suppliers 
              and delivered to markets worldwide with guaranteed quality and competitive pricing.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all ${index === 0 ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'}`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
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
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button variant="ghost" className="group-hover:text-blue-600 p-0 h-auto font-medium">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Request Product Catalog
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Products?</h2>
            <p className="text-xl text-gray-600">Quality, reliability, and global standards</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Quality Certified", desc: "All products meet international quality standards and certifications" },
              { title: "Competitive Pricing", desc: "Direct sourcing ensures the best prices without compromising quality" },
              { title: "Global Reach", desc: "Export to 25+ countries with reliable logistics and documentation" },
              { title: "Custom Solutions", desc: "Tailored packaging and specifications to meet market requirements" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;