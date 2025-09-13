// App.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Images
import hihe from "./assets/hihe.jpg";
import saree from "./assets/saree.jpg";
import sarees from "./assets/sarees.jpg";
import doctor1 from "./assets/doctor1.jpg";
import nothing from "./assets/nothing.jpg";
import nowok from "./assets/nowok.jpg";
import okok from "./assets/okok.jpg";
import hbd from "./assets/hbd.jpg";
import delhi from "./assets/delhi.jpg";
import sleep from "./assets/sleep.jpg";
import parkImg from "./assets/suit.jpg";
import threed from "./assets/threed.jpg";
import allen from "./assets/allen.jpg";
import lehega from "./assets/lehega.jpg";
import withflower from "./assets/withflower.jpg";
import winter from "./assets/winter.jpg";
import winterpurple from "./assets/winterpurple.jpg";
import wintergreen from "./assets/wintergreen.jpg";
import handpose from "./assets/handpose.jpg";
import hair from "./assets/hair.jpg";
import shit from "./assets/shit.jpg";
import bachpan from "./assets/bachpan.jpg";
import scooty from "./assets/scooty.jpg";
import movie from "./assets/movie.jpg";
import flowerImg from "./assets/coal.jpg";
import bhagtain from "./assets/bhagtain.jpg";
import balloImg from "./assets/pop.jpg";
import redsuit from "./assets/redsuit.jpg";
import posedown from "./assets/posedown.jpg";
import cutieImg from "./assets/soniyawith.jpg";
import girlImg from "./assets/saree.jpg";
import selfImg from "./assets/self.jpg";
import roseImg from "./assets/rose.jpg";
import jhumkaImg from "./assets/jhumka.jpg";
import shitdown from "./assets/shitdown.jpg";
import cutemsgImg from "./assets/crose.jpg";
import wisheImg from "./assets/bhoot.jpg";
import goImg from "./assets/ujjain.jpg";
import temple from "./assets/temple.jpg";
import black from "./assets/black.jpg";
import style from "./assets/style.jpg";
import red from "./assets/red.jpg";

export default function App() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const images = [
    { src: movie, title: "kajal 😘💖" },
    { src: scooty, title: "Scooty Ride 🛵😉" },
    { src: delhi, title: "Spectacles 🤓✨" },
    { src: doctor1, title: "Doctor Look 🧑‍⚕️💙" },
    { src: nothing, title: "💞💞🌸" },
    { src: okok, title: "✨💖" },
    { src: posedown, title: "🧿💙" },
    { src: shit, title: "🤩🤩💖" },
    { src: parkImg, title: "❣️✨" },
    { src: hbd, title: "😉😉🎉" },
    { src: hihe, title: "💖🌸" },
    { src: redsuit, title: "💞✨" },
    { src: allen, title: "💖😍" },
    { src: cutieImg, title: "💖🥰" },
    { src: sleep, title: "Lost in Thoughts 💭" },
    { src: threed, title: "😚😚💕" },
    { src: lehega, title: "🧿💙🌺" },
    { src: saree, title: "Saree 🥰🌸" },
    { src: sarees, title: "Saree Pose 😍" },
    { src: withflower, title: "With Flower 🌹✨" },
    { src: nowok, title: "Bindi 🌸💜" },
    { src: balloImg, title: "💗💗" },
    { src: winter, title: "Winter Mood ❄️🧣" },
    { src: winterpurple, title: "💜💜" },
    { src: wintergreen, title: "💚💚" },
    { src: handpose, title: "Hand Pose 🤲✨" },
    { src: hair, title: "Hair Flip 💇‍♀️🌸" },
    { src: flowerImg, title: "Fun Time 😉😉🌼" },
    { src: bachpan, title: "Childhood Days 🧒💖" },
    { src: girlImg, title: "Saree Vibes 🌸" },
    { src: selfImg, title: " Selfie Queen 👑💖" },
    { src: roseImg, title: "🌹 Rose Beauty 💕" },
    { src: jhumkaImg, title: "✨ Jhumka Look ✨ " },
    { src: shitdown, title: "💓💓🌸" },
    { src: cutemsgImg, title: "💌🥰" },
    { src: wisheImg, title: "👻 Spooky Bhoot ✨" },
    { src: goImg, title: "💓💓🌸" },
    { src: temple, title: "🛕 Ujjain Trip 🙏✨" },
    { src: black, title: "🖤🖤" },
    { src: style, title: "Beauty 🌸" },
    { src: red, title: "❤️❤️" },
    { src: bhagtain, title: "Culture Time 🙏🕉️" },
  ];

  const rotations = ["-6deg", "4deg", "-3deg", "5deg", "-4deg", "3deg"];
  const bgColors = ["#fff8dc", "#f0f8ff", "#ffe4e1", "#f5f5dc", "#fafad2"];

  return (
    <div style={styles.page}>
      <header className="header">
        <h1 style={styles.heading}>Happy Birthday Jiji💝</h1>
      </header>

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
          <img src={selected.src} alt={selected.title} style={styles.lightboxImg} />
          <h2 style={styles.lightboxTitle}>{selected.title}</h2>
        </div>
      )}

      <div style={styles.center}>
        <button
          className="swap-btn"
          onClick={() => navigate("/Collage")}
          style={styles.button}
        >
          click me💕
        </button>
      </div>

      <footer className="footer">🌸 Made with ❤️ just for you Ma’am 🌸</footer>

      {/* Inline CSS for responsiveness */}
      <style>{`
        body {
          margin:0;
          font-family:'Dancing Script', cursive;
          background: linear-gradient(-45deg,#ffb6c1,#dda0dd,#87ceeb,#b5fffc);
          background-size:400% 400%;
          animation: gradientShift 12s ease infinite;
          color:white;
        }
        @keyframes gradientShift {
          0% { background-position:0% 50% }
          50% { background-position:100% 50% }
          100% { background-position:0% 50% }
        }
        .header { padding:40px 20px; text-align:center; z-index:2; position:relative; }
        .footer { text-align:center; margin:40px 0; font-size:1.2rem; color:#fff; text-shadow:0 0 6px #ff69b4; }

        /* 📱 Mobile first */
        @media (max-width: 480px) {
          h1 { font-size: 1.5rem !important; }
          .footer { font-size: 1rem; }
        }
        @media (max-width: 768px) {
          h1 { font-size: 1.8rem !important; }
        }
        @media (min-width: 1024px) {
          h1 { font-size: 2.8rem !important; }
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
    fontSize: "2rem",
    padding: "0px",
    color: "#f027a3ff",
    fontWeight: "bold",
    fontFamily: "'Dancing Script', cursive",
    textShadow: "0 3px 8px rgba(0,0,0,0.3)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "15px",
    padding: "15px",
  },
  card: {
    borderRadius: "12px",
    padding: "10px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
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
    marginTop: "8px",
    fontSize: "0.9rem",
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
    padding: "10px",
  },
  lightboxImg: {
    width: "100%",
    maxWidth: "600px",
    maxHeight: "70%",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
    objectFit: "contain",
  },
  lightboxTitle: {
    color: "#fff",
    marginTop: "12px",
    fontFamily: "'Dancing Script', cursive",
    fontSize: "1.5rem",
    textAlign: "center",
    padding: "0 10px",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "1.2rem",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(90deg, #ff0080, #ff8c00, #ffd700)",
    color: "#fff",
    boxShadow: "0 0 15px #ff69b4, 0 0 30px #ffa07a",
  },
};