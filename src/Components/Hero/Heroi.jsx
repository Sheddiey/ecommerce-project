import React from "react";
import handIcon from "../Assets/hand_icon.png";
import arrowIcon from "../Assets/arrow.png";
import kellenRiggin from "../Assets/kellen-riggin-m2b9dWqn5R0-unsplash.jpg";

const Heroi = () => {
  return (
    <div className="h-screen flex bg-linear hero">
      <div className="flex flex-1 flex-col justify-center g-5 pl-[180px] leading-110">
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
        <div className="flex justify-center g-[15px] items-center w-[310px] h-[70px] mt-[30px] rounded-[75px] bg-red-600 text-white text-2xl font-medium">
          <div>Latest collection</div>
          <img src={arrowIcon} alt="arrow-icon" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img
          className="w-[300px] h-[400px]"
          src={kellenRiggin}
          alt="kellen-riggin"
        />
      </div>
    </div>
  );
};

export default Heroi;
