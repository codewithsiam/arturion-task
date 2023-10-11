import React, { useState } from "react";
import profilePhoto from "../../../../assets/Images/profilePhoto.png";
import iconOrder from "../../../../assets/Icons/svg/icon-order.svg";
import iconCancle from "../../../../assets/Icons/svg/icon-cancel.svg";
import iconReviews from "../../../../assets/Icons/svg/icon-reviews.svg";
import iconLogout from "../../../../assets/Icons/svg/icon-logout.svg";
import iconCart from "../../../../assets/Icons/svg/icon-cart.svg";
import iconThreeLine from "../../../../assets/Icons/svg/icon-threeline.svg";
import Signup from "../../../SignUp/SignUp";
import Login from "../../../Login/Login";
import Items from "./Items/Items";
import Calculations from "./Calculations/Calculations";

const RightIcons = () => {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggleProfileDropdown = () => {
    setIsOpenProfile(!isOpenProfile);
    setIsOpenCart(false);
  };
  const toggleCartDropdown = () => {
    setIsOpenCart(!isOpenCart);
    setIsOpenProfile(false);
  };

  // modal function

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsLogin(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  // toggole login page and sign up
  const toggleLoginSignup = () => {
    setIsLogin(!isLogin);
  };

  const menuList = [
    {
      id: 1,
      title: "My Order",
      path: "/",
      icon: iconOrder,
    },
    {
      id: 2,
      title: "My Cancellations",
      path: "/",
      icon: iconReviews,
    },
    {
      id: 3,
      title: "My Reviews",
      path: "/",
      icon: iconCancle,
    },
    {
      id: 4,
      title: "Logout",
      path: "/",
      icon: iconLogout,
    },
  ];
  return (
    <div className="flex flex-row gap-[55px]">
      {/* Profile icon  */}

      <div className="relative inline-block text-left">
        <img
          type="button"
          className="group rounded-full cursor-pointer h-[36px] w-[36px] object-cover border border-black mt-2 md:mt-0"
          onClick={toggleProfileDropdown}
          src={profilePhoto}
          alt=""
        />
        

        {isOpenProfile && (
          <div
            className="origin-top-right absolute md:right-0 mt-2 w-56 rounded-2xl shadow-2xl  bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 p-[14px]"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              {menuList.map((menuItem, index) => (
                <a
                  key={menuItem.id}
                  href="#"
                  className="flex flex-row items-center gap-[16px] px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  tabIndex="-1"
                  id={`menu-item-${index + 1}`}
                >
                  <img src={menuItem.icon} alt="" /> {menuItem.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* cart icon  */}
      <div className="hidden md:block relative text-left">
        <img
          type="button"
          className="group rounded-md cursor-pointer"
          onClick={toggleCartDropdown}
          src={iconCart}
          alt=""
        />
        {isOpenCart && (
          <div
            className="origin-top-right absolute right-0 mt-2 rounded-2xl shadow-2xl  bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 p-[38px] w-[482px] h-[520px] 2xl:h-[751px] flex flex-col justify-between text-[#282828]"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <Items />
            <Calculations />
          </div>
        )}
      </div>
      {/* menu icon  */}
      {/* to do  */}
      <button className=" " onClick={openModal}>
        <img src={iconThreeLine} alt="" />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80 modal-overlay"
        >
          {/* Modal Content */}
          <div className="bg-white rounded-lg relative md:w-5/6 md:h-5/6 2xl:w-[1274px] 2xl:h-[763px] ">
            {/* Close Button */}
            {/* <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              &times;
            </button> */}

            {/* Modal Content */}
            {isLogin ? (
              <Login />
            ) : (
              <Signup toggleLoginSignup={toggleLoginSignup} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RightIcons;
