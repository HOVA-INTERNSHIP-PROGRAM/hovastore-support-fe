import React, { useState } from "react";
import HovaLogo from "../assets/images/logo_hova.png";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../components/UI/Button";

function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:py-20 lg:px-28 py-10 px-6 bg-primary text-white">
      <nav className="flex items-center justify-between">
        <div className="cursor-pointer">
          <img src={HovaLogo} alt="Hova_ai_Logo" className="w-20" />
        </div>
        <div className="flex items-center gap-6">
          <div className="font-semibold hidden lg:block">
            <Link to="#FAQ" className="hover:opacity-80">
              FAQ
            </Link>
          </div>
          <div className="relative lg:hidden">
            {/* Hamburger menu icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <RxHamburgerMenu className="h-6 w-6" />
            </button>
            {/* Mobile menu */}
            {isOpen && (
              <div className="w-40 absolute top-8 right-0 bg-secondaryLight text-black py-2 px-4 rounded shadow-lg">
                <div className="font-semibold mb-2">
                  <Link to="#" classNasme="hover:opacity-80">
                    FAQS
                  </Link>
                </div>
                <select className="w-full text-black font-semibold bg-transparent border-0 rounded-md  outline-none">
                  <option value="EN">English</option>
                  <option value="KN">Kinyarwanda</option>
                  <option value="FR">French</option>
                </select>
              </div>
            )}
          </div>
          {/* Regular select menu for larger screens */}
          <div className="relative hidden lg:block">
            <select className="w-full py-1 px-2 text-white font-semibold bg-transparent border-0 rounded-md  outline-none">
              <option value="EN">English</option>
              <option value="KN">Kinyarwanda</option>
              <option value="FR">French</option>
            </select>
          </div>
        </div>
      </nav>
      {/* Typography  */}
      <div className="flex flex-col items-center mt-10 lg:mt-20 mb-6 lg:mb-10">
        <h1 className="font-bold text-3xl lg:text-4xl mb-2 text-center">
          Welcome to HovaStore
        </h1>
        <p className="text-lg lg:text-3xl font-light text-center text-secondaryLight">
          Knowledge hub your ultimate resource for expert help and information
        </p>
      </div>
      {/* Search Wrappr */}
      <div className="flex lg:justify-center items-center gap-3">
        {/* search inputs */}
        <div className="bg-secondaryLight flex justify-start items-center rounded lg:w-96 w-full">
          <div>
            <IoIosSearch className="text-3xl text-primary ml-3 cursor-pointer" />
          </div>
          <input
            type="text"
            className="w-full p-3 border-0 outline-none text-black bg-transparent shadow-sm placeholder:text-xl"
            placeholder="Search knowledge you want"
          />
        </div>
        {/* search button */}
        <div className="hidden md:block">
          <Button name="Search" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
