import React from "react";
import { Outlet } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div>
      <HeroSection />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
