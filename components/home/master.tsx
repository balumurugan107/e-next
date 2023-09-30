import React from "react";
import Filter from "./filter";

function MasterContent() {
  return (
    <div className="max-w-6xl m-auto my-4 pt-8 flex justify-center flex-col items-center">
      <h1 className="font-bold text-4xl my-4 text-transparent bg-clip-text bg-gradient-to-r from-pink to-purple-800">
        Find and Hire Influencers in seconds
      </h1>
      <div>
        Find Instagram, TikTok, and YouTube influencers to create unique content
        for your brand
      </div>

        <Filter />
    </div>
  );
}

export default MasterContent;
