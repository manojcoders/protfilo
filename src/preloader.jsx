import React from 'react';
import './App.css'; // Make sure this includes the loader CSS
import { FaRegFaceSmileWink } from "react-icons/fa6";
import { PiSmileyXEyesThin } from "react-icons/pi";
import { FaRegSmileBeam } from "react-icons/fa";
const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col items-center">
        {/* Bouncing Dots Animation */}
        <div className="loader-dots">
          <span><FaRegFaceSmileWink /></span>
          <span><PiSmileyXEyesThin  /></span>
          <span><FaRegSmileBeam /></span>
        </div>
        <p className="text-white text-sm mt-4 font-mono opacity-80">Loading...</p>
      </div>
    </div>
  );
};

export default Preloader;
