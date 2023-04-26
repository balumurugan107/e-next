import React, { useEffect } from "react";
import NextImage from "../NextImage";
import Image1 from "../../assets/images/image1.jpg";
import Image2 from "../../assets/images/image2.jpg";
import Image3 from "../../assets/images/image3.jpg";
import { AiOutlineHeart, AiFillHeart } from "react-icons/all";
import Filter from "./filter";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "@/app/GlobalRedux/Slices/home";

function ProductsList() {
  const products = useSelector(state => state.product.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [])
  
console.log(products?.result,"products")
  return (
    <div className="max-w-6xl mx-auto my-4 bg-gray-300 rounded-xl shadow-xl">
      <div className="p-4">
        <Filter />
        <div className="container m-auto grid grid-cols-3 gap-4">
        {
          products?.result?.map((product: any) =>(
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
              <div className="font-bold text-xl mb-2">{product?.name}</div>
              <div className="font-medium text-xl mb-2">${product?.price}</div>
              <p className="text-gray-700 text-base">
              {product?.description}
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
          ))
        }
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
