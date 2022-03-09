let computerPlay = randomValue => {
let randomPosition = Math.floor((Math.random() * randomValue.length));
return randomValue[randomPosition];
};

function computerVsPlayer(playerSelection, computerSelection) {
  if (playerSelection === "Type your choice, Rock, Paper, or Scissors..." || null) {
    return "Invalid answer, try again"
  }
  //ROCK Section -----
else if (/rock/gi.test(playerSelection) && computerSelection === "Paper") {
  return "You Lose. Paper beats Rock"
} else if (/rock/gi.test(playerSelection) && computerSelection === "Rock") {
  return "Tie. Try again"
} else if (/rock/gi.test(playerSelection) && computerSelection === "Scissors") {
  return "You Win! Rock beats Scissors"
  //PAPER SECTION -----
} else if (/paper/gi.test(playerSelection) && computerSelection === "Scissors") {
  return "You Lose. Scissors beats Paper"
} else if (/paper/gi.test(playerSelection) && computerSelection === "Paper") {
  return "Tie. Try again"
} else if (/paper/gi.test(playerSelection) && computerSelection === "Rock") {
  return "You Win! Paper beats Rock"
  //SCISSORS SECTION -----
} else if (/scissors/gi.test(playerSelection) && computerSelection === "Rock") {
  return "You Lose. Rock beats Scissors"
} else if (/scissors/gi.test(playerSelection) && computerSelection === "Scissors") {
  return "Tie. Try again"
} else if (/scissors/gi.test(playerSelection) && computerSelection === "Paper") {
  return "You Win! Scissors beats Paper"
}
};

function game() {
let playerScore = [];
let computerScore = [];
let ties = [];

//Loop to play 5 round games, a tally is pushed to 1 of the 3 arrays after each round.

  for (let i = 1; i <= 5; i++) {
let playerSelection = window.prompt("Let's play Rock, Paper, Scissors - best out of 5 wins!", "Type your choice, Rock, Paper, or Scissors...");
let computerSelection = computerPlay(["Rock", "Paper", "Scissors"]);
if (/win/gi.test(computerVsPlayer(playerSelection, computerSelection))) {
playerScore.push(1);
} else if (/lose/gi.test(computerVsPlayer(playerSelection, computerSelection))) {
  computerScore.push(1);
} else if (/tie/gi.test(computerVsPlayer(playerSelection, computerSelection))) {
  ties.push(1);
}
console.log("Round " + i + ": " + computerVsPlayer(playerSelection, computerSelection));
}
//check the total of each score and return the results after 5 rounds.
if (playerScore.length > computerScore.length) {
  return "Congrats! You won the game";
} else if (computerScore.length > playerScore.length) {
  return "Bummer, you lost this game";
} else if (playerScore.length === computerScore.length) {
return "It was a tie game, let's play again!"
}
}
console.log(game())

