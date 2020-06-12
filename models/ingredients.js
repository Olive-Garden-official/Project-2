module.exports = function(sequelize, DataTypes) {
  var Ingredients = sequelize.define("Ingredients", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Ingredients;  
};
