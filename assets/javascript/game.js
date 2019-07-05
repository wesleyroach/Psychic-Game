// VARIABLES
var teamPlayers = [
  "LENO",
  "BELLERIN",
  "KOSCIELNY",
  "MONREAL",
  "MKHITARYAN",
  "OZIL",
  "TORREIRA",
  "XHAKA",
  "LACAZETTE",
  "AUBAMEYANG",
  "IWOBI"
];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];
var winCount = 0;
var lossCount = 0;
var guessesLeft = 15;

// FUNCTIONS
function startGame() {
  var selectedWord =
    teamPlayers[Math.floor(Math.random() * teamPlayers.length)];
  lettersInWord = selectedWord.split("");
  numBlanks = lettersInWord.length;

  // RESET
  guessesLeft = 15;
  wrongLetters = [];
  blanksAndSuccesses = [];

  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }

  document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join["  "];
  document.getElementById("numGuesses").innerHTML = guessesLeft;
  document.getElementById("winCount").innerHTML = winCount;
  document.getElementById("lossCount").innerHTML = lossCount;

  // TESTING & DEBUGGING
  console.log(selectedWord);
  console.log(lettersInWord);
  console.log(numBlanks);
}

function checkLetters(letter) {
  // does the letter exist in the word
  var islettersInWord = false;
  for (i = 0; i < numBlanks; i++) {
    if (selectedWord[i] == letter) {
      islettersInWord = true;
      console.log(letter);
    }
  }
  //POPULATE BLANKS AND SUCCESSES ARRAY
  if(islettersInWord){
  for (var i = 0; i < numBlanks; i++) {
    if (selectedWord[i] == letter) {
      blanksAndSuccesses[i] = letter;
    } 
  }
} else {
  wrongLetters.push(letter);
guessesLeft--
}
console.log(blanksAndSuccesses);
}

function roundComplete(){
  console.log("Win Count " + winCount + "| Loss Count " + lossCount + "| Guess Left " + guessesLeft);
  document.getElementById("numGuesses").innerHTML = guessesLeft;
  document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
  document.getElementById("wrongLetters").innerHTML = wrongLetters.join("  ");
// CHECK IF USER WON OR LOST
if(lettersInWord.toString()=blanksAndSuccesses.toString()) {
  winCount++;
  alert(" YOU WON !!");

document.getElementById("winCount").innerHTML = winCount;

  startGame();
}
else if (guessesLeft==0) {
  lossCount++;
  alert(" I  WON   !!!!!");
  document.getElementById("lossCount").innerHTML = lossCount;
  startGame();
}
}

startGame();

document.onkeyup = function(event) {
  var letterGuessed = string.fromCharCode(events.keycode).toUpperCase();
  checkLetters(letterGuessed);
  roundComplete();
  console.log(letterGuessed);
}