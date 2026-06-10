import React from 'react'
import "../css/Capster.css"
const CAPSTERS = [
  {
    name: 'Rizky Aditya',
    role: 'Master Barber',
    specialty: 'Fade & Texture',
    photo: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviews: 128,
    skills: ['Skin Fade', 'Pompadour', 'Beard Trim'],
    available: true,
    ig: '#',
    wa: '#',
  },
  {
    name: 'Daffa Pratama',
    role: 'Senior Barber',
    specialty: 'Classic Cut',
    photo: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviews: 94,
    skills: ['Undercut', 'Quiff', 'Shave'],
    available: true,
    ig: '#',
    wa: '#',
  },
  {
    name: 'Ariel Nugroho',
    role: 'Barber Stylist',
    specialty: 'Modern Style',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviews: 76,
    skills: ['Crop Top', 'Taper', 'Color'],
    available: false,
    ig: '#',
    wa: '#',
  },
  {
    name: 'Farhan Malik',
    role: 'Junior Barber',
    specialty: 'Curly & Wavy',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    reviews: 51,
    skills: ['Curly Cut', 'Line Up', 'Beard Shape'],
    available: true,
    ig: '#',
    wa: '#',
  },
]

function StarRating({ rating }) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  return (
    <span className="cp-stars" aria-label={`Rating ${rating} dari 5`}>
      {'★'.repeat(full)}{half ? '½' : ''}{'☆'.repeat(5 - full - (half ? 1 : 0))}
    </span>
  )
}

export default function Capster() {
  return (
    <>


      <section className="cp-section" aria-labelledby="cp-title">

        {/* Header */}
        <div className="cp-header">
          <p className="cp-eyebrow">Tim Kami</p>
          <h2 className="cp-headline" id="cp-title">
            Capster <em>Pilihan</em> Kami
          </h2>
          <div className="cp-rule" aria-hidden="true" />
          <p className="cp-sub">
            Setiap capster kami terlatih secara profesional dan siap hadir
            langsung ke rumah kamu dengan standar barbershop premium.
          </p>
        </div>

        {/* Cards */}
        <ul className="cp-grid" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {CAPSTERS.map((c) => (
            <li key={c.name}>
              <article className="cp-card" aria-label={`Profil ${c.name}`}>

                {/* Photo */}
                <div className="cp-photo-wrap">
                  <img
                    className="cp-photo"
                    src={c.photo}
                    alt={`Foto ${c.name}`}
                  />

                  {/* Specialty tag */}
                  <span className="cp-tag">{c.specialty}</span>

                  {/* Availability */}
                  <div className="cp-avail" aria-label={c.available ? 'Tersedia' : 'Sedang sibuk'}>
                    <span className={`cp-avail-dot ${c.available ? 'available' : 'busy'}`} />
                    <span className="cp-avail-label">{c.available ? 'Tersedia' : 'Sibuk'}</span>
                  </div>

                  {/* Hover overlay */}
                  <div className="cp-overlay" aria-hidden="true">
                    {/* Instagram icon */}
                    <a href={c.ig} className="cp-social-btn" aria-label={`Instagram ${c.name}`}>
                      <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.069 1.646.069 4.851s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308C2.495 19.483 2.225 18.216 2.162 16.85 2.104 15.584 2.093 15.204 2.093 12s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608C4.446 2.567 5.713 2.297 7.079 2.234 8.345 2.176 8.725 2.163 12 2.163m0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                    </a>
                    {/* WhatsApp icon */}
                    <a href={c.wa} className="cp-social-btn" aria-label={`WhatsApp ${c.name}`}>
                      <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                    </a>
                  </div>
                </div>

                {/* Body */}
                <div className="cp-body">
                  <h3 className="cp-name">{c.name}</h3>
                  <p className="cp-role">{c.role}</p>

                  <div className="cp-rating-row">
                    <StarRating rating={c.rating} />
                    <span className="cp-rating-num">{c.rating}</span>
                    <span className="cp-rating-count">({c.reviews} ulasan)</span>
                  </div>

                  <div className="cp-skills">
                    {c.skills.map(s => (
                      <span key={s} className="cp-chip">{s}</span>
                    ))}
                  </div>

                  <button
                    className="cp-book-btn"
                    disabled={!c.available}
                    aria-label={c.available ? `Booking dengan ${c.name}` : `${c.name} sedang tidak tersedia`}
                  >
                    {c.available ? 'Booking Sekarang' : 'Sedang Tidak Tersedia'}
                  </button>
                </div>

              </article>
            </li>
          ))}
        </ul>

      </section>
    </>
  )
}