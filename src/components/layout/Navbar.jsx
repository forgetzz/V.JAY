import React, { useState, useEffect } from "react";
import logo from "../../assets/v.jpeg";
import scissor from "../../assets/scissor.png";
import { Link } from "react-router-dom";
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#service" },
  { label: "Gallery", href: "#gallery" },
  { label: "Capster", href: "#capster" },
  { label: "About", href: "#about" },
  { label: "Crypto pay", href: "/CryptoPay" },
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 100;

      NAV_LINKS.forEach((link) => {
        const id = link.href.replace("#", "");
        const section = document.getElementById(id);

        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
  }, [drawerOpen]);

  return (
    <>
      <div className="nb-root">
        {/* ── Overlay ── */}
        <div
          className={`nb-drawer-overlay ${drawerOpen ? "open" : ""}`}
          onClick={() => setDrawerOpen(false)}
        />

        {/* ── Mobile Drawer ── */}
        <nav
          className={`nb-drawer ${drawerOpen ? "open" : ""}`}
          aria-label="Mobile menu"
        >
          <ul className="nb-drawer-menu">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setDrawerOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="nb-drawer-cta"
            onClick={() => setDrawerOpen(false)}
          >
            Book Home Visit
          </button>
          <div className="nb-drawer-footer">
            Serving <span>Surabaya</span> &amp; surrounding areas
          </div>
        </nav>

        {/* ── Main Navbar ── */}
        <header
          className={`nb-nav ${scrolled ? "scrolled" : ""}`}
          role="banner"
        >
          {/* Logo */}
          <div id="progress"></div>
          <a className="nb-logo" href="#" aria-label="Razor & Co Home">
            <div className="nb-logo-icon">
              {/* Razor / scissor icon */}
              {/* <svg className="nb-logo-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6.5 3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM4 5.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
                <path d="M6.5 16a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-2.5 2.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
                <path d="M8.56 7.3 20 15.3M8.56 16.7 20 8.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              </svg> */}
              <img
                src={logo}
                alt="asas"
                width={30}
                height={30}
                className="Image"
              />
              <img src="../../assets/scissor.png" alt="" />
            </div>
            <div className="nb-logo-text">
              <span className="nb-logo-name">V.Jay</span>
              {/* <span className="nb-logo-tagline">Home Barbershop Service</span> */}
            </div>
          </a>

          {/* Desktop Menu */}
          <ul className="nb-menu" role="list">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");

              return (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link to={link.href}>{link.label}</Link>
                  ) : (
                    <a
                      href={link.href}
                      className={activeSection === id ? "active" : ""}
                      onClick={(e) => {
                        e.preventDefault();

                        document.getElementById(id)?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });

                        setActiveSection(id);
                      }}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right Actions */}
          {/* <div className="nb-actions">
            <a
              className="nb-phone"
              href="tel:+6281234567890"
              aria-label="Call us"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              +62 812-3456-7890
            </a>
            <button className="nb-cta" aria-label="Book a home visit">
              Book Now
            </button>
          </div> */}

          {/* Hamburger */}
          <button
            className={`nb-hamburger ${drawerOpen ? "open" : ""}`}
            onClick={() => setDrawerOpen((v) => !v)}
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
            aria-controls="mobile-nav"
          >
            <span />
            <span />
            <span />
          </button>
        </header>

        {/* ── Demo Hero ── */}
        {/* <section className="nb-hero" aria-label="Hero">
          <p className="nb-hero-eyebrow">Premium · Mobile · On-Demand</p>
          <h1>
            Barbershop Quality,<br />
            <em>At Your Door</em>
          </h1>
          <p>
            Professional grooming brought straight to your home.
            Book in minutes, get styled in style.
          </p>
        </section> */}
      </div>
    </>
  );
}
