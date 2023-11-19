import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-[85%] py-[20px] m-[auto] md:h-[60vh] md:flex md:flex-col justify-center items-center px-[20px] md:px-[140px] my-[50px] py-0 bg-linear gap-[30px] md:m-[100px]">
      <h1 className="text-gray-700 font-semibold text-[20px] md:text-[40px]">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-gray-700 md:my-[0px] my-[10px] text-[16px] md:text-[20px]">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex items-center relative bg-white md:w-[730px] outline md:h-[60px] rounded-[80px] outline-gray-500">
        <input className="md:w-[500px] p-[10px] md:ml-[30px] border-none outline-none text-gray-700 text-[16px]" type="email" placeholder="Your Email id" />
        <button className="md:w-[210px] right-[0px] absolute md:relative md:h-[60px] p-[10px] rounded-[80px] bg-black text-white text-[16px] cursor-pointer">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
