var db = require("../models");

module.exports = function(app) {
  // Get all recipes
  app.get("/api/recipes", function(req, res) {
    db.Recipes.findAll({}).then(function(allRecipes) {
      res.json(allRecipes);
    });
  });

  // Get ingredient names
  app.get("/api/ingredients/name", function(req, res){
    db.Ingredients.findAll({
      attributes: ["name"]
    }).then(function(allNames){
      res.json(allNames);
    });
  });

  // Get ingredient quantities
  app.get("/api/ingredients/quantity", function(req, res){
    db.Ingredients.findAll({
      attributes: ["quantity"]
    }).then(function(allQuantity){
      res.json(allQuantity);
    });
  });

  // Get ingredient measurements
  app.get("/api/ingredients/measurement", function(req, res){
    db.Ingredients.findAll({
      attributes: ["measurement"]
    }).then(function(allMeasurement){
      res.json(allMeasurement);
    });
  });

  // Create a new recipe
  app.post("/api/recipes", function(req, res) {
    db.Recipes.create(req.body).then(function(oneRecipe) {
      res.json(oneRecipe);
    });
  });

  // Update ingredients 
  app.post("/api/ingredients", async function(req, res) {
    for(var item in req.body){
      item = JSON.parse(item);
      db.Ingredients.findOrCreate({
        where: { 
          name: item.name,
          quantity: item.quantity,
          measurement: item.measurement
        },
        defaults:{

        }
      }).then(function(created) {
        res.json(created);
      });
    };
  });

};
