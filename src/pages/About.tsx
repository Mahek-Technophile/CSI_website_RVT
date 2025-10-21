import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const About = (): JSX.Element => {
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

      <main className="relative z-10 flex-1 flex flex-col items-center px-4 py-8 md:py-12 lg:py-16">
        <div className="max-w-5xl w-full">
          {/* Page Title */}
          <h1 className="font-['Outfit',sans-serif] font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center tracking-[0] leading-tight mb-8 md:mb-12">
            About <span className="text-[#3771c8]">Us</span>
          </h1>

          {/* Content Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/10 shadow-2xl">
            <div className="space-y-6 md:space-y-8">
              <p className="font-['Outfit',sans-serif] font-normal text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0] leading-relaxed">
                Through our chapter, students get boundless opportunities to work on real-world projects, collaborate with industry professionals, and participate in cutting-edge research initiatives that shape the future of technology.
              </p>

              <p className="font-['Outfit',sans-serif] font-normal text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0] leading-relaxed">
                We are dedicated to fostering innovation, technical excellence, and professional growth among our members. Our community brings together passionate individuals who share a common goal of advancing computer science and technology.
              </p>

              <p className="font-['Outfit',sans-serif] font-normal text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0] leading-relaxed">
                Join us to be part of a legacy that has been nurturing tech talent since 1965, and contribute to building the next generation of computer science leaders.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-8 md:mt-12 pt-8 border-t border-white/10">
              <h2 className="font-['Outfit',sans-serif] font-semibold text-[#3771c8] text-2xl sm:text-3xl md:text-4xl text-center tracking-[0] leading-tight mb-4">
                Get Involved
              </h2>
              <p className="font-['Outfit',sans-serif] font-normal text-white/80 text-base sm:text-lg md:text-xl text-center tracking-[0] leading-relaxed">
                Connect with us through our events, projects, and community initiatives.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
