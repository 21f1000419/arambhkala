"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const navItems = [
  "Home",
  "Short Term Courses",
  "Art Promotion",
  "Co-Working Space",
  "Workshops",
  "Events",
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setIsNavbarVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-30 w-full border-b border-cyan-300/20 bg-[#060b16]/90 px-4 py-3 font-serif shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition-transform duration-300 ease-in-out lg:px-6 ${
          isNavbarVisible || isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          {/* Logo Placeholder */}
          <div className="flex items-center">
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/Untitled%20design.png"
              alt="logo"
              width={80}
              height={80}
              className="h-auto w-14 sm:w-16 lg:w-20"
            />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="rounded-md p-2 text-cyan-100 transition-colors hover:bg-cyan-400/15 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-sidebar"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <div className="hidden items-center justify-center gap-2 text-base lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="rounded-md px-3 py-2 font-bold text-slate-100 transition-colors hover:bg-cyan-400/15 hover:text-cyan-200 xl:px-4 xl:py-3"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contact Us Button */}
          <div className="hidden lg:block ">
            <a
              href="#"
              className="rounded bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-3 font-bold text-white transition-opacity hover:opacity-90"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 z-40 bg-[#020309]/70 transition-opacity duration-300 lg:hidden ${
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        <aside
          id="mobile-sidebar"
          className={`fixed right-0 top-0 z-50 h-screen w-80 max-w-[85vw] border-l border-cyan-300/25 bg-[#0a1222] p-5 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-bold text-cyan-200">Menu</h2>
            <button
              onClick={closeMenu}
              className="rounded-md p-2 text-cyan-100 transition-colors hover:bg-cyan-400/15"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-2 text-lg">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={closeMenu}
                className="rounded-md border border-white/10 bg-white/5 px-4 py-3 font-bold text-slate-100"
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              onClick={closeMenu}
              className="mt-2 rounded bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-3 text-center font-bold text-white transition-opacity hover:opacity-90"
            >
              Contact Us
            </a>
          </div>
        </aside>
      </nav>
      <div className="h-[76px] sm:h-[84px] lg:h-[92px]" aria-hidden="true" />
    </>
  );
};

export default Navbar;
