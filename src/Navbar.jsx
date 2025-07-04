import React from "react";
import { NavLink } from "react-router-dom";
// import userImg from "./user.png"; // Replace with your image path

const Navbar = () => {
  return (
    <nav className="shadow-md backdrop-blur-2xl border border-white/20 bg-translucentBlue mt-2 mx-4" style={{ backgroundColor: "oklch(74.6% 0.16 232.661 / 0.6)", // transparent using alpha
      borderRadius: "10rem 10rem", }}>
      <div className="container mx-auto px-4 py-1 flex items-center justify-between">
        {/* Empty div to balance center alignment */}
        <div className="w-10"></div>

        {/* Centered Navigation */}
        <ul className="flex justify-center space-x-10 text-lg font-semibold text-gray-700">
          {["Home", "About", "Career", "Experience"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-3 py-1 rounded-md transition ${
                    isActive ? "text-black" : ""
                  } hover:bg-[#f0efeb]`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right-Aligned Profile Image */}
        <div className="w-10 h-10">
          <img
            src=""
            alt="User"
            className="w-8 h-8 rounded-full object-cover border border-white"
          />
        </div>
      </div>
    </nav>

  );
};

export default Navbar;


