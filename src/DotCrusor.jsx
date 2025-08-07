import { useEffect, useState } from "react";

export default function DotCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-3 h-3 bg-blue-600 rounded-full pointer-events-none z-50"
      style={{
        transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
        transition: "transform 0.05s linear",
      }}
    ></div>
  );
}
