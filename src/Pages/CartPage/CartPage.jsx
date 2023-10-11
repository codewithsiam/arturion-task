import React from "react";
import TableRow from "./TableRow";
import AlsoProducts from "../ProductDetails/AlsoProducts/AlsoProducts";
import Newsletter from "../Home/Newsletter/Newsletter";

const CartPage = () => {
  return (
    <div>
      <div className="bg-neutral-100 md:px-[130px] 2xl:px-[240px] md:pt-[70px] 2xl:pt-[150px]">
        <p className="font-medium pl-3 pt-3">home - Login</p>
        <h1 className="text-black text-xl md:text-4xl font-semibold font-Inter mt-[20px] mb-[40px] pl-3">
          Shopping Cart
        </h1>

        {/* cart product table  */}
        <div className="">
          <div className=" md:max-h-[600px] 2xl:max-h-[800px] overflow-x-auto md:overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-4 md:px-7 py-3 text-left">Item</th>
                  <th className="px-4 md:px-7 py-3 text-left">Price</th>
                  <th className="px-4 md:px-7 py-3 text-left">Qty</th>
                  <th className="px-4 md:px-7 py-3 text-left">Subtotal</th>
                  <th className="px-4 md:px-7 py-3 text-left"></th>
                </tr>
              </thead>
              <tbody>
                <TableRow />
                <TableRow />
              </tbody>
            </table>
          </div>
        </div>
        {/* buttons  */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-center mt-[20px] mb-[40px] 2xl:mb-[240px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-5">
            <button className="bg-transparent border-2 border-gray-300 text-gray-400 py-[10px] px-4 md:px-[30px] rounded-full font-semibold">
              Continue Shopping
            </button>
            <button className="art-btn-primary py-[10px] px-4 md:px-[30px] rounded-full font-semibold">
              Clear Shopping Cart
            </button>
          </div>
          <button className="art-btn-primary py-[10px] px-4 md:px-[30px] rounded-full font-semibold">
            Update Shopping Cart
          </button>
        </div>

        {/* also you may like component  */}
       <div className="pt-16">
       <AlsoProducts />
       </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default CartPage;
