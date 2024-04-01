import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const RecipeForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    imgUrl: "",
    category: "",
    summary: "",
    ingredients: "",
    prep: "",
  });

  const submitRecipe = async (e) => {
    e.preventDefault();
    const { title, imgUrl, category, summary, ingredients, prep } = data;
    try {
      const { data } = await axios.post("/api/addrecipe", {
        title,
        imgUrl,
        category,
        summary,
        ingredients,
        prep,
      });
      setData(data);
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Recipe Saved Successfully!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[rgb(227,241,255)] md:w-[550px] h-auto rounded-xl p-10 mb-10">
      <form className="flex flex-col gap-10" onSubmit={submitRecipe}>
        <div className="flex flex-col h-auto w-auto gap-2">
          <label className="text-2xl font-roboto">Recipe Title:</label>
          <input
            className="h-10 w-auto p-2 border-2 border-[#FF642F] rounded-md font-roboto font-medium capitalize  text-[#FF642F]"
            type="text"
            placeholder="Enter Recipe Name..."
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>

        <div className="flex flex-col h-auto w-auto gap-2">
          <label className="text-2xl font-roboto">Recipe Image URL:</label>
          <input
            className="h-10 w-auto p-2 border-2 border-[#FF642F] rounded-md font-roboto"
            type="text"
            placeholder="Enter Recipe Image URL..."
            value={data.imgUrl}
            onChange={(e) => setData({ ...data, imgUrl: e.target.value })}
          />
        </div>

        <div className="flex flex-col h-auto w-auto gap-2">
          <label className="text-2xl font-roboto">
            Recipe Category:
          </label>
          <input
            className="h-10 w-auto p-2 border-2 border-[#FF642F] rounded-md font-roboto font-medium capitalize  text-[#FF642F]"
            type="text"
            placeholder="Enter Recipe Category..."
            value={data.category}
            onChange={(e) => setData({ ...data, category: e.target.value })}
          />
        </div>

        <div className="flex flex-col h-auto w-auto gap-2">
          <label className="text-2xl font-roboto">Summary of the Recipe:</label>
          <input
            className="h-10 w-auto p-2 border-2 border-[#FF642F] rounded-md font-roboto font-medium capitalize  text-[#FF642F]"
            type="text"
            placeholder="Enter Summary of the Recipe..."
            value={data.summary}
            onChange={(e) => setData({ ...data, summary: e.target.value })}
          />
        </div>

        <div className="flex flex-col h-auto w-auto gap-2">
          <label className="text-2xl font-roboto">Ingredients Used:[Seperate using commas]</label>
          <input
            className="h-10 w-auto p-2 border-2 border-[#FF642F] rounded-md font-roboto font-medium capitalize  text-[#FF642F]"
            type="text"
            placeholder="Enter Ingredients Used..."
            value={data.ingredients}
            onChange={(e) => setData({ ...data, ingredients: e.target.value })}
          />
        </div>

        <div className="flex flex-col h-auto w-auto gap-2">
          <label className="text-2xl font-roboto">How To Prepare:</label>
          <textarea
            className="h-50 w-auto p-2 border-2 border-[#FF642F] rounded-md font-roboto capitalize"
            name=""
            id=""
            cols="30"
            rows=""
            value={data.prep}
            onChange={(e) => setData({ ...data, prep: e.target.value })}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-32 h-14 rounded-3xl font-roboto font-semibold bg-[#FF642F] text-white hover:scale-110 transition-all duration-300"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
