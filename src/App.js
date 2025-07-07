import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Career from "./Career";
import Experience from "./Experience";
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* 👇 Wrap all routes inside Layout for preloader + Outlet */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="career" element={<Career />} />
          <Route path="experience" element={<Experience />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
