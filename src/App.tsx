import { Header } from './components/navigation/Header';
import { Footer } from './components/navigation/Footer';
import { WhatsAppFloat, BackToTop } from './components/navigation/FloatingButtons';
import { Hero } from './sections/Hero';
import { CaseStudies } from './sections/CaseStudies';
import { About } from './sections/About';
import { MissionVision } from './sections/MissionVision';
import { Values } from './sections/Values';
import { Services } from './sections/Services';
import { CargoTypes } from './sections/CargoTypes';
import { Coverage } from './sections/Coverage';
import { Process } from './sections/Process';
import { Contact } from './sections/Contact';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CaseStudies />
        <About />
        <MissionVision />
        <Values />
        <Services />
        <CargoTypes />
        <Coverage />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </>
  );
}
