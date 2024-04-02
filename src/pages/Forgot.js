import React from "react";
import image from "../assets/images/loginImage.png";
import { Link } from "react-router-dom";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";

function Forgot() {
  return (
    <div className="bg-secondary w-full h-dvh flex justify-center items-center gap-32">
      <div className="h-[604px] w-[421px]">
        <img src={image} alt="loginImage" />
      </div>
      <form action="">
        <div className="bg-white w-[421px] rounded-[5px] flex justify-center items-center py-10 shadow-sm">
          <div className="w-[80%] h-full flex flex-col justify-start items-center">
            <h2 className="text-[40px] font-extrabold text-primary">
              Forgot Password?
            </h2>
            <div className="mt-[34px] w-full">
              <Input type="input" placeholder="Email" />
            </div>
            <Button
              title={`Submit`}
              styles={`w-full !scale-100 mt-12 bg-primary text-white`}
            />
            <div className="mt-[44px] flex flex-row items-center justify-center w-full text-[20px]">
              <Link to="/login" className="hover:underline">back to login</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Forgot;
