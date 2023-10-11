import React from "react";
import EditIcon from "../../assets/Icons/svg/icon-edit.svg";
import CloseIcon from "../../assets/Icons/svg/icon-close.svg";
import BookImg from "../../assets/Products/book.png";

const TableRow = () => {
  return (
    <tr className="border-b-2 border-t-2 border-gray-300">
      <td className="p-4 md:p-7 flex items-start">
        <div className="w-20 h-20 md:w-32 md:h-30 overflow-hidden rounded-lg mr-4">
          <img
            src={BookImg}
            alt="Product_image"
            className=" w-full h-full object-cover"
          />
        </div>
        <div className="w-32 md:w-full">
          <p className="text-base md:text-lg font-semibold">
            MSI MEG Trident X 10SD-1012AU
          </p>
          <p className="text-sm md:text-base text-gray-500">
            Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home,
            Gaming Keyboard and Mouse
          </p>
        </div>
      </td>
      <td className="p-4 md:p-7 font-bold">$4,349.00</td>
      <td className="p-4 md:p-7">
        <div>
          <input
            min="0"
            type="number"
            defaultValue={1}
            className="w-16 h-10 px-2 py-1 bg-gray-100 rounded-md border focus:border-orange-500 input-bordered input-info outline-none"
          />
        </div>
      </td>
      <td className="p-4 md:p-7 font-bold">$13,047.00</td>
      <td className="p-4 md:p-7">
        <div className="flex justify-center md:justify-start gap-2">
          <button className="h-8 w-8 rounded-full border-2 border-gray-300">
            <img
              className="h-6 w-6 mx-auto my-auto"
              src={CloseIcon}
              alt="Close"
            />
          </button>
          <button className="h-8 w-8 rounded-full border-2 border-gray-300">
            <img
              className="h-6 w-6 mx-auto my-auto"
              src={EditIcon}
              alt="Edit"
            />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
