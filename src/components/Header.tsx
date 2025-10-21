import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Upcoming Events", href: "#upcoming-events" },
  { label: "Teams", href: "#teams" },
  { label: "Project", href: "#project" },
  { label: "Research", href: "#research" },
  { label: "Contact Us", href: "#contact-us" },
];

export const Header = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="relative z-50 w-full px-4 md:px-8 pt-6 md:pt-10 pb-4 md:pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden absolute top-6 right-4 text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`font-['Outfit',sans-serif] font-normal text-white text-base lg:text-lg xl:text-xl tracking-[0] leading-tight whitespace-nowrap hover:text-[#3771c8] transition-colors cursor-pointer ${
                location.pathname === item.href ? "text-[#3771c8]" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a1f4d] border-t border-white/10 shadow-2xl">
            <div className="flex flex-col py-4">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-['Outfit',sans-serif] font-normal text-white text-lg tracking-[0] leading-tight px-6 py-3 hover:bg-white/10 transition-colors ${
                    location.pathname === item.href ? "text-[#3771c8] bg-white/5" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
