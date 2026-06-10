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
import { AnimatePresence } from "framer-motion";
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

    return () => {
      lenis.destroy();
    };
  }, []);
    useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);


  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
        <HeroSection />
        <About />
        <Capster />
        <Service />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
