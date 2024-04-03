import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

function SlugLayout() {
  return (
    <div className="lg:py-12 lg:px-28 py-10 px-6 bg-secondaryLight">
      <div className="mb-4 lg:mb-8 p-3 bg-white inline-block rounded-sm">
        <Breadcrumbs />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5  gap-3 lg:gap-6">
        <div className="lg:col-span-1 bg-white p-4">Categories Menu</div>
        <div className="lg:col-span-3 rounded-sm">
          <Outlet />
        </div>
        <div className="lg:col-span-1 bg-white p-4 rounded-sm">
          Related Topics
        </div>
      </div>
    </div>
  );
}

export default SlugLayout;
