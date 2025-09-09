import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
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
  const [index, setIndex] = useState(0);
  const images = [cutemsgImg,wisheImg,red,shitdown,goImg,girlImg,selfImg,jhumkaImg,roseImg,temple,black,style,];

  // Auto slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-purple-900 via-black to-purple-700 text-white flex flex-col items-center justify-center overflow-hidden">
      {/* 🎆 Confetti */}
      <Confetti width={window.innerWidth} height={window.innerHeight} />

      {/* 🎂 Birthday Text */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-center text-purple-500 drop-shadow-lg mb-6"
      >
    My Gigi🧿💖✨
      </motion.h1>

      {/* 💌 Message Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="bg-black bg-opacity-60 border-2 border-purple-400 rounded-2xl p-6 max-w-lg text-center shadow-lg"
      >
        <p className="text-xl leading-relaxed">
          Wishing you a day filled with love, laughter, and happiness.  
          May all your dreams come true today and always!❤️💜
        </p>
      </motion.div>

    {/* 🖼 Image Slideshow */}
<motion.div
  key={index}
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="mt-10 w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-500"
>
  <img
    src={images[index]}
    alt="Birthday Memory"
    className="w-full h-full object-cover"
  />
</motion.div>

      {/* 🎶 Background Music */}
      <audio autoPlay loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
