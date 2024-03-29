import React from "react";

function Button({ name }) {
  return (
    <button
      className={`py-3 px-6 text-primary font-semibold cursor-pointer rounded outline-none  bg-secondaryLight hover:shadow-md overflow-hidden`}
    >
      {name}
    </button>
  );
}
export default Button;
