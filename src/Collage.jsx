import React from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
// 🎥 Import your video
import birthdayVideo from "./assets/khushaboo.mp4";

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-purple-900 via-black to-purple-700 text-white flex flex-col items-center justify-center overflow-hidden">
      {/* 🎆 Confetti */}
      <Confetti width={window.innerWidth} height={window.innerHeight} />

      {/* 🎂 Birthday Text */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl mt-15 font-bold text-center text-purple-500 drop-shadow-lg mb-10"
      >
        My Gigi 🧿💖✨
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
          May all your dreams come true today and always! ❤️💜
        </p>
      </motion.div>

      {/* 🎬 Birthday Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 mb-15 w-80 h-80 md:w-[450px] md:h-[700px] rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-500"
      >
        <video
          src={birthdayVideo}
          className="w-full h-full object-cover"
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
