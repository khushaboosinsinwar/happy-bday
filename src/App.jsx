import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoubleBaamResponsivePage from "./BoubleBaamResponsive";  // ya fir sahi rename karke "./DoubleBaamResponsivePage"
import HBD from "./HBD";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DoubleBaamResponsivePage />} />
        <Route path="/hbd" element={<HBD />} />
      </Routes>
    </Router>
  );
}
