import React from 'react'

function Table() {
  return (
    <div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 bg-white">
        <thead class="text-xs text-lightBlue border-b">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-2">
                Article
                </th>
                <th scope="col" class="px-6 py-2">
                Category
                </th>
                <th scope="col" class="px-6 py-2">
                views
                </th>
                <th scope="col" class="px-6 py-2">
                Likes
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b hover:bg-gray-50 text-black">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                How to add new store 
                </th>
                <td class="px-6 py-2">
                   Home
                </td>
                <td class="px-6 py-2">
                700
                </td>
                <td class="px-6 py-2">
                400
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50 text-black">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                How to add new store 
                </th>
                <td class="px-6 py-2">
                   Home
                </td>
                <td class="px-6 py-2">
                700
                </td>
                <td class="px-6 py-2">
                400
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50 text-black">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                How to add new store 
                </th>
                <td class="px-6 py-2">
                   Home
                </td>
                <td class="px-6 py-2">
                700
                </td>
                <td class="px-6 py-2">
                400
                </td>
            </tr>
        </tbody>
    </table>
</div>
<nav class="flex justify-end items-end flex-column flex-wrap md:flex-row pt-4 text-lightBlue" aria-label="Table navigation">
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight   hover:bg-lightBlue hover:rounded-l-lg hover:text-white">Previous</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight   hover:text-white dark:border-gray-700  hover:bg-lightBlue hover:rounded-md dark:hover:text-white">1</a>
            </li>
            <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight   hover:text-white dark:border-gray-700  hover:bg-lightBlue hover:rounded-md dark:hover:text-white">2</a>
            </li>
            <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight   hover:text-white dark:border-gray-700  hover:bg-lightBlue hover:rounded-md dark:hover:text-white">3</a>
            </li>
            <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight   hover:text-white dark:border-gray-700  hover:bg-lightBlue hover:rounded-md dark:hover:text-white">4</a>
            </li>
            <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight   hover:text-white dark:border-gray-700  hover:bg-lightBlue hover:rounded-md dark:hover:text-white">5</a>
            </li>
            <li>
        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight   hover:bg-lightBlue hover:rounded-r-lg hover:text-white">Next</a>
            </li>
        </ul>
    </nav>
    </div>
  )
}

export default Table
