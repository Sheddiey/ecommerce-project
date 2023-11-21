import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Items/Item";
import Banner from "../Components/Banner/Banner";

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  return (
    <div className="">
      <Banner />
      <div className="flex my-[0px] w-[85%] m-[auto] md:mx-[80px] justify-between items-center">
        <p>
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div className="py-[5px] md:text-[16px] flex items-center gap-[5px] md:px-[20px] px-[5px] rounded-[40px] border-solid border-2 border-zinc-200">
          Sort by{" "}
          <img className="h-[10px] w-[10px] " src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="my-[20px] text-center md:text-left md:mx-[80px] grid md:grid-cols-4 gap-[20px]">
        {all_products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex justify-center items-center my-[80px] mx-[auto] w-[200px] h-[49px] rounded-[55px] bg-zinc-200 text-gray-500 text-[18px] font-medium">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
