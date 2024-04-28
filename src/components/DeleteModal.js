import React from "react";

const DeleteModal = ({ isOpen, onClose, data, dbdata }) => {
    const handleDelete = () => {
        // Assuming 'singledata' contains the ID of the item to delete
        const idToDelete = data.id;
    
        // Filter out the item with the specified ID from 'dbdata'
        const updatedDbData = dbdata.filter(item => item.id !== idToDelete);
        console.log(updatedDbData);
        onClose();
      };

  return (
    <div
      className={`${
        isOpen ? "fixed inset-0 flex justify-center items-center" : "hidden"
      } bg-black bg-opacity-50 z-50`}
    >
      <div className="bg-white w-96 rounded-lg p-8">
        <h2 className="text-lg font-bold mb-4">Delete Options</h2>
        <p>Are you sure to delete this category?</p>
        {/* Buttons for applying filters and closing the modal */}
        <div className="flex justify-end mt-5 gap-5">
          <button
            className="bg-blue-500 text-black px-4 py-2 rounded-md"
            onClick={handleDelete}
          >
            Yes
          </button>
          <button
            className="bg-pink-400 text-white px-4 py-2 rounded-md mr-2"
            onClick={onClose}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;