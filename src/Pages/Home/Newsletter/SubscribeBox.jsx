import React from "react";

const SubscribeBox = () => {
  return (
    <div className="bg-[#F2F2F2] p-4 w-max md:w-[1150px] mt-[33px]">
      <div className="flex items-center">
        <input
          type="email"
          placeholder="Enter email"
          className="w-full py-2 px-4  rounded-l-md focus:outline-none bg-transparent"
        />
        <div className="border border-gray-300 h-10"></div>
        <button
          type="submit"
          className="text-gray-500 py-2 px-4 rounded-r-md hover:bg-gray-100 focus:outline-none bg-transparent text-[18px]"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeBox;
