// App.jsx
import React, { useState } from "react";

import girlImg from "./assets/saree.jpg";
import selfImg from "./assets/self.jpg";
import flowerImg from "./assets/coal.jpg";
import cutieImg from "./assets/soniyawith.jpg";
import parkImg from "./assets/suit.jpg";
import roseImg from "./assets/rose.jpg";
import jhumkaImg from "./assets/jhumka.jpg";
import balloImg from "./assets/pop.jpg";
import hbgImg from "./assets/hath.jpg";
import cutemsgImg from "./assets/crose.jpg";
import wisheImg from "./assets/bhoot.jpg";
import goImg from "./assets/ujjain.jpg";


export default function App() {
  const [selected, setSelected] = useState(null);

  const images = [
    { src: girlImg, title: "Saree Style" },
    { src: selfImg, title: "Selfie Vibes" },
    { src: flowerImg, title: "Coal Flower" },
    { src: cutieImg, title: "Cute Memory" },
    { src: parkImg, title: "Suit Outfit" },
    { src: roseImg, title: "Red Rose" },
    { src: jhumkaImg, title: "Golden Jhumka" },
    { src: balloImg, title: "Pop Party" },
    { src: hbgImg, title: "Hand Pose" },
    { src: cutemsgImg, title: "Cross Flower" },
    { src: wisheImg, title: "Bhoot Fun" },
    { src: goImg, title: "Trip to Ujjain" },
  ];

  const rotations = ["-6deg", "4deg", "-3deg", "5deg", "-4deg", "3deg"];
  const bgColors = ["#fff8dc", "#f0f8ff", "#ffe4e1", "#f5f5dc", "#fafad2"];

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>🌸 My Aesthetic Memories 🌸</h1>

      <div style={styles.grid}>
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              ...styles.card,
              transform: `rotate(${rotations[i % rotations.length]})`,
              background: bgColors[i % bgColors.length],
            }}
            onClick={() => setSelected(img)}
          >
            <img src={img.src} alt={img.title} style={styles.image} />
            <p style={styles.caption}>{img.title}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div style={styles.lightbox} onClick={() => setSelected(null)}>
          <img
            src={selected.src}
            alt={selected.title}
            style={styles.lightboxImg}
          />
          <h2 style={styles.lightboxTitle}>{selected.title}</h2>
        </div>
      )}

      {/* Inline CSS for responsiveness */}
      <style>{`
        @media (max-width: 480px) {
          h1 {
            font-size: 1.6rem !important;
          }
          .collage-item img {
            height: 180px !important;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem !important;
          }
          .collage-item img {
            height: 220px !important;
          }
        }

        @media (min-width: 1024px) {
          h1 {
            font-size: 2.8rem !important;
          }
          .collage-item img {
            height: 280px !important;
          }
        }
      `}</style>
    </div>
  );
}

const styles = {
  page: {
    background: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
    minHeight: "100vh",
    paddingBottom: "40px",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    padding: "25px",
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "'Dancing Script', cursive",
    textShadow: "0 3px 8px rgba(0,0,0,0.3)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    borderRadius: "12px",
    padding: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
    cursor: "pointer",
    transition: "all 0.4s ease",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "8px",
    boxShadow: "0 5px 12px rgba(0,0,0,0.2)",
  },
  caption: {
    marginTop: "10px",
    fontSize: "1rem",
    color: "#333",
    fontStyle: "italic",
    fontFamily: "'Indie Flower', cursive",
  },
  lightbox: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  lightboxImg: {
    maxWidth: "85%",
    maxHeight: "70%",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
  },
  lightboxTitle: {
    color: "#fff",
    marginTop: "15px",
    fontFamily: "'Dancing Script', cursive",
    fontSize: "1.8rem",
  },
};
