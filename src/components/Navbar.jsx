import React, { useState, useEffect } from "react";
import { logo, menu, search } from "../assets";

const Navbar = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 750);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 750);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex items-center ">
      <nav className="w-full flex items-center justify-between px-5 py-2 ">
        {/* Logo Section */}
        <div className="flex items-center  bg-gray-200 border border-gray-200 flex-shrink-0 ml-[5%] h-[12vh]  ">
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
        <div className="flex items-center space-x-6 mr-[5%]">
          {/* Menu Icon */}
          <div className="bg-gray-200 p-4 border border-gray-200 flex items-center justify-center flex-shrink-0 h-[12vh]">
            <img src={menu} alt="menu" className="h-10 w-10 cursor-pointer" />
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
