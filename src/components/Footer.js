import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="lg:px-28 py-5 px-6 bg-primary text-white">
      <div className="flex items-center justify-between">
        <div className="font-semibold">HOVA.ai@2024 </div>
        <div className="flex items-center gap-9">
          <Link to="#">Terms</Link>
          <Link to="#">Privacy</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;