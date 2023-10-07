import React from "react";
import cartItem from "../../../../assets/Cart/cart-item.jpeg";

const Cart = () => {
  return (
    <div className=" overflow-y-auto p-4 text-[#282828] h-full">
      {/* items  */}
      <div className="flex flex-col space-y-4  ">
        <div className="flex items-center space-x-4">
          <img
            src={cartItem}
            alt="Item"
            className="w-[51px] h-[70px] object-cover"
          />
          <div className="flex flex-col flex-grow ">
            <p className="text-[14px] mb-[24px]">Essential oil </p>
            <p className="text-[14px] font-semibold">REMOVE</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[18px] ">- 1 +</p>
            <p className="text-[22px] ">€3.90</p>
          </div>
        </div>
      </div>

      {/* calculation */}
      <div className="">
        <div className="border-t my-4 border-[#A0A0A0]"></div>

        <div className="flex justify-between mb-4 text-[16px]">
          <p>Subtotal</p>
          <p>€3.90</p>
        </div>
        <div className="flex justify-between mb-4 text-[16px]">
          <p>Delivery</p>
          <p>€3.95</p>
        </div>

        {/* Divider */}
        <div className="border-t my-4 border-[#A0A0A0]"></div>

        {/* Total and Purchase Button */}
        <div className="flex flex-row justify-between items-center">
          <p className="text-[16px] font-medium mb-2">Total</p>
          <p className="text-[22px] font-medium mb-2">€7.85</p>
        </div>
        <button className="w-full bg-[#DF5645] text-white py-2  hover:bg-[#c93c2a]">
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Cart;
