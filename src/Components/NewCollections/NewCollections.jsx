import React from "react";
import new_collections from "../Assets/new_collection";
import Item from "../Items/Item";

const NewCollections = () => {
  return (
    <div className=" mx-[20px] flex flex-col items-center h-[90vh] gap-[10px]">
      <h1 className="uppercase text-[50px] text-gray-900 font-semibold">New collections</h1>
      <hr className="w-[200px] h-[6px] bg-gray-500 rounded-[10px]" />
      <div className="grid grid-cols-4 mt-[50px] gap-[30px]">
        {new_collections.map((item, i) => {
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

export default NewCollections;
