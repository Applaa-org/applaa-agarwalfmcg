import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import { MadeWithApplaa } from "@/components/made-with-applaa";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <Services />
      <Stats />
      <ContactCTA />
      <Footer />
      <MadeWithApplaa />
    </div>
  );
};

export default Index;