import React from "react";
import applicationImage from "../../../assets/Images/applicationForm.png";

const ProfileForm = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse  items-center md:items-start">
      {/* Left Side with Photo */}
      <div className="w-[350px] md:w-1/2 md:order-2 p-4">
        <img
          src={applicationImage}
          alt="Profile Photo"
          className="h-max w-full object-cover md:h-[521px] md:w-[531px] mx-auto"
        />
      </div>

      {/* Right Side with Form */}
      <div className="w-full md:w-1/2 md:order-1 p-4">
        <form className="flex flex-col gap-[46px] w-full max-w-md mx-auto">
        <h3 className="font-semibold text-black">Fill the Application </h3>
          {/* Name */}
          <div className="mb-4">
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none"
              placeholder="Full Name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none"
              placeholder="Enter Email Address"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none"
              placeholder="Phone Number"
            />
          </div>

          {/* Street Address */}
          <div className="mb-4">
            <input
              type="text"
              id="street"
              name="street"
              className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none"
              placeholder="Street Address"
            />
          </div>

          <div className="grid grid-cols-2 gap-[26px]">
            {/* City */}
            <div className="mb-4">
              <select
                id="city"
                name="city"
                className="w-full border-b-2 text-gray-400 border-gray-300 bg-transparent focus:outline-none"
              >
                <option value="">City</option>
                <option value="city1">City 1</option>
                <option value="city2">City 2</option>
                {/* Add more options as needed */}
              </select>
            </div>

            {/* State */}
            <div className="mb-4">
              <select
                id="state"
                name="state"
                className="w-full border-b-2 text-gray-400 border-gray-300 bg-transparent focus:outline-none"
              >
                <option value="">State</option>
                <option value="state1">State 1</option>
                <option value="state2">State 2</option>
                {/* Add more options as needed */}
              </select>
            </div>

            {/* Country */}
            <div className="mb-4">
              <select
                id="country"
                name="country"
                className="w-full border-b-2 text-gray-400 border-gray-300 bg-transparent focus:outline-none"
              >
                <option value="">Country</option>
                <option value="country1">Country 1</option>
                <option value="country2">Country 2</option>
                {/* Add more options as needed */}
              </select>
            </div>

            {/* ZIP Code */}
            <div className="mb-4">
              <select
                id="zip"
                name="zip"
                className="w-full border-b-2 text-gray-400 border-gray-300 bg-transparent focus:outline-none"
              >
                <option value="">ZIP Code</option>
                <option value="zip1">ZIP Code 1</option>
                <option value="zip2">ZIP Code 2</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          {/* <div className="text-center">
            <button
              type="submit"
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
            >
              Submit
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
