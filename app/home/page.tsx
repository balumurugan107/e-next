"use client";

import Carousel from "@/components/home/carousel";
import ProductsList from "@/components/home/products";

export default function Home() {
  // const response = await getData();
  // console.log(response,"response")
  return(
    <div>
      <Carousel />
      <ProductsList />
    </div>
  );
}
