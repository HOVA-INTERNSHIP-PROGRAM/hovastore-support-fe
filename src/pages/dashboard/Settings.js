import React, { useState } from "react";

function Settings() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="bg-white p-8 h-[400px] rounded-sm">
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
    </div>
  );
}

export default Settings;
