//create a list for adding a recipes to a list that will be stored locally

const ingredients = require("../../models/ingredients");

var items = [''];
var rList = $('ul.mylist');
items.map( (item,i ) => {
      var li = $('<li/>')
        .addClass('ui-menu-item')
        .attr('role', 'menuitem')
        .appendTo(rList);
      $('<a class="ui-all">'+ i + ': ' + item.name + '<a/>')
        .appendTo(li);
    });
// ".mylist" will be changed to match the class name of the ul list created in the html and classes can be changed to match that of materialize.
//---------------------------------------------------------------------------------------------------------------------------------------------------------

//users should be able to choose and create desired recipe and add it to a list to see later.

var recipeVariable = $("#recipe-input").val().trim();
var ingredientVariable = $("#ingredient-input").val().trim();
var measurement = $("#measurement-input").val().trim();
var comment = $("#comment-input").val().trim();


$("#recipe-display").text(recipeVariable);
$("#ingredient-display").text(ingredientVariable);
$("#measurement-display").text(measurement);
$("#comment-display").text(comment);

//something like this maybe
$('<ul />').append($('ul li.chosenRecipe').clone()).appendTo(document.body);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// make a "clear" button to clear list of recipe items
$('#clear').click(function(){
    $(':input','#formID')
    .not(':button, :submit, :reset, :hidden')
    .val('')
    .removeAttr('checked')
    .removeAttr('selected');

    $("#formID #multiple").empty();
});
//can clear local storage if we want a button for that as well.
//localStorage.clear();

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// create local storage for storing and retrieving recipe choices
//uses cookies, sessionStorage, and localStorage to save and reuse user data across a user’s session.


localStorage.setItem("recipe", recipeVariable);
localStorage.setItem("ingredient", ingredientVariable);
//can also use session storage to call items


document.getElementById("").innerHTML = localStorage.getItem("");

