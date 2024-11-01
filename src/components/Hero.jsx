// Hero.js
import React from "react";
import Navbar from "./Navbar"; // Ensure the path is correct

const Hero = () => {
  return (
    <div className="relative z-0  h-screen w-full overflow-hidden">
      {/* Background Video */} 
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src="/path/to/your-video.mp4" // Replace with the path to your video file
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay for color effect */}
      <div className="absolute inset-0 bg-purple-900 opacity-50"></div>
      {/* Navbar */}
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Code Dazzle Solutions
        </h1>
        <p className="text-lg">Innovative Solutions for a Digital World</p>
      </div>
    </div>
  );
};

export default Hero;
