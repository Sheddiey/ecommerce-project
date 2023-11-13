import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-[65%] h-[40vh] flex flex-col justify-center items-center m-auto px-[140px] py-0 bg-linear gap-[30px] mb-[150px]">
      <h1 className="text-gray-700 font-semibold text-[55px]">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-gray-700 text-[20px]">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex items-center bg-white w-[730px] h-[70px] rounded-[80px] border-solid border-2 border-gray-500">
        <input
          className="w-[500px] ml-[30px] border-none outline-none text-gray-700 text-[16px]"
          type="email"
          placeholder="Your Email id"
        />
        <button className="w-[210px] h-[70px] rounded-[80px] bg-black text-white text-[16px] cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
