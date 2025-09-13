import React from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
// 🎥 Import your video
import birthdayVideo from "./assets/pooji.mp4";

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-purple-900 via-black to-purple-700 text-white flex flex-col items-center justify-center overflow-hidden px-4">
      {/* 🎆 Confetti */}
      <Confetti width={window.innerWidth} height={window.innerHeight} />

      {/* 🎂 Birthday Text */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-6xl font-bold text-center text-purple-400 drop-shadow-lg mb-6"
      >
        Dear Jiji 🧿💖✨
      </motion.h1>

      {/* 💌 Message Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="bg-black bg-opacity-60 border-2 border-purple-400 rounded-2xl p-4 sm:p-6 max-w-md w-full text-center shadow-lg mb-6"
      >
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Wishing you a day filled with love, laughter, and happiness.  
          May all your dreams come true today and always! ❤️💜
        </p>
      </motion.div>

      {/* 🎬 Birthday Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-500"
      >
        <video
          src={birthdayVideo}
          className="w-full h-auto object-cover"
          autoPlay
          loop
          muted
          controls // 👉 remove this if you don’t want play/pause buttons
        />
      </motion.div>

      {/* 🎶 Background Music (use .mp3) */}
      <audio autoPlay loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
