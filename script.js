
var items = ["rock","paper","scissors"]
var playerSelect
var playerScored = 0
var computerSelect
var computerScored = 0


function computerChoice () {
computerSelect = items[Math.floor(Math.random()*items.length)]
}


// Elements 
document.getElementById("paper").style.visibility = "hidden";
document.getElementById("rock").style.visibility = "hidden";
document.getElementById("scissors").style.visibility = "hidden";
var startButton = document.getElementById("start-button"); 

var fightLogo = document.getElementById("fight"); 
fightLogo.style.visibility = "hidden";


document.getElementById("rock").addEventListener("click", function (){ playerSelect = "rock" ; launchGame() })
document.getElementById("paper").addEventListener("click", function (){ playerSelect = "paper" ; launchGame() })
document.getElementById("scissors").addEventListener("click", function (){ playerSelect = "scissors" ; launchGame() })



// Fonction when START is pushed
startButton.addEventListener("click", function (){ 


  fightLogo.style.visibility = "visible"; 
  setTimeout(function(){ fightLogo.style.visibility = "hidden"; }, 500);
  
  
  document.getElementById("paper").style.visibility = "visible";
  document.getElementById("rock").style.visibility = "visible";
  document.getElementById("scissors").style.visibility = "visible";

 })



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


function launchGame() {
  computerChoice () ; 
  displayResult () ;
  score ();
}


// // Annimation
// var tID; //we will use this variable to clear the setInterval()

// function stopAnimate() {
// clearInterval(tID);
// } //end of stopAnimate()

// function animateScript() {
//   var position = 0; //start position for the image slicer
//   const interval = 300; //100 ms of interval for the setInterval()
//   const diff = 102.4;     //diff as a variable for position offset
//   tID = setInterval ( () => {
//   document.getElementById("image").style.backgroundPosition = 
//   `-${position}px 0px`; 
// //we use the ES6 template literal to insert the variable "position"
//   if (position < 1024)
//   { position = position + diff;}
// //we increment the position by 256 each time
//   else
//   { position = 0; }
// //reset the position to 256px, once position exceeds 1536px
// }
//   , interval ); //end of setInterval
// } //end of animateScript()


// LIFE BARRE







