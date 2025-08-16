// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom";
import BirthdaySlide from "./HBD";



// Home page with list of birthday wishes
function Home() {
  const navigate = useNavigate();

  const pages = [
    { code: "abcdefg", creator: "Khushaboo", description: "Happy Birthday wishes for my bestie!" },
    { code: "xyz123", creator: "Khushaboo", description: "Birthday surprises for my friend Rohit!" },
    { code: "qwerty", creator: "Khushaboo", description: "Special birthday greetings for Anjali!" }
  ];

  return (
    <div style={{ padding: "50px", textAlign: "center", fontFamily: "'Dancing Script', cursive" }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '30px' }}>Birthday Wish Pages Created by Khushaboo 🎉</h1>
      {/* <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
        {pages.map((page) => (
          <div key={page.code} style={{ 
            border: "2px solid #fff", padding: "20px", borderRadius: "15px", cursor: "pointer",
            width: "80%", maxWidth: "600px", background: "rgba(255,255,255,0.1)" 
          }} onClick={() => goToBirthday(page.code)}>
            <h2>{page.description}</h2>
            <p>Created by: {page.creator}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

// // Birthday page
// function BirthdayPage() {
//   const { code } = useParams();
//   const name = codeNameMap[code] || "Bestie";

//   return (
//     <div style={{
//       fontFamily: "'Dancing Script', cursive",
//       background: 'linear-gradient(135deg, #FFC0CB, #DDA0DD)',
//       minHeight: '100vh',
//       color: '#fff',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center'
//     }}>
//       <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
//         Happy Birthday {name}! 🎉
//       </h1>
//       <p>May your day be filled with joy, love, and laughter!</p>
//     </div>
//   );
// }

// Main App with Router
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:code" element={<BirthdaySlide />} />
      </Routes>
    </Router>
  );
}
