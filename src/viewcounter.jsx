import React, { useEffect, useState } from "react";

const ViewCounter = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const API_KEY = "$2a$10$egBT8k981Q5zyVfiJwhUgec5N4CYpZg3ZVdxWoBFrH2d/pwcA5T8u"; // your X-Master-Key
    const BIN_ID = "68b97a84ae596e708fe2347c"; // your Bin ID

    // Step 1: Get current views
    fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
      headers: {
        "X-Master-Key": API_KEY
      }
    })
      .then((res) => res.json())
      .then((data) => {
        const currentViews = data.record.views || 0;
        const newViews = currentViews + 1;

        // Step 2: Update views in JSONBin
        fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key": API_KEY
          },
          body: JSON.stringify({ views: newViews })
        })
          .then(() => setViews(newViews))
          .catch((err) => console.error("Error updating views:", err));
      })
      .catch((err) => console.error("Error fetching views:", err));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>{views}</h3>
    </div>
  );
};

export default ViewCounter;
