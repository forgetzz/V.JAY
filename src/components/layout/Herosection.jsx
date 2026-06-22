import React, { Suspense, useEffect, useState } from "react";
import styled from "styled-components";

import Navbar from "../layout/Navbar";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.jpg";
import "../css/Herosection.css";
import { AnimatePresence, motion } from "framer-motion";


// import CoverVideo from '../components/CoverVideo';
// import Navbar from '../components/Navbar';
// import Logo from './../components/Logo';
const text1 = "PREMIUM BARBER SERVICE DELIVERED";
const text2 = "TO YOUR DOOR ANYWHERE IN BALI";

const CoverVideo = React.lazy(() => import("../ui/CoverVideo"));

const Logo = React.lazy(() => import("../ui/Logo"));

const Section = styled.section`
  position: relative;

  overflow: hidden;
`;

export default function HeroSection() {
  const images = [img1, img2, img3];
  const [displayed, setDisplayed] = useState("");
  const [displayed2, setDisplayed2] = useState("");
  const [current, setCurrent] = useState(1);
  const typeText = (text, setter) => {
    let i = 0;

    const interval = setInterval(() => {
      setter(text.slice(0, i));
      i++;

      if (i > text.length) clearInterval(interval);
    }, 100);

    return interval;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const i1 = typeText(text1, setDisplayed);
      const i2 = typeText(text2, setDisplayed2);

      return () => {
        clearInterval(i1);
        clearInterval(i2);
      };
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <Section id="home" className="hero">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="bg-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${images[current]})`,
          }}
        />
      </AnimatePresence>

      <div className="overlay" />

      <div className="content">
        <span className="tag">EST. 2026 • BALI MOBILE BARBER</span>

        <h1>
          {displayed} <span>{displayed2}</span>
        </h1>

        <p>
          Professional haircuts, beard grooming,{" "}
          <span>
            {" "}
            and luxury styling services delivered directly to your villa,
          </span>{" "}
          hotel, Airbnb, office, or private residence across Bali.
        </p>

        <div className="actions">
          <div>
            <button className="btn">
              <i className="animation"></i>BUTTON<i className="animation"></i>
            </button>
          </div>

          <a href="#services" className="service-btn">
            VIEW SERVICES
          </a>
        </div>
   <div className="stats">
          <div>
            <strong>500+</strong>
            <span>Clients</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Available</span>
          </div>

          <div>
            <strong>5★</strong>
            <span>Rating</span>
          </div>
      </div>
      </div>
    </Section>
  );
}
