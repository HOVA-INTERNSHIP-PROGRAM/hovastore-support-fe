import React from "react";

function Skeleton() {
  return (
    <div role="status" className="bg-gray-200 shadow-md rounded-md p-5">
      <div className="flex justify-center p-1">
        <div className="flex justify-center items-center rounded-full bg-gray-300 w-16 h-16 animate-pulse"></div>
      </div>
      <h3 className="text-gray-400 text-lg text-center mt-4 mb-3 font-bold bg-gray-300 w-5/5 h-2 animate-pulse"></h3>
      <p className="text-gray-400 text-xs text-center animate-pulse  bg-gray-300 w-5/5 h-2 m-2"></p>
      <p className="text-gray-400 text-xs text-center animate-pulse  bg-gray-300 w-5/5 h-2 m-2"></p>
      <p className="text-gray-400 text-xs text-center animate-pulse  bg-gray-300 w-5/5 h-2 m-2"></p>
    </div>
  );
}

export default Skeleton;
