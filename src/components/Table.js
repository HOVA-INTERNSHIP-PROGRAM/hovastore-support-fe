import React, { useState } from "react";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";

const Table = ({ data }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

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

  return (
    <div className="flex flex-col bg-white mt-4">
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
          {data.map((item, index) => (
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
  );
};

export default Table;
