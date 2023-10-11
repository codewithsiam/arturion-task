import React from "react";
import CardComponent from "./CardComponent/CardComponent";
import FilterCard from "./FilterCard.jsx/FilterCard";

const FeaturedProducts = () => {
  return (
    <div className="text-center mt-[43px] w-full md:w-[1266px] mx-auto ">
      <h2 className="uppercase text-[#1717178C] text-[22px] md:text-[32px] font-medium">
        Our Featured <span className="text-black">Products</span>
      </h2>
      <p className="text-[#545454CC] px-10">
        Elevate your life with our exquisite handcrafted leather bags – a
        perfect blend of luxury and functionality.
      </p>

      {/* short filter options  */}
      <FilterCard />

      {/* products  */}
      <CardComponent />
    </div>
  );
};

export default FeaturedProducts;
