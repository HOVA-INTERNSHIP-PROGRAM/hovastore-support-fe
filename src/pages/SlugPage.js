import React from "react";
import { useParams } from "react-router";
import Breadcrumbs from "../components/Breadcrumbs";

function SlugPage() {
  const { title } = useParams();
  return (
    <div className="lg:py-20 lg:px-28 py-10 px-6  bg-secondaryLight">
      <Breadcrumbs />
    </div>
  );
}

export default SlugPage;
