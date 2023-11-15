import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";
import Product from "../../Pages/Product";

const Breadcrums = (props) => {
    const { product } = props;
    
  return (
    <div className="">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{" "}
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrums;
