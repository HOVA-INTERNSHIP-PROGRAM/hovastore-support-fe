import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import { MdHome } from "react-icons/md";

function Breadcrumbs() {
  const location = useLocation();
  console.log(location);
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      const path = `/${array.slice(0, index + 1).join("/")}`;
      const displayName = crumb.replace(/%20/g, " ");

      return (
        <div key={crumb}>
          {index < array.length - 1 ? (
            <Link to={path}>{displayName}</Link>
          ) : (
            <span>{displayName}</span>
          )}
          {index < array.length - 1 && (
            <MdChevronRight className="inline-block mx-1" />
          )}
        </div>
      );
    });

  return (
    <div className="flex gap-2 items-center w-full rounded font-medium">
      <Link to="/">
        <MdHome className="size-5" />
      </Link>
      <MdChevronRight className="size-5" />
      {crumbs}
    </div>
  );
}

export default Breadcrumbs;