import React from "react";
import NextImage from "../NextImage";
import Image1 from "../../assets/images/image1.jpg";
import Image2 from "../../assets/images/image2.jpg";
import Image3 from "../../assets/images/image3.jpg";
import { AiOutlineHeart, AiFillHeart } from "react-icons/all";
import Filter from "./filter";

function ProductsList() {
  return (
    <div className="max-w-6xl mx-auto my-4 bg-gray-300 rounded-xl shadow-xl">
      <div className="p-4">
        <Filter />
        <div className="container m-auto grid grid-cols-3 gap-4">
          <div className="card relative rounded-lg bg-white shadow-lg hover:shadow-2xl">
            <span className="absolute top-4 left-0 bg-white bg-opacity-50 text-white rounded-tr-lg rounded-br-lg">
              3 weeks ago
            </span>
            <AiOutlineHeart className="absolute top-4 right-2 text-2xl text-white" />
            <NextImage
              className="w-full rounded-lg"
              src={Image1}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          <div className="card relative rounded-lg bg-white shadow-lg hover:shadow-2xl">
            <span className="absolute top-4 left-0 bg-white bg-opacity-50 text-white rounded-tr-lg rounded-br-lg">
              3 weeks ago
            </span>
            <AiOutlineHeart className="absolute top-4 right-2 text-2xl text-white" />
            <NextImage
              className="w-full rounded-lg"
              src={Image2}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          <div className="card relative rounded-lg bg-white shadow-lg hover:shadow-2xl">
            <span className="absolute top-4 left-0 bg-white bg-opacity-50 text-white rounded-tr-lg rounded-br-lg">
              3 weeks ago
            </span>
            <AiOutlineHeart className="absolute top-4 right-2 text-2xl text-white" />
            <NextImage
              className="w-full rounded-lg"
              src={Image3}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
