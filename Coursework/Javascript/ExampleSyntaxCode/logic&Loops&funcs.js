// If else Conditionals
track = 4;
if (track === 5){
    // Triple Equals will check the datatypes are the same
} else if (track > 4){
    print("hello")
} 
else if (track == "4"){
    // Double equals will just check if their values are the same
}
else if (track !== 3){
    
}
else if (track > 3 && track < 5 || track > 3){
    
}
else{
    print("")
}

// While Loops

var i = 1;
while(i < 2){
    console.log(i);
    i++;
}


// For Loops
for (var i =1; i<2; i++){
    console.log(i);
}

// Switch Statements Look at Drum Kit Code
switch (key) {
    case value:
        
        break;

    default:
        break;
}


// Functions
function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        var array = [0,1];
        if (n == 1){
            return [0];
        }
        else if(n <= 0){
            return [];
        }
    
        for (var i = 2; i < n; i++){
            array.push(array[i-1]+array[i-2]);
        }
        return array;

        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }

// Higher order functions
function add(num1, num2){
    return num1+num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function subtract(num1, num2){
    return num1-num2;
}
function divide(num1, num2){
    return num1/num2;
}

function calculator(num1, num2, operator){
    return operator(num1, num2);
}

// Callback functions