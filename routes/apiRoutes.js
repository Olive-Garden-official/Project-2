var db = require("../models");

module.exports = function(app) {
  // Get all recipes
  app.get("/api/recipes", function(req, res) {
    db.Recipes.findAll({}).then(function(allRecipes) {
      res.json(allRecipes);
    });
  });

  // Create a new recipe
  app.post("/api/recipes", function(req, res) {
    db.Recipes.create(req.body).then(function(oneRecipe) {
      res.json(oneRecipe);
    });
  });

};
