import React, { useState } from "react";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import { FaSort, FaFilter } from "react-icons/fa";
import FilterModal from "./FilterModal";

const Table = ({ data }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [nameFilter, setNameFilter] = useState("");

  const handleSelectAll = (event) => {
    const isChecked = event.target.checked;
    setSelectAll(isChecked);
    setSelectedItems(isChecked ? data.map((item) => item.id) : []);
  };

  const handleCheckboxClick = (item) => {
    const selectedIndex = selectedItems.indexOf(item.id);
    let updatedSelectedItems = [...selectedItems];

    if (selectedIndex === -1) {
      updatedSelectedItems.push(item.id);
    } else {
      updatedSelectedItems.splice(selectedIndex, 1);
    }

    setSelectedItems(updatedSelectedItems);
    setSelectAll(updatedSelectedItems.length === data.length);
  };

  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    data.sort((a, b) => {
      if (newSortOrder === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
  };

  const handleCloseFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  const handleOpenFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  const applyFilters = (filters) => {
    setNameFilter(filters.name);
    handleCloseFilterModal();
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div className="bg-secondaryLight">
      <div className="flex flex-row gap-3 justify-end pt-5 bg-secondaryLight mb-2">
        <div
          className="bg-white w-24 flex flex-row justify-center items-center rounded-md h-7 hover:cursor-pointer"
          onClick={handleSort}
        >
          <FaSort className="w-7 h-4" /> Sort
        </div>
        <div
          className="bg-white w-24 flex flex-row justify-center items-center rounded-md h-7 hover:cursor-pointer"
          onClick={handleOpenFilterModal}
        >
          <FaFilter className="w-7 h-4" /> Filter
        </div>
      </div>

      <div className="flex flex-col bg-white">
        <table className="min-w-full border border-black text-center text-sm font-light text-surface dark:border-white/10 dark:text-black">
          <thead className="border-b border-black font-medium dark:border-white/10 mb-4">
            <tr className="border-b border-grey h-16">
              <th
                scope="col"
                className="border-e border-black h-full dark:border-white/10 w-16"
              >
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              <th
                scope="col"
                className="border-e border-black h-full dark:border-white/10 w-16 font-semibold text-blue-600"
              >
                Icon
              </th>
              <th
                scope="col"
                className="border-e border-black h-full dark:border-white/10 font-semibold text-blue-600"
              >
                Name
              </th>
              <th scope="col" className="h-full font-semibold text-blue-600">
                Description
              </th>
              <th
                scope="col"
                className="font-semibold text-blue-600 h-16 flex justify-end items-center pr-14"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="border-b border-grey h-4">
                <td className="whitespace-nowrap border-e border-black px-6 py-4 font-medium dark:border-white/10">
                  <input
                    type="checkbox"
                    className="w-5 h-5"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleCheckboxClick(item)}
                  />
                </td>
                <td className="text-black whitespace-nowrap border-e border-black px-6 py-4 dark:border-white/10">
                  <div className="w-10 h-10 bg-pink-300 rounded-[50%] flex justify-center items-center text-white">
                    {item.icon}
                  </div>
                </td>
                <td className="text-blue-600 font-medium whitespace-nowrap border-e border-black px-6 py-4 dark:border-white/10">
                  {item.title}
                </td>
                <td className="text-black whitespace-nowrap px-6 py-4 max-w-60 overflow-hidden overflow-ellipsis">
                  {item.desc}
                </td>
                <td className="text-black whitespace-nowrap px-6 py-4 flex justify-end">
                  <button className="font-bold py-2 px-4 rounded">
                    <RiEdit2Line className="text-blue-500 size-6" />
                  </button>
                  <button className="font-bold py-2 px-4 rounded">
                    <RiDeleteBinLine className="text-red-500 size-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end items-center mt-2">
        <nav aria-label="Page navigation example">
          <ul className="flex items-center -space-x-px h-10 text-base">
            <li>
              <button
                type="button"
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-3 h-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </button>
            </li>
            {/* Other list items */}
            <li>
              <button
                type="button"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </button>
            </li>
            {/* Other list items */}
            <li>
              <button
                type="button"
                className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </button>
            </li>
            {/* Other list items */}
            <li>
              <button
                type="button"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </button>
            </li>
            {/* Other list items */}
            <li>
              <button
                type="button"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-3 h-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={handleCloseFilterModal}
        applyFilters={applyFilters}
        data={data}
      />
    </div>
  );
};

export default Table;
