import React, { Suspense } from "react";
import styled from "styled-components";

// import CoverVideo from '../components/CoverVideo';
// import Navbar from '../components/Navbar';
// import Logo from './../components/Logo';

const CoverVideo = React.lazy(() => import("../ui/CoverVideo"));
const Navbar = React.lazy(() => import("../ui/Navbar"));
const Logo = React.lazy(() => import("../ui/Logo"));

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const HeroSection = () => {
  return (
    <Section id="home">
      <Suspense fallback={<></>}>
        <Navbar />
        {/* <Logo /> */}
        <CoverVideo />
      </Suspense>
    </Section>
  );
};

export default HeroSection;
