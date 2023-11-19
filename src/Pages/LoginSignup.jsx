import React from "react";

const LoginSignup = () => {
  return (
    <div className="w-[100%] h-[90vh] bg-purple-100 flex">
      <div className="shadow md:w-[550px] w-[90%] md:h-[420px] bg-white m-[auto] py-[20px] px-[40px]">
        <h1 className="font-bold text-gray-700 text-2xl">Sign Up</h1>
        <form className="flex flex-col gap-[20px] mt-[20px]">
          <input
            className="h-[45px] w-[100%] pl-[10px] border-2 border-solid border-gray-300 text-gray-800 text-[18px] outline-none"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="h-[45px] w-[100%] pl-[10px] border-2 border-solid border-gray-300 text-gray-800 text-[18px] outline-none"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="h-[45px] w-[100%] pl-[10px] border-2 border-solid border-gray-300 text-gray-800 text-[18px] outline-none"
            type="password"
            placeholder="Password"
          />
        </form>
        <button className="w-[100%] h-[45px] text-white border-none text-[24px] bg-red-500 font-medium cursor-pointer mt-[20px]">Continue</button>
        <p className="mt-[20px] text-[18px] text-gray-800 font-medium">
          Already have an account? <span className="text-red-500 cursor-pointer font-semibold">Login here</span>
        </p>
        <div className="flex items-center mt-[20px] gap-[20px] text-gray-800 text-[16px] font-medium">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
