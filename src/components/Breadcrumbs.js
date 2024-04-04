import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function Breadcrumbs() {
  const location = useLocation();
  console.log(location);
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      const path = `/${array.slice(0, index + 1).join("/")}`;
      const displayName = crumb.replace(/-/g, " ");

      return (
        <div key={crumb}>
          {index < array.length - 1 ? (
            <Link to={path}>{displayName}</Link>
          ) : (
            <span>{displayName}</span>
          )}
          {index < array.length - 1 && (
            <BsArrowRight className="inline-block ml-1" />
          )}
        </div>
      );
    });

  return <div className="flex gap-2 w-full rounded font-[600]">{crumbs}</div>;
}

export default Breadcrumbs;
