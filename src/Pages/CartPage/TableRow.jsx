import React from "react";
import EditIcon from "../../assets/Icons/svg/icon-edit.svg";
import CloseIcon from "../../assets/Icons/svg/icon-close.svg";
import BookImg from "../../assets/Products/book.png";

const TableRow = () => {
  return (
    <tr className="border-b-2 border-t-2 border-gray-300">
      <td className="p-7">
        <div className="flex items-center">
          <img
            src={BookImg}
            alt="Product_image"
            className="w-[90px] h-[100px] 2xl:w-[100px] 2xl:h-[110px] object-cover rounded-lg mr-[40px]"
          />
          <p className="text-[16px]">
            MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM,
            1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty
          </p>
        </div>
      </td>
      <td className=" p-7 font-bold">$4,349.00</td>
      <td className=" p-7">
        <div>
          <input
            min="0"
            type="number"
            defaultValue={1}
            className="w-16 h-10 px-2 py-1 bg-[#DF56452E] rounded-md border focus:border-orange-500 input-bordered input-info outline-none"
          />
        </div>
      </td>
      <td className=" p-7 font-bold">$13,047.00</td>
      <td className=" p-7">
        <button className=" h-6 w-6 rounded-full border-2 border-gray-300">
          <img className="h-4 w-4 mx-auto my-auto" src={CloseIcon} alt="" />
        </button>
        <button className=" h-6 w-6 rounded-full border-2 border-gray-300 mt-2">
          <img className="h-4 w-4 mx-auto my-auto" src={EditIcon} alt="" />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
