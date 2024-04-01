import React from "react";

function SubCardSolution({ subtitle, articals }) {
  return (
    <div className="bg-white max-w-[410px] p-6 rounded-md">
      <h1 className="text-xl font-bold mb-4">{subtitle}</h1>
      <div className="bg-secondaryLight w-full h-[2px]"></div>
      <div className="mt-5">
        <div className="flex flex-col gap-4 text-blue-500">{articals}</div>
      </div>
    </div>
  );
}

export default SubCardSolution;
