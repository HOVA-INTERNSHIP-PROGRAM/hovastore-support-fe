import React, { useState } from "react";
import Profile from "../../assets/images/loginImage.png";

function Settings() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="bg-white p-8 h-[400px] rounded-sm">
      {/* Tab Container */}
      <div className="flex gap-10 items-center font-medium border-b-[1px] border-[#F4F5F7]">
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
      {/* Tab content container */}
      <div>
        {/* Edit Profile container */}
        <div className={toggleState === 1 ? "flex gap-10 mt-8" : "hidden"}>
          <div className="w-[100px] h-[100px] rounded-full  relative">
            <img
              src={Profile}
              alt="profile-image"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute w-6 h-6 rounded-full bg-[#2E63EC] bottom-5 right-4 z-10">
              ed
            </div>
          </div>
          <div>Form</div>
        </div>

        {/* Security container */}
        <div className={toggleState === 2 ? "flex mt-8" : "hidden"}>
          <div>security</div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
