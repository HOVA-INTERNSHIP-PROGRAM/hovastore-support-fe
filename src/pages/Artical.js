import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SubCardSolution from "../components/SubCardSolution";
import { data } from "../dummy/data";
import { FiFile } from "react-icons/fi";
import { Link } from "react-router-dom";

function Artical() {
  return (
    <div className="lg:py-12 lg:px-28 py-10 px-6 bg-secondaryLight">
      <div className="mb-4 lg:mb-8 p-3 bg-white inline-block rounded-sm">
        <Breadcrumbs />
      </div>
      <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 gap-y-4">
        {data[0].subcategories.map((element, index) => {
          const articals = element.articals;
          return (
            <SubCardSolution
              key={index}
              subtitle={element.subTitle}
              articals={articals.map((ele) => {
                return (
                  <div className="flex items-center gap-1">
                    <FiFile />
                    <Link to={element.subTitle}>{ele.articalTitle}</Link>
                  </div>
                );
              })}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Artical;
