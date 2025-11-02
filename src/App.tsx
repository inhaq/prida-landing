import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Comparison from './components/Comparison';
import UseCases from './components/UseCases';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
    >
      <Hero />
      <Features />
      <HowItWorks />
      <Comparison />
      <UseCases />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
