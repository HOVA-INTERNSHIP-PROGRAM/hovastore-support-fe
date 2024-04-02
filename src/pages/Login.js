import React from "react";
import image from "../assets/images/loginImage.png";

function Login() {
  return (
    <div className="bg-secondary w-full h-dvh flex justify-center items-center gap-32">
      <div className="h-[604px] w-[421px]">
        <img src={image} alt="loginImage" />
      </div>
      <div className="bg-secondaryLight h-[604px] w-[421px] rounded-[5px] flex justify-center items-center">
        <div className="w-[80%] bg-secondaryLight h-full flex flex-col justify-start items-center">
          <h2 className="mt-[46px] text-[40px] font-extrabold text-primary">Login</h2>
          <div className="mt-[82px]">
            <input type="text" placeholder="enter username" />
          </div>
          <div className="mt-[34px]">
            <input type="text" placeholder="enter username" />
          </div>
          <button className="mt-[34px] bg-primary w-full h-[51px] text-secondary rounded-[5px] font-bold text-[20px]">Login</button>
          <div className="mt-[44px] flex flex-row justify-between w-full text-[20px]">
            <p>create account </p>
            <p>Forgot password ? </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
