import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import HSInput from "../../components/form/HSInput";
import HSButton from "../../components/form/HSButton";

function Settings() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="bg-white px-5 md:px-8 py-10 rounded-sm">
      {/*----------------- Tabs Container -------------- */}
      <div className="flex gap-10 items-center font-medium border-b-[1px] border-[#F4F5F7]">
        {/* ---------------- First Tab ---------------- */}
        <div
          className="cursor-pointer flex flex-col gap-2"
          onClick={() => toggleTab(1)}
        >
          <span>Edit Profile</span>
          <div
            className={
              toggleState === 1
                ? "bg-[#2E63EC] h-1 rounded-t-md"
                : "bg-white h-1 "
            }
          ></div>
        </div>
        {/* ---------------- Second Tab ---------------- */}
        <div
          className="cursor-pointer flex flex-col gap-2"
          onClick={() => toggleTab(2)}
        >
          <span className="">Security</span>
          <div
            className={
              toggleState === 2
                ? "bg-[#2E63EC] h-1 rounded-t-md"
                : "bg-white h-1"
            }
          ></div>
        </div>
      </div>
      {/* --------------- Tabs content container -------------*/}
      <div>
        {/*----------------- Edit Profile container --------------*/}
        <div
          className={
            toggleState === 1
              ? "flex gap-10 mt-8 flex-col md:flex-row"
              : "hidden"
          }
        >
          <div className="w-[100px] h-[100px] rounded-full  relative shrink-0">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user-avatar"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute w-7 h-7 rounded-full bg-[#2E63EC] bottom-2 right-[-8px] z-10 flex items-center justify-center">
              <MdEdit className="text-white size-5 cursor-pointer" />
            </div>
          </div>
          <div className="w-full">
            <form className="flex flex-col gap-6">
              <div className="flex items-center gap-6 flex-col md:flex-row">
                <HSInput
                  type="input"
                  label="Your Name"
                  placeholder="John Doe"
                />
                <HSInput type="input" label="User Name" placeholder="Admin" />
              </div>
              <div className="flex items-center gap-6 flex-col md:flex-row">
                <HSInput
                  type="input"
                  label="Email"
                  placeholder="johnDoe@gmail.com"
                />
                <HSInput type="input" label="Password" placeholder="********" />
              </div>
              <div className="flex justify-center  md:justify-end">
                <HSButton title="Save" styles="w-40" />
              </div>
            </form>
          </div>
        </div>
        {/*----------------- Security container -----------------*/}
        <div className={toggleState === 2 ? "flex mt-8" : "hidden"}>
          <div className="w-full">
            <form className="flex flex-col gap-6">
              <HSInput
                type="input"
                label="Current Password"
                placeholder="********"
                style={`md:w-[400px]`}
              />
              <HSInput
                type="input"
                label="New Password"
                placeholder="********"
                style={`md:w-[400px]`}
              />
              <div className="flex justify-center md:justify-end">
                <HSButton title="Save" styles="w-40" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
