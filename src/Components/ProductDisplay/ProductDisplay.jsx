import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
    const { addToCart } = useContext(ShopContext)

  return (
    <div className="md:flex grid my-[0px] md:gap-[0px] gap-[30px] w-[85%] mx-[auto] md:mx-[120px]">
      <div className="md:flex grid gap-[10px] md:gap-[17px] ">
        <div className="hidden md:flex flex-col justify-between">
          <img className="h-[83px] w-[250px]" src={product.image} alt="" />
          <img className="h-[83px] w-[250px]" src={product.image} alt="" />
          <img className="h-[83px] w-[250px]" src={product.image} alt="" />
          <img className="h-[83px] w-[250px]" src={product.image} alt="" />
        </div>
        <div className="">
          <img className="h-[380px] w-[1000px]" src={product.image} alt="" />
        </div>
      </div>
      <div className="md:mx-[30px] flex flex-col">
        <h1 className="md:text-[30px] text-xl text-gray-800 font-bold">{product.name}</h1>
        <div className="flex items-center mt-[13px] gap-[5px] text-[16px] text-gray-900">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="flex my-[20px] gap-[30px] text-[24px] font-bold">
          <div className="text-gray-500 line-through ">${product.old_price}</div>
          <div className="text-red-500">${product.new_price}</div>
        </div>
        <div className="text-gray-600 text-[12px] md:text-[19px]">
          Personalize your devices with vibrant and expressive stickers designed
          to add flair and individuality to your tech gadgets. Easy to apply and
          remove, these adhesive decals allow you to showcase your style,
          interests, or brand your devices in a unique way, making them stand
          out in a crowd.
        </div>
        <button onClick={() => addToCart(product.id)} className="uppercase py-[12px] px-[0px] md:w-[30%] text-[16px] text-white bg-red-500 mt-[20px] cursor-pointer">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
