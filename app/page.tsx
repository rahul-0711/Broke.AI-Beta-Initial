import CustomCursor from '@/components/CustomCursor';
import ParticleCanvas from '@/components/ParticleCanvas';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Trust from '@/components/Trust';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ParticleCanvas />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Trust />
        <CaseStudies />
        <Testimonials />
        <Process />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
