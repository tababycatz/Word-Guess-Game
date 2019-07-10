//array of words..done//
//random pick word//
//how many letters
// replace letters w/ underscores
// set var for # guesses correct/wrong
// onkey func tracking user input

//Array of words for game//
var candyBrands = [
    "Twizzlers",
    "Skittles",
    "Sour Patch Kids",
    "Reese's",
    "Jolly Rancher",
    "M&M",
    "Twix",
    "Kit Kat",
    "Snickers",
    "Starburst",
    "Airheads",
    "Jelly Belly",
    "Warheads",
    "Butterfinger",
    "Nerds",
    "Haribo",
];

//To pick random words from array//
var randomCandy =
candyBrands[Math.floor(Math.random() * candyBrands.length)];

//Array for answer//
var rightLetters = [];
for (var i = 0; i < candyBrands.length; i++) {
    answer[i] = "_";

}

//Declare variables for wins, remaining guesses, user choice//

var wins = 0;
var remainingGuess = 10;
var wordChoice;
var userChoice;
var stage = 0;

// var rightLetters = "";
// var wrongLetters = "";

// KeyboardEvent.on("click", function(){

}
