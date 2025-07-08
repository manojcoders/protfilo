import React, { useEffect, useState } from 'react';
import { HandThumbDownIcon } from "@heroicons/react/24/outline";
import { HandRaisedIcon } from '@heroicons/react/24/outline';
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import './App.css'; 
import profileImage from './1711643214041.jpg';
import profile from './profile.png';
import AnimatedLine from './AnimatedLine';



const Home = () => {
const [isVisible, setIsVisible] = useState(false);
// console.log("About Me visibility:", isVisible);
  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setIsVisible(true), 1000);
  }, []);

  return (
    <section className="min-h-screen px-6 md:px-16 bg-[#0a0a23] py-10">
      
      {/* 👤 Hero Section */}
      <div className="w-full max-w-7xl mx-auto bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-20 flex flex-col md:flex-row gap-10 shadow-2xl overflow-hidden relative mt-4">

        {/* Left Column: Text */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Hi, I’m <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Manoj Kandhula</span><HandRaisedIcon className="w-9 h-8 text-cyan-400 inline-block wave origin-[70%_70%] ml-2" />
          </h1>
          <p className="text-white/70 text-base md:text-md mb-4 leading-relaxed">
            I’m a full-stack web developer who builds responsive and scalable applications.
            I specialize in React for the frontend and Node.js for backend development.
            I also craft modern UIs using Tailwind CSS and follow clean coding practices.
          </p>
          <button className="bg-white/10 text-white text-sm border border-white/20 rounded-full px-4 py-2 backdrop-blur-md hover:bg-white/20 transition duration-200 w-fit">
            View Portfolio
          </button>
        </div>

        {/* Right Column: Profile Image */}
        <div className="flex-1 hidden md:flex items-center justify-center relative">
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-pink-500 opacity-30 blur-[120px] z-0"></div>
          <div className="relative z-10 w-44 h-44 rounded-full p-[6px] bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-300">
            <img
              src={profileImage}
              alt="Manoj"
              className="w-full h-full rounded-full object-cover border-2 border-white/10 shadow-inner"
            />
          </div>
        </div>
      </div>

    <div className="w-full max-w-7xl mx-auto mt-10 px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-6">

  {/* 👈 Resume - Left Column */}
  <div className="flex flex-col items-start mt-8 mx-8 gap-3">

    {/* Title with Hand Icon */}
    <h3 className="text-white text-lg font-semibold flex items-center gap-2">
      Resume
      <HandThumbDownIcon className="w-5 h-5 text-cyan-400 wave" />
    </h3>

    {/* Buttons Row */}
      <div className="flex flex-wrap gap-4">
      <button className="flex items-center gap-2 bg-white/10 text-white text-sm border border-white/20 rounded-full px-5 py-2 backdrop-blur-md hover:bg-white/20 transition">
        View Resume
        <ArrowRightEndOnRectangleIcon className="h-5 w-5 text-cyan-400" />
      </button>

      <button className="flex items-center gap-2 bg-white/10 text-white text-sm border border-white/20 rounded-full px-5 py-2 backdrop-blur-md hover:bg-white/20 transition">
        Download Resume
        <ArrowDownIcon className="h-5 w-5 text-cyan-400" />
      </button>
    </div>

  </div>

  {/* 👉 Skill Set Card - Right Column */}
  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-10 shadow-xl">
    <h3 className="text-white text-md font-semibold mb-4">Skill Set</h3>
    <div className="flex flex-wrap gap-3">
      {["HTML", "Tailwind",  "ReactJS", "Node.js", "MongoDB", "MySQL", "Spfx","PHP","CSS",].map((skill) => (
        <span
          key={skill}
          className="text-white text-xs md:text-sm px-4 py-1.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>

</div>
<div className="w-full max-w-7xl mx-auto mt-10 px-6 md:px-0 flex flex-col md:flex-row items-center md:items-start gap-8">

  {/* 👈 Left: Image aligned to the left inside its flex column */}
  <div className="flex justify-start md:w-1/2 mx-8">
    <div className="inline-flex bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl">
      <img 
        src={profile} 
        alt="Manoj"
        className="w-[300px] h-[300px] object-cover rounded-2xl" 
      />
    </div>
  </div>

  {/* 👉 Right: About Me section */}
   <div className="md:w-1/2">
      <h2 className="text-green-300 text-2xl font-semibold mb-4">About Me</h2>
     <p
      className={`text-white/70 text-md leading-relaxed font-serif space-y-2 transition-all duration-700 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      I'm a passionate full-stack web developer focused on building responsive and user-friendly applications.<br />
      I work extensively with React for the frontend and Node.js for the backend.<br />
      My strength lies in creating clean UI/UX using Tailwind CSS and modern web standards.<br />
      I enjoy solving real-world problems with scalable, maintainable code.<br />
      I believe in writing readable, reusable, and efficient code.<br />
      Currently, I'm exploring cloud deployment and optimizing performance across stacks.
    </p>
    </div>
  </div>
  
  <AnimatedLine />
  



</section>
  );
};

export default Home;
