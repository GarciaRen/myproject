import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineCloseSquare } from "react-icons/ai";
import { FaTshirt } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleOnClick = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 max-w-[1240px] text-white">
      <h1 className="text-3xl text-green-400 font-bold w-full">ANTIPARRA</h1>
      <ul className="hidden md:flex text-md font-semibold">
        <li className="p-4 cursor-pointer hover:bg-slate-400 rounded-full">
          Home
        </li>
        <li className="p-4 cursor-pointer hover:bg-slate-400 rounded-full">
          Products
        </li>
        <li className="p-4 cursor-pointer hover:bg-slate-400 rounded-full">
          About
        </li>
        <li className="p-4 cursor-pointer hover:bg-slate-400 rounded-full">
          Contact
        </li>
      </ul>
      <div onClick={handleOnClick} className="block md:hidden">
        {nav ? <AiOutlineCloseSquare size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in duration-300"
            : "ease-out duration-300 fixed left-[-100%]"
        }
      >
        <div className="flex justify-center gap-2 mx-auto font-bold w-full m-4 pt-4 ">
          <div className="text-4xl ">
            <FaTshirt />
          </div>
          <span className="text-3xl drop-shadow-lg text-green-400 cursor-pointer">
            ANTIPARRA
          </span>
        </div>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Products</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4 border-b border-gray-600">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
