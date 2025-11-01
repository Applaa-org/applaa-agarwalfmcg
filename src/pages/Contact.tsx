import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { showSuccess, showError } from '@/utils/toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      showError('Please fill in all required fields');
      return;
    }

    // Simulate form submission
    showSuccess('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch With Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to explore global trading opportunities? Contact our team of experts to discuss 
              your import/export requirements and discover how we can help expand your business internationally.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and our team will get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enter your company name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your requirements, questions, or how we can help you..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out to us through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-600">+91 123 456 7890</p>
                      <p className="text-gray-600">+91 987 654 3210</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">info@agarwaltrading.com</p>
                      <p className="text-gray-600">trade@agarwaltrading.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Head Office</h4>
                      <p className="text-gray-600">
                        Agarwal Trading International LLP<br />
                        123 Business Plaza, Marine Drive<br />
                        Mumbai - 400020<br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Business Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM IST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Quick Inquiry</CardTitle>
                  <CardDescription className="text-blue-100">
                    For urgent requirements, get in touch with our sales team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="secondary" className="w-full" asChild>
                    <a href="tel:+911234567890">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Sales Team
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our services and partnership
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What products do you specialize in?",
                answer: "We specialize in FMCG products including fox nuts (makhana), Indian spices, packaged foods, organic products, grains, and consumer goods. Our portfolio includes over 100 product varieties across multiple categories."
              },
              {
                question: "Which countries do you export to?",
                answer: "We currently export to over 25 countries across Asia, Europe, North America, and the Middle East. Our main markets include USA, UK, Germany, UAE, Singapore, and Australia."
              },
              {
                question: "What is your minimum order quantity?",
                answer: "Our minimum order quantity varies by product and destination. Generally, it ranges from 100kg for specialty items to full container loads for bulk commodities. Contact us for specific product MOQs."
              },
              {
                question: "How do you ensure product quality?",
                answer: "We have a comprehensive quality assurance system including supplier verification, pre-shipment inspections, third-party lab testing, and compliance with international food safety standards like HACCP and ISO."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;