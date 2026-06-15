"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // The homepage has a dark hero background fold where text needs to be white initially.
  // Other pages have light backgrounds and require dark navbar text from the start.
  const isDarkHeader = pathName === "/";
  const isTextWhite = !isScrolled && isDarkHeader;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", href: "/Works" },
    { name: "Studio", href: "/Studio" },
    { name: "Contact Us", href: "/ContactUs" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-[#fbf9f9]/90 backdrop-blur-md border-b border-[#c4c7c7]/30 py-4"
            : "bg-transparent py-8"
        }`}
      >
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-2 max-w-container-max mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center font-serif text-[22px] md:text-[26px] font-semibold tracking-tighter hover:opacity-75 transition-opacity group transition-colors duration-300 ${
              isTextWhite ? "text-white" : "text-[#1a1a1a]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            <svg width="36" height="36" viewBox="0 0 100 100" className="mr-3 select-none transition-transform duration-500 group-hover:rotate-12">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#a68966" strokeWidth="2.5" />
              <path d="M 32 70 L 48 25 L 56 45" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 38 52 H 52" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M 54 70 V 35 L 72 70 V 35" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>ANANTHU NIBIN</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center font-sans text-[12px] font-semibold uppercase tracking-widest">
            {navLinks.map((link) => {
              const isActive = pathName === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative pb-1 transition-colors duration-300 ${
                    isActive
                      ? isTextWhite
                        ? "text-white border-b-2 border-white"
                        : "text-[#1a1a1a] border-b-2 border-[#1a1a1a]"
                      : isTextWhite
                      ? "text-white/70 hover:text-white"
                      : "text-[#707070] hover:text-[#1a1a1a]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Booking CTA Button (Desktop) & Menu Button (Mobile) */}
          <div className="flex items-center gap-4">
            <Link
              href="/ContactUs"
              className={`hidden md:inline-block px-6 py-3 border font-sans text-[12px] font-semibold uppercase tracking-widest transition-colors duration-300 ${
                isTextWhite
                  ? "border-white text-white hover:bg-white hover:text-[#1a1a1a]"
                  : "border-[#707070] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
              }`}
            >
              Book Consultation
            </Link>
            
            {/* Hamburger Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden focus:outline-none p-1 transition-colors duration-300 ${
                isOpen || !isTextWhite ? "text-[#1a1a1a]" : "text-white"
              }`}
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined text-[28px]">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[99] bg-[#fbf9f9] transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center items-center ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 text-center uppercase tracking-widest font-sans text-[16px] font-semibold">
          {navLinks.map((link) => {
            const isActive = pathName === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-2 transition-colors ${
                  isActive
                    ? "text-[#1a1a1a] border-b-2 border-[#1a1a1a] w-fit mx-auto"
                    : "text-[#707070] hover:text-[#1a1a1a]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/ContactUs"
            onClick={() => setIsOpen(false)}
            className="mt-6 px-8 py-4 border border-[#707070] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
