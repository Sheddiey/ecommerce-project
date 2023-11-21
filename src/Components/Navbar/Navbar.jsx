import React, { useContext, useState } from "react";
import logo from "../Assets/Untitled.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const [isToggle, setIsToggle] = useState(false);

  const handleClick = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="flex shadow justify-around">
      <div className="flex z-10 items-center">
        <FontAwesomeIcon
          className="md:hidden bg-white cursor-pointer text-[24px] absolute left-[20px]"
          icon={isToggle ? faBars : faX}
          onClick={handleClick}
        />
        <img className="w-[60px] h-[60px]" src={logo} alt="logo" />
        <p className="text-slate-950 text-2xl uppercase font-semibold">
          Oningoi
        </p>
      </div>
      <ul className={`absolute ${isToggle ? 'hidden md:block' : ''} md:mr-[50px] shadow-2xl md:relative md:h-[0px] md:w-[0px] md:bg-[transparent]   bg-white h-[300px] w-[250px]  top-[0px] left-[0px]`}>
        <div className="md:flex md:mt-[10px] font-semibold md:block top-[60px] md:top-[0px] grid md:left-[0px] left-[50px] absolute md:relative nav-menu items-center gap-5 text-neutral-600 font-medium text-xl">
          <li
            onClick={() => {
              setMenu("shop");
              handleClick();
            }}
            className="flex flex-col md:items-center content-center gap-2 cursor-pointer"
          >
            <Link to="/">Shop</Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("phone");
              handleClick();
            }}
            className="flex flex-col md:items-center content-center gap-2 cursor-pointer"
          >
            <Link to="/phone">Phone</Link>
            {menu === "phone" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("laptop");
              handleClick();
            }}
            className="flex flex-col md:items-center content-center gap-2 cursor-pointer"
          >
            <Link to="/laptop">Laptop</Link>
            {menu === "laptop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("tablet");
              handleClick();
            }}
            className="flex flex-col md:items-center content-center gap-2 cursor-pointer"
          >
            <Link to="/tablet">Tablet</Link>
            {menu === "tablet" ? <hr /> : <></>}
          </li>
        </div>
      </ul>
      <div className="flex items-center gap-4">
        <Link to="/login">
          <button onClick={handleClick} className={`md:border  ${isToggle ? 'hidden md:block' : ''} md:static text-neutral-600 top-[250px] left-[30px] absolute left border-solid w-[100px] h-[30px] font-semibold text-xl text-center rounded-full bg-white border-slate-500 active:bg-slate-200`}>
            Login
          </button>
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
        <div className="w-[20px] h-[20px] flex justify-center bg-red-500 text-white rounded-xl text-sm mt-[-15px] ml-[-20px]">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
