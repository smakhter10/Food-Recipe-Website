import React from "react";
import RecipeForm from "../Components/RecipeForm";

const AddRecipe = () => {


  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="font-pacifico text-2xl mb-5">Create New Recipe</h1>
      <RecipeForm />
    </div>
  );
};

export default AddRecipe;
