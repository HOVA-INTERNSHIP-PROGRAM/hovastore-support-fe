import React from "react";
import { Link } from "react-router-dom";
import { getCurrentYear } from "../utils/CurrentYear";
function Footer() {
  return (
    <div className="lg:px-28 py-5 px-6 bg-primary text-white">
      <div className="flex items-center justify-between">
        <div className="font-semibold">HOVA.ai@{getCurrentYear()} </div>
        <div className="flex items-center gap-9">
          <Link to="#">Terms</Link>
          <Link to="#">Privacy</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
