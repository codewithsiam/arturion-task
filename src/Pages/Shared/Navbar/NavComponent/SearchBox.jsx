import React from "react";

const SearchBox = () => {
  return (
    <div className="flex items-center justify-center border rounded-2xl h-[48px] md:w-[300px] 2xl:w-[624px]">
      <input
        type="text"
        placeholder="Search any things"
        className="w-full my-2 mx-4  rounded-l-md focus:outline-none "
      />
      <button
        type="submit"
        className="text-white bg-[#DF5645] py-2 px-4 rounded-2xl hover:bg-[#c03a29] focus:outline-none text-[16px] h-[48px] w-[132px]"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
