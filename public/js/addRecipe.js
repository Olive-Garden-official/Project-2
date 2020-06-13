document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
});


$(document).ready(function(){

  $('select').formSelect();

  var recipeName = $(); // String name
  var recipeInstructions = $(); //Text string
  var recipeIngredients = $(); // JSON.stringify the object
  var recipeImage = $(); // Link to image, set default
  var recipeCategory = $(); // String category
  var recipeAuthor = $(); // String name, default to Unknown
  
  var submitRecipe = function(event){
    event.preventDefault();




  };











})



