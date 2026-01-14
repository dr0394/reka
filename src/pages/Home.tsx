import { useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Services from '../components/Services';
import Advantages from '../components/Advantages';
import Process from '../components/Process';
import About from '../components/About';
import Gallery from '../components/Gallery';
import ProjectGallery from '../components/ProjectGallery';
import ServiceAreas from '../components/ServiceAreas';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MultistepForm from '../components/MultistepForm';
import WhatsAppButton from '../components/WhatsAppButton';
import CookieBanner from '../components/CookieBanner';

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero onOpenForm={() => setIsFormOpen(true)} />
      <Problem />
      <Services />
      <Advantages />
      <Process />
      <About />
      <Gallery />
      <ProjectGallery />
      <ServiceAreas />
      <FAQ />
      <CTA onOpenForm={() => setIsFormOpen(true)} />
      <Contact />
      <Footer />
      <MultistepForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}
