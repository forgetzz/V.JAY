import { useState } from "react";
import "../css/WhySection.css";

// Setiap item dibaca sebagai pasangan tanya-jawab: judul singkat sebagai
// "pertanyaan" yang bisa diklik, isi sebagai jawabannya.
const items = [
  {
    id: "professional",
    question: "Professional Barber",
    answer: "Years of experience in modern men's grooming.",
  },
  {
    id: "luxury",
    question: "Luxury Home Experience",
    answer: "The full barbershop ritual, delivered at your location.",
  },
  {
    id: "tourist",
    question: "Tourist Friendly",
    answer: "Fluent English-speaking service, no language barrier.",
  },
  {
    id: "sanitized",
    question: "Sanitized Equipment",
    answer: "Sterilized tools for every single appointment.",
  },
  {
    id: "flexible",
    question: "Flexible Scheduling",
    answer: "On your time — morning, day, or evening.",
  },
  {
    id: "booking",
    question: "Fast WhatsApp Booking",
    answer: "Confirm your slot in minutes, no back-and-forth.",
  },
];

export default function WhySection() {
  // Item pertama terbuka by default biar user langsung lihat contoh interaksinya.
  const [openId, setOpenId] = useState(items[0].id);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="bgshop-why" aria-labelledby="bgshop-why-title">
      <div className="bgshop-why__header">
        <span className="bgshop-why__eyebrow">Why Barber Jay</span>
        <h2 id="bgshop-why-title" className="bgshop-why__title">
          Crafted for the <span>Discerning</span> Client
        </h2>
      </div>

      <div className="bgshop-why__list">
        {items.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={"bgshop-why__item" + (isOpen ? " is-open" : "")}
            >
              <button
                type="button"
                className="bgshop-why__trigger"
                aria-expanded={isOpen}
                aria-controls={`bgshop-why-panel-${item.id}`}
                onClick={() => toggle(item.id)}
              >
                <span className="bgshop-why__question">{item.question}</span>
                <span className="bgshop-why__icon" aria-hidden="true">
                  <span className="bgshop-why__icon-line bgshop-why__icon-line--v" />
                  <span className="bgshop-why__icon-line bgshop-why__icon-line--h" />
                </span>
              </button>

              <div
                id={`bgshop-why-panel-${item.id}`}
                className="bgshop-why__panel"
                role="region"
              >
                <p className="bgshop-why__answer">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}