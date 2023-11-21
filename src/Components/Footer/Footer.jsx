import React from "react";
import footer_logo from "../Assets/Untitled.png";
import instagram_icon from "../Assets/instagram_icon.png";
import x_icon from "../Assets/x-twitter.svg";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="flex bg-gray-200 flex-col justify-center items-center gap-[10px]">
      <div className="flex items-center gap-[0px]">
        <img className="w-[80px] h-[80px]" src={footer_logo} alt="" />
        <p className="uppercase text-gray-800 text-[30px] font-bold">Oningoi</p>
      </div>
      <ul className="md:flex grid gap-[30px] text-center text-gray-800 text-[18px]">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Product</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-[20px] ">
        <div className="p-[5px] rounded-[20%] cursor-pointer  bg-zinc-100 border-solid border-2 border-zinc-200">
          <img className=" h-[25px]" src={instagram_icon} alt="" />
        </div>
        <div className="p-[5px] rounded-[20%] cursor-pointer bg-zinc-100 border-solid border-2 border-zinc-200">
          <img className=" h-[25px]" src={x_icon} alt="" />
        </div>
        <div className="p-[5px] rounded-[20%] cursor-pointer bg-zinc-100 border-solid border-2 border-zinc-200">
          <img className=" h-[25px]" src={whatsapp_icon} alt=" " />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[30px] w-[100%] mb-[20px] text-[13px] md:text-[18px] text-gray-700">
        <hr className="w-[80%] border-none rounded-[10px] h-[3px] bg-zinc-300" />
        <p>Copyright @ 2023 - All Right Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
