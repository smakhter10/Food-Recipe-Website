import React, { useEffect, useState } from "react";
import RecipeCard from "../Components/RecipeCard";
import axios from "axios";

const Recipes = () => {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    axios("/api/getrecipe")
      .then((result) => setRecipe(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center mt-6">
        <h1 className="text-5xl font-pacifico text-red-400 underline">
          Recipes
        </h1>
      </div>

      <div className="my-10">
        {recipe.map((item, index) => (
          <RecipeCard
            _id={item._id}
            imgUrl={item.imgUrl}
            title={item.title}
            summary={item.summary}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
