import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoubleBaamResponsivePage from "./BoubleBaamResponsive";  // ya fir sahi rename karke "./DoubleBaamResponsivePage"
import HBD from "./HBD";
import Collage from "./collage";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DoubleBaamResponsivePage />} />
        <Route path="/hbd" element={<HBD />} />
         <Route path="/Collage" element={<Collage />} />
      </Routes>
    </Router>
  );
}
