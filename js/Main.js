let computerPlay = randomValue => {
let randomPosition = Math.floor((Math.random() * randomValue.length));
return randomValue[randomPosition];
};

function computerVsPlayer(playerSelection, computerSelection) {
  //ROCK Section -----
if (/rock/gi.test(playerSelection) && computerSelection === "Paper") {
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


let playerSelection = "Scissors";
let computerSelection = computerPlay(["Rock", "Paper", "Scissors"]);
console.log(computerVsPlayer(playerSelection, computerSelection));
