import React from "react";
import signupImage from "./signup-image.jpg"; // Import your signup image

const Signup = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Side (Image) */}
      <div className="hidden lg:block w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${signupImage})` }}></div>

      {/* Right Side (Signup Form) */}
      <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-extrabold mb-4">Create an Account</h2>
        <p className="text-gray-500 mb-8">Enter your details below:</p>

        {/* Signup Form */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email or Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="example@example.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
            />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4"
            type="submit"
          >
            Sign Up
          </button>

          <div className="text-center">
            <button className="bg-white hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mr-4">
              Sign Up with Google
              {/* You can add a Google logo here */}
            </button>
          </div>

          <p className="text-gray-600 mt-4">
            Already have an account? <a className="text-blue-500 hover:underline" href="/login">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
