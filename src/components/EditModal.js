import React, { useState } from "react";

const FilterModal = ({ isOpen, onClose, data }) => {
  const [iconFile, setIconFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleIconChange = (e) => {
    const file = e.target.files[0];
    setIconFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("icon", iconFile);
    formData.append("name", name);
    formData.append("description", description);

    // Example code for handling form submission with FormData
    fetch("your-submit-url", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submitted:", data);
        onClose(); // Close the modal after successful submission
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div
      className={`${
        isOpen ? "fixed inset-0 flex justify-center items-center" : "hidden"
      } bg-black bg-opacity-50 z-50`}
    >
      <div className="bg-white w-96 rounded-lg p-8">
        <h2 className="text-lg font-bold mb-4">Edit Category</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="icon"
              className="block text-sm font-medium text-gray-700"
            >
              Icon:
            </label>
            <input
              type="file"
              id="icon"
              accept="image/*"
              onChange={handleIconChange}
              className="border rounded-md px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-md px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded-md px-3 py-2 w-full h-20"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterModal;
