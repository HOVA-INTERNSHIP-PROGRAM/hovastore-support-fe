import React, { useState } from "react";
import { data } from "../../dummy/data";
import Table from "../../components/Table";
import NewCategoryModal from "../../components/NewCategory";

function Categories() {
  const [isNewCategoryModalOpen, setIsNewCategoryModalOpen] = useState(false);
  const handleNewCategoryModal = () => {
    setIsNewCategoryModalOpen(true); // Corrected function call
  };
  return (
    <div className="flex flex-col bg-secondaryLight mt-4">
      <button
        className="bg-pink-400 w-48 h-14 rounded-md text-secondary"
        onClick={handleNewCategoryModal}
      >
        New category
      </button>

      <Table data={data} />
      <NewCategoryModal
        isOpen={isNewCategoryModalOpen} // Corrected prop name
        onClose={() => setIsNewCategoryModalOpen(false)} // Close function
        // onCreate={handleCreateCategory} // New prop for handling category creation
      />
    </div>
  );
}

export default Categories;
