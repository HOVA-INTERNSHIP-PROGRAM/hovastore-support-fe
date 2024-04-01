import React from "react";
import { Outlet } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
const HomeLayout = () => {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <CTA />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
