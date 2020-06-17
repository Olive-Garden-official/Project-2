$(document).ready(function(){

  $('select').formSelect(); 

   var recipeIngredients = [];

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

  function submitRecipe(recipeData){
    $.post("route", recipeData);
  };
  
  function addRecipe(event){
    event.preventDefault();

    var recipeName = $("#recipeName").val();
    var recipeInstructions = $("#instructions").val(); 
    var recipeImage = $("#recipeImage").val(); 
    var recipeCategory = $("#recipeCategory").val(); 
    var recipeAuthor = $("#recipeAuthor").val(); 

    let newRecipe = {
      name: recipeName,
      instructions: recipeInstructions,
      ingredients: JSON.stringify(recipeIngredients),
      image: recipeImage,
      category: recipeCategory,
      author: recipeAuthor
    };

    console.log(newRecipe);
  };

  function addIngredient(event){
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

    // name (string), quantity (int), measurement (string)
    var ingredient = {
      name: ingredientName,
      quantity: ingredientQuantity,
      measurement: ingredientMeasurement
    }
    
    recipeIngredients.push(ingredient);

    console.log(recipeIngredients);

    $("#ingredientName").val("");
    $("#ingredientQuantity").val("");
    $("#ingredientMeasurement").val("");

  }

  $(".ingredientAdd").on("click", addIngredient);
  $("#recipeSubmit").on("click", addRecipe);










})



