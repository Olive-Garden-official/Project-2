module.exports = function(sequelize, DataTypes) {
  var ingredients = sequelize.define("Ingredients", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return ingredients;  
};
