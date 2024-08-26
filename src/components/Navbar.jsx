import { useState } from "react";
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center bg-gray-100 border-4 border-b-gray-300 navbar">
      {/* Logo and Brand Name */}
      <div className="flex items-center ml-4">
        <img
          src={logo}
          alt="hoobank"
          className="w-[40px] h-[40px] transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg drop-shadow contrast-200"
        />
        <span className="ml-2 text-lg font-extrabold  text-bold bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text font-text">
          LOGIN Techbridge
        </span>
      </div>
      
      {/* Desktop Menu */}
      <ul className="hidden lg:flex flex-1 justify-end items-center">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-black-pure mr-10 bg-gray-100 px-6 py-2 rounded-md hover:bg-gray-200 transition duration-200
              ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      
      {/* Mobile Menu Toggle */}
      <div className="flex items-center lg:hidden mr-4">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(prev => !prev)}
        />
      </div>
      
      {/* Mobile Menu */}
      <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gray-100 shadow-md absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-black mb-4 bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-200
                ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
