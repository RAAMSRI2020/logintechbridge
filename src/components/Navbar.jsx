import React, { useState, useEffect } from "react";
import { logo, menu, close, search } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 750);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 750);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex items-center relative">
      <nav className="w-full flex items-center justify-between px-5 py-2">
        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0 h-[12vh] bg-gray-200">
          <img src={logo} alt="logo" className="h-12 w-12" />
          <div className="ml-3 flex flex-col justify-center">
            <p className="text-blue-500 font-title font-extrabold text-[20px] sm:text-[30px] leading-none">
              LOGIN
            </p>
            <p className="font-text text-sm sm:text-base tracking-widest">TechBridge</p>
          </div>
        </div>

        {/* Spacer to push the icon section to the right */}
        <div className="flex-grow" />

        {/* Icon Section */}
        <div className="flex items-center space-x-6 mr-[5%] relative">
          {/* Menu Icon */}
          <div className="bg-gray-200 p-4 border border-gray-200 flex items-center justify-center flex-shrink-0 h-[12vh]">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle((prev) => !prev)}
            />
          </div>

          {/* Navigation Links */}
          <div
            className={`absolute top-full right-0 mt-2 bg-transparent  w-[200px] flex flex-col items-center space-y-6 transition-transform duration-300 ${
              toggle ? "block" : "hidden"
            }`}
          >
            <ul className="list-none flex flex-col items-center space-y-6">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer hover:bg-blend-darken text-[16px] text-black p-3 rounded ${
                    index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
                  }`}
                >
                  <a href={`#${nav.id}`} onClick={() => setToggle(false)}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Search Icon: Visible on tablet and desktop, hidden on mobile */}
          {!isMobileView && (
            <div className="p-2 flex items-center justify-center flex-shrink-0">
              <img src={search} alt="search" className="h-8 w-8 cursor-pointer" />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
