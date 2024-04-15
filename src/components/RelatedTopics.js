import React from "react";
import { data } from "../dummy/data";
import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

function RelatedTopics() {
  return (
    <div className=" bg-secondary p-4 rounded-sm">
      <h2 className="text-black  font-semibold text-center">RelatedTopics</h2>
      <div className="mt-2 flex flex-col gap-2">
        {data[0].subcategories[1].articals.map((elemnt, index) => {
          return (
            <Link
              to="#"
              key={index}
              className="text-xl lg:text-sm flex gap-2 items-center lg:items-start"
            >
              <MdArrowForward className=" text-primary size-5" />
              {elemnt.articalTitle}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default RelatedTopics;
