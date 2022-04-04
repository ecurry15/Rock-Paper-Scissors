const game = () => {
let pScore = 0;
let cScore = 0;

const playMatch = () => {
const options = document.querySelectorAll('.options button');

const computerOptions = ["rock", "paper", "scissors"];


options.forEach(option => {
  option.addEventListener('click', function () {
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];
    console.log(computerChoice);

    compareHands(this.textContent, computerChoice);
  });
});
};

const updateScore = () => {
  const playerScore = document.querySelector('.player-score p');
  const computerScore = document.querySelector('.computer-score p');
  const round = document.querySelector('.round');
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;
  if (pScore == 5) {
    round.textContent = "Congrats you Won the game";
        } else if (cScore == 5) {
          round.textContent = "You lost this game try again";
        }
};

const compareHands = (playerChoice, computerChoice) => {
  const results = document.querySelector('.results');
  //ROCK SECTION
if (playerChoice === computerChoice) {
results.textContent = "It was a tie.";
return;
};
if (playerChoice === "rock") {
if (computerChoice === "scissors") {
  results.textContent = "You Won";
  pScore++;
  updateScore();
  return;
} else {
  results.textContent = "You Lost";
  cScore++;
  updateScore();
  return;
}
};
//PAPER SECTION
  if (playerChoice === "paper") {
  if (computerChoice === "rock") {
    results.textContent = "You Won";
    pScore++;
    updateScore();
    return;
  } else {
    results.textContent = "You Lost";
    cScore++;
    updateScore();
    return;
  };
  };
  //SCISSORS SECTION
  if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      results.textContent = "You Won";
      pScore++;
      updateScore();
      return;
    } else {
      results.textContent = "You Lost";
      cScore++;
      updateScore();
      return;
    };
    };
};
const restart = document.querySelector('.restart');
restart.addEventListener('click', e => {
location.reload();
});
playMatch();
};
game();