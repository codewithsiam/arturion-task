import React from "react";
import TableRow from "./TableRow";
import AlsoProducts from "../ProductDetails/AlsoProducts/AlsoProducts";
import Newsletter from "../Home/Newsletter/Newsletter";

const CartPage = () => {
  return (
    <div>
      <div className="bg-neutral-100 md:px-[130px] 2xl:px-[240px] md:pt-[70px] 2xl:pt-[150px]">
        <p className="font-medium">home - Login</p>
        <h1 className="text-black text-4xl font-semibold font-Inter mt-[20px] mb-[40px]">
          Shopping Cart
        </h1>

        {/* cart product table  */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className=" px-7 py-3 text-left">Item</th>
                <th className=" px-7 py-3 text-left">Price</th>
                <th className=" px-7 py-3 text-left">Qty</th>
                <th className=" px-7 py-3 text-left">Subtotal</th>
                <th className=" px-7 py-3 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {/* all row will display here  */}
              <TableRow />
            </tbody>
          </table>
        </div>
        {/* buttons  */}
        <div className="flex justify-between items-center mt-[20px] mb-[240px]">
          <div className="flex justify-between items-center gap-5">
            <button className="bg-transparent border-2 border-gray-300 text-gray-400 py-[10px] px-[30px] rounded-full font-semibold">
              Continue Shopping
            </button>
            <button className="art-btn-primary py-[10px] px-[30px] rounded-full font-semibold">
              Clear Shopping Cart
            </button>
          </div>
          <button className="art-btn-primary py-[10px] px-[30px] rounded-full font-semibold">
            Update Shopping Cart
          </button>
        </div>

        {/* also you may like component  */}
        <AlsoProducts />
      </div>
      <Newsletter />
    </div>
  );
};

export default CartPage;
