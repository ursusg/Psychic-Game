var userGuess= [""];
var hiddenLetter= [
    "a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x",
    "y", "z"
];

// #1, get all the wins, losses, guessess left, and guessess so far
    var wins = 0;
    var losses = 0;
    var guessleft = 9;
    var guessessSoFar = [""];
    var noW = document.getElementById('numofWins');
    var noL = document.getElementById("numofLosses");
    var noG = document.getElementById("numofGuesses");
    var gL =  document.getElementById("lettersGuessed");
// #2 record the players input

    var cGuess = getRandomChoice(hiddenLetter);
    console.log(getRandomChoice(hiddenLetter));
    console.log(wins);
    console.log(losses);

    //function that tries to get a random index of the array
    function getRandomChoice(array){
        return array[Math.round(Math.random()* (array.length -1))];
    };

    function checkGuess(uGuess, cGuess){

        if(uGuess === cGuess){
            wins++;
            alert("You won!");
            
        }
        else if(guessleft > 0){
            losses++;
            guessleft--;
            alert("Wrong!");
            // noL.innerHTML = "<p> Losses:   </p>";
            // noG.innerHTML = "<p> Number of Guesses Left: </p>";
            // gL.innerHTML = "<p> You've Guessed: </p>";
        }
        else {
            alert("YOU LOSE!");
        }
    };

    document.addEventListener ("keyup", function (e){

        //says userguess is equal to the event key
        var uGuess = e.key;
        userGuess.push(uGuess);

        checkGuess(uGuess, cGuess);

    });

    var html = 
        "<p>Wins: " + wins + "</p" + 
        "<p>Losses: " + losses + "</p>" + 
        "<p>Guesses Left: " + guessleft + "</p" + 
        "<p>Guessess so far: " + guessessSoFar + "</p>";

    document.getElementById("game").innerHTML = html;
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

