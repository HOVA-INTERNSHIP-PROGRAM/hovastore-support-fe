import React, { useState } from "react";
import { data } from "../../dummy/data";
import Table from "../../components/Table";

function Categories() {

  return (
    <div className="flex flex-col bg-white mt-4">
      <Table data={data} />
    </div>
  );
}

export default Categories;
