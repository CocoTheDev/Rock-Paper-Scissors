
var items = ["rock","paper","scissors"]
var playerSelect
var playerScored = 0
var computerSelect
var computerScored = 0
var finish = false


function computerChoice () {
computerSelect = items[Math.floor(Math.random()*items.length)]
}


// Elements 
document.getElementById("paper").style.visibility = "hidden";
document.getElementById("rock").style.visibility = "hidden";
document.getElementById("scissors").style.visibility = "hidden";
var orangePlayer = document.getElementsByClassName("progress-bar-orange-player")[0];
var redPlayer = document.getElementsByClassName("progress-bar-red-player")[0];
var orangeIa = document.getElementsByClassName("progress-bar-orange-ia")[0];
var redIa = document.getElementsByClassName("progress-bar-red-ia")[0];
var startButton = document.getElementById("start-button"); 
startButton.addEventListener("click", function (){ start () });
var fightLogo = document.getElementById("fight"); 
fightLogo.style.visibility = "hidden";

// Launch game when items are clicked
document.getElementById("rock").addEventListener("click", function (){ playerSelect = "rock" ; launchGame() })
document.getElementById("paper").addEventListener("click", function (){ playerSelect = "paper" ; launchGame() })
document.getElementById("scissors").addEventListener("click", function (){ playerSelect = "scissors" ; launchGame() })



// Fonction when START is pushed
function start () {

  playerScored = 0
  computerScored = 0

  orangePlayer.style.width = '100%';
  orangeIa.style.width = '100%';
  redPlayer.style.width = '0%';
  redIa.style.width = '0%';

  fightLogo.style.visibility = "visible"; 
  setTimeout(function(){ fightLogo.style.visibility = "hidden"; }, 500);
  
  document.getElementById("paper").style.visibility = "visible";
  document.getElementById("rock").style.visibility = "visible";
  document.getElementById("scissors").style.visibility = "visible";

 };



function playground () {
  console.log(computerSelect)
  console.log(playerSelect)
    if (playerSelect === "scissors" && computerSelect === "paper"){
      playerSelect = null ;
      playerScored++ 

      return "Player scored";
    }
    else if (playerSelect === "rock" && computerSelect === "scissors"){
      playerSelect = null ; 
      playerScored++ 
      return "Player scored";
    }
    else if (playerSelect === "paper" && computerSelect === "rock"){
      playerSelect = null ;
      playerScored++  
      return "Player scored";
    }
    else if  (playerSelect == computerSelect) {
      playerSelect = null ; 
      return "Tie Game";
    }
    else {
      playerSelect = null ;
      computerScored++  
      return "IA scored";
    }
};


function displayResult (){
  document.getElementById("result").innerHTML = playground();
  document.getElementById("result2").innerHTML = "Score : " + playerScored + "-" + computerScored;
}


function score() {
  if (computerScored === 5){
    document.getElementById("result3").innerHTML = "IA WINS !";
    playerScored = 0
    computerScored = 0
  };

  if (playerScored === 5){
    document.getElementById("result3").innerHTML = "YOU WINS !";
    playerScored = 0
    computerScored = 0
  };
}


function life() {
  if (computerScored === 1){
    orangePlayer.style.width = '80%';
    redPlayer.style.width = '20%';
  };
  if (playerScored === 1){
    orangeIa.style.width = '80%';
    redIa.style.width = '20%';
  };
  
  if (computerScored === 2){
    orangePlayer.style.width = '60%';
    redPlayer.style.width = '40%';
  };
  if (playerScored === 2){
    orangeIa.style.width = '60%';
    redIa.style.width = '40%';
  };

  if (computerScored === 3){
    orangePlayer.style.width = '40%';
    redPlayer.style.width = '60%';
  };
  if (playerScored === 3){
    orangeIa.style.width = '40%';
    redIa.style.width = '60%';
  };

  if (computerScored === 4){
    orangePlayer.style.width = '20%';
    redPlayer.style.width = '80%';
  };
  if (playerScored === 4){
    orangeIa.style.width = '20%';
    redIa.style.width = '80%';
  };

  if (computerScored === 5){
    orangePlayer.style.width = '0%';
    redPlayer.style.width = '100%';
    finish = true;
  };
  if (playerScored === 5){
    orangeIa.style.width = '0%';
    redIa.style.width = '100%';
    finish = true;
  };

}


function launchGame() {
  computerChoice () ; 
  displayResult () ;
  life() ;
  score () ;
  if ( finish == true ) { start() ; finish = false } ;
}









