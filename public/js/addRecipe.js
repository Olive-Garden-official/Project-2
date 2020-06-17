$(document).ready(function(){

  $('select').formSelect(); 

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
  
  function addRecipe(event){
    event.preventDefault();

    var recipeName = $("#recipeName").val(); // String name
    var recipeInstructions = $("#instructions").val(); //Text string
    var recipeIngredients; // JSON.stringify the object
    var recipeImage = $("#recipeImage").val(); // Link to image, set default
    var recipeCategory = $("#recipeCategory").val(); // String category
    var recipeAuthor = $("#recipeAuthor").val(); // String name, default to Unknown

    let newRecipe = {
      name: recipeName,
      instructions: recipeInstructions,
      ingredients: recipeIngredients,
      image: recipeImage,
      category: recipeCategory,
      author: recipeAuthor
    };

    console.log(newRecipe);
  };

  
  function submitRecipe(recipeData){
    $.post("route", recipeData);
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

    // Function to add to the object at the same time?
    
    

    $("#ingredientName").val("");
    $("#ingredientQuantity").val("");
    $("#ingredientMeasurement").val("");

  }

  $(".ingredientAdd").on("click", addIngredient);
  $("#recipeSubmit").on("click", addRecipe);










})



