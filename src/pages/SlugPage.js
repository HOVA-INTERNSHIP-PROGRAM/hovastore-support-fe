import React from "react";
import StepImg from "../assets/images/loginImage.png";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import HSInput from "../components/UI/HSInput";
import HSButton from "../components/UI/HSButton";
// import { FaUser, FaLock } from "react-icons/fa";

function SlugPage() {
  return (
    <>
      <div className="bg-secondary p-4">
        <div>
          {/* Title of artical */}
          <h1 className="text-xl font-bold">How to setup new customer </h1>
          <p className="py-5 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididun.
          </p>
          {/* step 1 */}
          <div>
            <h2 className="text-base font-semibold mt-2">
              Step 1 : Open customer tab
            </h2>
            <p className="py-5 font-light">
              sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum."sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <img
              src={StepImg}
              className=" w-auto h-80"
              alt="steps-screenshot"
            />
          </div>
          {/* Step 2 */}
          <div>
            <h2 className="text-base font-semibold mt-2">
              Step 2 : Add customer name
            </h2>
            <p className="py-5 font-light">
              sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum."sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <img
              src={StepImg}
              className=" w-auto h-80"
              alt="steps-screenshot"
            />
          </div>
        </div>
      </div>
      {/* feedbacks */}
      <div className="p-4 m-5">
        <div className="flex items-center justify-evenly font-semibold">
          <p className="text-xl">Is this article helpful ?</p>
          <div className="flex gap-5">
            <div className="flex items-center gap-2">
              <p>Yes</p>
              <MdThumbUp className="text-primary size-5 cursor-pointer" />
            </div>
            <div className="flex items-center gap-2">
              <p>No</p>
              <MdThumbDown className="text-primary size-5 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      {/* Feedback Form */}
      <div className="px-4 py-8  border border-solid  rounded-xl  bg-white">
        <div>
          <p className="text-lg">
            Help us with your feedback to improve our article!
          </p>
        </div>
        <form className="my-4 flex flex-col gap-3">
          <div>
            <label for="Names">
              Names <span className="text-red-600">*</span>
            </label>
            <HSInput
              type="input"
              placeholder="Enter your Names"
              id="Names"
              style={`rounded`}
            />
          </div>
          <div>
            <label for="Email">
              Email <span className="text-red-600">*</span>
            </label>
            <HSInput type="input" placeholder="example@gmail.com" id="Email" />
          </div>
          <div>
            <label for="Feedback">
              Feedback <span className="text-red-600">*</span>
            </label>
            <HSInput type="textarea" placeholder="comments..." id="Feedback" />
          </div>
          <div className="flex items-center gap-6">
            <HSButton title="Send" />
            <HSButton title="Cancel" />
          </div>
        </form>
      </div>
    </>
  );
}
export default SlugPage;