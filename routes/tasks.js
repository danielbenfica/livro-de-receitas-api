const router = require("express").Router()

const recipeController = require("../controllers/recipeController")

router
  .route("/recipes")
  .post((req, res) => recipeController.create(req, res))

  // router
  //   .route("/tasks/:id")
  //   .get((req, res) => recipeController.get(req, res))

  router
    .route("/recipes")
    .get((req, res) => recipeController.getAll(req, res))

  // router
  //   .route("/tasks/:id")
  //   .delete((req, res) => recipeController.delete(req, res))

  // router
  //   .route("/tasks/:id")
  //   .put((req, res) => recipeController.update(req, res))


module.exports = router;