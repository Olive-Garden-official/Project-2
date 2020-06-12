module.exports = function(sequelize, DataTypes) {
    var Recipes = sequelize.define("Recipes", {
      name: DataTypes.STRING,
      instructions: DataTypes.TEXT,
      ingredients: DataTypes.ARRAY(DataTypes.STRING),
      image: DataTypes.STRING,
      category: DataTypes.STRING,
      author: DataTypes.STRING
    });
    return Recipes;  
  };