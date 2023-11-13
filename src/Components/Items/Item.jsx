import React from "react";

const Item = (props) => {
  return (
    <div className="transform hover:scale-105 transition-transform duration-600">
      <img className="h-[300px] w-[250px]" src={props.image} alt="" />
      <p className="my-[6px]">{props.name}</p>
      <div className="flex gap-[20px]">
        <div className="text-[18px] text-gray-800 font-semibold">${props.new_price}</div>
        <div className="tex-gray-500 font-medium line-through">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;