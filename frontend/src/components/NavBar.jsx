import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex items-center justify-between py-5 font-medium">
        <NavLink to="/">
          <img src={assets.logo} className="w-36" alt="this is logo" />
        </NavLink>

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink className="flex flex-col items-center gap-1" to="/">
            <p>HOME</p>
            <hr className=" w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink className="flex flex-col items-center gap-1" to="/about">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            className="flex flex-col items-center gap-1"
            to="/collection"
          >
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink className="flex flex-col items-center gap-1" to="/contact">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-6">
          <img
            src={assets.search_icon}
            alt="this is search icon"
            className="w-5"
          />
          <div className="group relative">
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt=""
            />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black ">My Profile</p>
                <p className="cursor-pointer hover:text-black ">Orders</p>
                <p className="cursor-pointer hover:text-black ">Logout</p>
              </div>
            </div>
          </div>
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">
              0
            </p>
          </Link>
          <button className="sm:hidden" onClick={toggleNavbar}>
            <img src={assets.menu_icon} className="w-5 cursor-pointer" alt="" />
          </button>
        </div>
      </div>
      {isOpen &&(
      <div
        className=" fixed sm:hidden flex inset-0 "
        onClick={toggleNavbar}
      > 

        <ul className=" vertical-nav flex flex-col items-center gap-5 left-0 h-full bg-amber-50 text-sm w-50 pt-6 shadow-lg text-gray-700 ">
        <NavLink to="/">
          <img src={assets.logo} className="w-36" alt="this is logo" />
        </NavLink>
          <NavLink className="flex flex-col items-center gap-1" to="/">
            <p>HOME</p>
            <hr className=" w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink className="flex flex-col items-center gap-1" to="/about">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            className="flex flex-col items-center gap-1"
            to="/collection"
          >
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink className="flex flex-col items-center gap-1" to="/contact">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
      </div>
      )}
    </>
  );
}

export default NavBar;
