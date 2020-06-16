$(document).ready(function(){

  $('select').formSelect();

  var recipeName = $(); // String name
  var recipeInstructions = $(); //Text string
  var recipeIngredients = $(); // JSON.stringify the object
  var recipeImage = $(); // Link to image, set default
  var recipeCategory = $(); // String category
  var recipeAuthor = $(); // String name, default to Unknown


  // Have the data property pull from Ingredients table
  // Name and link to image if wanted
  $('#ingredientName').autocomplete({
    data: {
      "apple": null,
      "banana": null,
      "cheddar cheese": null
    },
  });

  $('#ingredientQuantity').autocomplete({
    data: {
      1: null,
      "1/2": null,
      "1/4": null
    },
  });

  $('#ingredientMeasurement').autocomplete({
    data: {
      "tsp": null,
      "Tbsp": null,
      "cup": null
    },
  });

  
  var submitRecipe = function(event){

  };

  var addIngredient = function(event){
    event.preventDefault();

    var ingredientName = $("#ingredientName").val();
    var ingredientQuantity = $("#ingredientQuantity").val();
    var ingredientMeasurement = $("#ingredientMeasurement").val();

    var addedIngredients = $("#selectedIngredients").val();

    // Check for blank values
    if(ingredientName != "" && ingredientQuantity != "" && ingredientMeasurement != ""){
      var newIngredient = ingredientName + " " + ingredientQuantity + " " + ingredientMeasurement;
    } else {
      var newIngredient = "";
    }
    
    if(newIngredient != "") {
      if(addedIngredients === " "){
        $("#selectedIngredients").html(newIngredient);
        $("#selectedIngredients").height($("#selectedIngredients").height() + 16);
      } else{
        $("#selectedIngredients").html(addedIngredients + "\n" + newIngredient);
        $("#selectedIngredients").height($("#selectedIngredients").height() + 16);
      };
    }
    
    

    $("#ingredientName").val("");
    $("#ingredientQuantity").val("");
    $("#ingredientMeasurement").val("");

  }

  $(".ingredientAdd").on("click", addIngredient);











})



