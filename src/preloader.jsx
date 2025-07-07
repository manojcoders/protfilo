// components/Preloader.jsx
import React from 'react';
import './App.css'; // keep animation CSS here or use Tailwind

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col items-center">
        {/* 👇 Use your animation here */}
        <div className="my-loader"></div> 
        <p className="text-white text-sm mt-4 font-mono opacity-80">Loading...</p>
      </div>
    </div>
  );
};

export default Preloader;
