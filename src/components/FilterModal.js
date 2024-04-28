import React, { useState } from "react";

const FilterModal = ({ isOpen, onClose, applyFilters, data }) => {
  const [selectedName, setSelectedName] = useState(""); // State for the selected name

  const handleApplyFilters = () => {
    // Pass the selected name to the parent component
    applyFilters({ name: selectedName });
    onClose(); // Close the modal
  };

  return (
    <div
      className={`${
        isOpen ? "fixed inset-0 flex justify-center items-center" : "hidden"
      } bg-black bg-opacity-50 z-50`}
    >
      <div className="bg-white w-96 rounded-lg p-8">
        <h2 className="text-lg font-bold mb-4">Filter Options</h2>
        {/* Name filter dropdown */}
        <div className="mb-4">
          <label
            htmlFor="nameFilter"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          {data && data.length > 0 && (
            <select
              id="nameFilter"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={selectedName}
              onChange={(e) => setSelectedName(e.target.value)}
            >
              <option value="">Select Name</option>
              {[...new Set(data.map((item) => item.title))].map(
                (title, index) => (
                  <option key={index} value={title}>
                    {title}
                  </option>
                )
              )}
            </select>
          )}
        </div>
        {/* Buttons for applying filters and closing the modal */}
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={handleApplyFilters}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
