import { TrendingUp, Users, Globe, Package } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    number: "500+",
    label: "Successful Trades",
    color: "text-blue-600"
  },
  {
    icon: Users,
    number: "150+",
    label: "Global Clients",
    color: "text-green-600"
  },
  {
    icon: Globe,
    number: "25+",
    label: "Countries Served",
    color: "text-orange-600"
  },
  {
    icon: Package,
    number: "100+",
    label: "Product Varieties",
    color: "text-purple-600"
  }
];

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="flex justify-center mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100 text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}