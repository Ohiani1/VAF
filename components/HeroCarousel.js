"use client";

import { useEffect, useState } from "react";
import styles from "./HeroCarousel.module.css";

const images = [
  "vaf1.jpeg", "vaf2.jpeg", "vaf3.jpeg", "vaf4.jpeg", "vaf6.jpeg",
  "vaf7.jpeg", "vaf8.jpeg", "vaf9.jpeg", "vaf10.jpeg", "vaf11.jpeg", "vaf12.jpeg",
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.carousel}>
      {images.map((src, i) => (
        <img
          key={src}
          src={`/images/carousel/${src}`}
          alt="Violet AbdulKadir Foundation in the field"
          className={styles.slide}
          data-active={i === index}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
      <div className={styles.dots}>
        {images.map((src, i) => (
          <button
            key={src}
            className={styles.dot}
            data-active={i === index}
            aria-label={`Show photo ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
