// BeautifulBirthdayGallery.jsx
import React, { useEffect } from "react";
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
import confetti from "canvas-confetti";

export default function BeautifulBirthdayGallery({ name = "Jiji" }) {
  const images = [
    jhumkaImg,
    selfImg,
    cutemsgImg,
    flowerImg,
    cutieImg,
    parkImg,
    wisheImg,
    roseImg,
    balloImg,
    hbgImg,
    girlImg,
    goImg,
  ];

  // 🎀 Upper jhalar/streamers + floating hearts
  useEffect(() => {
    // Jhalar
    const jhalarContainer = document.createElement("div");
    jhalarContainer.classList.add("jhalar-container");
    document.body.appendChild(jhalarContainer);
    for (let i = 0; i < 50; i++) {
      const strip = document.createElement("div");
      strip.classList.add("strip");
      strip.style.left = Math.random() * 100 + "vw";
      strip.style.animationDelay = Math.random() * 5 + "s";
      strip.style.background = `hsl(${Math.random() * 360}, 80%, 70%)`;
      jhalarContainer.appendChild(strip);
    }

    // Hearts
    const heartsContainer = document.createElement("div");
    heartsContainer.classList.add("hearts-container");
    document.body.appendChild(heartsContainer);
    const heartEmojis = ["💖", "💗", "💝", "💞", "🧿"];
    const heartInterval = setInterval(() => {
      const span = document.createElement("span");
      span.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
      span.style.position = "absolute";
      span.style.left = Math.random() * 100 + "vw";
      span.style.fontSize = 18 + Math.random() * 18 + "px";
      span.style.animation = "floatUp 6s linear forwards";
      heartsContainer.appendChild(span);
      setTimeout(() => span.remove(), 6000);
    }, 700);

    return () => {
      jhalarContainer.remove();
      heartsContainer.remove();
      clearInterval(heartInterval);
    };
  }, []);

  // 🎉 Confetti
  useEffect(() => {
    confetti({ particleCount: 200, spread: 160, origin: { y: 0.6 } });
  }, []);

  return (
    <div className="birthday-page">
      <header className="header">
        <h1 className="glow-title">🎉 Happy Birthday {name}! 🎉</h1>
        <p className="short-message">Wishing you joy, love & laughter 💝</p>
      </header>

      {/* ✅ 3-column Gallery */}
      <div className="gallery">
        {images.map((img, i) => (
          <div
            key={i}
            className="image-card"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <img src={img} alt="birthday" className="gallery-img" />
          </div>
        ))}
      </div>

      <footer className="footer">🌸 Made with ❤️ just for you Ma’am 🌸</footer>

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

        /* Header */
        .header { padding:40px 20px; text-align:center; z-index:2; position:relative; }
        .glow-title {
          font-size:3rem;
          text-shadow:0 0 10px #ff69b4,0 0 20px #ff69b4,0 0 30px #dda0dd,0 0 40px #ffa07a;
          animation: neonGlow 2s infinite alternate;
        }
        .short-message { font-size:1.5rem; margin-top:10px; color:#fff; text-shadow:0 0 8px #fff; }

        @keyframes neonGlow {
          from {
            text-shadow:0 0 10px #ff69b4,0 0 20px #ff69b4,0 0 30px #dda0dd,0 0 40px #ffa07a
          }
          to {
            text-shadow:0 0 20px #fff,0 0 40px #ffb6c1,0 0 60px #dda0dd,0 0 80px #ff69b4
          }
        }

        /* Jhalar / Streamers */
        .jhalar-container { position:absolute; top:0; left:0; width:100%; height:220px; pointer-events:none; overflow:hidden; z-index:1; }
        .strip { position:absolute; top:-50px; width:5px; height:100px; border-radius:3px; animation: swing 3s infinite ease-in-out; }
        @keyframes swing {0%{transform:rotate(0deg)}25%{transform:rotate(10deg)}50%{transform:rotate(0deg)}75%{transform:rotate(-10deg)}100%{transform:rotate(0deg)}}

        /* Floating hearts */
        .hearts-container span { display:block; position:absolute; bottom:-50px; animation: floatUp 6s linear forwards; }
        @keyframes floatUp {
          0% { transform:translateY(0) rotate(0deg); opacity:1 }
          100% { transform:translateY(-250px) rotate(360deg); opacity:0 }
        }

        /* ✅ Fixed 3-column Gallery */
        .gallery { 
          display:grid; 
          grid-template-columns: repeat(3, 1fr); 
          gap:15px; 
          width:90%; 
          margin:20px auto 40px auto; 
          z-index:2; 
          position:relative; 
        }

        .image-card {
          position:relative;
          overflow:hidden;
          border-radius:20px;
          border:3px solid transparent;
          opacity:0;
          transform:translateY(30px);
          animation: fadeIn 0.8s ease forwards;
        }

        .gallery-img {
          width:100%;
          height:550px;   /* ⬅️ Increased image height */
          object-fit:cover;
          border-radius:20px;
          transition: transform 0.5s ease, filter 0.4s ease, box-shadow 0.4s ease;
        }

        .image-card:hover .gallery-img {
          transform:scale(1.1) rotate(1deg);
          filter:brightness(1.2) saturate(1.3);
          box-shadow:0 0 25px #ff69b4,0 0 50px #ff69b4,0 0 75px #dda0dd,0 0 100px #ffb6c1;
        }
        .image-card:hover { border-color:#ff69b4; box-shadow:0 0 25px #ff69b4,0 0 50px #dda0dd; }

        @keyframes fadeIn {
          from {opacity:0; transform:translateY(30px)}
          to {opacity:1; transform:translateY(0)}
        }

        /* Footer */
        .footer {
          text-align:center;
          margin:40px 0;
          font-size:1.2rem;
          color:#fff;
          text-shadow:0 0 6px #ff69b4;
        }

        /* Responsive tweaks */
        @media (max-width:768px) { 
          .gallery { grid-template-columns: repeat(2, 1fr); }
          .glow-title { font-size:2.2rem; } 
          .short-message { font-size:1.2rem; } 
          .gallery-img { height:300px; }  /* ⬅️ Tablet image height */
        }
        @media (max-width:480px) { 
          .gallery { grid-template-columns: 1fr; }
          .glow-title { font-size:1.6rem; } 
          .short-message { font-size:1rem; } 
          .gallery-img { height:250px; }  /* ⬅️ Mobile image height */
        }
      `}</style>
    </div>
  );
}
