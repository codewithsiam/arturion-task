import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import faceoil from "../../../assets/Products/alsoLike/faceoil.png";
import iron from "../../../assets/Products/alsoLike/iron.png";
import perfume from "../../../assets/Products/alsoLike/perfume.png";


const ProductSlider = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      type: "Essential oil",
      image: perfume,
      price: 49,
    },
    {
      id: 2,
      name: "Product 2",
      type: "Essential oil",
      image: iron,
      price: 59,
    },
    {
      id: 3,
      name: "Product 3",
      type: "Essential oil",
      image: faceoil,
      price: 39,
    },
   
  ];

  const settings = {
    speed: 500,
    slidesToShow: 3,
    infinite: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings} className="w-[350px] md:w-full mx-auto">
        {products.map((product, index) => (
          <div className="shadow-md rounded-md art-product-card" key={index}>
            {/* image  */}
            <img
              src={product.image}
              className="h-[270px] w-[300px] 2xl:h-[450px] 2xl:w-[380px] object-cover rounded-t-md"
              alt="productImage"
            />
            {/* description  */}
            <div className="p-4 text-start">
              <h2 className="font-normal text-gray-600 text-[16px]">
                {product.name}
              </h2>
              <p className="font-medium text-gray-600 text-[18px] my-[7px]">
                {product.type}
              </p>
              <p className="font-semibold text-gray-600 text-[16px]">
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
