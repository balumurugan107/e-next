"use client";

import React from "react";
import { FiFilter } from "react-icons/all";
import { Select, Option } from "@material-tailwind/react";

function Filter() {
  return (
    <div className="mx-auto">
      <div className="my-2">
        <input
          type="email"
          id="email"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Products..."
          required
        />
      </div>
      <div className="flex justify-between">
        <button className="flex items-center text-white bg-blue-600  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2">
          <FiFilter className="mx-1" /> Filter
        </button>
        <div className="w-18">
        <Select className="border-blue-600">
          <Option>Revelence</Option>
          <Option>Freshness</Option>
          <Option>low to high</Option>
        </Select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
