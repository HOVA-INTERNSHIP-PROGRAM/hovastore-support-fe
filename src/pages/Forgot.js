import React from 'react'
import image from "../assets/images/loginImage.png";
import { Link } from "react-router-dom";

function Forgot() {
  return (
    <div className="bg-secondary w-full h-dvh flex justify-center items-center gap-32">
    <div className="h-[604px] w-[421px]">
      <img src={image} alt="loginImage" />
    </div>
    <div className="bg-white w-[421px] rounded-[5px] flex justify-center items-center py-10 shadow-sm">
      <div className="w-[80%] h-full flex flex-col justify-start items-center">
        <h2 className="text-[40px] font-extrabold text-primary">Forgot Password?</h2>
        <div className="bg-slate-600 w-full mt-[82px]">
          <input type="text" placeholder="enter username" className="w-full p-2 border-[2px]"/>
        </div>
        <button className="mt-[34px] bg-primary w-full h-[51px] text-secondary rounded-[5px] font-bold text-[20px]">
          submit
        </button>
        <div className="mt-[44px] flex flex-row items-center justify-center w-full text-[20px]">
          <Link to="/login">back to login</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Forgot