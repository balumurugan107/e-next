"use client";

import Carousel from "@/components/home/carousel";
import ProductsList from "@/components/home/products";
import MasterContent from "@/components/home/master";

export default function Home() {
  // const response = await getData();
  // console.log(response,"response")
  return(
    <div>
      <MasterContent />
      {false && <Carousel />}
      <ProductsList />
    </div>
  );
}
