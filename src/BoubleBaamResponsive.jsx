import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function DoubleBaamResponsivePage() {
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let particles = [];

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = 2 + Math.random() * 2.5;
        this.speed = Math.random() * 6 + 2;
        this.angle = Math.random() * Math.PI * 2;
        this.alpha = 1;
        this.decay = 0.01 + Math.random() * 0.015;
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.alpha -= this.decay;
      }

      draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const createFirework = () => {
      const colors = [
        "#ff0000", "#ff4500", "#ffd700",
        "#00ffff", "#ff69b4", "#32cd32", "#9400d3"
      ];
      for (let j = 0; j < 2; j++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * (canvas.height / 2);
        const color = colors[Math.floor(Math.random() * colors.length)];
        for (let i = 0; i < 90; i++) {
          particles.push(new Particle(x, y, color));
        }
      }
    };

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        if (p.alpha <= 0) {
          particles.splice(i, 1);
        } else {
          p.update();
          p.draw();
        }
      });

      requestAnimationFrame(animate);
    };

    const fireworkInterval = setInterval(createFirework, 1000);
    animate();

    return () => {
      clearInterval(fireworkInterval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="double-baam-page">
      <canvas ref={canvasRef} className="fireworks-canvas"></canvas>
      <div className="content">
        <h1 className="title">Happy Birthday Jiji💖</h1>
        <p className="msg">✨ Wishing you love, joy & endless happiness ✨</p>
        <button className="swap-btn" onClick={() => navigate("/hbd")}>
          👉 Go to Birthday Slide 🎉
        </button>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Great+Vibes&display=swap');

        .double-baam-page {
          height: 100vh;
          width: 100vw;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #000000, #1a001f, #330033);
          background-size: 400% 400%;
          animation: bgShift 10s ease infinite;
        }
        @keyframes bgShift {
          0% { background-position:0% 50%; }
          50% { background-position:100% 50%; }
          100% { background-position:0% 50%; }
        }
        .fireworks-canvas {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
        }

        .content {
          position: relative;
          z-index: 2;
          top: 35%;
          text-align: center;
          color: white;
          padding: 0 5vw;
        }
.title {
  font-size: clamp(1.8rem, 4.5vw, 3rem); /* Medium size: responsive */
  font-weight: 700;  /* Bold but thoda kam heavy */
  font-style: italic; 
  color: #ffffff;  
  font-family: 'Dancing Script', cursive;
  letter-spacing: 2px;
  white-space: nowrap;
  text-shadow: 0 0 12px #ff69b4,
               0 0 20px #00ffff,
               0 0 28px #ffd700;
  line-height: 1.2;
}


        @keyframes glowPulse {
          from { text-shadow: 0 0 15px #ff69b4, 0 0 30px #ffd700; }
          to { text-shadow: 0 0 25px #00ffff, 0 0 45px #ff4500; }
        }

        .msg {
          margin-top: 12px;
          font-size: clamp(1rem, 4vw, 1.6rem);
          text-shadow: 0 0 10px #ff69b4, 0 0 20px #00ffff;
          font-style: italic;
          font-family: 'Dancing Script', cursive;
          line-height: 1.3;
        }

        .swap-btn {
          margin-top: 20px;
          padding: clamp(10px, 2vw, 14px) clamp(20px, 4vw, 32px);
          font-size: clamp(1rem, 4vw, 1.4rem);
          border: 2px solid #fff;
          border-radius: 12px;
          background: linear-gradient(90deg, #ff69b4, #ffd700, #00ffff);
          background-size: 200% 200%;
          color: #000;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 15px #ff69b4, 0 0 25px #ffd700;
          max-width: 90%;
        }
        .swap-btn:hover {
          transform: scale(1.1);
          background-position: 100% 0;
          box-shadow: 0 0 25px #00ffff, 0 0 40px #ff69b4;
        }

        /* Responsive Tweaks */
        @media (max-width: 600px) {
          .content { top: 30%; }
          .title { font-size: 2rem; }
          .msg { font-size: 1rem; }
        }
        @media (min-width: 1200px) {
          .title { font-size: 4rem; }
          .msg { font-size: 1.8rem; }
        }
      `}</style>
    </div>
  );
}
