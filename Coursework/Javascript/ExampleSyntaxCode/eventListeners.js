
// Adding event listeners with functions to a particular event
// To see all the kinds of things to listen to can go to the MDN documentation
document.querySelector("button").addEventListener("click", handleClick); // We don't put parenthesis because we don't want handleClick to be called
document.querySelector("button").addEventListener("click", function () {
    alert("I've been clicked");
})

// Add an event listener to many buttons
buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", handleClick)
}

function handleClick(){
    alert("I got clicked");
}


// Listener for keyboard and event handling
document.addEventListener("keydown", function(event){
    console.log(event); // This will show the value of the event
})