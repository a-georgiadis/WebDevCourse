// Function to wait until the document has loaded Jquery
$(document).ready(function(){

    // $("h1").css("color","red");

})

// Versions of accessing the same function

// Traditional
// document.querySelector()
// document.querySelectorAll()

// Jquery Explicity and Shorthand for changing CSS
jQuery("h1").css("color","blue");
$("h1").css("color","red");        // These are both the same regardless if there is one or many

// Adding Classes
$("h1").addClass("big-title"); // Can add multiple classes in one line

// Seeing if it has a class
$("h1").hasClass("big-title");

// Accessing text and HTML
$("h1").text("Goodbye")
$("button").html("<h4>Submit</h4>")

// Manipulating Attributes
$("a").attr("href", "https://www.youtube.com")
$("h1").attr("class")

// Adding HTML elements using JQuery
$("h1").before(""); // Before tag
$("h1").after(""); // After tag
$("h1").prepend(""); // Inside just after openning tag
$(selector).append(content);(""); // Inside just before endding tag

// Event Listeners
$("h1").click(function () { 
    $("h1").css("color", "black");
    
});

// Adding Event Listeners to multiple objects
$("button").click(function(){
    $("h1").css("color","red");
})

$("h1").on("mouseover", function(){
    $("h1").css("color","red");
})

// Adding Key listeners
$(document).keydown(function (e) { 
    $("h1").text(e.key);
});

// Visual Functionality for bringing elements into and out of view
// jQuery effect methods
$(selector).show();
$(selector).hide();
$(selector).slideDown(duration, function () {
    
});
$(selector).fadeToggle();
$(selector).animate({
    margin: "20px"
});
