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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

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

  // Logic for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            {currentItems.map((item, index) => (
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
      {/* Pagination */}
      <div className="flex justify-end items-center mt-2">
        <nav aria-label="Page navigation example">
          <ul className="flex items-center -space-x-px h-10 text-base">
            <li>
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {Array.from(
              { length: Math.ceil(filteredData.length / itemsPerPage) },
              (_, i) => (
                <li key={i}>
                  <button
                    onClick={() => paginate(i + 1)}
                    className={currentPage === i + 1 ? "active" : ""}
                  >
                    {i + 1}
                  </button>
                </li>
              )
            )}
            <li>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  currentPage === Math.ceil(filteredData.length / itemsPerPage)
                }
              >
                Next
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
