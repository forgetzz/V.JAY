import { useEffect, useState } from "react";
import "./App.css";
import Lenis from "lenis";
import HeroSection from "./components/layout/Herosection";
import "./components/styles.css";
import Navbar from "./components/layout/Navbar";
import About from "./components/layout/About";
import Capster from "./components/layout/Capster";
import Service from "./components/layout/Service";
import Footer from "./components/layout/Footer";
import GlobalStyles from "./components/css/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { dark } from "./components/css/Theme";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./components/ui/Loader";
function App() {
  const [Loaded, setLoaded] = useState(false);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if (!Loaded) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      lenis.destroy();
    };
  }, [Loaded]);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <AnimatePresence>
          {!Loaded && (
            <motion.div
              key="loader"
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ z: 0, opacity: -10 }}
              transition={{ duration: 0.1 }}
            >
              <Loader />
            </motion.div>
          )}
        </AnimatePresence>
        <Navbar/>
        <HeroSection />
        <About />
        {/* <Capster /> */}
        <Service />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
