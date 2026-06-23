import { useEffect, useRef, useState } from "react";
import "../css/Gallery.css";
import img1 from "../../assets/p1.jpeg";
import img2 from "../../assets/p2.jpeg";
import img3 from "../../assets/p3.jpeg";
import img4 from "../../assets/p4.jpeg";
import img5 from "../../assets/p5.jpeg";
import img6 from "../../assets/p6.jpeg";

// TODO: ganti src di bawah dengan foto-foto client asli barbershop kamu.
// Pakai rasio potret (disarankan 3:4) biar konsisten sama frame card.
const photos = [
  {
    id: 1,
    src: img1,
    name: "Rangga P.",
    style: "Skin Fade",
  },
  {
    id: 2,
    src: img2,
    name: "Dimas A.",
    style: "Pompadour",
  },
  {
    id: 3,
    src: img3,
    name: "Yusuf H.",
    style: "Crew Cut",
  },
  {
    id: 4,
    src: img4,
    name: "Bram S.",
    style: "Slick Back",
  },
  {
    id: 5,
    src: img5,
    name: "Fajar N.",
    style: "Textured Crop",
  },
  {
    id: 6,
    src: img6,
    name: "Adit W.",
    style: "Undercut",
  },
];

export default function Gallery() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Lacak kartu mana yang sedang kelihatan saat user swipe carousel di mobile.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const cards = track.querySelectorAll("[data-card]");
      if (!cards.length) return;

      const trackRect = track.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenter - trackCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelectorAll("[data-card]")[index];
    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <section className="bgshop-gallery" aria-labelledby="bgshop-gallery-title">
      <div className="bgshop-gallery__header">
        <span className="bgshop-gallery__eyebrow">Portofolio</span>
        <h2 id="bgshop-gallery-title" className="bgshop-gallery__title">
          Real cuts, <span> real </span>client.
        </h2>
        <p className="bgshop-gallery__subtitle">
          Authentic work by barber call jay-fades rapper, beard sculpts and full
          transformation delivered across bali ALL, skin fade, low tapper fade,
          beard trim, hair coloring, villa session, before/after
        </p>
      </div>

      <div className="bgshop-gallery__pole" aria-hidden="true" />

      <div className="bgshop-gallery__track" ref={trackRef} role="list">
        {photos.map((photo, index) => (
          <article
            className="bgshop-gallery__card"
            key={photo.id}
            data-card
            role="listitem"
          >
            <div className="bgshop-gallery__frame">
              <img
                className="bgshop-gallery__image"
                src={photo.src}
                alt={`Hasil potongan rambut ${photo.style} oleh client ${photo.name}`}
                loading="lazy"
              />
              <div className="bgshop-gallery__overlay">
                <span className="bgshop-gallery__style">{photo.style}</span>
                {/* <span className="bgshop-gallery__name">{photo.name}</span> */}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div
        className="bgshop-gallery__dots"
        role="tablist"
        aria-label="Navigasi galeri"
      >
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-label={`Lihat foto ${index + 1}`}
            className={
              "bgshop-gallery__dot" +
              (activeIndex === index ? " is-active" : "")
            }
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
