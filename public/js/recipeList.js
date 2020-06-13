//create a list for adding a recipes to a list that will be stored locally



//users should be able to choose desired recipe and add it to a list to see later.

// make a "clear" button to clear list of recipe items

$('#clearbuttonname').click(function(){
    $(':input','#formID')
    .not(':button, :submit, :reset, :hidden')
    .val('')
    .removeAttr('checked')
    .removeAttr('selected');

    $("#formID #multiple").empty();
});


// create local storage for storing and retrieving recipe choices






localStorage.setItem("");

document.getElementById("").innerHTML = localStorage.getItem("");
