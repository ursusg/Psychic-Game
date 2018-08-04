var userGuess = [""];
var hiddenLetter = [
    "a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x",
    "y", "z"
];
var target;

// #1, get all the wins, losses, guessess left, and guessess so far
var wins = 0;
var losses = 0;
var guessleft = 9;
var guessessSoFar = [""];

// #2 record the players input

console.log(wins);
console.log(losses);

//function that tries to get a random index of the array
function getRandomChoice() {
    target = hiddenLetter[Math.round(Math.random() * (hiddenLetter.length - 1))]; 
    console.log(target);
};

function renderPage() {
    var noW = document.getElementById('numofWins');
    var noL = document.getElementById("numofLosses");
    var noG = document.getElementById("numofGuesses");
    var gL = document.getElementById("lettersGuessed");

    var html =
    "<p>Wins: " + wins + "</p" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessleft + "</p" +
    "<p>Guessess so far: " + guessessSoFar + "</p>";

    document.getElementById("game").innerHTML = html;
}

function checkGuess(uGuess) {

    if (uGuess === target) {
        wins++;
        alert("You won!");

    }
    else if (guessleft > 0) {
        guessleft--;
        alert("Wrong!");
    }
    else {
        losses--;
        alert("YOU LOSE!");
    }

    renderPage();
};

document.addEventListener("keyup", function (e) {

    //says userguess is equal to the event key
    var uGuess = e.key;

    userGuess.push(uGuess);

    checkGuess(uGuess);

});



getRandomChoice();


    //sets the cGuess equal to that function with the array hiddenLetter


    //logs that function's output


// #3 compare to random hidden letter

    //adds a listener for the keyup of a users input and runs a function




// #4 using conditionals to check if player was correct

// #5 output the results




















// var randomGuess = hiddenLetter[Math.round((Math.random()*hiddenLetter.length))];

// console.log(randomGuess);


// // var randomize = function(random){
// //     Math.round((Math.random()*hiddenLetter.length));
// //     console.log(random);
// // };

// document.get

