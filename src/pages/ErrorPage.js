import React, { useState } from "react";
import HovaLogo from "../assets/images/logo_hova.png";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import MainFooter from "../components/footer/MainFooter";
import HSButton from "../components/form/HSButton";

function ErrorPage({ statusCode, errorMessage, errorTitle }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen flex flex-col">
      <div className="lg:px-28 py-7 px-6 bg-primary text-white">
        <nav className="flex items-center justify-between">
          <div className="cursor-pointer">
            <Link to="/">
              <img src={HovaLogo} alt="Hova_ai_Logo" className="w-20" />
            </Link>
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
      </div>
      <div className="bg-secondaryLight flex justify-center  flex-1 overflow-hidden relative px-6">
        <div className="flex flex-col items-center gap-6 z-10">
          <h1 className="font-bold text-[100px]">
            {statusCode ? statusCode : "404"}
          </h1>
          <p className="font-bold text-4xl text-primary text-center">
            {errorTitle ? errorTitle : "Oops! page not found"}
          </p>
          <p className="font-semibold text-xl text-center">
            {errorMessage
              ? errorMessage
              : "This page doesn’t exist or was removed ! we suggest you go back Home"}
          </p>
          <HSButton
            title="Back To Home"
            styles="bg-primary text-white w-48"
            path="/"
          />
        </div>
        {/* Overflow circle */}
        <div className="w-[700px] h-[700px] bg-[#DE95C8]/20 rounded-full absolute bottom-[-400px] z--10"></div>
      </div>
      <MainFooter />
    </div>
  );
}

export default ErrorPage;
