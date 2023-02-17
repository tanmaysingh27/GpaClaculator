import Theme from "./components/Theme";
import Gpa from "./components/Gpa";
import Navbar from "./components/Navbar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/home" element={<Gpa />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
