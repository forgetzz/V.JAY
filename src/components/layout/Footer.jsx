import React from "react";
import "../css/footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer-root">
        {/* Background orbs */}
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="razor-deco">✂</div>

        {/* Animated shimmer divider */}
        <div className="footer-divider" />

        <div className="footer-content">
          <div className="footer-body">
            {/* Brand Column */}
            <div>
              <div className="brand-logo">V.JAY</div>
              <div className="brand-tagline">Hair Studio</div>
              <p className="brand-desc">
                Premium mobile barbershop delivered directly to your doorstep.
                Experienced stylists, sanitized tools, and salon-quality results
                — without leaving your home.
              </p>

              <div className="social-row">
                {[
                  { icon: "📸", label: "Instagram" },
                  { icon: "▶", label: "TikTok" },
                  { icon: "💬", label: "WhatsApp" },
                  { icon: "📘", label: "Facebook" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    className="social-btn"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <div className="col-heading">Services</div>
              {[
                "Haircut",
                "Beard Trim",
                "Hair Coloring",
                "Creambath",
                "Wedding Package",
                "Kids Grooming",
              ].map((item) => (
                <a key={item} href="#" className="nav-link">
                  {item}
                </a>
              ))}
            </div>

            {/* Company */}
            <div>
              <div className="col-heading">Company</div>
              {[
                "About Us",
                "Barber Team",
                "How It Works",
                "Testimonials",
                "Blog",
                "Careers",
              ].map((item) => (
                <a key={item} href="#" className="nav-link">
                  {item}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div>
              <div className="col-heading">Contact</div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <span className="contact-label">Service Areas</span>
                  Canggu, Seminyak, Ubud & Uluwatu
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <span className="contact-label">WhatsApp Booking</span>
                 +6287817660654
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                 Vjayhairstudiocall@gmail.com
                </div>
              </div>

              <div className="hours-badge">
                <div className="hours-dot" />
                <span className="hours-text">
                  Open daily · 08:00 AM – 09:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <a
              href="https://forgetzstudio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="copy-text">
                © 2026 <span>forgetzstudio</span> · All rights reserved
              </p>
            </a>

            <div className="policy-links">
              <a href="#" className="policy-link">
                Privacy Policy
              </a>
              <a href="#" className="policy-link">
                Terms & Conditions
              </a>
              <a href="#" className="policy-link">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}