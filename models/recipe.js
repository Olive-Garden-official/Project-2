module.exports = function(sequelize, DataTypes) {
    var Recipes = sequelize.define("Recipes", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      instructions: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      ingredients: {
        type: DataTypes.JSON,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
        default: "Unknown"
      }
    });
    return Recipes;  
  };