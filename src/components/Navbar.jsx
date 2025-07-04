import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  const navigations = [
    { name: "Home", to: "/" },
    { name: "Portfolio", to: "#portfolio" },
    { name: "Our Team", to: "/team" }, // fixed missing slash
    { name: "Contact Us", to: "#contact" },
  ];

  return (
    <nav className="fixed top-[5%] left-1/2 -translate-x-1/2 border border-[#2d2d2d] rounded-2xl py-4 flex shadow-[0_0_20px_10px_rgba(28,28,28,0.25)] backdrop-blur-sm z-50 max-sm:w-[98%]">
      <Logo className="px-6 border-r border-[#2d2d2d] max-sm:px-2 max-sm:pr-0 max-sm:pl-2" />
      <ul className="flex justify-center items-center space-x-16 mx-12 max-sm:mx-2 max-sm:space-x-4">
        {navigations.map(({ name, to }) => (
          <Link
            className={`text-xs max-sm:text-[10px] text-[#dbdbdb] hover:text-[#5B68E4] transition-colors ${
              name === "Home" ? "text-primary" : ""
            }`}
            to={to}
            key={name}
          >
            {name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
