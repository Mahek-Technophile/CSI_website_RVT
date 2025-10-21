import { InstagramIcon, LinkedinIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";

const navigationItems = [
  { label: "about", href: "#about" },
  { label: "upcoming events", href: "#upcoming-events" },
  { label: "teams", href: "#teams" },
  { label: "project", href: "#project" },
  { label: "research", href: "#research" },
  { label: "contact us", href: "#contact-us" },
];

const socialButtons = [
  {
    icon: InstagramIcon,
    label: "Follow us on Instagram",
    bgColor: "bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af]",
    href: "#instagram",
  },
  {
    icon: LinkedinIcon,
    label: "Follow us on Linkedin",
    bgColor: "bg-[#0077b5]",
    href: "#linkedin",
  },
];

export const HomePage = (): JSX.Element => {
  return (
    <div className="bg-[#031237] overflow-hidden w-full min-h-screen relative flex flex-col">
      <img
        className="absolute w-[25.75%] h-[41.45%] top-0 left-0 pointer-events-none"
        alt="Ellipse"
        src="/ellipse-3-1.svg"
      />

      <img
        className="absolute w-[69.85%] h-[105.51%] top-[51.30%] left-[-11.46%] pointer-events-none"
        alt="Ellipse"
        src="/ellipse-3.svg"
      />

      <nav className="relative z-10 flex items-center justify-center pt-10 pb-8">
        <div className="flex items-center gap-8">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="[font-family:'Outfit',Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[27.5px] whitespace-nowrap hover:text-[#3771c8] transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center">
        <div className="relative w-[500px] h-[500px] mb-8">
          <img
            className="w-full h-full object-cover"
            alt="Background image"
            src="/background-image.png"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="[font-family:'Outfit',Helvetica] font-normal text-center tracking-[0] leading-[normal] text-[91.5px]">
            <span className="font-semibold text-[#3771c8]">Welcome</span>
            <span className="font-semibold text-[#eeedef]"> To</span>
            <br />
            <span className="font-bold text-white">COMPUTER </span>
            <span className="font-bold text-[#006699]">SOCIETY</span>
            <span className="font-bold text-white"> OF INDIA</span>
          </h1>

          <h2 className="[font-family:'Outfit',Helvetica] font-semibold text-white text-4xl text-center tracking-[0] leading-[normal]">
            STUDENT CHAPTER
          </h2>
        </div>
      </main>

      <footer className="relative z-10 flex items-center justify-center gap-6 pb-12 pt-8">
        {socialButtons.map((button, index) => (
          <Button
            key={index}
            asChild
            className={`${button.bgColor} hover:opacity-90 transition-opacity h-10 px-6 rounded-full`}
          >
            <a href={button.href} className="flex items-center gap-3">
              <button.icon className="w-5 h-5" />
              <span className="[font-family:'Inter',Helvetica] font-black text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                {button.label}
              </span>
            </a>
          </Button>
        ))}
      </footer>
    </div>
  );
};
