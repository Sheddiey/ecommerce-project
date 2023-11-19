import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="transform hover:scale-105 transition-transform duration-600">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} className="h-[400px] md:h-[300px] md:w-[250px] w-[300px]" src={props.image} alt="" />
      </Link>
      <p className="my-[6px] capitalize">{props.name}</p>
      <div className="flex gap-[20px]">
        <div className="text-[18px] text-gray-800 font-semibold">
          ${props.new_price}
        </div>
        <div className="tex-gray-500 font-medium line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
