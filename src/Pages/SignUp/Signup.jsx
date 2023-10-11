import React from "react";
import signupImage from "../../assets/Images/signup-image.png";
import GoogleIcon from "../../assets/Icons/icon-google.png";

const Signup = ({ toggleLoginSignup }) => {
  const handleSignUp = () => {
    console.log("Sign up button clicked");
  };
  return (
    <div className="flex gap-[100px] 2xl:gap-[170px] w-full h-full px-[50px] 2xl:px-[100px] py-8">
      {/* Left Side (Image) */}
      <div className="w-1/2 hidden md:flex justify-center items-center">
        <img
          src={signupImage}
          alt="signup-image"
          className=" h-[400px] w-[400px] 2xl:h-[500px] 2xl:w-[500px] "
        />
      </div>

      {/* Right Side (Signup Form) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-start ">
        <h2 className="text-[36px] font-medium mb-[10px] 2xl:mb-[24px]">
          Create an Account
        </h2>
        <p className="text-[16px] text-gray-500 mb-[20px] 2xl:mb-[48px]">
          Enter your details below:
        </p>

        {/* Signup Form */}
        <form
          onSubmit={handleSignUp}
          className="flex flex-col  gap-[25px] 2xl:gap-[35px]"
        >
          <div>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="text"
              id="emailPhone"
              name="emailPhone"
              className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none"
              placeholder="Email or Phone Number"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none"
              placeholder="Password"
            />
          </div>

          <div className="flex flex-col  md:gap-[16px]">
            <button
              className="bg-[#DB4444] hover:bg-[#f74848] text-white font-bold py-[10px] 2xl:py-[16px] px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4"
              type="submit"
            >
              Sign Up
            </button>

            <div className="text-center">
              <button className="bg-white hover:bg-gray-200 text-gray-700 py-[10px] 2xl:py-[16px] px-4 rounded w-full focus:outline-none focus:shadow-outline mr-4 flex flex-row justify-center items-center gap-[16px] border ">
                <img src={GoogleIcon} alt="" /> <p>Sign Up with Google</p>
              </button>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Already have an account?{" "}
              <span
                onClick={toggleLoginSignup}
                className="text-[#DB4444] hover:underline ml-3 cursor-pointer"
              >
                Log in
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
