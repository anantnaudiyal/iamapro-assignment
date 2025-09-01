import React from 'react';
import { useState, useRef, useEffect } from "react";
import logo from '../Images/logo.png';
import search from "../Images/search.png";
import { LuGalleryVertical } from "react-icons/lu";
import { PiBagDuotone } from "react-icons/pi";
import { IoStarOutline } from "react-icons/io5";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";




export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <nav className="navbar pt-3  bg-blue/30 rounded-lg">
      <div className="navbar__logo flex max-[850px]:justify-center justify-between items-center text-center mx-6	my-4">
        <button className='bg-black text-white rounded-3xl px-5 py-2 gap-1 text-center flex max-[850px]:hidden '><span className='flex items-center'><LuGalleryVertical />

        </span>Menu</button>
        <div>
          <div className='flex justify-between items-center gap-8 text-center text-gray-200'>
            <h5 className='flex justify-between items-center gap-3 text-center'>
              {['2', '0', '2', '2'].map((year, index) => (
                <span key={index}>{year}</span>
              ))}
            </h5>
            <img src={logo} alt="Royal Logo" className='logo-img' />
            <div className='flex justify-between items-center gap-2'>
              <IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline />
            </div>
          </div>
        </div>
        <button className='bg-black flex max-[850px]:hidden text-white rounded-3xl px-5 py-2 gap-1 text-center '>Booking<span className='flex items-center'><PiBagDuotone /></span></button>
      </div>
      <hr className='text-gray-400' />
      <ul className=" max-[850px]:hidden flex items-center justify-center gap-8">
        {["rooms", "wellness", "gastro", "hotel", "events", "contact"].map((slug) => (
          <li key={slug} className="group p-4">
            <a href={`#${slug}`} className=" text-gray-300  group-hover:text-white  relative inline-block pb-1">
              {slug.toUpperCase()}
              <span
                className="absolute left-0 bottom-[-17px] h-[1px] w-0  bg-white  transition-[width]  duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
      <div className='min-[850px]:hidden flex justify-between items-center'>
        <button className=' text-white px-3 py-4 gap-1 text-center flex'><span className='flex items-center'><LuGalleryVertical />
        </span>Menu</button>

        <div className='text-white px-3 py-4 gap-3 text-center flex'>

          <button
            className="p-2 text-gray-300 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          ><FaSearch size={20} /></button>
          <nav className="relative">
            {/* Toggle Button */}
            <button
              onClick={() => setMenuOpen(prev => !prev)}
              className="p-2 text-gray-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>

            {/* Menu */}
            <ul
              ref={menuRef}
              className={[
                "absolute w-screen  right-[-12px] mt-4 flex flex-col items-center gap-4  bg-blue-800  p-4 rounded transition-opacity duration-200",
                menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              ].join(" ")}
            >
              {["rooms", "wellness", "gastro", "hotel", "events", "contact"].map(slug => (
                <li key={slug} className="group">
                  <a
                    href={`#${slug}`}
                    className="text-gray-300 group-hover:text-white relative inline-block pb-1"
                  >
                    {slug.toUpperCase()}
                    <span className="absolute left-0 bottom-[-4px] h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <hr className='text-gray-400' />
    </nav>
  );
}
