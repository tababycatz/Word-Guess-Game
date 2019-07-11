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
    "Twix",
    "Snickers",
    "Starburst",
    "Airheads",
    "Warheads",
    "Butterfinger",
    "Nerds",
    "Haribo",
];

//global variables -- visible throughout program// var then name then what it equals to.
var winCount = 0;
var lossCount = 0;
var remainingGuess = 10;
var rightLetters = [];
var wrongLetters = [];
var theChosenWord = "";
var theLettersofChosenWord = [];
var blankSpaces = 0;

//function is block of code used to execute multiple tasks//
function newGame() {

    theChosenWord =  candyBrands[Math.floor(Math.random() * candyBrands.length)];
    // theChosenWord = .split("");
    // blankSpaces = theLettersofChosenWord.length;
    // remainingGuess = 10;
    // winCount = 0;
    // lossCount = 0;
    
    console.log(theChosenWord);
}



//Array for answer//
// for (var i = 0; i < candyBrands.length; i++) { //
    // answer[i] = "_";

// } //

//Variables for wins, remaining guesses, user choice//
