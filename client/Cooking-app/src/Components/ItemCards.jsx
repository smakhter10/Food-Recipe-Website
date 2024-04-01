import React from "react";

const ItemCards = ({ image, category }) => {
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <div className="p-5 h-56 w-56 rounded-full">
          <img className="hover:scale-105 transition-all duration-300 h-full w-full rounded-full" src={image} alt="" />
        </div>
        <h1 className="font-roboto font-bold text-lg">{category}</h1>
      </div>
    </div>
  );
};

export default ItemCards;
