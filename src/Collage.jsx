import React, { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
// 🎥 Import your video
import birthdayVideo from "./assets/pooji.mp4";

export default function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const videoRef = useRef(null);

  // 🎬 When video starts playing → start confetti
  const handleVideoPlay = () => {
    setShowConfetti(true);

    // ⏳ Stop confetti after 21 sec
    setTimeout(() => {
      setShowConfetti(false);
    }, 21000);
  };

  return (
    <div className="relative min-h-screen bg-pink-200 flex flex-col items-center justify-center overflow-hidden px-3 sm:px-6">
      {/* 🎆 Confetti (sync with video, lasts 21 sec) */}
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      {/* 🎂 Birthday Text */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-pink-700 drop-shadow-lg mb-4"
      >
        Dear Jiji 🧿💖✨
      </motion.h1>

      {/* 💌 Message Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="bg-white bg-opacity-80 border-2 border-pink-400 rounded-xl p-3 sm:p-5 max-w-sm w-full text-center shadow-lg mb-5"
      >
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-800">
          Wishing you a day filled with love, laughter, and happiness.  
          May all your dreams come true today and always! ❤️💜
        </p>
      </motion.div>

      {/* 🎬 Birthday Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] rounded-xl overflow-hidden shadow-xl border-4 border-pink-500"
      >
        <video
          ref={videoRef}
          src={birthdayVideo}
          className="w-full h-auto object-cover"
          autoPlay
          loop
          muted
          controls
          onPlay={handleVideoPlay} // 🎯 Sync confetti with video
        />
      </motion.div>

      {/* 🎶 Background Music */}
      <audio autoPlay loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
