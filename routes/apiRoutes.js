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
    }
    // const [item, created] = await db.Ingredient.findOrCreate({
    
    // }).then(function(oneRecipe) {
    //   res.json(oneRecipe);
    // });
  });

};
