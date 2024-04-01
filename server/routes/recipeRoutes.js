const express = require("express");
const router = express.Router();
const { addRecipe, getRecipe, getRecipebyId } = require("../controller/recipeControllers");
const cors = require('cors')

//Middleware
router.use(
    cors({
        credentials: true,
        origin: process.env.BASE_URL
    })
)

router.post("/addrecipe", addRecipe);
router.get("/getrecipe", getRecipe);
router.get("/getrecipe/:id", getRecipebyId);

module.exports = router
