import React from "react";
import exclusive from "../Assets/p-6.jpg";

const Offers = () => {
  return (
    <div className="md:flex grid  bg-linear m-[auto] w-[85%] md:h-[60vh] my-[60px] md:py-[140px]">
      <div className="flex-1 flex p-[50px] flex-col justify-center">
        <h1 className="text-gray-600 text-[50px] font-semibold">Exclusive</h1>
        <h1 className="text-gray-600 text-[50px] font-semibold">
          Offers For You
        </h1>
        <p className="uppercase text-gray-600 text-[22px] font-semibold">
          only on best sellers products
        </p>
        <button className="md:w-[282px] p-[10px] rounded-[33px] text-white bg-red-500 text-[22px] mt-[30px] font-medium cursor-pointer">
          Check Now
        </button>
      </div>
      <div className="flex-1 mx-[auto] flex items-center justify-end pt-[50px]">
        <img className="h-[400px] md:p-[40px] w-[300px]" src={exclusive} alt="" />
      </div>
    </div>
  );
};

export default Offers;
