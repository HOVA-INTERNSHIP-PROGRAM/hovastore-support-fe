import React from "react";
import image from "../assets/images/loginImage.png";
import { Link } from "react-router-dom";
import Input from "../components/UI/HsInput";
import Button from "../components/UI/HsButton";

import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  return (
    <div className="bg-secondary w-full h-dvh grid md:grid-cols-1 xl:grid-cols-2 xl:gap-20">
      <div className="hidden w-auto h-full md:justify-self-end xl:flex flex-col justify-center">
        <img src={image} alt="loginImage" />
      </div>
      <div className="w-full flex flex-col justify-center items-center xl:items-start">
        <div className="bg-white w-[90%] md:w-486 h-620 rounded-sm flex justify-center items-center py-10 shadow-md">
          <div className="w-[95%] md:w-[85%] h-full flex flex-col justify-start items-center">
            <h2 className="text-[40px] md:text-[48px] font-extrabold text-primary">Register</h2>
            <div className="mt-6 mdl:mt-[34px] w-full">
              <Input type="input" placeholder="Username" icon={<FaUser />} />
            </div>
            <div className="mt-6 mdl:mt-[34px] w-full">
              <Input
                type="input"
                placeholder="create your password "
                text="password"
                icon={<FaLock />}
              />
            </div>
            <div className="mt-6 mdl:mt-[34px] w-full">
              <Input
                type="input"
                placeholder="re-enter your password"
                text="password"
                icon={<FaLock />}
              />
            </div>
            <Button
              title={`Create`}
              styles={`w-full !scale-100 mt-6 mdl:mt-12 bg-primary text-white`}
            />
            <div className="mt-6 mdl:mt-[44px] flex flex-row justify-center w-full text-[20px] md:text-[24px]">
              <Link to="/login" className="hover:underline text-[#3558D4]">
              have account  ? Login 
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
