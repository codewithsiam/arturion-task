import React, { useState } from "react";
import camera from "../../assets/Products/camera.png";
import facewash from "../../assets/Products/facewash.png";
import bkashLogo from "../../assets/Icons/paymentMethods/bkash.png";
import nagadLogo from "../../assets/Icons/paymentMethods/nagad.png";
import visaLogo from "../../assets/Icons/paymentMethods/visa.png";
import masterCardLogo from "../../assets/Icons/paymentMethods/master-card.png";
import CheckedIcon from "../../assets/Icons/svg/icon-checked-sign.svg";

const cartProducts = [
  {
    id: 1,
    name: "New Arrivals",
    type: "Essential oil",
    image: camera,
    price: 650,
  },
  {
    id: 2,
    name: "New Arrivals",
    type: "Essential oil",
    image: facewash,
    price: 1100,
  },
];

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    townCity: "",
    phoneNumber: "",
    emailAddress: "",
    saveInfo: false,
  });

  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [couponCode, setCouponCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleApplyCoupon = () => {
    setIsCouponApplied(true);
  };

  const handlePlaceOrder = () => {
    openModal();
  };

  // modal functionality
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };
  return (
    <div className="flex flex-col md:flex-row justify-between mx-[20px] md:mx-[150px]">
      {/* Left Side - User Information */}
      <div className="w-full md:w-1/2 md:pr-20">
        <form>
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-[7px] text-gray-500">
              First Name*
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded outline-none  focus:border-[#DB4444]"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="companyName"
              className="block mb-[7px] text-gray-500"
            >
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded outline-none  focus:border-[#DB4444]"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="streetAddress"
              className="block mb-[7px] text-gray-500"
            >
              Street Address*
            </label>
            <input
              type="text"
              name="streetAddress"
              id="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              className="w-full p-2 border rounded outline-none  focus:border-[#DB4444]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="apartment" className="block mb-[7px] text-gray-500">
              Apartment, Floor, etc. (optional)
            </label>
            <input
              type="text"
              name="apartment"
              id="apartment"
              value={formData.apartment}
              onChange={handleInputChange}
              className="w-full p-2 border rounded outline-none  focus:border-[#DB4444]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="townCity" className="block mb-[7px] text-gray-500">
              Town/City*
            </label>
            <input
              type="text"
              name="townCity"
              id="townCity"
              value={formData.townCity}
              onChange={handleInputChange}
              className="w-full p-2 border rounded outline-none  focus:border-[#DB4444]"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block mb-[7px] text-gray-500"
            >
              Phone Number*
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full p-2 border rounded outline-none  focus:border-[#DB4444]"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="emailAddress"
              className="block mb-[7px] text-gray-500"
            >
              Email Address*
            </label>
            <input
              type="email"
              name="emailAddress"
              id="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              className="w-full p-2 border rounded outline-none  focus:border-[#DB4444]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="saveInfo"
                checked={formData.saveInfo}
                onChange={handleInputChange}
                className="mr-2 border-orange-500 focus:border-orange-500"
              />
              Save this information for faster check-out next time
            </label>
          </div>
        </form>
      </div>

      {/* Right Side - Payment Information */}
      <div className="w-full md:w-1/2 ">
        <div className="h-max bg-white p-[40px] border rounded-md">
          <div className="md:pr-[90px]">
            {/* Product Row */}
            <div className="mb-4">
              {cartProducts.map((product) => (
                <div className="flex justify-between items-center mb-[30px]">
                  <div className="flex justify-start items-center gap-[15px]">
                    <img
                      className="h-[60px] w-[60px]"
                      src={product.image}
                      alt=""
                    />
                    <p>{product.name}</p>
                  </div>
                  <p className="font-semibold">${product.price}</p>
                </div>
              ))}
            </div>

            {/* calculation price and amount  */}
            <div className="font-medium">
              <div className="flex justify-between items-center border-b border-gray-300 py-[15px]">
                <p>Subtotal:</p>
                <p>$1750</p>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 py-[15px]">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between items-center py-[20px]">
                <p>Total:</p>
                <p>$1750</p>
              </div>
            </div>

            <div className="my-4">
              <div className="flex items-center mb-2 justify-between">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={handlePaymentMethodChange}
                    className="mr-2"
                  />
                  <p>Bank</p>
                </div>
                <div className="flex gap-2">
                  {/* payment icons  */}
                  <img
                    src={bkashLogo}
                    alt="Bank Logo"
                    className="w-full h-[20px] inline-block"
                  />
                  <img
                    src={visaLogo}
                    alt="Bank Logo"
                    className="w-full h-[20px] inline-block"
                  />
                  <img
                    src={masterCardLogo}
                    alt="Bank Logo"
                    className="w-full h-[20px] inline-block"
                  />
                  <img
                    src={nagadLogo}
                    alt="Bank Logo"
                    className="w-full h-[20px] inline-block"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                <span>Cash on Delivery</span>
              </div>
            </div>
          </div>

          <div className="mb-4 flex gap-[10px]">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter coupon code"
              className="w-7/12 p-2 border rounded-l outline-none  focus:border-[#DB4444]"
            />
            <button
              onClick={handleApplyCoupon}
              className="w-5/12 art-bg-primary text-white p-2 rounded"
            >
              Apply Coupon
            </button>
          </div>
          {isCouponApplied && (
            <p className="mt-2 text-green-500">Coupon applied successfully!</p>
          )}

          <button
            onClick={handlePlaceOrder}
            className="w-40 art-bg-primary text-white p-3 rounded"
          >
            Place Order
          </button>
        </div>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80 modal-overlay"
        >
          {/* Modal Content */}
          <div className="bg-white rounded-lg relative w-max h-max py-[50px] px-[100px] md:py-[100px] md:px-[200px]">
            {/* Modal Content */}
            <img className="h-[90px] w-[90px]" src={CheckedIcon} alt="" />
            <p className="font-semibold mt-[20px]">Order Placed</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
