import React from 'react';
import camera from "../../../../assets/Products/camera.png";
import facewash from "../../../../assets/Products/facewash.png";
import book from "../../../../assets/Products/book.png";
import doll from "../../../../assets/Products/doll.png";
import chair from "../../../../assets/Products/chair.png";
import frok from "../../../../assets/Products/frok.png";
import laptop from "../../../../assets/Products/laptop.png";
import vegetables from "../../../../assets/Products/vegetables.png";
import shoes from "../../../../assets/Products/shoes.png";

const cardData = [
  {
    id: 1,
    name: 'New Arrivals',
    type: 'Essential oil',
    image: camera,
    price: 49,
  },
  {
    id: 2,
    name: 'New Arrivals',
    type: 'Essential oil',
    image: facewash,
    price: 49,
  },
  {
    id: 3,
    name: 'New Arrivals',
    type: 'Essential oil',
    image: book,
    price: 49,
  },
  {
    id: 3,
    name: 'New Arrivals',
    type: 'Essential oil',
    image: doll,
    price: 49,
  },
  {
    id: 3,
    name: 'New Arrivals',
    type: 'Essential oil',
    image: chair,
    price: 49,
  },
  {
    id: 3,
    name: 'New Arrivals',
    type: 'Essential oil',
    image: frok,
    price: 49,
  },
  {
    id: 3,
    name: 'New Arrivals',
    type: 'Essential oil',
    image: laptop,
    price: 49,
  },
  {
    id: 3,
    name: 'New Arrivals',
    type: 'Essential oil',
    image: vegetables,
    price: 49,
  },
  {
    id: 3,
    name: 'New Arrivals',
    type: 'Essential oil',
    image: shoes,
    price: 49,
  },
];

const CardComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[33px] mx-auto w-max ">
      {cardData.map((card) => (
        <div className="w-[300px] h-[420px] 2xl:w-[400px] 2xl:h-[520px] mx-auto" key={card.id}>
          <div className="bg-white shadow-md">
            <div className="overflow-hidden">
              <img src={card.image} alt={card.name} className="w-full h-auto" />
            </div>
            <div className="p-4 text-start">
              <h2 className="font-normal text-gray-600 text-[16px] ">{card.name}</h2>
              <p className="font-medium text-gray-600 text-[18px] my-[7px]">{card.type}</p>
              <p className="font-semibold text-gray-600 text-[16px]">${card.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
