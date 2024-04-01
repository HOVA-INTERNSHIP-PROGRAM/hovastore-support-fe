import React from "react";
import { useParams } from "react-router";

function SlugPage() {
  const { title } = useParams();
  return (
    <div className="lg:py-20 lg:px-28 py-10 px-6  bg-secondaryLight">
      {title}
    </div>
  );
}

export default SlugPage;
