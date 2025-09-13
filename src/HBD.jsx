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

  return (
    <div className="min-h-screen bg-pink-200 flex flex-col">
      {/* Header */}
      <header className="py-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-700 drop-shadow-lg">
          Happy Birthday Jiji💝
        </h1>
      </header>

      {/* Grid Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="bg-pink-100 rounded-xl p-2 shadow-md cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => setSelected(img)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full aspect-[3/4] object-cover rounded-lg shadow"
            />
            <p className="mt-2 text-center text-sm italic text-gray-700">
              {img.title}
            </p>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center p-4 z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected.src}
            alt={selected.title}
            className="w-full max-w-lg max-h-[70vh] rounded-xl shadow-lg object-contain"
          />
          <h2 className="text-white text-lg mt-4 font-semibold">
            {selected.title}
          </h2>
        </div>
      )}

      {/* Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate("/Collage")}
          className="px-6 py-3 text-lg rounded-lg bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white shadow-lg hover:scale-105 transition-transform"
        >
          click me💕
        </button>
      </div>

      {/* Footer */}
      <footer className="text-center my-6 text-white drop-shadow-md text-sm sm:text-base">
        🌸 Made with ❤️ just for you Ma’am 🌸
      </footer>
    </div>
  );
}
