

var simonPath = [];
var userPath = [];
// Press Key Trigger to Start the Game
var gameActive = false;
num2Color = ["red", "green", "yellow", "blue"];



function addToSimonPath(){
    key = Math.floor(Math.random()*4);
    simonPath.push(num2Color[key]);
    dispKeyPress(simonPath[simonPath.length-1]);
}

function dispKeyPress(btnID){
    $("."+ btnID).addClass("pressed");
    var sound = new Audio('./sounds/'+btnID+'.mp3');
    sound.play();
    setTimeout(function(){
        $("."+ btnID).removeClass("pressed");
    }, 100)
}

function roundUpdate(){
    addToSimonPath()
    $("#level-title").text("Level "+ simonPath.length)
}

function gameOver(){
    gameActive = false;
}

function reset(){
    simonPath = [];
    userPath = [];
}

$(".btn").click(function (e) {
    colorPressed = this.getAttribute("id")
    dispKeyPress(colorPressed)
    console.log(colorPressed)
    console.log(simonPath[simonPath.length])
    if (colorPressed === simonPath[userPath.length]){
        userPath.push(colorPressed)
        console.log("Correct")
    }
    else{
        gameActive = false;
        var sound = new Audio('./sounds/wrong.mp3');
        sound.play();
        $(document).toggleClass("game-over");
        setTimeout(function () {
            $(document).toggleClass("game-over");
        }, 50);
        $("#level-title").text("Game Over! Press any key to play again!");
        
    }

    if (simonPath.length === userPath.length){
        setTimeout(function(){
            roundUpdate()
        }, 500)
        
        userPath = [];
    }
    
});

$(document).keydown(function (e) { 
    if (gameActive == false){
        reset();
        roundUpdate();
        gameActive = true;
    }
        
});

// Add bindings for the 4
