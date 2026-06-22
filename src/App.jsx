import { useEffect, useState } from "react";
import Lenis from "lenis";
import { ThemeProvider } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import "./App.css";
import "./components/styles.css";

import GlobalStyles from "./components/css/GlobalStyles";
import { dark } from "./components/css/Theme";

import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/layout/Herosection";
import About from "./components/layout/About";
import Service from "./components/layout/Service";
import Footer from "./components/layout/Footer";
import Loader from "./components/ui/Loader";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();

    let frame;

    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    if (!loaded) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [loaded]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />

      {/* LOADER */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
            }}
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      {loaded && (
        <>
          <Navbar />
          <HeroSection />
          <About />
          <Service />
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;