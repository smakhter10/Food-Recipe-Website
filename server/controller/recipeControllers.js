const Recipe = require("../models/recipeModels");

const addRecipe = async (req, res) => {
  try {
    const { title, imgUrl, category, summary, ingredients, prep } = req.body;
    //Checking if all fields are filled
    if (!title || !imgUrl || !category || !summary || !ingredients || !prep) {
      res.json({
        error: "Fill up all the fields!",
      });
    }

    //Checking if recipe name exists
    const exist = await Recipe.findOne({ title });
    if (exist) {
      return res.json({
        error: "Recipe already exists!",
      });
    }

    const recipe = await Recipe.create({
      title,
      imgUrl,
      category,
      summary,
      ingredients,
      prep,
    });

    return res.json(recipe);
  } catch (error) {
    console.log(error);
  }
};

const getRecipe = async (req, res) => {
  Recipe.find()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

const getRecipebyId = async (req, res) => {
  
  res.json(req.body);
};

module.exports = {
  addRecipe,
  getRecipe,
  getRecipebyId,
};
