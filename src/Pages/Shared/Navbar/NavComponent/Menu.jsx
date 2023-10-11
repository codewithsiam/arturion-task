import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const menuList = [
    {
      id: 1,
      title: "Woman’s Fashion",
      path: "/",
      isSubmenu: true,
    },
    {
      id: 1,
      title: "Men’s Fashion",
      path: "/",
      isSubmenu: true,
    },
    {
      id: 1,
      title: "Electronics",
      path: "/",
      isSubmenu: false,
    },
    {
      id: 1,
      title: "Home & Lifestyle",
      path: "/",
      isSubmenu: false,
    },
    {
      id: 1,
      title: "Medicine",
      path: "/",
      isSubmenu: false,
    },
    {
      id: 1,
      title: "Sports & Outdoor",
      path: "/",
      isSubmenu: false,
    },
    {
      id: 1,
      title: "Baby’s & Toys",
      path: "/",
      isSubmenu: false,
    },
    {
      id: 1,
      title: "Groceries & Pets",
      path: "/",
      isSubmenu: false,
    },
    {
      id: 1,
      title: "Health & Beauty",
      path: "/",
      isSubmenu: false,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row md:gap-[30px] 2xl:gap-[85px] md:ml-[40px] 2xl:ml-[86px] md:mr-[30px] 2xl:mr-[71px] mt-7 md:mt-0">
      <p
        type="button"
        className="group rounded-md p-2 inline-flex items-center text-base font-medium text-gray-700 hover:text-black cursor-pointer text-[16px]"
      >
        Products
      </p>
      <div className="relative inline-block text-left">
        <p
          type="button"
          className="group rounded-md p-2 inline-flex items-center text-base font-medium text-gray-700 hover:text-black cursor-pointer text-[16px]"
          onClick={toggleDropdown}
        >
          Catagories
        </p>

        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-2xl shadow-2xl  bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 p-[14px]"
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
                  className="flex flex-row justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  tabIndex="-1"
                  id={`menu-item-${index + 1}`}
                >
                  {menuItem.title} {menuItem.isSubmenu && <FaAngleRight />}
                </a>
              ))}

              {/* <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
              >
                Men’s Fashion {menuItem.isSubmenu && <FaAngleRight />}
              </a> */}
            </div>
          </div>
        )}
      </div>
      <p
        type="button"
        className="group rounded-md p-2 inline-flex items-center text-base font-medium text-gray-700 hover:text-black cursor-pointer text-[16px]"
      >
        About Us
      </p>
    </div>
  );
};

export default Menu;
