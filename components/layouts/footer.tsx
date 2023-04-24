import React from "react";

function Footer() {
  return (
    <div className="max-w-6xl m-auto rounded-t-lg bg-gray-300 text-gray-800">
      <div className="px-10 py-10 flex justify-between items-center">
      <span className="font-semibold my-15">Logo here</span>
        <div>
          <ul className="flex justify-evenly space-x-10">
            <li>Overview</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Careers</li>
            <li>Help</li>
          </ul>
        </div>
        <div>
          Subscribe to newsletter
          <div className="my-4">
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="abc@gmail.com"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
