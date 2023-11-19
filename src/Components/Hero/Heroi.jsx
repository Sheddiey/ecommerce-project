import React from "react";
import handIcon from "../Assets/hand_icon.png";
import arrowIcon from "../Assets/arrow.png";
import p_22 from "../Assets/p-22.jpg";

const Heroi = () => {
  return (
    <div className="h-screen md:flex grid bg-linear hero">
      <div className="flex flex-1 flex-col justify-center m-[auto] g-5 md:pl-[180px] leading-110">
        <h2 className="text-gray-900 font-semibold text-2xl">
          NEW ARRIVALS ONLY
        </h2>
        <div>
          <div className="flex items-center gap-5">
            <p>new</p>
            <img className="w-[105px] " src={handIcon} alt="hand-icon" />
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="flex justify-center cursor-pointer gap-[15px] items-center w-[310px] h-[70px] mt-[30px] rounded-[75px] bg-red-600 text-white text-2xl font-medium">
          <div>Latest collection</div>
          <img src={arrowIcon} alt="arrow-icon" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img
          className="w-[300px] h-[400px]"
          src={p_22}
          alt="kellen-riggin"
        />
      </div>
    </div>
  );
};

export default Heroi;
