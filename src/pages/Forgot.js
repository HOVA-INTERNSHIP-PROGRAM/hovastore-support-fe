import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa"
import HSInput from "../components/UI/HSInput";
import HSButton from "../components/UI/HSButton";

function Login() {
  return (
    <div className="bg-secondary w-full h-dvh flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="bg-white w-[90%] md:w-486 h-620 rounded-sm flex justify-center items-center py-10 shadow-md">

          <div className="w-[95%] md:w-[85%] h-full flex flex-col justify-start items-center">
            <h2 className="text-[40px] md:text-[48px] font-extrabold text-primary">Forgot Password?</h2>
            <div className="mt-6 mdl:mt-[34px] w-full">
              <HSInput
                type="input"
                placeholder="Email"
                text="password"
                icon={<FaEnvelope />}
              />
            </div>
            <HSButton
              title={`Submit`}
              styles={`w-full !scale-100 mt-6 mdl:mt-12 bg-primary text-white`}
            />
            <div className="mt-[44px] flex flex-row items-center justify-center w-full text-[20px]">
              <Link to="/login" className="hover:underline">
                back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
