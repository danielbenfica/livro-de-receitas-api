const {Recipe: RecipeModel} = require("../models/Task");

const recipeController = {
  create: async(req, res) => {
    try{
      const recipe = {
        imageLink: req.body.imageLink ? req.body.imageLink : "https://images.pexels.com/photos/5717580/pexels-photo-5717580.jpeg?auto=compress&cs=tinysrgb&h=350",
        linkRecipe: req.body.linkRecipe,
        name: req.body.name
      }
      console.log(recipe)
      const responseRecipe = await RecipeModel.create(recipe)
      res.status(201).json({responseRecipe, msg:"Receita criada com sucesso!"})
    } catch (error){
      res.status(500).json({msg:`[Error] erro ao tentar criar a receita`})
    }
  },
  get: async (req, res) => {
    try{
      const id = req.params.id

      const recipe = await RecipeModel.findById(id)

      if(!recipe){
        res.status(404).json({msg:"Receita não encontrada"})
        return;
      } 

      res.status(200).json({recipe})

    } catch (error){
      res.status(500).json({msg:"[Error] erro ao tentar buscar a receita"})
    }
  },
  getAll: async (req, res) => {
    try{
      const recipes = await RecipeModel.find({})
      
      res.json(recipes)
    } catch (error){
      res.status(500).json({msg:"[Error] erro ao tentar buscar as receitas"})
    }
  },
  delete: async(req, res) =>{
    try{
      const id = req.params.id 
      const receita = await RecipeModel.findById(id)

      if(!receita){
        res.status(404).json({msg:"Receita não encontrada"})
        return;
      }

      const deletedRecipe = await RecipeModel.findByIdAndDelete(id)

      res.status(200).json({deletedRecipe, msg:"Receita deletada com sucesso"})
      
    } catch (error){
      res.status(500).json({msg:"[Error] erro ao tentar deletar as receitas"})
    }
  },
  update: async(req, res) => {
    try {
      const id = req.params.id

      const recipe = {
        id: id,
        imageLink: req.body.imageLink,
        linkRecipe: req.body.linkRecipe,
        name: req.body.name
      }

      const updateRecipe = await updateRecipe.findByIdAndUpdate(id, recipe)

      if(!updateRecipe){
        res.status(404).json({msg:"Receita não encontrada"})
        return;
      }

      const updatedRecipe = await RecipeModel.findById(id)

      res.status(200).json({updatedRecipe, msg:"Receita atualizada com sucesso"})

    } catch (error) {
      res.status(500).json({msg:"[Error] erro ao tentar atualizar a receita"})
    }
  }
};

module.exports = recipeController;