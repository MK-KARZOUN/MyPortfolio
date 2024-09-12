"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
      }}
    >
      <h1 style={{}}>
        <span>Hello, I&#39;m </span>
        <br />
        <TypeAnimation
          sequence={["Malek", 1000, "Web Developer", 1000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>

      <p>
        I’m a motivated full stack developer with about 1.5 years of hands-on
        experience building web applications. While I’m still early in my
        career, I’ve had the chance to work on some exciting projects like
        CodeBuilder and MitJob.ai, where I’ve honed my skills in JavaScript,
        React, and Next.js.
      </p>

      <div style={{}}>
        <button
          style={{
            backgroundColor: "transparent",
            borderRadius: "1rem",
            paddin: "6px, 12px",
            marginRight: "1rem",
          }}
        >
          Hire me
        </button>
        <button
          style={{
            backgroundColor: "transparent",
            padding: "2px",
            borderRadius: "1rem",
          }}
        >
          Donload CV
        </button>
      </div>
    </div>
  );
}
