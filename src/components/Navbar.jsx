import React, { useState } from "react";
import { logo, menu, close, search } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full flex items-center justify-between px-4 py-3 relative ">
      {/* Logo Section */}
      <div className="flex items-center bg-gray-200 h-[5.5rem] sm:ml-12 ml-4">
        <img
          src={logo}
          alt="logo"
          className="h-[50px] w-[160px] sm:h-[60px] sm:w-[210px] md:h-[73px] md:w-[280px] transition-all"
        />
      </div>

      {/* Spacer for Centering the Right Section */}
      <div className="flex-grow"></div>

      {/* Right Section (Menu + Search) */}
      <div className="flex items-center space-x-4 md:space-x-6">
        {/* Menu Icon */}
        <div className="cursor-pointer bg-gray-200 sm:p-[1.45rem] p-5 h-[5.5rem]" onClick={() => setToggle(!toggle)}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[24px] w-[24px] sm:h-[28px] sm:w-[28px] md:h-[32px] md:w-[32px] transition-all "
          />
        </div>

        {/* Search Icon */}
        <div className="cursor-pointer">
          <img
            src={search}
            alt="search"
            className="h-[24px] w-[24px] sm:h-[28px] sm:w-[28px] md:h-[32px] md:w-[32px] transition-all "
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {toggle && (
        <div className="absolute top-[100%] right-0 mt-2  shadow-lg w-full sm:w-[200px] rounded-sm z-50  bg-gray-200">
          <ul className="flex flex-col items-center space-y-4 py-4 hover:bg-slate-200">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="font-poppins font-normal text-[16px] text-black hover:bg-slate-100 p-2"
              >
                <a href={`#${nav.id}`} onClick={() => setToggle(false)}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
