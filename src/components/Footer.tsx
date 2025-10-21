import React from "react";
import { InstagramIcon, LinkedinIcon } from "lucide-react";
import { Button } from "./ui/button";

const socialButtons = [
  {
    icon: InstagramIcon,
    label: "Follow us on Instagram",
    bgColor: "bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af]",
    href: "https://www.instagram.com",
  },
  {
    icon: LinkedinIcon,
    label: "Follow us on Linkedin",
    bgColor: "bg-[#0077b5]",
    href: "https://www.linkedin.com",
  },
];

export const Footer = (): JSX.Element => {
  return (
    <footer className="relative z-10 w-full px-4 pb-8 md:pb-12 pt-6 md:pt-8">
      <div className="max-w-7xl mx-auto">
        {/* Social Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
          {socialButtons.map((button, index) => (
            <Button
              key={index}
              asChild
              className={`${button.bgColor} hover:opacity-90 transition-opacity h-10 sm:h-11 px-5 sm:px-6 rounded-full w-full sm:w-auto max-w-xs`}
            >
              <a
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <button.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="font-['Inter',sans-serif] font-black text-white text-xs sm:text-sm tracking-[0] leading-[normal]">
                  {button.label}
                </span>
              </a>
            </Button>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="font-['Outfit',sans-serif] font-normal text-white/70 text-sm sm:text-base tracking-[0] leading-[normal]">
            ESTD. 1965
          </p>
        </div>
      </div>
    </footer>
  );
};
