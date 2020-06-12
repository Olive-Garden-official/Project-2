module.exports = function(sequelize, DataTypes) {
    var recipe = sequelize.define("Recipes", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return recipe;  
  };