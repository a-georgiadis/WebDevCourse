
var player1 = 1;
var player2 = 1;
var image1 = "";
var image2 = "";

function  rollDie(){
    num = Math.floor(Math.random()*5+1);
    return num;
}

player1 = rollDie();
player2 = rollDie();
document.querySelector(".img1").setAttribute("src", "./images/dice"+player1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice"+player2 + ".png");


if (player1>player2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if (player1<player2){
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
else{
    document.querySelector("h1").innerHTML = "It's a Draw";
}