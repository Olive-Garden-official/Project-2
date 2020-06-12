module.exports = function(sequelize, DataTypes) {
    var Recipes = sequelize.define("Recipes", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return Recipes;  
  };