const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    prep: {
        type: String,
        required: true
    }
}, {timestamps: true})

const RecipeModel = mongoose.model('Recipe', recipeSchema);

module.exports = RecipeModel;