import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { motion } from "framer-motion"; // For smooth animations

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const navItems = ["HOME", "ABOUT", "SERVICES", "CONTACT"]; // Example nav items

  const handleNavClick = (item) => {
    setActiveLink(item);
    setIsMenuOpen(false); // Close the menu after clicking a nav item
  };

  return (
    <>
      {/* Top Navigation */}
      <div className="fixed top-0 left-0 w-full z-[1001] p-4 flex justify-between items-center bg-black/90">
        <img src="img/logo.svg" alt="logo" className="w-10" />

        <div className="flex items-center gap-4">
          <button className="z-[1100]" onClick={() => setIsMenuOpen(true)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Fullscreen Sidebar (mobile and desktop) */}
      <div
        className={clsx(
          "fixed top-0 right-0 z-[9999] h-full flex-col px-6 py-10 backdrop-blur-xl bg-white/10 border-l border-white/20 transition-all duration-500 ease-in-out", 
          {
            "translate-x-0": isMenuOpen, 
            "translate-x-full": !isMenuOpen, 
            "w-full sm:w-1/4": isMenuOpen, // Full width on mobile (100%) and quarter width on desktop (25%)
            "sm:w-1/4": !isMenuOpen // 25% width on desktop
          }
        )}
      >
        <div className="flex justify-end">
          <button onClick={() => setIsMenuOpen(false)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar Content with animation */}
        <div className="flex flex-col gap-6 mt-10">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              className={clsx("text-white font-zentry text-5xl cursor-pointer", {
                "text-purple-400": activeLink === item, // Highlight active link
              })}
              onClick={() => handleNavClick(item)}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 150 }}
            >
              <Link
                to={item === "HOME" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                className="transition-all duration-500 ease-in-out transform hover:scale-110 hover:text-[#5B68E4]"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Curved Transition for Sidebar opening */}
      <div
        className={clsx(
          "absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-500",
          {
            "transition-all duration-700 ease-in-out": isMenuOpen,
          }
        )}
        style={{
          clipPath: isMenuOpen
            ? "ellipse(75% 100% at 50% 100%)"
            : "ellipse(0% 0% at 50% 50%)", // Create curved transition for sidebar
          width: "100%",
          transition: "clip-path 0.7s ease-in-out",
          transitionTimingFunction: "ease-in-out",
        }}
      ></div>
    </>
  );
};

export default Navbar;
