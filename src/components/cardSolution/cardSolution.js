import React from "react";

function CardSolution({ icon, title, description }) {
  return (
      <div role="status" className="bg-secondary shadow-md rounded-md p-5 hover:scale-105 transition ease-out duration-200 hover:shadow-xl">
        <div className="flex justify-center p-1">
        <div className="flex justify-center items-center rounded-full bg-secondaryLight w-16 h-16 text-primary font-bold">
        <div className="flex justify-center items-center w-8 h-8">
            <img src={icon || "/payment.png"} alt={title} />
        </div>
      </div>
        </div>
        <h3 className="text-primary text-lg text-center mt-4 mb-3 font-bold">{title}</h3>
        <p className="text-black text-xs text-center fon-light">{description}</p>
    </div>
  );
}

export default CardSolution;
