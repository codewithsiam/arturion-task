import React from "react";
import aboutUsImage from "../../assets/Images/about-us.jpeg";

const AboutUs = () => {
  return (
    <div className="bg-[#F7F7F7] px-[150px] py-[90px] ">
      <h3>Home / About</h3>
      <div className="flex justify-center items-center gap-[80px] ">
        {/* title and description  */}
        <div className="w-1/2">
          <h1 className="text-[39px] font-semibold">Our Story</h1>
          <p className="py-[30px]">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        {/* image section  */}
        <div className="w-1/2">
          <img className="full h-[470px] object-cover" src={aboutUsImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
