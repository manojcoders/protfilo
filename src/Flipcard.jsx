import React, { useEffect, useState } from "react";

const FlipCard = ({ value, label, animate }) => {
  const [display, setDisplay] = useState(value);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (value !== display && animate) {
      setFlipping(true);
      const timeout = setTimeout(() => {
        setDisplay(value);
        setFlipping(false);
      }, 300);
      return () => clearTimeout(timeout);
    } else {
      setDisplay(value);
    }
  }, [value, display, animate]);

  return (
    <div className="relative w-[100px] h-[100px] perspective text-black">
      <div
        className={`w-full h-full bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center 
          transition-transform duration-300 ease-in-out 
          ${flipping ? "flip" : ""}`}
      >
        <span className="text-3xl font-bold">{display}</span>
        <span className="text-xs mt-1 uppercase text-gray-700">{label}</span>
      </div>
    </div>
  );
};

export default FlipCard;
