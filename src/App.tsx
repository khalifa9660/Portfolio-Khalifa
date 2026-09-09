import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { AppProvider } from './context/AppContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import SocialProof from './components/sections/SocialProof';
import Highlights from './components/sections/Highlights';
import FinalCta from './components/sections/FinalCta';
import ContactPage from './components/pages/Contact';

/** Scroll vers l'ancre hash après navigation */
function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
      style={{ scaleX, background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)' }}
    />
  );
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <SocialProof />
      <Projects />
      <Skills />
      <Experience />
      <Highlights />
      <FinalCta />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen overflow-x-hidden bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white transition-colors duration-300 selection:bg-black/10 dark:selection:bg-white/20">
          <ScrollToHash />
          <ScrollProgress />
          {/* Grain texture overlay — très subtil, feel premium */}
          <div
            className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.025] dark:opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px',
            }}
          />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}
