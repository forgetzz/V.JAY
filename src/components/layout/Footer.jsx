import React, { useEffect, useRef } from "react";


export default function Footer() {
  const scissorsRef = useRef(null);

  useEffect(() => {
    const el = scissorsRef.current;
    if (!el) return;
    let pos = -120;
    const animate = () => {
      pos += 0.4;
      if (pos > window.innerWidth + 120) pos = -120;
      el.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500&display=swap');

        :root {
          --gold-light: #F5D078;
          --gold: #C9973A;
          --gold-dark: #8B6220;
          --black: #0A0A0A;
          --black-mid: #111111;
          --black-soft: #1A1A1A;
          --text-muted: #888;
          --text-sub: #555;
        }

        .footer-root {
          font-family: 'Inter', sans-serif;
          background: var(--black);
          color: #ddd;
          position: relative;
          overflow: hidden;
        }

        /* Divider line animated */
        .footer-divider {
          position: relative;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, var(--gold) 30%, var(--gold-light) 50%, var(--gold) 70%, transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        /* Scissors runner */
        .scissors-runner {
          position: relative;
          height: 36px;
          background: var(--black-soft);
          overflow: hidden;
        }

        .scissors-icon {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          font-size: 22px;
          filter: drop-shadow(0 0 6px var(--gold));
          will-change: transform;
        }

        .scissors-trail {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 1px;
          background: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 10px,
            var(--gold-dark) 10px,
            var(--gold-dark) 20px
          );
          opacity: 0.3;
          transform: translateY(-50%);
        }

        /* Main footer body */
        .footer-body {
          padding: 60px 40px 40px;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.4fr;
          gap: 48px;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 900px) {
          .footer-body {
            grid-template-columns: 1fr 1fr;
            padding: 48px 24px 32px;
          }
        }

        @media (max-width: 540px) {
          .footer-body {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 40px 20px 24px;
          }
        }

        /* Brand column */
        .brand-logo {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 900;
          letter-spacing: 2px;
          background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-dark) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 4px;
        }

        .brand-tagline {
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
          opacity: 0.8;
        }

        .brand-desc {
          font-size: 13.5px;
          line-height: 1.8;
          color: var(--text-muted);
          margin-bottom: 28px;
          max-width: 280px;
        }

        /* Social icons */
        .social-row {
          display: flex;
          gap: 12px;
        }

        .social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid var(--gold-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          color: var(--gold);
          cursor: pointer;
          transition: all 0.3s ease;
          background: transparent;
          position: relative;
          overflow: hidden;
          text-decoration: none;
        }

        .social-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, var(--gold) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s;
          border-radius: 50%;
        }

        .social-btn:hover::before { opacity: 0.15; }
        .social-btn:hover {
          border-color: var(--gold-light);
          color: var(--gold-light);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(201,151,58,0.25);
        }

        /* Column headings */
        .col-heading {
          font-family: 'Playfair Display', serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 12px;
        }

        .col-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 28px;
          height: 1.5px;
          background: linear-gradient(90deg, var(--gold), transparent);
        }

        /* Nav links */
        .nav-link {
          display: block;
          font-size: 13.5px;
          color: var(--text-muted);
          text-decoration: none;
          margin-bottom: 12px;
          transition: all 0.25s ease;
          position: relative;
          padding-left: 0;
        }

        .nav-link::before {
          content: '›';
          position: absolute;
          left: -14px;
          color: var(--gold);
          opacity: 0;
          transition: all 0.25s ease;
        }

        .nav-link:hover {
          color: var(--gold-light);
          padding-left: 14px;
        }

        .nav-link:hover::before {
          opacity: 1;
        }

        /* Contact items */
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
        }

        .contact-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: linear-gradient(135deg, var(--gold-dark), rgba(139,98,32,0.3));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          flex-shrink: 0;
          border: 1px solid rgba(201,151,58,0.2);
        }

        .contact-text {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .contact-label {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--gold);
          display: block;
          margin-bottom: 2px;
        }

        /* Badge jam operasional */
        .hours-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, rgba(201,151,58,0.12), rgba(201,151,58,0.04));
          border: 1px solid rgba(201,151,58,0.2);
          border-radius: 8px;
          padding: 10px 14px;
          margin-top: 8px;
        }

        .hours-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 0 0 rgba(74,222,128,0.6);
          animation: pulse-dot 2s infinite;
          flex-shrink: 0;
        }

        @keyframes pulse-dot {
          0% { box-shadow: 0 0 0 0 rgba(74,222,128,0.6); }
          70% { box-shadow: 0 0 0 8px rgba(74,222,128,0); }
          100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); }
        }

        .hours-text {
          font-size: 12.5px;
          color: #aaa;
        }

        /* Bottom bar */
        .footer-bottom {
          border-top: 1px solid rgba(201,151,58,0.12);
          padding: 20px 40px;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        @media (max-width: 540px) {
          .footer-bottom {
            padding: 20px;
            flex-direction: column;
            text-align: center;
          }
        }

        .copy-text {
          font-size: 12px;
          color: var(--text-sub);
          letter-spacing: 0.5px;
        }

        .copy-text span {
          color: var(--gold);
        }

        .policy-links {
          display: flex;
          gap: 20px;
        }

        .policy-link {
          font-size: 11.5px;
          color: var(--text-sub);
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: color 0.2s;
        }

        .policy-link:hover {
          color: var(--gold-light);
        }

        /* Background decorative orb */
        .bg-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .bg-orb-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(201,151,58,0.06) 0%, transparent 70%);
          bottom: -100px;
          right: -100px;
        }

        .bg-orb-2 {
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(245,208,120,0.04) 0%, transparent 70%);
          top: 40px;
          left: 10%;
        }

        .footer-content {
          position: relative;
          z-index: 1;
        }

        /* Floating razor decoration */
        .razor-deco {
          position: absolute;
          top: 30px;
          right: 60px;
          font-size: 48px;
          opacity: 0.04;
          transform: rotate(-30deg);
          pointer-events: none;
          animation: float-razor 6s ease-in-out infinite;
        }

        @keyframes float-razor {
          0%, 100% { transform: rotate(-30deg) translateY(0); }
          50% { transform: rotate(-30deg) translateY(-12px); }
        }
      `}</style>

      <footer className="footer-root">
        {/* Background orbs */}
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="razor-deco">✂</div>

        {/* Animated shimmer divider */}
        <div className="footer-divider" />

        {/* Scissors runner */}
        <div className="scissors-runner">
          <div className="scissors-trail" />
        </div>

        <div className="footer-content">
          <div className="footer-body">
            {/* Brand Column */}
            <div>
              <div className="brand-logo">V.JAY</div>
              <div className="brand-tagline">Hair Studio</div>
              <p className="brand-desc">
                Barbershop premium langsung ke depan pintu Anda. Stylist
                berpengalaman, alat steril, dan hasil salon — tanpa keluar
                rumah.
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

            {/* Layanan */}
            <div>
              <div className="col-heading">Layanan</div>
              {[
                "Potong Rambut",
                "Cukur Jenggot",
                "Hair Coloring",
                "Creambath",
                "Paket Pengantin",
                "Grooming Anak",
              ].map((item) => (
                <a key={item} href="#" className="nav-link">
                  {item}
                </a>
              ))}
            </div>

            {/* Perusahaan */}
            <div>
              <div className="col-heading">Perusahaan</div>
              {[
                "Tentang Kami",
                "Tim Barber",
                "Cara Kerja",
                "Testimoni",
                "Blog",
                "Karir",
              ].map((item) => (
                <a key={item} href="#" className="nav-link">
                  {item}
                </a>
              ))}
            </div>

            {/* Kontak */}
            <div>
              <div className="col-heading">Kontak</div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <span className="contact-label">Layanan Area</span>
                  Bali & Sekitarnya
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <span className="contact-label">WhatsApp Booking</span>
                  +62 800000000
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  hello@gmail.test
                </div>
              </div>

              <div className="hours-badge">
                <div className="hours-dot" />
                <span className="hours-text">
                  Buka setiap hari · 08.00 – 21.00
                </span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <a href="https://forgetzstudio.com" target="_blank" rel="noopener noreferrer">
              <p className="copy-text">
                © 2026 <span>forgetzstudio</span> · Hak cipta dilindungi
              </p>
            </a>

            <div className="policy-links">
              <a href="#" className="policy-link">
                Privasi
              </a>
              <a href="#" className="policy-link">
                Syarat & Ketentuan
              </a>
              <a href="#" className="policy-link">
                Kebijakan Refund
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
