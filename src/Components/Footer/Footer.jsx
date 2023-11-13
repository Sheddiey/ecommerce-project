import React from "react";
import footer_logo from "../Assets/logo.jpeg";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[50px]">
      <div className="flex items-center gap-[20px]">
        <img className="h-50px] w-[60px]" src={footer_logo} alt="" />
        <p className="uppercase text-gray-800 text-[40px] font-bold">Oningoi</p>
      </div>
      <ul className="flex list-none gap-[50px] text-gray-800 text-[20px]">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Product</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-[20px] ">
        <div className="p-[10px] rounded-[20%] cursor-pointer pb-[6px] bg-zinc-100 border-solid border-2 border-zinc-200">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="p-[10px] rounded-[20%] cursor-pointer pb-[6px] bg-zinc-100 border-solid border-2 border-zinc-200">
          <img src={pinterest_icon} alt=" " />
        </div>
        <div className="p-[10px] rounded-[20%] cursor-pointer pb-[6px] bg-zinc-100 border-solid border-2 border-zinc-200">
          <img src={whatsapp_icon} alt=" " />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[30px] w-[100%] mb-[30px] text-20px text-gray-700">
        <hr className="w-[80%] border-none rounded-[10px] h-[3px] bg-zinc-300" />
        <p>Copyright @ 2023 - All Right Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
