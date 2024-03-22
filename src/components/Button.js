import React from "react";

function Button({ name, textColor, bgColor }) {
  return (
    <>
      <button
        className={`py-3 px-6 text-${textColor} font-semibold cursor-pointer rounded outline-none  bg-${bgColor} hover:shadow-md overflow-hidden`}
      >
        {name}
      </button>
    </>
  );
}

export default Button;
