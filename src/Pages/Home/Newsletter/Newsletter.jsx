import React from "react";
import SubscribeBox from "./SubscribeBox";

const Newsletter = () => {
  return (
    <div className="w-full mx-auto flex flex-col  justify-center items-center pt-[150px] pb-[100px] bg-white px-4 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
      >
        <path
          d="M20.7676 38.2578C20.6287 38.0266 20.4322 37.8353 20.1974 37.7025C19.9627 37.5697 19.6975 37.4999 19.4277 37.5H7.8125C7.3981 37.5 7.00067 37.3354 6.70765 37.0423C6.41462 36.7493 6.25 36.3519 6.25 35.9375V10.9375C6.25 10.5231 6.41462 10.1257 6.70765 9.83265C7.00067 9.53962 7.3981 9.375 7.8125 9.375H42.1875C42.6019 9.375 42.9993 9.53962 43.2924 9.83265C43.5854 10.1257 43.75 10.5231 43.75 10.9375V35.9375C43.75 36.3519 43.5854 36.7493 43.2924 37.0423C42.9993 37.3354 42.6019 37.5 42.1875 37.5H30.5723C30.3025 37.4999 30.0373 37.5697 29.8025 37.7025C29.5678 37.8353 29.3713 38.0266 29.2324 38.2578L26.3398 42.9922C26.201 43.2235 26.0047 43.415 25.7699 43.548C25.5351 43.6809 25.2698 43.7508 25 43.7508C24.7302 43.7508 24.4649 43.6809 24.2301 43.548C23.9953 43.415 23.799 43.2235 23.6602 42.9922L20.7676 38.2578Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25 25.7812C26.2944 25.7812 27.3438 24.7319 27.3438 23.4375C27.3438 22.1431 26.2944 21.0938 25 21.0938C23.7056 21.0938 22.6562 22.1431 22.6562 23.4375C22.6562 24.7319 23.7056 25.7812 25 25.7812Z"
          fill="black"
        />
        <path
          d="M16.4062 25.7812C17.7007 25.7812 18.75 24.7319 18.75 23.4375C18.75 22.1431 17.7007 21.0938 16.4062 21.0938C15.1118 21.0938 14.0625 22.1431 14.0625 23.4375C14.0625 24.7319 15.1118 25.7812 16.4062 25.7812Z"
          fill="black"
        />
        <path
          d="M33.5938 25.7812C34.8882 25.7812 35.9375 24.7319 35.9375 23.4375C35.9375 22.1431 34.8882 21.0938 33.5938 21.0938C32.2993 21.0938 31.25 22.1431 31.25 23.4375C31.25 24.7319 32.2993 25.7812 33.5938 25.7812Z"
          fill="black"
        />
      </svg>
      <h1 className="text-gray-800 text-[22px] md:text-[32px] my-[9px]">SUBSCRIBE TO OUR NEWSLETTER</h1>
      <p className="text-black text-[14px] md:text-[18px]">and receive $20 coupon for yoru first order when you checkout</p>
      <SubscribeBox />
    </div>
  );
};

export default Newsletter;
