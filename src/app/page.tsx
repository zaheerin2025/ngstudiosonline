import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WorkSection from '@/components/WorkSection';
import ProcessSection from '@/components/ProcessSection';
import TechSection from '@/components/TechSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <TechSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
