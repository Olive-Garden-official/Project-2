var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/test", function(req, res) {
    db.Recipes.findAll({}).then(function(tripleD) {
      res.render("index", {
        msg: "Welcome!",
        examples: tripleD
      });
    });
  });

  app.get("/newrecipe", function(req, res) {
    res.render("newrecipe");
  });

  app.get("/recipe", function(req, res) {
    res.render("recipe", {
      style: '..public/styles/stlyes.css'
    });
  });

  // Load recipe page and pass in an example by id
  app.get("/recipe/:id", function(req, res) {
    db.Recipes.findOne({ where: { id: req.params.id } }).then(function(oneRecipe) {
      res.render("recipe", {
        recipe: oneRecipe
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
