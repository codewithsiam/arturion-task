import React from "react";

const Calculations = () => {
  return (
    <div className="mb-[20px]">
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
  );
};

export default Calculations;
