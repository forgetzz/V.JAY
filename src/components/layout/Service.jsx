import React, { useState } from 'react'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');

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
  @keyframes sv-fade-up {
    from { opacity: 0; transform: translateY(26px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes sv-line-grow {
    from { transform: scaleX(0); opacity: 0; }
    to   { transform: scaleX(1); opacity: 1; }
  }
  @keyframes sv-card-in {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── section ── */
  .sv-section {
    background: var(--white-warm);
    width: 100%;
    padding: 7rem 2rem;
    font-family: 'Inter', sans-serif;
    overflow: hidden;
  }

  /* ── header ── */
  .sv-header {
    text-align: center;
    max-width: 540px;
    margin: 0 auto 1.5rem;
  }

  .sv-eyebrow {
    font-size: 0.62rem;
    font-weight: 500;
    letter-spacing: 0.36em;
    text-transform: uppercase;
    color: var(--gold-primary);
    margin-bottom: 1rem;
    animation: sv-fade-up 0.7s ease 0.2s both;
  }

  .sv-headline {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.9rem, 3.5vw, 2.75rem);
    font-weight: 600;
    line-height: 1.15;
    color: var(--black-rich);
    margin: 0;
    animation: sv-fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 0.35s both;
  }

  .sv-headline em {
    font-style: italic;
    color: var(--gold-dark);
  }

  .sv-rule {
    width: 56px;
    height: 2px;
    background: linear-gradient(90deg, var(--gold-primary), var(--gold-light));
    margin: 1.4rem auto 1.2rem;
    transform-origin: center;
    animation: sv-line-grow 0.7s ease 0.7s both;
  }

  .sv-sub {
    font-size: 0.88rem;
    font-weight: 300;
    line-height: 1.85;
    color: var(--text-muted);
    animation: sv-fade-up 0.7s ease 0.85s both;
  }

  /* ── tab filter ── */
  .sv-tabs {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    flex-wrap: wrap;
    margin: 2.5rem auto 3.5rem;
    animation: sv-fade-up 0.7s ease 1s both;
  }

  .sv-tab {
    padding: 0.45rem 1.1rem;
    border: 1px solid rgba(201,168,76,0.28);
    border-radius: 2px;
    background: transparent;
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--text-muted);
    cursor: pointer;
    transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s;
  }

  .sv-tab:hover {
    border-color: var(--gold-primary);
    color: var(--gold-dark);
  }

  .sv-tab.active {
    background: linear-gradient(135deg, var(--gold-dark), var(--gold-primary));
    border-color: transparent;
    color: var(--black-rich);
    font-weight: 600;
    box-shadow: 0 4px 14px rgba(201,168,76,0.3);
  }

  /* ── grid ── */
  .sv-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
    gap: 1.5rem;
    max-width: 1100px;
    margin: 0 auto;
    list-style: none;
    padding: 0;
  }

  /* ── card ── */
  .sv-card {
    background: #fff;
    border: 1px solid rgba(201,168,76,0.15);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s cubic-bezier(0.22,1,0.36,1),
                box-shadow 0.3s ease,
                border-color 0.3s ease;
    animation: sv-card-in 0.7s cubic-bezier(0.22,1,0.36,1) both;
  }

  .sv-card:nth-child(1) { animation-delay: 0.5s; }
  .sv-card:nth-child(2) { animation-delay: 0.6s; }
  .sv-card:nth-child(3) { animation-delay: 0.7s; }
  .sv-card:nth-child(4) { animation-delay: 0.8s; }
  .sv-card:nth-child(5) { animation-delay: 0.9s; }
  .sv-card:nth-child(6) { animation-delay: 1.0s; }

  .sv-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 14px 36px rgba(201,168,76,0.12), 0 3px 10px rgba(0,0,0,0.05);
    border-color: rgba(201,168,76,0.38);
  }

  /* ── card image ── */
  .sv-card-img-wrap {
    position: relative;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    background: var(--white-warm);
  }

  .sv-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    filter: saturate(0.82) brightness(0.95);
    transition: transform 0.5s cubic-bezier(0.22,1,0.36,1), filter 0.4s ease;
  }

  .sv-card:hover .sv-card-img {
    transform: scale(1.07);
    filter: saturate(1) brightness(1);
  }

  /* popular badge */
  .sv-badge-popular {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    background: var(--gold-primary);
    border-radius: 2px;
    padding: 0.22rem 0.6rem;
    font-size: 0.55rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--black-rich);
  }

  /* category tag */
  .sv-cat-tag {
    position: absolute;
    bottom: 0.75rem;
    right: 0.75rem;
    background: rgba(10,10,10,0.72);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(201,168,76,0.3);
    border-radius: 2px;
    padding: 0.22rem 0.6rem;
    font-size: 0.56rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--gold-light);
  }

  /* ── card body ── */
  .sv-card-body {
    padding: 1.25rem 1.3rem 1.4rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    border-top: 1px solid rgba(201,168,76,0.1);
  }

  .sv-card-icon {
    width: 36px;
    height: 36px;
    border: 1px solid rgba(201,168,76,0.3);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.85rem;
    background: rgba(201,168,76,0.06);
    flex-shrink: 0;
    font-size: 1rem;
  }

  .sv-card-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--black-rich);
    margin: 0 0 0.35rem;
  }

  .sv-card-desc {
    font-size: 0.78rem;
    font-weight: 300;
    line-height: 1.75;
    color: var(--text-muted);
    flex: 1;
    margin-bottom: 1.1rem;
  }

  /* duration + includes row */
  .sv-card-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(201,168,76,0.1);
  }

  .sv-meta-item {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.68rem;
    color: var(--text-muted);
    font-weight: 400;
  }

  .sv-meta-item svg {
    width: 13px;
    height: 13px;
    fill: var(--gold-primary);
    flex-shrink: 0;
  }

  /* price + CTA row */
  .sv-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .sv-price-wrap {
    display: flex;
    flex-direction: column;
  }

  .sv-price-label {
    font-size: 0.56rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 0.1rem;
  }

  .sv-price {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--gold-dark);
    line-height: 1;
  }

  .sv-price span {
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 400;
    color: var(--text-muted);
    margin-left: 0.2rem;
  }

  .sv-book-btn {
    position: relative;
    padding: 0.55rem 1.1rem;
    background: linear-gradient(135deg, var(--gold-dark), var(--gold-primary));
    border: none;
    border-radius: 3px;
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--black-rich);
    cursor: pointer;
    white-space: nowrap;
    box-shadow: 0 3px 12px rgba(201,168,76,0.24);
    transition: transform 0.2s, box-shadow 0.25s;
  }

  .sv-book-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(201,168,76,0.38);
  }

  .sv-book-btn:active { transform: translateY(0); }

  /* ── bottom CTA ── */
  .sv-bottom {
    text-align: center;
    margin-top: 4rem;
    animation: sv-fade-up 0.7s ease 1.2s both;
  }

  .sv-bottom-text {
    font-size: 0.82rem;
    font-weight: 300;
    color: var(--text-muted);
    margin-bottom: 1.25rem;
    line-height: 1.75;
  }

  .sv-bottom-btn {
    display: inline-block;
    padding: 0.72rem 2rem;
    background: transparent;
    border: 1.5px solid var(--gold-primary);
    border-radius: 3px;
    font-family: 'Inter', sans-serif;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--gold-dark);
    cursor: pointer;
    transition: background 0.25s, color 0.25s, transform 0.2s, box-shadow 0.25s;
  }

  .sv-bottom-btn:hover {
    background: var(--gold-primary);
    color: var(--black-rich);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(201,168,76,0.32);
  }

  /* ── responsive ── */
  @media (max-width: 640px) {
    .sv-section { padding: 5rem 1.25rem; }
    .sv-grid { grid-template-columns: 1fr; }
  }

  @media (prefers-reduced-motion: reduce) {
    .sv-card, .sv-eyebrow, .sv-headline, .sv-rule,
    .sv-sub, .sv-tabs, .sv-bottom { animation: none; opacity: 1; transform: none; }
    .sv-card-img { transition: none; }
  }
`

const SERVICES = [
  {
    id: 1,
    name: 'Haircut Classic',
    cat: 'Rambut',
    desc: 'Potong rambut klasik dengan teknik scissor & clipper oleh barber berpengalaman langsung di rumahmu.',
    price: 'Rp 75.000',
    duration: '30 mnt',
    includes: '3 layanan',
    popular: true,
    emoji: '✂️',
    img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Skin Fade',
    cat: 'Rambut',
    desc: 'Fade presisi dari skin hingga medium, teknik gradient yang rapi dan bersih sesuai bentuk kepala.',
    price: 'Rp 90.000',
    duration: '40 mnt',
    includes: '4 layanan',
    popular: true,
    emoji: '💈',
    img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Beard Grooming',
    cat: 'Jenggot',
    desc: 'Shaping, trimming, dan conditioning jenggot untuk tampilan rapi dan terawat sesuai struktur wajahmu.',
    price: 'Rp 55.000',
    duration: '25 mnt',
    includes: '3 layanan',
    popular: false,
    emoji: '🧔',
    img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Hair & Beard Combo',
    cat: 'Paket',
    desc: 'Paket lengkap haircut + beard grooming sekaligus. Hemat waktu, tampil maksimal dari atas ke bawah.',
    price: 'Rp 130.000',
    duration: '60 mnt',
    includes: '6 layanan',
    popular: false,
    emoji: '👑',
    img: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Keramas & Blow Dry',
    cat: 'Perawatan',
    desc: 'Keramas dengan produk premium, pijat kulit kepala relaksasi, dan blow dry dengan styling ringan.',
    price: 'Rp 65.000',
    duration: '35 mnt',
    includes: '3 layanan',
    popular: false,
    emoji: '🚿',
    img: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Premium Full Package',
    cat: 'Paket',
    desc: 'Haircut + beard + keramas + hot towel + styling. Pengalaman barbershop mewah langsung di rumahmu.',
    price: 'Rp 185.000',
    duration: '90 mnt',
    includes: '8 layanan',
    popular: false,
    emoji: '💎',
    img: 'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&w=800&q=80',
  },
]

const TABS = ['Semua', 'Rambut', 'Jenggot', 'Perawatan', 'Paket']

export default function Service() {
  const [active, setActive] = useState('Semua')

  const filtered = active === 'Semua'
    ? SERVICES
    : SERVICES.filter(s => s.cat === active)

  return (
    <>
      <style>{styles}</style>

      <section className="sv-section" aria-labelledby="sv-title">

        {/* Header */}
        <div className="sv-header">
          <p className="sv-eyebrow">Layanan Kami</p>
          <h2 className="sv-headline" id="sv-title">
            Pilih Layanan <em>Terbaik</em> Kamu
          </h2>
          <div className="sv-rule" aria-hidden="true" />
          <p className="sv-sub">
            Semua layanan tersedia untuk kunjungan ke rumah.
            Barber kami datang dengan peralatan lengkap dan steril.
          </p>
        </div>

        {/* Tab filter */}
        <div className="sv-tabs" role="tablist" aria-label="Filter layanan">
          {TABS.map(tab => (
            <button
              key={tab}
              className={`sv-tab${active === tab ? ' active' : ''}`}
              role="tab"
              aria-selected={active === tab}
              onClick={() => setActive(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <ul className="sv-grid">
          {filtered.map((s, i) => (
            <li key={s.id} style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
              <article className="sv-card" aria-label={s.name}>

                {/* Image */}
                <div className="sv-card-img-wrap">
                  <img
                    className="sv-card-img"
                    src={s.img}
                    alt={s.name}
                  />
                  {s.popular && (
                    <span className="sv-badge-popular" aria-label="Layanan terpopuler">
                      Terpopuler
                    </span>
                  )}
                  <span className="sv-cat-tag">{s.cat}</span>
                </div>

                {/* Body */}
                <div className="sv-card-body">
                  <div className="sv-card-icon" aria-hidden="true">{s.emoji}</div>
                  <h3 className="sv-card-name">{s.name}</h3>
                  <p className="sv-card-desc">{s.desc}</p>

                  {/* Meta */}
                  <div className="sv-card-meta">
                    <span className="sv-meta-item">
                      {/* clock icon */}
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                      </svg>
                      {s.duration}
                    </span>
                    <span className="sv-meta-item">
                      {/* checklist icon */}
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 11.41 6.59 9 5.17 10.41 9 14.25l8.83-8.84L16.41 4 9 11.41zM12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/>
                      </svg>
                      {s.includes}
                    </span>
                  </div>

                  {/* Price + CTA */}
                  <div className="sv-card-footer">
                    <div className="sv-price-wrap">
                      <span className="sv-price-label">Mulai dari</span>
                      <span className="sv-price">
                        {s.price}<span>/kunjungan</span>
                      </span>
                    </div>
                    <button className="sv-book-btn" aria-label={`Booking ${s.name}`}>
                      Booking
                    </button>
                  </div>
                </div>

              </article>
            </li>
          ))}
        </ul>

        {/* Bottom CTA */}
        <div className="sv-bottom">
          <p className="sv-bottom-text">
            Tidak menemukan layanan yang kamu cari?<br />
            Hubungi kami untuk paket custom sesuai kebutuhanmu.
          </p>
          <button className="sv-bottom-btn">Konsultasi Gratis</button>
        </div>

      </section>
    </>
  )
}