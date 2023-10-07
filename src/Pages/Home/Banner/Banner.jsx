// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
const Banner = () => {
  const bannerData = [
    {
      id: 1,
      title: "Buy and Sell Your Past Treasures",
      buttonName: "Shop Now",
      description:
        "At our e-commerce site, you can shop with confidence knowing that every product has a story. Explore a wide range of pre-loved items, from vintage clothing to electronics, furniture to collectibles.",
      productQuantity: "2,000",
      customerQuantity: "30,000",
      photoUrl: "https://i.ibb.co/z41Mbrk/b56e94e0a1a67250ccdab0c0ad140b49.png",
    },
    {
      id: 2,
      title: "Buy and Sell Your Past Treasures",
      buttonName: "Shop Now",
      description:
        "At our e-commerce site, you can shop with confidence knowing that every product has a story. Explore a wide range of pre-loved items, from vintage clothing to electronics, furniture to collectibles.",
      productQuantity: "2,000",
      customerQuantity: "30,000",
      photoUrl: "https://i.ibb.co/z41Mbrk/b56e94e0a1a67250ccdab0c0ad140b49.png",
    },
    {
      id: 3,
      title: "Buy and Sell Your Past Treasures",
      buttonName: "Shop Now",
      description:
        "At our e-commerce site, you can shop with confidence knowing that every product has a story. Explore a wide range of pre-loved items, from vintage clothing to electronics, furniture to collectibles.",
      productQuantity: "2,000",
      customerQuantity: "30,000",
      photoUrl: "https://i.ibb.co/z41Mbrk/b56e94e0a1a67250ccdab0c0ad140b49.png",
    },
  ];

  console.log(bannerData);
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {bannerData?.map((data) => (
          <SwiperSlide key={data.id}>
            <div
              style={{
                backgroundImage: `url(${data.photoUrl})`,
              }}
              className="h-[600px] md:h-[500px] lg:h-[580px] xl:h-[827px] 2xl:h-[800px] bg-no-repeat w-full bg-cover mb-[100px]"
            >
              <div className="max-w-screen-xl mx-auto text-white pt-28 xl:pt-40 2xl:pt-48 px-8 md:px-20 lg:px-24 xl:px-32 2xl:px-0">
                <div>
                  <div className=" w-full lg:w-6/12 text-white">
                    <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl  font-bold mb-6">
                      {data?.title} <br /> {data?.titleLast}
                    </h1>
                    <p className="mb-3">{data?.description}</p>
                    <button className="bg-[#DF5645]  py-[16px] px-[54px] text-white text-[12px] mt-3 rounded-full">
                      Shop Now
                    </button>
                    <div className="flex items-center gap-4 mt-6">
                      <div>
                        <h2 className="text-3xl xl:text-4xl font-semibold">
                          {data?.productQuantity}
                        </h2>
                        <p className="text-[16px]">High Quality Products</p>
                      </div>
                      <div>
                        <h2 className="text-3xl xl:text-4xl font-semibold">
                          {data?.productQuantity}
                        </h2>
                        <p className="text-[16px]">Happy Costumers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
