import React from "react";
import img from "../../assets/v.jpeg";
import "../css/about.css";
const VALUES = [
  { label: "Certified Barber", sub: "Trained & professional" },
  { label: "Sterilized Equipment", sub: "Guaranteed hygiene" },
  { label: "On Time", sub: "Arrives as scheduled" },
  { label: "Transparent Pricing", sub: "No hidden costs" },
];
export default function About() {
  return (
    <>
      <section id="about" className="ab-section" aria-labelledby="ab-title">
        <div className="ab-inner">
          <div className="ab-img-wrap">
            <img
              className="ab-img"
              src={img}
              alt="Barber profesional sedang melayani pelanggan"
            />
            <div className="ab-badge" aria-label="5 tahun pengalaman">
              <span className="ab-badge-num">5+</span>
              <span className="ab-badge-label">Tahun Pengalaman</span>
            </div>
          </div>

          {/* ── Text column ── */}
          <div className="ab-text">
            <p className="ab-eyebrow">About</p>

            <h2 className="ab-headline" id="ab-title">
              YOUR PERSONAL BARBER
              <br />
              ANYWHERE <em> IN BALI</em>
            </h2>

            <div className="ab-rule" aria-hidden="true" />

            <p className="ab-body">
              barbercalljay brings the compelete barbershop experience directly
              to your location. Whether you're staying in a luxury villa, hotel,
              airbnb, or private residence, enjoy profesional grooming without
              leaving your comfort zone.
            </p>

            <ul className="ab-values" aria-label="Nilai-nilai kami">
              {VALUES.map((v) => (
                <li
                  key={v.label}
                  className="ab-value"
                  style={{ listStyle: "none" }}
                >
                  <span className="ab-value-dot" aria-hidden="true" />
                  <div>
                    <span className="ab-value-text">{v.label}</span>
                    <span className="ab-value-sub">{v.sub}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="ab-cta-row">
              <button className="ab-btn">Booking Sekarang</button>
              <a className="ab-link" href="#layanan">
                Lihat Layanan →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
