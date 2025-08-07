import React, { useState } from "react";
import profileImage from './1711643214041.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "About", "Career", "Experience"];

  return (
    <nav
      className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] 
                 border border-white/10 shadow-xl backdrop-blur-xl rounded-3xl 
                 bg-[#0a0a23]/90 transition-all duration-300 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
        <div className="text-white text-xl font-bold">
          Manoj<span className="text-cyan-400">.Dev</span>
        </div>

        {/* Hamburger Menu */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Nav Items */}
        <ul
          className={`${menuOpen ? "flex" : "hidden"} sm:flex absolute sm:static top-16 left-1/2 sm:left-auto transform sm:transform-none -translate-x-1/2 sm:translate-x-0 
                      flex-col sm:flex-row items-center gap-4 sm:gap-8 text-white text-sm font-medium 
                      bg-black/80 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none 
                      p-4 sm:p-0 rounded-xl sm:rounded-none z-40`}
        >
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 rounded-xl transition duration-300 hover:bg-white/10 hover:text-cyan-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Profile Image */}
        <div className="hidden sm:flex items-center">
          <img
            src={profileImage}
            alt="User"
            className="w-9 h-9 rounded-full object-cover border border-white/20 shadow-md"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
