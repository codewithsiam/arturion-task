import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F5] text-gray-600">
      <footer className="container mx-auto py-8 md:py-16 text-center md:text-left px-4">
        <div className="md:flex md:space-x-8">
          {/* Column 1 */}
          <aside className="md:w-1/4">
            <h2 className="text-[rgb(255,36,146)] text-2xl pb-4">
              EMPORIUM INN
            </h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </aside>

          {/* Column 2 */}
          <nav className="mt-8 md:mt-0 md:w-1/4">
            <header className="font-semibold mb-[30px] text-black">
              About Us
            </header>
            <a className="block text-sm mb-[30px]">Careers</a>
            <a className="block text-sm mb-[30px]">Our Stores</a>
            <a className="block text-sm mb-[30px]">Terms & Conditions</a>
            <a className="block text-sm mb-[30px]">Privacy Policy</a>
          </nav>

          {/* Column 3 */}
          <nav className="mt-8 md:mt-0 md:w-1/4">
            <header className="font-semibold mb-[30px] text-black">
              Customer Care
            </header>
            <a className="block text-sm mb-[30px]">Help Center</a>
            <a className="block text-sm mb-[30px]">Track Your Order</a>
            <a className="block text-sm mb-[30px]">
              Corporate & Bulk Purchasing
            </a>
            <a className="block text-sm mb-[30px]">Returns & Refunds</a>
          </nav>

          {/* Column 4 */}
          <nav className="mt-8 md:mt-0 md:w-1/4">
            <header className="font-semibold mb-[30px] text-black">
              Contact Us
            </header>
            <a className="block text-sm mb-[30px]">
              50 North Whatever Blvd, Washington, DC 10501
            </a>
            <a className="block text-sm mb-[30px]">
              Email: mredwardroh@gmail.com
            </a>
            <a className="block text-sm mb-[30px]">(222) 333-4444</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
