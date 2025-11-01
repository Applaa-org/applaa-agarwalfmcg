import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Globe, Users, Award, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Globe,
      title: "Global Excellence",
      description: "We maintain the highest standards in international trade, ensuring quality and reliability across all our operations."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Our clients are at the heart of everything we do. We build lasting relationships based on trust and mutual success."
    },
    {
      icon: Award,
      title: "Quality Commitment",
      description: "Every product we trade meets stringent quality standards and international compliance requirements."
    },
    {
      icon: Target,
      title: "Market Leadership",
      description: "We continuously innovate and adapt to stay ahead in the dynamic global trading landscape."
    }
  ];

  const timeline = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Established in Mumbai with a vision to connect Indian markets with the world."
    },
    {
      year: "2012",
      title: "First International Partnership",
      description: "Expanded operations to Southeast Asian markets, establishing key supplier relationships."
    },
    {
      year: "2015",
      title: "European Market Entry",
      description: "Successfully entered European markets with premium FMCG products."
    },
    {
      year: "2018",
      title: "Americas Expansion",
      description: "Launched operations in North and South American markets."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented advanced digital systems for better customer service and operational efficiency."
    },
    {
      year: "2023",
      title: "Global Recognition",
      description: "Recognized as one of India's leading trading companies with operations in 25+ countries."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Agarwal Trading International LLP
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Since 2010, we have been connecting global markets through premium trading solutions, 
              specializing in FMCG products and building lasting partnerships worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2010 in Mumbai, India, Agarwal Trading International LLP began as a small trading 
                  company with a big vision: to become a bridge between Indian manufacturers and global markets. 
                  Over the past decade, we have grown into a comprehensive trading solutions provider.
                </p>
                <p>
                  Our journey has been marked by steady growth, strategic partnerships, and an unwavering 
                  commitment to quality. Today, we operate in over 25 countries, serving as a trusted partner 
                  for businesses looking to source premium FMCG products or market their goods internationally.
                </p>
                <p>
                  We specialize in health foods like fox nuts (makhana), authentic Indian spices, and a wide 
                  range of consumer goods that meet international quality standards while maintaining 
                  competitive pricing.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf4e4?w=600&h=400&fit=crop"
                alt="Global Trade"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide every decision we make
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones that shaped our growth
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200 hidden lg:block"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1 lg:text-right lg:pr-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-blue-600 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white font-bold relative z-10">
                    {index + 1}
                  </div>
                  <div className="flex-1 lg:pl-8">
                    {/* Empty for layout balance */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;