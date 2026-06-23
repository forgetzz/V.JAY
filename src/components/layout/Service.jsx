import React, { useState } from 'react'
import "../css/Service.css"
import { TABS, SERVICES } from '../../data'

export default function Service() {
  const [active, setActive] = useState('Semua')

  const filtered = active === 'Semua'
    ? SERVICES
    : SERVICES.filter(s => s.cat === active)

  return (
    <>
     

      <section className="sv-section" aria-labelledby="sv-title" id='service'>

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