// Collections: Working with Javascript Arrays

var guestList = ["Angel", "Robert", "Jordan", "Demetrius", "Anis", "Anita"];

firstGuest = guestList[0]; // Accessing Array Elements

guestList.includes(firstGuest) // Should return true

// Adding items to array
var eggs = [];
eggs.push(12) // Add element to end
a = eggs.pop() // Remove element from end

// Fizz Buzz
var output = [];
var count = 1;

function fizzBuzz(){
    var text = "";
    if (count%3 === 0){
        text = "Fizz";
    }
    if (count%5 === 0){
        text = text + "Buzz";
    }
    
    if (text === ""){
        output.push(count);
    }
    else{
        output.push(text);
    }
    count += 1;

    console.log(output);
}

// Who is buying lunch
function whosPaying(names) {
    var person = Math.floor(Math.random()*names.length);
    var retVal =  names[person] + " is going to buy lunch today!";
    return retVal;

}