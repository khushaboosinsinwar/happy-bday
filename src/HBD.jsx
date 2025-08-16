// BirthdaySlide.jsx
import React from "react";
import { useParams } from "react-router-dom";

// Import all images
import girlImg from './assets/girl.jpg';
import flowerImg from './assets/flower.jpg';
import cutieImg from './assets/cutie.jpg';
import parkImg from './assets/park.jpg';
import balloImg from './assets/ballo.jpg';
import hbgImg from './assets/hbg.jpg';
import cutemsgImg from './assets/cutemsg.jpg';
import wisheImg from './assets/wishe.jpg';
import goImg from './assets/go.jpg';

// Map codes → names
const codeNameMap = {
  abcdefg: "Khushaboo",
  xyz123: "Rohit",
  qwerty: "Anjali"
};

export default function BirthdaySlide() {
  const { code } = useParams();
  const name = codeNameMap[code] || "Bestie";

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div style={{ 
      fontFamily: "'Dancing Script', cursive", 
      background: 'linear-gradient(135deg, #FFC0CB, #DDA0DD)', 
      minHeight: '100vh', 
      color: '#fff', 
      overflowX: 'hidden' 
    }}>
      
      {/* Birthday Slide Header */}
      <div className="slide-container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '30px',
        borderRadius: '20px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        maxWidth: '900px',
        margin: '50px auto'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', animation: 'bounce 2s infinite' }}>
          Happy Birthday {name}! 🎉
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
          May your day be filled with joy, love, and laughter!
        </p>
        <p style={{ fontSize: '1.2rem' }}>Have an amazing year ahead!</p>
        <img 
          src={girlImg} 
          alt="Birthday" 
          style={{
            width: '200px',
            height: 'auto',
            transition: 'transform 3s ease',
            borderRadius: '15px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        />
      </div>

      {/* Scroll Button */}
      <button 
        onClick={scrollDown} 
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '12px 25px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '25px',
          backgroundColor: '#FF69B4',
          color: '#fff',
          cursor: 'pointer',
          zIndex: 1000,
          transition: 'background-color 0.3s, transform 0.3s'
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#DDA0DD'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#FF69B4'}
      >
        Scroll Down ⬇
      </button>

      {/* "Our Best Memories" Section */}
      <div className="text-center" style={{ fontFamily: "'Pacifico', cursive", fontSize: '3rem', marginTop: '50px', marginBottom: '30px' }}>
        Our Best Memories
      </div>

      {/* First Row of Images */}
      <div className="images" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', padding: '8px' }}>
        {[flowerImg, cutieImg, parkImg, balloImg].map((img, i) => (
          <img key={i} src={img} alt="bday" style={{ width: '200px', border: '15px solid white', borderRadius: '15px' }} />
        ))}
      </div>

      {/* Second Row of Images */}
      <div className="images" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', padding: '8px', marginBottom: '50px' }}>
        {[hbgImg, cutemsgImg, wisheImg, goImg].map((img, i) => (
          <img key={i} src={img} alt="bday" style={{ width: '200px', border: '15px solid white', borderRadius: '15px' }} />
        ))}
      </div>

      {/* Curly Fonts Import & Bounce Animation */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Pacifico&display=swap');

          @keyframes bounce {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}
      </style>
    </div>
  );
}
