import React from "react";
import { Outlet } from "react-router-dom";

function SlugLayout() {
  return (
    <div className="lg:py-12 lg:px-28 py-10 px-6  bg-secondaryLight rounded-sm">
      <div className="mb-8 p-2 bg-white inline-block rounded-sm">
        Breadcrumbs goes Here...
      </div>
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-1 h-20 bg-white p-4">Categories Menu</div>
        <div className="col-span-3 h-20 bg-white rounded-sm">
          <Outlet />
        </div>
        <div className="col-span-1 h-20 bg-white p-4 rounded-sm">
          related topics
        </div>
      </div>
    </div>
  );
}

export default SlugLayout;
