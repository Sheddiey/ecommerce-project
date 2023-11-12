import React from "react";
import data_product from "../Assets/data";
import Item from "../Items/Item";

const Popular = () => {
  return (
    <div className="flex flex-col items-center h-90vh gap-[10px]">
      <h1 className="uppercase text-[50px] text-gray-900 font-semibold">Popular in phones</h1>
      <hr className="w-[200px] h-[6px] bg-gray-500 rounded-[10px]" />
      <div className="flex gap-[30px] mt-[50px]">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default Popular;
