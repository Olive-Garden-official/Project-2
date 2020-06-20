$(document).ready(function(){

  $('select').formSelect(); 
  $('.modal').modal();

  var recipeIngredients = [];

  function getNames(){
    var data = {};

    $.ajax({
      url: "api/ingredients/name",
      type: "GET"
    }).then(function(listNames){
      listNames.forEach(item => {
        data[item.name] = null;
      });
      $('#ingredientName').autocomplete({
        data
      });
    });
  };

  function getQuantity(){
    var data = {};

    $.ajax({
      url: "api/ingredients/quantity",
      type: "GET"
    }).then(function(listQuantity){
      listQuantity.forEach(item => {
        data[item.quantity] = null;
      });
      $('#ingredientQuantity').autocomplete({
        data
      });
    });
  };

  function getMeasurement(){
    var data = {};

    $.ajax({
      url: "api/ingredients/measurement",
      type: "GET"
    }).then(function(listMeasurements){
      listMeasurements.forEach(item => {
        data[item.measurement] = null;
      });
      $('#ingredientMeasurement').autocomplete({
        data
      });
    });
  };

  function submitRecipe(recipeData){
    $.post("/api/recipes", recipeData);
  };

  function submitIngredients(ingredientData){
    $.post("/api/ingredients", ingredientData);
  }
  
  function addRecipe(event){
    event.preventDefault();  

    var recipeName = $("#recipeName").val();
    var recipeInstructions = $("#instructions").val(); 
    var recipeImage = $("#recipeImage").val(); 
    var recipeCategory = $("#recipeCategory").val(); // Actual selection
    var categorySelection =  $("#recipeCategory").prop("value"); // Check that it is not the default
    var recipeAuthor = $("#recipeAuthor").val(); 

    if(recipeName != "" && recipeInstructions != "" && recipeIngredients != " " && categorySelection > 0){
      let newRecipe = {
        name: recipeName,
        instructions: recipeInstructions,
        ingredients: JSON.stringify(recipeIngredients),
        image: recipeImage,
        category: recipeCategory,
        author: recipeAuthor
      };

      submitRecipe(newRecipe);
      
      recipeIngredients.forEach(item =>
        submitIngredients(JSON.stringify(item))
      );

      $("#recipeName").val("");
      $("#instructions").val(""); 
      $("#recipeImage").val(""); 
      $("#recipeAuthor").val("Unknown"); 
      $("#selectedIngredients").val("");
    }; 
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
      } else{
        $("#selectedIngredients").html(addedIngredients + "\n" + newIngredient);
      };
      // name (string), quantity (int), measurement (string)
      let ingredient = {
        name: ingredientName,
        quantity: ingredientQuantity,
        measurement: ingredientMeasurement
      }
      
      recipeIngredients.push(ingredient);

      $("#ingredientName").val("");
      $("#ingredientQuantity").val("");
      $("#ingredientMeasurement").val("");
      M.textareaAutoResize($('#selectedIngredients'));
    };
  };

  getNames();
  getQuantity();
  getMeasurement();

  $("#ingredientAdd").on("click", addIngredient);
  $("#recipeSubmit").on("click", addRecipe);

});



