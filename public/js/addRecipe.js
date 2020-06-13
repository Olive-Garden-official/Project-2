$(document).ready(function(){

  $('select').formSelect();

  var recipeName = $(); // String name
  var recipeInstructions = $(); //Text string
  var recipeIngredients = $(); // JSON.stringify the object
  var recipeImage = $(); // Link to image, set default
  var recipeCategory = $(); // String category
  var recipeAuthor = $(); // String name, default to Unknown

  
  
  var submitRecipe = function(event){
    




  };

  var addIngredient = function(event){
    event.preventDefault();

    var ingredientName = $("#ingredientName").val();
    var ingredientQuantity = $("#ingredientQuantity").val();
    var ingredientMeasurement = $("#ingredientMeasurement").val();

    console.log(ingredientName, ingredientQuantity, ingredientMeasurement);

  }

  $(".ingredientAdd").on("click", addIngredient);











})



