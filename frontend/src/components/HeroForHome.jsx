import React from "react";
import { assets } from "../assets/assets";

function HeroForHome() {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero section for left side */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center py-10 sm:py-0">
      <div>
        <div className="flex items-center gap-1">
          <hr className="w-8 border-none h-[1.5px] bg-black " />
          <p className="text-sm font-medium md:text-base">OUR BESTSELLERS</p>
        </div>

        <h1 className="text-3xl lg:text-5xl leading-relaxed prata-regular">
          Latest Arrivals
        </h1>
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold md:text-base">SHOP NOW</p>
          <hr className="w-10 border-none h-[1.5px] bg-black" />
        </div>
      </div>
      </div>
      {/* Hero section for right side */}
      <img src={assets.hero_img} className="w-full sm:w-1/2" alt="" />
    </div>
  );
}

export default HeroForHome;
