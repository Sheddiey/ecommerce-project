import React from "react";

const DescriptionBox = () => {
  return (
    <div className="my-[20px] w-[85%] mx-[auto] md:mx-[120px]">
      <div className="flex ">
        <div className="flex items-center justify-center text-[16px] font-semibold w-[171px] h-[50px] border-2 border-solid border-gray-300">
          Description
        </div>
        <div className="bg-gray-100 text-gray-600 flex items-center justify-center text-[16px] font-semibold w-[171px] h-[50px] border-2 border-solid border-gray-300">
          Reviews (122)
        </div>
      </div>
      <div className="flex flex-col gap-[25px] p-[20px] md:p-[48px] pb-[70px] border-2 border-solid ">
        <p>
          I absolutely love the stickers I ordered for my laptop! The colors are
          vibrant, and the adhesive quality is fantastic. They stick well
          without leaving any residue when removed. The variety of designs
          allowed me to express my personality and interests. 
        </p>
        <p>
          The stickers I got for my phone were visually appealing and easy to
          apply. However, I noticed that after a few weeks, the edges started to
          peel off, especially in areas where I frequently handled the device.
          While I appreciate the variety of designs available, the durability of
          the stickers could be improved.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
