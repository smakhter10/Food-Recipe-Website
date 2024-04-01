import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ _id, imgUrl, title, summary, category }) => {
  return (
    <div>
      <div className="flex gap-10 px-20">
        <Link to={`/recipe/${_id}`}>
          <div className="md:max-w-80 flex flex-col items-center justify-center border-2 border-red-700 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <img className="h-auto rounded-t-2xl" src={imgUrl} />
            <h1 className="font-roboto text-xl font-bold capitalize">
              {title}
            </h1>
            <h3 className="uppercase font-roboto text-sm font-semibold py-2">
              {category}
            </h3>
            <p className="font-roboto font-medium px-5 py-2 capitalize">
              {summary}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
