import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#fbf9f9] border-t border-[#c4c7c7]/30">
      <div className="w-full px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Left column: brand details */}
        <div className="md:col-span-4 mb-8 md:mb-0 flex flex-col justify-between">
          <div className="flex items-center font-serif text-[28px] font-semibold text-[#1a1a1a] mb-8">
            <svg width="36" height="36" viewBox="0 0 100 100" className="mr-3 select-none">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#a68966" strokeWidth="2.5" />
              <path d="M 32 70 L 48 25 L 56 45" fill="none" stroke="#1a1a1a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 38 52 H 52" fill="none" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
              <path d="M 54 70 V 35 L 72 70 V 35" fill="none" stroke="#1a1a1a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>ANANTHU NIBIN</span>
          </div>
          <p className="font-sans text-[11px] text-[#707070] uppercase tracking-widest leading-relaxed">
            © 2024 ANANTHU NIBIN ARCHITECTURAL CRAFT. <br className="hidden sm:inline" />ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Right column: links */}
        <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4 font-sans text-[12px] font-semibold uppercase tracking-widest">
            <span className="text-[#1a1a1a] mb-2 font-bold">SOCIAL</span>
            <Link
              className="text-[#707070] hover:text-[#735a3a] transition-colors duration-300"
              href="#"
            >
              INSTAGRAM
            </Link>
            <Link
              className="text-[#707070] hover:text-[#735a3a] transition-colors duration-300"
              href="#"
            >
              PINTEREST
            </Link>
            <Link
              className="text-[#707070] hover:text-[#735a3a] transition-colors duration-300"
              href="#"
            >
              LINKEDIN
            </Link>
          </div>

          <div className="flex flex-col gap-4 font-sans text-[12px] font-semibold uppercase tracking-widest">
            <span className="text-[#1a1a1a] mb-2 font-bold">LEGAL</span>
            <Link
              className="text-[#707070] hover:text-[#735a3a] transition-colors duration-300"
              href="#"
            >
              PRIVACY POLICY
            </Link>
            <Link
              className="text-[#707070] hover:text-[#735a3a] transition-colors duration-300"
              href="#"
            >
              TERMS OF SERVICE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;