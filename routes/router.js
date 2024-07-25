const router = require("express").Router()

//Task router
const recipeRouter = require("./tasks")

router.use("/", recipeRouter)

module.exports = router