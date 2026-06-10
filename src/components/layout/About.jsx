import React from 'react'
import img from "../../assets/v.jpeg"
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap');

  :root {
    --gold-primary: #C9A84C;
    --gold-light:   #E8C96D;
    --gold-dark:    #A07830;
    --gold-pale:    #F5E6B8;
    --black-rich:   #0A0A0A;
    --text-body:    #3A3530;
    --text-muted:   #9A8B72;
    --white-warm:   #FAF8F4;
  }

  /* ── keyframes ── */
  @keyframes ab-fade-up {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes ab-line-grow {
    from { transform: scaleX(0); opacity: 0; }
    to   { transform: scaleX(1); opacity: 1; }
  }
  @keyframes ab-img-reveal {
    from { opacity: 0; transform: scale(1.04) translateX(-12px); }
    to   { opacity: 1; transform: scale(1)    translateX(0); }
  }

  /* ── section ── */
  .ab-section {
    background: #ffffff;
    width: 100%;
    padding: 7rem 2rem;
    font-family: 'Inter', sans-serif;
    overflow: hidden;
  }

  .ab-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }

  /* ── IMAGE SIDE ── */
  .ab-img-wrap {
    position: relative;
    animation: ab-img-reveal 1s cubic-bezier(0.22,1,0.36,1) 0.2s both;
  }

  /* stacked-card effect */
  .ab-img-wrap::before {
    content: '';
    position: absolute;
    top: 1.25rem;
    left: 1.25rem;
    right: -1.25rem;
    bottom: -1.25rem;
    border: 1.5px solid rgba(201,168,76,0.3);
    border-radius: 4px;
    pointer-events: none;
  }

  /* gold corner accent */
  .ab-img-wrap::after {
    content: '';
    position: absolute;
    top: -0.75rem;
    left: -0.75rem;
    width: 56px;
    height: 56px;
    border-top: 2px solid var(--gold-primary);
    border-left: 2px solid var(--gold-primary);
    border-radius: 2px 0 0 0;
    pointer-events: none;
  }

  .ab-img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    object-position: center 15%;
    border-radius: 4px;
    display: block;
    filter: saturate(0.88) brightness(0.96);
  }

  /* floating badge */
  .ab-badge {
    position: absolute;
    bottom: 2rem;
    right: -2rem;
    background: var(--gold-primary);
    border-radius: 3px;
    padding: 1rem 1.25rem;
    text-align: center;
    box-shadow: 0 8px 28px rgba(201,168,76,0.35);
    animation: ab-fade-up 0.8s ease 1.2s both;
  }

  .ab-badge-num {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 700;
    color: var(--black-rich);
    line-height: 1;
    display: block;
  }

  .ab-badge-label {
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(10,10,10,0.65);
    margin-top: 0.3rem;
    display: block;
  }

  /* ── TEXT SIDE ── */
  .ab-text {
    display: flex;
    flex-direction: column;
  }

  .ab-eyebrow {
    font-size: 0.62rem;
    font-weight: 500;
    letter-spacing: 0.36em;
    text-transform: uppercase;
    color: var(--gold-primary);
    margin-bottom: 1.1rem;
    animation: ab-fade-up 0.7s ease 0.4s both;
  }

  .ab-headline {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 3.8vw, 3rem);
    font-weight: 600;
    line-height: 1.15;
    color: var(--black-rich);
    margin: 0 0 0.1rem;
    animation: ab-fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 0.55s both;
  }

  .ab-headline em {
    font-style: italic;
    color: var(--gold-dark);
  }

  .ab-rule {
    width: 64px;
    height: 2px;
    background: linear-gradient(90deg, var(--gold-primary), var(--gold-light));
    margin: 1.5rem 0;
    transform-origin: left center;
    animation: ab-line-grow 0.7s ease 0.9s both;
  }

  .ab-body {
    font-size: 0.92rem;
    font-weight: 300;
    line-height: 1.9;
    color: var(--text-body);
    max-width: 440px;
    animation: ab-fade-up 0.75s ease 1s both;
  }

  .ab-body + .ab-body {
    margin-top: 1rem;
  }

  /* ── VALUES LIST ── */
  .ab-values {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem 1.5rem;
    margin-top: 2rem;
    animation: ab-fade-up 0.75s ease 1.15s both;
  }

  .ab-value {
    display: flex;
    align-items: flex-start;
    gap: 0.65rem;
  }

  .ab-value-dot {
    flex-shrink: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--gold-primary);
    margin-top: 0.42rem;
  }

  .ab-value-text {
    font-size: 0.78rem;
    font-weight: 500;
    color: var(--text-body);
    letter-spacing: 0.01em;
    line-height: 1.5;
  }

  .ab-value-sub {
    font-size: 0.7rem;
    font-weight: 300;
    color: var(--text-muted);
    margin-top: 0.15rem;
    display: block;
  }

  /* ── CTA ── */
  .ab-cta-row {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2.25rem;
    animation: ab-fade-up 0.75s ease 1.3s both;
  }

  .ab-btn {
    position: relative;
    padding: 0.62rem 1.6rem;
    background: linear-gradient(135deg, var(--gold-dark), var(--gold-primary));
    border: none;
    border-radius: 3px;
    font-family: 'Inter', sans-serif;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--black-rich);
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(201,168,76,0.28);
    transition: transform 0.2s, box-shadow 0.25s;
  }

  .ab-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 26px rgba(201,168,76,0.42);
  }

  .ab-btn:active { transform: translateY(0); }

  .ab-link {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--gold-dark);
    text-decoration: none;
    border-bottom: 1px solid rgba(160,120,48,0.3);
    padding-bottom: 1px;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
  }

  .ab-link:hover {
    color: var(--gold-primary);
    border-color: var(--gold-primary);
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 860px) {
    .ab-inner {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .ab-img-wrap { max-width: 480px; margin: 0 auto; }
    .ab-badge { right: 0.5rem; }
    .ab-text { align-items: flex-start; }
  }

  @media (max-width: 480px) {
    .ab-section { padding: 5rem 1.25rem; }
    .ab-values { grid-template-columns: 1fr; }
    .ab-badge { display: none; }
    .ab-img-wrap::before { display: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    .ab-img-wrap, .ab-eyebrow, .ab-headline, .ab-rule,
    .ab-body, .ab-values, .ab-cta-row, .ab-badge {
      animation: none;
      opacity: 1;
      transform: none;
    }
  }
`

const VALUES = [
  { label: 'Barber Bersertifikat',  sub: 'Terlatih & profesional' },
  { label: 'Peralatan Steril',      sub: 'Higienitas terjamin' },
  { label: 'Tepat Waktu',           sub: 'Hadir sesuai janji' },
  { label: 'Harga Transparan',      sub: 'Tanpa biaya tersembunyi' },
]

export default function About() {
  return (
    <>
      <style>{styles}</style>

      <section className="ab-section" aria-labelledby="ab-title">
        <div className="ab-inner">

          {/* ── Image column ── */}
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
            <p className="ab-eyebrow">Tentang Kami</p>

            <h2 className="ab-headline" id="ab-title">
              Kami Percaya Penampilan<br />
              Dimulai dari <em>Kepercayaan</em>
            </h2>

            <div className="ab-rule" aria-hidden="true" />

            <p className="ab-body">
             V.JAY. hadir karena satu keyakinan sederhana — layanan barber
              terbaik seharusnya bisa datang ke kamu, bukan sebaliknya. Kami membawa
              pengalaman barbershop premium langsung ke depan pintu rumahmu.
            </p>
            <p className="ab-body">
              Setiap barber kami dipilih ketat, terlatih secara profesional, dan
              berkomitmen pada kebersihan alat serta kenyamanan pelanggan di setiap
              kunjungan.
            </p>

            <ul className="ab-values" aria-label="Nilai-nilai kami">
              {VALUES.map((v) => (
                <li key={v.label} className="ab-value" style={{ listStyle: 'none' }}>
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
              <a className="ab-link" href="#layanan">Lihat Layanan →</a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}