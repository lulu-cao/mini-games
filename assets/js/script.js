var words = ["shark", "dolphin", "turtle", "octopus", "whale", "starfish", "clownfish"];
var guess = document.querySelector("#guess");
var wins = document.querySelector("#wins");
var losses = document.querySelector("#losses");
var i = 0;

// load the numbers of wins and losses from local storage, if any
function init() {
    localStorage.getItem("wins");
    localStorage.getItem("losses");
    wins.textContent = wins;
    losses.textContent = losses;
};

//create blanks from the array "words"
function renderBlanks() {
    chosenWord = words[Math.floor(Math.random() * words.length)]; //choose a random word from the array
    lettersInChosenWord = chosenWord.split(""); //split the chosen word into elements in an array
    numBlanks = lettersInChosenWord.length; //setting the number of blanks by the length of the chosen word
    blanks = [] //setting blanks as an empty array

    for (var i = 0; i < numBlanks; i++) {
        blanks.push("_"); //each blank will be an underscore
    }

    blankDisplay.textContent = blanks.join(" "); //each blank with be joined with a space in the display
}

//start game
Button.addEventListener("click", function(event) {
    event.preventDefault();
    for (var i = 0; i < words.length; i++) {
        guess.textContent = words[i];
    };

    // setting countdown
        function countdown() {var timeLeft = 5;
            var timeInterval = setInterval(function() {
            timeLeft--; 
            span.textContent = timeLeft;
            
            if (timeLeft < 0) {
                clearInterval(setInterval);
                losses++;
                guess.textContent = "";
            }
            })

            countdown();            
        }
})

//if a letter is pressed 
document.addEventListener("keydown", function(event) {
    var key = event.key.toLowerCase(); //convert the entered key in the function(event) to lower case
    var characters = "abcdefghijklmnopqrstuvwxyz".split("");
    if (characters.includes(key)) { //check if the entered key is a valid letter
        var letterTried = event.key; //if so, the key will be stored in the variable letterTried
        checkLetters(letterTried); //check if the letter is successfully guessed
        checkWin(); //check if the word is successfully guessed
    }

    function checkLetters(letter) {
        var lettersConfirmed = false; // set the initial value so that no letters is confirmed
        for (var i = 0; i < numBlanks; i++) {
            if (chosenWord[i] === letterTried) { //if any letter in the chosen word is the letter tried
                lettersConfirmed = true; // the letter would be confirmed
            }
        }

        if (lettersConfirmed) { //if the letter is confirmed
            for (var j = 0; j < numBlanks; j++) {
                if (chosenWord[j] === letterTried) { //and if it matched any letter in the chosen word
                    blanks[j] = letter; // the letter will substitute for the empty blank
                }
            }
        }

        blankDisplay.textContent = blanks.join("");
    }

    //if a word is sucessfully guessed, add 1 to wins
    let success = words[i];
    if (singleletter.includes(success)) {
        console.log(success);
        wins++;
        guess.textContent = "";
    } 
});

//storage locally the number of wins and losses
localStorage.setItem("wins", wins);
localStorage.setItem("losses", losses);



