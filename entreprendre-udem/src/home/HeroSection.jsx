import React from "react";

function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b from-[#0c0c1e] to-transparent h-[800px] flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1800px] h-[650px] bg-blue-500 rounded-b-full blur-2xl opacity-30 z-0 border-none" />
      <div className="relative z-10 text-center bottom-20">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-300">
          Udem Entreprend
          <br />Façonnons ensemble l'avenir de l'entrepreneuriat universitaire
        </h1>
        <br />
        <a
          href="#communaute"
          className="relative inline-block px-6 py-2 rounded-full text-white font-medium
            border border-white/30 bg-white/10 backdrop-blur-md
            hover:bg-gradient-to-r hover:from-blue-400 hover:to-violet-500
            hover:text-white transition-all duration-300
            hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105"
        >
          Découvrir le club
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
