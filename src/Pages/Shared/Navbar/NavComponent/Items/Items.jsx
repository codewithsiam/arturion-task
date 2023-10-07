import React from 'react';
import cartItem from "../../../../../assets/Cart/cart-item.jpeg";

const Items = () => {
    return (
          <div className="flex flex-col">
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
    );
};

export default Items;