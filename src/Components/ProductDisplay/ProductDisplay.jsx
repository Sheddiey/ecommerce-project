import React from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="flex my-[0px] mx-[170px]">
      <div className="flex gap-[17px] ">
        <div className="flex flex-col gap-[16px]">
          <img className="h-[83px] w-[250px]" src={product.image} alt="" />
          <img className="h-[83px] w-[250px]" src={product.image} alt="" />
          <img className="h-[83px] w-[250px]" src={product.image} alt="" />
          <img className="h-[83px] w-[250px]" src={product.image} alt="" />
        </div>
        <div className="">
          <img className="h-[380px] w-[950px]" src={product.image} alt="" />
        </div>
      </div>
      <div className="">
        <h1>{product.name}</h1>
        <div className="">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>{122}</p>
        </div>
        <div className="">
          <div className="">${product.old_price}</div>
          <div className="">${product.new_price}</div>
        </div>
        <div className="">
          Personalize your devices with vibrant and expressive stickers designed
          to add flair and individuality to your tech gadgets. Easy to apply and
          remove, these adhesive decals allow you to showcase your style,
          interests, or brand your devices in a unique way, making them stand
          out in a crowd.
        </div>
        <button className="uppercase">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
