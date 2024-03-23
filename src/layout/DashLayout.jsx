import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
const DashLayout = () => {
  return (
    <div className=" relative ">
      <Nav />
      <div className=" py-3 flex h-auto">
        <div className=" bg-white px-4 py-2  lg:w-40  mt-8 h-full fixed  -z-10  hidden lg:block ">
          <p>Side bar</p>
        </div>
        <div className="w-screen min-h-screen lg:ml-[202px] mt-[60px] p-4 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
