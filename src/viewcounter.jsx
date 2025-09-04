import React, { useEffect, useState } from "react";

const ViewCounter = () => {
  const [views, setViews] = useState(0);

 useEffect(() => {
    fetch("https://api.countapi.xyz/hit/protfilo-manoj/portfolio")
      .then((res) => res.json())
      .then((data) => setViews(data.value))
      .catch((err) => console.error("Error fetching views:", err));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>{views} </h3>
    </div>
  );
};

export default ViewCounter;
