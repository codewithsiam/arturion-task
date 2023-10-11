import React from "react";
import ProductSlider from "./ProductSlider";

const AlsoProducts = () => {
  return (
    <div className="pb-[30px] md:pb-[80px]">
      <p className="font-medium text-[18px] mb-[30px] 2xl:mb-[50px] ml-3">
        Also You May Like
      </p>
      <ProductSlider />
    </div>
  );
};

export default AlsoProducts;
