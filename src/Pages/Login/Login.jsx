import React from "react";
import loginImage from "../../assets/Images/login-image.png";
import GoogleIcon from "../../assets/Icons/icon-google.png";

const Login = () => {
  const handleLogin = () => {
    console.log("Login up button clicked");
  };
  return (
    <div className="flex gap-[100px] 2xl:gap-[170px] w-full h-full px-[50px] 2xl:px-[100px]">
      {/* Left Side (Image) */}
      <div className="w-1/2 flex justify-center items-center">
        <img
          src={loginImage}
          alt="login-image"
          className="h-[400px] w-[400px] 2xl:h-[500px] 2xl:w-[500px]"
        />
      </div>

      {/* Right Side (Login Form) */}
      <div className="w-1/2 flex flex-col justify-center text-start ">
        <h2 className="text-[28px] 2xl:text-[36px] font-medium mb-[23px] 2xl:mb-[24px]">
          Log in to Exclusive
        </h2>
        <p className="text-[16px] text-gray-500 mb-[24px] 2xl:mb-[48px]">
          Enter your details below:
        </p>

        {/* Login Form */}
        <form
          onSubmit={handleLogin}
          className="flex flex-col  gap-[25px] 2xl:gap-[35px]"
        >
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

          <div className="flex flex-row justify-between items-center gap-[16px]">
            <button
              className="bg-[#DB4444] hover:bg-[#f74848] text-white font-bold py-[16px] rounded focus:outline-none focus:shadow-outline w-max px-[48px] mb-4"
              type="submit"
            >
              Sign Up
            </button>

            <a className="text-[#DB4444] hover:underline ml-3 cursor-pointer">
              Forget Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
