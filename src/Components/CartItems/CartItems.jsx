import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="md:my-[30px] grid_colsp md:grid  w-[85%] m-[auto] md:flex md:mx-[70px]">
      <div className="grid_cols hidden font-semibold">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px] bg-[#e2e2e2] hidden border-none" />
      {all_products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="grid_cols grid font-medium text-[16px]">
                <img className="h-[50px] w-[50px]" src={e.image} alt="" />
                <p className="order-first">{e.name}</p>
                <p>${e.new_price}</p>
                <button className="w-[38px] h-[38px] border-2 border-solid border-[#ebebeb] bg-white">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="w-[15px] my-[0px] mx-[40px] cursor-pointer"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="md:flex my-[30px]">
        <div className="flex flex-1 flex-col mr-[100px] gap-[20px]">
          <h1 className="font-bold text-2xl">Cart Totals</h1>
          <div>
            <div className="flex justify-between py-[15px]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-[15px]">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-[15px]">
              <h3 className="font-bold">Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="uppercase w-[260px] h-[40px] bg-[#ff5a5a] text-white text-[16px] font-semibold cursor-pointer">Proceed to checkout</button>
        </div>
        <div className="flex flex-col flex-1 font-medium text-[16px]">
          <p className="text-[#555]">If you have a promo code, Enter it here</p>
          <div className="md:w-[450px] flex pl-[20px] mt-[15px] h-[48px] bg-[#eaeaea]">
            <input className="bg-transparent outline-none text-[16px] md:w-[280px] h-[50px]" type="text" placeholder="promo code" />
            <button className="w-[150px] h-[48px] bg-black text-[16px] text-white cursor-pointer">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
