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


  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
