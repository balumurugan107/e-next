"use client";

import { getAllProducts } from "@/app/GlobalRedux/Slices/home";
import React, { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";
import Image1 from "../../assets/images/influencer1.jpg";
import Image2 from "../../assets/images/influencer2.jpg";
import Image3 from "../../assets/images/influencer3.jpg";
import Image4 from "../../assets/images/influencer4.jpg";
import NextImage from "../NextImage";
import Filter from "./filter";

function ProductsList() {
  const products = useSelector((state) => state.product.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-4 bg-gray-300 rounded-xl shadow-xl">
      <div className="p-4">
        <div className="my-10">
          <div className="flex items-center justify-between my-4">
            <div>
              <div className="font-semibold text-2xl">Featured</div>
              <div className="text-gray">Hire top influencers across all platforms</div>
            </div>
            <div>See all</div>
          </div>

          <div className="m-auto grid grid-cols-4 gap-4">
            <div className="card relative rounded-lg bg-white shadow-lg hover:shadow-2xl">
              <span className="absolute top-4 left-0 bg-white bg-opacity-50 text-white rounded-tr-lg rounded-br-lg z-10">
                3 weeks ago
              </span>
              <AiOutlineHeart className="absolute top-4 right-2 text-2xl text-white z-10" />
              <NextImage
                className="w-full rounded-lg aspect-[9/12] object-cover transition duration-300 ease-in-out hover:scale-105"
                src={Image1}
                alt="Sunset in the mountains"
              />
              <div className="absolute bottom-4 left-2 text-white flex flex-col">
                <span className="text-md font-bold">Influencer 1</span>
                <span className="text-xs text-white">Palo Alto,USA</span>
              </div>
            </div>

            <div className="card relative rounded-lg bg-white shadow-lg hover:shadow-2xl">
              <span className="absolute top-4 left-0 bg-white bg-opacity-50 text-white rounded-tr-lg rounded-br-lg z-10">
                3 weeks ago
              </span>
              <AiOutlineHeart className="absolute top-4 right-2 text-2xl text-white z-10" />
              <NextImage
                className="w-full rounded-lg aspect-[9/12] object-cover transition duration-300 ease-in-out hover:scale-105"
                src={Image2}
                alt="Sunset in the mountains"
              />
              <div className="absolute bottom-4 left-2 text-white flex flex-col">
                <span className="text-md font-bold">Influencer 2</span>
                <span className="text-xs text-white">Palo Alto,USA</span>
              </div>
            </div>

            <div className="card relative rounded-lg bg-white shadow-lg hover:shadow-2xl">
              <span className="absolute top-4 left-0 bg-white bg-opacity-50 text-white rounded-tr-lg rounded-br-lg z-10">
                3 weeks ago
              </span>
              <AiOutlineHeart className="absolute top-4 right-2 text-2xl text-white z-10" />
              <NextImage
                className="w-full rounded-lg aspect-[9/12] object-cover transition duration-300 ease-in-out hover:scale-105"
                src={Image3}
                alt="Sunset in the mountains"
              />
              <div className="absolute bottom-4 left-2 text-white flex flex-col">
                <span className="text-md font-bold">Influencer 3</span>
                <span className="text-xs text-white">Palo Alto,USA</span>
              </div>
            </div>

            <div className="card relative rounded-lg bg-white shadow-lg hover:shadow-2xl">
              <span className="absolute top-4 left-0 bg-white bg-opacity-50 text-white rounded-tr-lg rounded-br-lg z-10">
                3 weeks ago
              </span>
              <AiOutlineHeart className="absolute top-4 right-2 text-2xl text-white z-10" />
              <NextImage
                className="w-full rounded-lg aspect-[9/12] object-cover transition duration-300 ease-in-out hover:scale-105"
                src={Image4}
                alt="Sunset in the mountains"
              />
              <div className="absolute bottom-4 left-2 text-white flex flex-col">
                <span className="text-md font-bold">Influencer 4</span>
                <span className="text-xs text-white">Palo Alto,USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10">
          <div className="flex items-center justify-between my-4">
            <div>
              <div className="font-semibold text-2xl">Instagram</div>
              <div className="text-gray">Hire instagram influencers</div>
            </div>
            <div>See all</div>
          </div>

          <div className="m-auto grid grid-cols-4 gap-4">
            <div className="card relative rounded-lg bg-white shadow-lg hover:shadow-2xl">
              <span className="absolute top-4 left-0 bg-white bg-opacity-50 text-white rounded-tr-lg rounded-br-lg z-10">
                3 weeks ago
              </span>
              <AiOutlineHeart className="absolute top-4 right-2 text-2xl text-white z-10" />
              <NextImage
                className="w-full rounded-lg aspect-[9/12] object-cover transition duration-300 ease-in-out hover:scale-105"
                src={Image1}
                alt="Sunset in the mountains"
              />
              <div className="absolute bottom-4 left-2 text-white flex flex-col">
                <span className="text-md font-bold">Influencer 1</span>
                <span className="text-xs text-white">Palo Alto,USA</span>
              </div>
            </div>

            <div className="card relative rounded-lg bg-white shadow-lg hover:shadow-2xl">
              <span className="absolute top-4 left-0 bg-white bg-opacity-50 text-white rounded-tr-lg rounded-br-lg z-10">
                3 weeks ago
              </span>
              <AiOutlineHeart className="absolute top-4 right-2 text-2xl text-white z-10" />
              <NextImage
                className="w-full rounded-lg aspect-[9/12] object-cover transition duration-300 ease-in-out hover:scale-105"
                src={Image2}
                alt="Sunset in the mountains"
              />
              <div className="absolute bottom-4 left-2 text-white flex flex-col">
                <span className="text-md font-bold">Influencer 2</span>
                <span className="text-xs text-white">Palo Alto,USA</span>
              </div>
            </div>

            <div className="card relative rounded-lg bg-white shadow-lg hover:shadow-2xl">
              <span className="absolute top-4 left-0 bg-white bg-opacity-50 text-white rounded-tr-lg rounded-br-lg z-10">
                3 weeks ago
              </span>
              <AiOutlineHeart className="absolute top-4 right-2 text-2xl text-white z-10" />
              <NextImage
                className="w-full rounded-lg aspect-[9/12] object-cover transition duration-300 ease-in-out hover:scale-105"
                src={Image3}
                alt="Sunset in the mountains"
              />
              <div className="absolute bottom-4 left-2 text-white flex flex-col">
                <span className="text-md font-bold">Influencer 3</span>
                <span className="text-xs text-white">Palo Alto,USA</span>
              </div>
            </div>

            <div className="card relative rounded-lg bg-white shadow-lg hover:shadow-2xl">
              <span className="absolute top-4 left-0 bg-white bg-opacity-50 text-white rounded-tr-lg rounded-br-lg z-10">
                3 weeks ago
              </span>
              <AiOutlineHeart className="absolute top-4 right-2 text-2xl text-white z-10" />
              <NextImage
                className="w-full rounded-lg aspect-[9/12] object-cover transition duration-300 ease-in-out hover:scale-105"
                src={Image4}
                alt="Sunset in the mountains"
              />
              <div className="absolute bottom-4 left-2 text-white flex flex-col">
                <span className="text-md font-bold">Influencer 4</span>
                <span className="text-xs text-white">Palo Alto,USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10">
          <div className="flex items-center justify-between my-4">
            <div>
              <div className="font-semibold text-2xl">Youtube</div>
              <div className="text-gray">Hire top Youtubers</div>
            </div>
            <div>See all</div>
          </div>

          <div className="m-auto grid grid-cols-4 gap-4">
            <div className="card relative rounded-lg bg-white shadow-lg hover:shadow-2xl">
              <span className="absolute top-4 left-0 bg-white bg-opacity-50 text-white rounded-tr-lg rounded-br-lg z-10">
                3 weeks ago
              </span>
              <AiOutlineHeart className="absolute top-4 right-2 text-2xl text-white z-10" />
              <NextImage
                className="w-full rounded-lg aspect-[9/12] object-cover transition duration-300 ease-in-out hover:scale-105"
                src={Image1}
                alt="Sunset in the mountains"
              />
              <div className="absolute bottom-4 left-2 text-white flex flex-col">
                <span className="text-md font-bold">Influencer 1</span>
                <span className="text-xs text-white">Palo Alto,USA</span>
              </div>
            </div>

            <div className="card relative rounded-lg bg-white shadow-lg hover:shadow-2xl">
              <span className="absolute top-4 left-0 bg-white bg-opacity-50 text-white rounded-tr-lg rounded-br-lg z-10">
                3 weeks ago
              </span>
              <AiOutlineHeart className="absolute top-4 right-2 text-2xl text-white z-10" />
              <NextImage
                className="w-full rounded-lg aspect-[9/12] object-cover transition duration-300 ease-in-out hover:scale-105"
                src={Image2}
                alt="Sunset in the mountains"
              />
              <div className="absolute bottom-4 left-2 text-white flex flex-col">
                <span className="text-md font-bold">Influencer 2</span>
                <span className="text-xs text-white">Palo Alto,USA</span>
              </div>
            </div>

            <div className="card relative rounded-lg bg-white shadow-lg hover:shadow-2xl">
              <span className="absolute top-4 left-0 bg-white bg-opacity-50 text-white rounded-tr-lg rounded-br-lg z-10">
                3 weeks ago
              </span>
              <AiOutlineHeart className="absolute top-4 right-2 text-2xl text-white z-10" />
              <NextImage
                className="w-full rounded-lg aspect-[9/12] object-cover transition duration-300 ease-in-out hover:scale-105"
                src={Image3}
                alt="Sunset in the mountains"
              />
              <div className="absolute bottom-4 left-2 text-white flex flex-col">
                <span className="text-md font-bold">Influencer 3</span>
                <span className="text-xs text-white">Palo Alto,USA</span>
              </div>
            </div>

            <div className="card relative rounded-lg bg-white shadow-lg hover:shadow-2xl">
              <span className="absolute top-4 left-0 bg-white bg-opacity-50 text-white rounded-tr-lg rounded-br-lg z-10">
                3 weeks ago
              </span>
              <AiOutlineHeart className="absolute top-4 right-2 text-2xl text-white z-10" />
              <NextImage
                className="w-full rounded-lg aspect-[9/12] object-cover transition duration-300 ease-in-out hover:scale-105"
                src={Image4}
                alt="Sunset in the mountains"
              />
              <div className="absolute bottom-4 left-2 text-white flex flex-col">
                <span className="text-md font-bold">Influencer 4</span>
                <span className="text-xs text-white">Palo Alto,USA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
