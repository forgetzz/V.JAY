import "../css/MenuSection.css";

// TODO: sambungkan onBookService ke flow booking kamu (WhatsApp link, modal, dsb).
const services = [
  {
    id: "standard",
    badge: "Standard Service Area",
    title: "Premium Barber Service",
    price: "From IDR 300,000",
    description:
      "Professional haircut tailored to your style, with premium finishing. Delivered to your villa, hotel, Airbnb, office, or home.",
    addOn: "+IDR 200,000 — Beard trim add-on",
    areas: ["Canggu", "Pererenan", "Seminyak", "Kuta", "Legian"],
    includes: [
      "Professional haircut",
      "Premium finishing",
      "On-demand location service",
    ],
    featured: false,
  },

  {
    id: "premium",
    badge: "Premium Destination Service",
    title: "Premium Mobile Barber Experience",
    price: "IDR 800,000",
    description:
      "Includes travel and equipment. Premium on-location barber service for selected destinations in Bali.",
    addOn: "+IDR 200,000 — Beard trim add-on",
    areas: ["Ubud", "Uluwatu", "Nusa Dua", "Amed"],
    includes: [
      "Professional consultation",
      "Premium haircut",
      "Styling & finishing",
      "Sanitized professional equipment",
      "English speaking barber",
      "On-demand booking",
    ],
    featured: true,
  },

  {
    id: "hair-coloring",
    badge: "Coloring Service",
    title: "Hair Coloring Services",
    price: "From IDR 1,000,000",
    description:
      "Premium hair coloring using professional products and techniques. Full color, refresh, fashion color, platinum blonde, grey coverage, and custom consultation.",
    addOn: null,
    areas: null,
    includes: [
      "Professional consultation",
      "Premium coloring service",
      "Styling & finishing",
      "Sanitized professional equipment",
      "Home, villa, hotel, Airbnb, or office service",
      "English speaking barber",
      "On-demand booking",
    ],
    note:
      "Final pricing depends on hair length, condition, and desired result. By consultation.",
    featured: false,
  },

  {
    id: "coverage-area",
    badge: "Coverage Area",
    title: "Available Across Bali",
    price: "From IDR 300,000 — No travel fee (Standard Area)",
    description:
      "We provide mobile barber services across Bali with standard and premium destination coverage.",
    addOn: null,
    areas: null,
    includes: [
      "Standard Service Area: Canggu, Pererenan, Seminyak, Kuta, Legian",
      "Premium Destination Service: Ubud, Uluwatu, Nusa Dua, Amed",
      "Travel & equipment included for premium area",
      "Flexible booking on demand",
    ],
    featured: false,
  },
];

export default function MenuSection({
  onBookService = (id) => console.log("Book:", id),
}) {
  return (
    <section className="bgshop-menu" aria-labelledby="bgshop-menu-title">
      <div className="bgshop-menu__header">
        <span className="bgshop-menu__eyebrow">Menu</span>
        <h2 id="bgshop-menu-title" className="bgshop-menu__title">
          Services &amp; <span>Pricing</span>
        </h2>
        <p className="bgshop-menu__subtitle">
          Pick your area, we bring the chair, the tools, and the standard.
        </p>
      </div>

      <div className="bgshop-menu__grid">
        {services.map((service) => (
          <article
            key={service.id}
            className={
              "bgshop-menu__card" +
              (service.featured ? " is-featured" : "")
            }
          >
            {service.featured && (
              <span className="bgshop-menu__ribbon">Premium</span>
            )}

            <span className="bgshop-menu__badge">{service.badge}</span>

            <h3 className="bgshop-menu__service-title">{service.title}</h3>

            <div className="bgshop-menu__price-row">
              <span className="bgshop-menu__price">
                {service.price ?? "-"}
              </span>
            </div>

            <p className="bgshop-menu__description">
              {service.description}
            </p>

            <div className="bgshop-menu__notch-divider" aria-hidden="true" />

            <p className="bgshop-menu__addon">
              {service.addOn ?? ""}
            </p>

            <ul className="bgshop-menu__areas" aria-label="Coverage area">
              {(service.areas ?? []).map((area) => (
                <li key={area} className="bgshop-menu__area-chip">
                  {area}
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="bgshop-menu__cta"
              onClick={() => onBookService(service.id)}
            >
              Book This
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}