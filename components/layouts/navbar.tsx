"use client";

import { ImCart } from "react-icons/all";
import { Avatar } from "@material-tailwind/react";
import ProfileImg from "../../assets/images/avatar.jpg";
import NextImage from "../NextImage";

export default function NavBar() {
  return (
    <nav className="sticky top-2 z-10 max-w-6xl m-auto my-4 items-center rounded-xl bg-blue-600 hover:bg-blue-700 text-cyan-50 font-semibold shadow-xl p-4 h-16 min-h-full">
      <div className="mx-auto px-3 min-h-full">
        <div className="flex w-full">
          <div className="flex space-x-7 items-center justify-between w-full">
            {/* logo */}
            <div className="hover:cursor-pointer">Logo here</div>
            {/* nav list */}
            <div className="flex items-center justify-center">
              <a className="mx-3 hover:cursor-pointer">item-1</a>
              <a className="mx-3 hover:cursor-pointer">item-2</a>
              <a className="mx-3 hover:cursor-pointer">item-3</a>
            </div>

            {/* custom end */}
            <div className="flex justify-center items-center hover:cursor-pointer">
              <div className="relative">
                <ImCart />
                <span className="text-gray-600 bg-red-400 absolute top-0 right-0 h-2 w-2 rounded-lg"></span>
              </div>
              <span className="mx-2">cart</span>
              <NextImage
                src={ProfileImg}
                alt="avatar"
                className="h-8 w-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
