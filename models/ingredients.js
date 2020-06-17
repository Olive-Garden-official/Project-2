module.exports = function(sequelize, DataTypes) {
  var Ingredients = sequelize.define("Ingredients", {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    measurement: DataTypes.STRING
  });
  return Ingredients;  
};

