import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

function ErrorPage() {
  return (
    <>
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
      </div>
      <div>ErrorPage</div>
      <Footer />
    </>
  );
}

export default ErrorPage;
