import React from "react";
import data_products from "../Assets/data";
import Item from "../Items/Item";

const RelatedProducts = () => {
  return (
    <div className="flex  flex-col mb-[100px] items-center gap-[10px] md:h-[90vh]">
      <h1 className="md:text-[50px] font-semibold text-[#171717]">Related Products</h1>
      <hr className="w-[300px] h-[5px] rounded-[10px] bg-gray-300" />
      <div className="mt-[50px] md:flex gap-[30px]">
        {data_products.map((item, i) => {
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

export default RelatedProducts;
