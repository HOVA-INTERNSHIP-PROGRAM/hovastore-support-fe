import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import CategoriesMenu from "../components/CategoriesMenu";
import RelatedTopics from "../components/RelatedTopics";

function SlugLayout() {
  return (
    <div className="lg:py-12 lg:px-28 py-10 px-6  bg-secondaryLight">
      <div className="mb-4 lg:mb-8 p-3 bg-white md:inline-block rounded-sm">
        <Breadcrumbs />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5  gap-2 lg:gap-4">
        <div className="lg:col-span-1">
          <CategoriesMenu />
        </div>
        <div className="lg:col-span-3 lg:row-span-3  rounded-sm">
          <Outlet />
        </div>
        <div className="lg:col-span-1">
          <RelatedTopics />
        </div>
      </div>
    </div>
  );
}

export default SlugLayout;
