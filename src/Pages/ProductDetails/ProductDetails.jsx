import React from "react";
import image1 from "../../assets/Cart/cart-item.jpeg";
import Newsletter from "../Home/Newsletter/Newsletter";
import AlsoProducts from "./AlsoProducts/AlsoProducts";

const ProductDetails = () => {
  const product = {
    name: "something",
    brand: "fiama |  female",
    description:
      "Rosemary oil has anti-inflammatory and pain-relieving properties you can benefit from by massaging the oil on the affected area. Mix 1 teaspoon of a carrier oil with 5 drops of rosemary oil to create an effective salve. Use it for headaches, sprains, muscle soreness or pain, rheumatism or arthritis. ",
    price: 49,
    images: [image1, image1, image1, image1],
  };

  return (
    <div className="bg-[#F7F7F7] md:px-0">
      <div className="max-w-5xl mx-auto pb-[100px] px-3 md:px-14">
        <p className="font-bold py-[60px] 2xl:py-[80px]">
          Home - essential oil
        </p>
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-[100px] 2xl:gap-[140px]  mb-[220px] ">
          {/* left side - photo section */}
          <div className="flex flex-col items-center text-center w-full md:w-2/5">
            <div className="w-full max-w-md">
              {/* Big Image */}
              <img
                src={product.images[0]}
                alt="Big Image"
                className="w-full h-auto max-h-[350px] max-w-[540px] object-cover rounded-t-xl"
              />
            </div>
            <div className="flex justify-between mt-4 w-full">
              {/* Small Images */}
              <div className="w-full flex justify-between gap-4">
                {product.images.slice(1, 4).map((image, index) => (
                  <div
                    key={index}
                    className="w-1/3 max-w-xs aspect-w-1 aspect-h-1"
                  >
                    <img
                      src={image}
                      alt={`Small Image ${index + 1}`}
                      className="w-full h-[150px] object-cover rounded-t-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* right side - details and add cart section */}
          <div className="w-full md:w-3/5 mt-auto">
            <p className="text-gray-500">
              <span className="font-bold mr-2">Brand:</span> {product.brand}
            </p>
            <p className="mt-[40px] my-[40px]">{product.description}</p>

            <p className="mt-4 text-3xl font-semibold art-text-primary mb-[90px]">
              ${product.price}
            </p>

            <div className="flex items-center mt-auto">
              {/* quantity calculation  */}
              <button className="bg-gray-200 text-gray-600 w-[30px] h-[30px] 2xl:w-[40px] 2xl:h-[40px] px-auto py-auto rounded-md">
                -
              </button>
              <p className="text-2xl mx-4">1</p>
              <button className="bg-[#DF5645] hover:bg-[#fa4830] text-white w-[30px] h-[30px] 2xl:w-[40px] 2xl:h-[40px] px-auto py-auto rounded-md">
                +
              </button>
            </div>

            <button className="mt-4 art-bg-primary text-white px-4 py-[16px] 2xl:py-[24px] art-bg-primary hover:bg-[#fa4830] w-full rounded-md">
              Add to Cart
            </button>
            <button className="mt-2 bg-white art-text-primary px-4 py-[16px] 2xl:py-[24px]  hover:bg-[#ffdbd6] w-full rounded-md border art-border-primary">
              Save
            </button>
          </div>
        </div>
        {/* Also products you may like  */}
        <AlsoProducts />
      </div>

      {/* newsletter subscribe  */}
      <Newsletter />
    </div>
  );
};

export default ProductDetails;
