module.exports = function(sequelize, DataTypes) {
  var Ingredients = sequelize.define("Ingredients", {
    name: DataTypes.STRING
  });
  return Ingredients;  
};
