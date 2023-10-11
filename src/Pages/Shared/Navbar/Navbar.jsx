import React, { useState } from "react";
import Menu from "./NavComponent/Menu";
import logo from "../../../assets/logo.png";
import RightIcons from "./NavComponent/RightIcons";
import SearchBox from "./NavComponent/SearchBox";
import iconThreeLine from "../../../assets/Icons/svg/icon-threeline.svg";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const closeNav = () => {
    setIsNavOpen(false);
  };
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("nav-overlay")) {
      closeNav();
    }
  };
  return (
    <div className="flex flex-row justify-between md:justify-center items-center">
      <img
        className="h-[80px] w-[130px] md:h-[102px] md:w-[234px] md:mr-[110px] ml-4 md:ml-0"
        src={logo}
        alt=""
      />

      {/* desktop view  */}
      <div className=" hidden md:flex flex-row justify-between md:justify-center items-center">
        <SearchBox />

        <Menu />
        <RightIcons />
      </div>

      {/* mobile view  */}
      <div className="block md:hidden ">
        <button className="flex mr-3" onClick={() => setIsNavOpen(!isNavOpen)}>
          <img src={iconThreeLine} alt="" />
        </button>

        {/* mobile nav  */}
        {isNavOpen && (
          <div
            onClick={handleOverlayClick}
            class="fixed inset-0 flex items-start justify-end z-50 bg-black bg-opacity-70 nav-overlay"
          >
            <div class="bg-white rounded-bl-md relative w-2/3 h-auto py-4 px-6">
              <button
                onClick={closeNav}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              >
                &times;
              </button>
              <Menu />
              <RightIcons />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
