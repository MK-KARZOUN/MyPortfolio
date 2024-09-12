import React from "react";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          padding: "1rem",
          gap: "1rem",
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
