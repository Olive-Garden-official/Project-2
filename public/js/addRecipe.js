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

    var newIngredient = ingredientName + " " + ingredientQuantity + " " + ingredientMeasurement;

    var addedIngredients = $("#selectedIngredients").val();
    if(addedIngredients === " "){
      $("#selectedIngredients").html(newIngredient);
      $("#selectedIngredients").height($("#selectedIngredients").height() + 16);
    } else{
      $("#selectedIngredients").html(addedIngredients + "\n" + newIngredient);
      $("#selectedIngredients").height($("#selectedIngredients").height() + 16);
    };
    

    $("#ingredientName").val("");
    $("#ingredientQuantity").val("");
    $("#ingredientMeasurement").val("");

  }

  $(".ingredientAdd").on("click", addIngredient);











})



