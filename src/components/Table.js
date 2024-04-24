import React, { useState } from "react";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import { FaSort, FaFilter } from "react-icons/fa";
import FilterModal from "./FilterModal";
import EditModal from "./EditModal";
import DeleteModal from './DeleteModal';

const Table = ({ data }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [nameFilter, setNameFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const [newSingleData, setNewSingleData] = useState(null);
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

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleOpenFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  const handleOpenEditModal = (item) => {
    const singleData = data.find((dataItem) => dataItem.id === item.id);
    setNewSingleData(singleData);
    setIsEditModalOpen(true);
  };

  const handleOpenDeleteModal = (item) => {
    const singleData = data.find((dataItem) => dataItem.id === item.id);
    setNewSingleData(singleData);
    setIsDeleteModalOpen(true);
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

      <div className="flex flex-col bg-white overflow-x-auto">
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
                  <button
                    className="font-bold py-2 px-4 rounded"
                    onClick={() => handleOpenEditModal(item)}
                  >
                    <RiEdit2Line className="text-blue-500 size-6" />
                  </button>
                  <button className="font-bold py-2 px-4 rounded" onClick={() => handleOpenDeleteModal(item)}>
                    <RiDeleteBinLine className="text-pink-400 size-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      {/* Pagination */}
      <div className="flex justify-end items-center mt-2 text-blue-600">
        <nav aria-label="Page navigation example">
          <ul className="flex items-center gap-3 -space-x-px h-10 text-base">
            <li>
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                {"< Previous"}
              </button>
            </li>
            {currentPage > 1 && (
              <li>
                <button onClick={() => paginate(currentPage - 1)}>
                  {currentPage - 1}
                </button>
              </li>
            )}
            <li>
              <button
                style={{
                  backgroundColor: currentPage ? "#3b82f6" : "transparent",
                  color: currentPage ? "#fff" : "#000",
                }}
                className="w-5 h-6 rounded-md"
              >
                {currentPage}
              </button>
            </li>
            {currentPage < Math.ceil(filteredData.length / itemsPerPage) && (
              <li>
                <button onClick={() => paginate(currentPage + 1)}>
                  {currentPage + 1}
                </button>
              </li>
            )}
            <li>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  currentPage === Math.ceil(filteredData.length / itemsPerPage)
                }
              >
                {"Next >"}
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
      <EditModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        data={newSingleData}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        data={newSingleData}
      />
    </div>
  );
};

export default Table;
