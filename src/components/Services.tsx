import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Ship, Shield, TrendingUp, Users, Clock } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "Global Sourcing",
    description: "Strategic sourcing from reliable suppliers across Asia, Europe, and Americas to ensure quality and competitive pricing."
  },
  {
    icon: Ship,
    title: "Logistics & Shipping",
    description: "End-to-end logistics solutions including freight forwarding, customs clearance, and timely delivery worldwide."
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control processes and certifications to meet international food safety and quality standards."
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description: "In-depth market analysis and insights to help you make informed trading decisions and maximize opportunities."
  },
  {
    icon: Users,
    title: "Relationship Management",
    description: "Building long-term partnerships with suppliers and buyers through transparent communication and reliable service."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support to address your queries and ensure smooth operations across time zones."
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Trading Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From sourcing to delivery, we provide complete trading solutions that connect global markets efficiently and reliably.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}