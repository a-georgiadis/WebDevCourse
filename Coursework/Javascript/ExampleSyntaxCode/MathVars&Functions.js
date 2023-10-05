// Printing to Console
console.log("Logged to Console")


// Prompt and use .length properties
var message = prompt("Enter your message:");
alert("You've used " + message.length + " of 140 characters. So you have " + (140-message.length) + " remaining.")

// Slicing
var tweetUnder140 = message.slice(0,140);
alert(tweetUnder140);

// Strings
var upperMessage = message.toUpperCase();

// Numbers
var dogAge = prompt("Dog Years:");

humanAge = ((dogAge-2)*4)+21;


alert("You're dog is " + humanAge+" years old in human years.");

// Modulo
b = 123 % 2;

Math.exp(123, 2);

// Incrementers
x++
x += 1

// Functions
function getInputAndPrint(){
    a = prompt("Input your statement")
    alert("You said: " + a)
}

function getMilk(bottles){
    var cost = bottles *1.5;

    return cost
}

// Math Package Native
Math.floor(5.3)

