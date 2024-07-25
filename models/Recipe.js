const mongoose = require("mongoose")

const {Schema} = mongoose

const userSchema = new Schema({
  imageLink: {
    type: String,
    required: true
  },
  linkRecipe: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
},
{timestamps: true}
) 

const Recipe = mongoose.model("Recipe", userSchema)

module.exports = {Recipe};