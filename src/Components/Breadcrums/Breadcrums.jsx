import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrums = (props) => {
    const { product } = props;
    
  return (
    <div className="flex my-[10px] mx-[120px] capitalize font-semibold text-gray-600 text-[16px]  items-center gap-[5px]">
      HOME <img className="h-[10px]" src={arrow_icon} alt="" /> SHOP <img className="h-[10px]" src={arrow_icon} alt="" />{" "}
      {product.category} <img className="h-[10px]" src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrums;
