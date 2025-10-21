import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-[#031237] overflow-hidden w-full min-h-screen relative flex flex-col">
      {/* Background Ellipse Top Left */}
      <img
        className="absolute w-[200px] sm:w-[300px] md:w-[400px] lg:w-[25.75vw] h-auto top-0 left-0 pointer-events-none opacity-80"
        alt="Ellipse"
        src="/ellipse-3-1.svg"
      />

      {/* Background Ellipse Bottom Left */}
      <img
        className="absolute w-[500px] sm:w-[700px] md:w-[900px] lg:w-[69.85vw] h-auto top-[40%] sm:top-[45%] md:top-[51.30%] left-[-20%] sm:left-[-15%] md:left-[-11.46%] pointer-events-none opacity-80"
        alt="Ellipse"
        src="/ellipse-3.svg"
      />

      <Header />

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-12">
        {/* Logo/Background Image */}
        <div className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mb-6 md:mb-8">
          <img
            className="w-full h-full object-cover"
            alt="CSI Logo"
            src="/background-image.png"
          />
        </div>

        {/* Hero Text */}
        <div className="flex flex-col items-center justify-center gap-3 md:gap-4 max-w-6xl">
          <h1 className="font-['Outfit',sans-serif] font-normal text-center tracking-[0] leading-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[91.5px]">
            <span className="font-semibold text-[#3771c8]">Welcome</span>
            <span className="font-semibold text-[#eeedef]"> To</span>
            <br />
            <span className="font-bold text-white">COMPUTER </span>
            <span className="font-bold text-[#006699]">SOCIETY</span>
            <span className="font-bold text-white"> OF INDIA</span>
          </h1>

          <h2 className="font-['Outfit',sans-serif] font-semibold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center tracking-[0] leading-[normal]">
            STUDENT CHAPTER
          </h2>
        </div>
      </main>

      <Footer />
    </div>
  );
};
