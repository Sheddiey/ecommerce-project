import React from "react";
import banner_img from '../Assets/banner-image.jpg'

const Banner = () => {
  return (
    <div className="flex justify-between p-[20px] overflow-hidden mt-[10px] bg-radial h-[30vh] w-[87%] m-[auto] mb-[20px]">
      <div className="grid gap-[10px]">
        <p className="uppercase text-3xl text-[#ff4141]">Best Offer Flat 50% Off</p>
        <p>12 Hours 20 Mins</p>
        <button className="w-[260px] px-[10px] rounded-[33px] text-white bg-red-500 text-[22px] font-medium cursor-pointer">Explore now</button>
      </div>
      <div className="">
        <img className="h-[100%] w-[300px]" src={banner_img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
