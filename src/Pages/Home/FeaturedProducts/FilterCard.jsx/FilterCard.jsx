import React from 'react';
import SquareDot from "../../../../assets/Icons/squareDot.png";
import ThreeLine from "../../../../assets/Icons/threeLine.png";

const FilterCard = () => {
    return (
        <div className="flex flex-row justify-end items-center gap-[10px] my-[75px]">
        <div>
          <div className="flex flex-row justify-center items-center mb-2 border-2 px-[20px] py-[10px] w-[160px] h-[50px] font-semibold text-[13px]">
            <p className="text-gray-600">Sort By:</p>
            <select>
              <option value="default">Position</option>
            </select>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-center items-center mb-2 border-2 px-[20px] py-[10px] w-[160px] h-[50px] font-semibold text-[13px]">
            <p className="text-gray-600">Show:</p>
            <select>
              <option value="default">35 per page</option>
            </select>
          </div>
        </div>
      <img src={SquareDot} alt="" />
      <img src={ThreeLine} alt="" />
      </div>
    );
};

export default FilterCard;