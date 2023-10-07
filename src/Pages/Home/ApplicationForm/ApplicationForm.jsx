import React from "react";
import ProfileForm from "./ProfileForm";

const ApplicationForm = () => {
  return (
    <div className="pt-[120px] bg-[#F2F2F2] mt-[170px]">
      <div className="w-max md:w-[1266px] mx-auto">
        <h1 className="text-gray-500 text-[32px] text-center">
          Have an item to <span className="text-black mb-[37px]">sell?</span>
        </h1>
        <p className="text-gray-500 text-center text-[16px] mb-[90px]">
          Join the Community: Register now and become part of our vibrant <br />{" "}
          community of like-minded individuals
        </p>

        <ProfileForm />
      </div>
    </div>
  );
};

export default ApplicationForm;
