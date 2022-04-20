//RANDOMLY SELECTS ROCK, PAPER, SCISSORS ---
const computerSelection = function () {
  let computerChoices = ["Rock", "Paper", "Scissors"];
  let computerNum = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  return computerChoices[computerNum];
}

//SCORE ---
let playerScore = document.querySelector('#playerNumber');
playerScore.textContent = 5;

let computerScore = document.querySelector('#computerNumber');
computerScore.textContent = 5;

//ROCK SECTION -----

//TIE -----
const rockTie = function () {
  document.getElementById('results').style.display = "block";
  document.querySelector('#results').textContent = "TIE!"
  document.getElementById('playerIMG').style.display = "inline-flex";
  document.getElementById('playerIMG').src = "/Rock-Paper-Scissors/Pictures/player-rock.png";
  document.getElementById('playerIMG').style.marginTop = "0";
  document.getElementById('computerIMG').style.display = "inline-flex";
  document.getElementById('computerIMG').src = "/Rock-Paper-Scissors/Pictures/computer-rock.png";
  document.getElementById('computerIMG').style.marginTop = "0";
};

//ROCK VS PAPER ----
const rockVsPaper = function () {
  document.getElementById('results').style.display = "block";
  document.querySelector('#results').textContent = "I Won 🤖";
  document.getElementById('playerIMG').style.display = "inline-flex";
  document.getElementById('playerIMG').src = "/Rock-Paper-Scissors/Pictures/rock-red.png";
  document.getElementById('playerIMG').style.marginTop = "0";
  document.getElementById('computerIMG').style.display = "inline-flex";
  document.getElementById('computerIMG').src = "/Rock-Paper-Scissors/Pictures/computer-paper.png";
  document.getElementById('computerIMG').style.height = "18%";
  document.getElementById('computerIMG').style.marginTop = "0";
  playerScore.textContent--;
};

//ROCK VS SCISSORS -----
const rockVsScissors = function () {
  document.getElementById('results').style.display = "block";
  document.querySelector('#results').textContent = "NICE! 👍";
  document.getElementById('playerIMG').style.display = "inline-flex";
  document.getElementById('playerIMG').src = "/Rock-Paper-Scissors/Pictures/rock-green.png";
  document.getElementById('playerIMG').style.marginTop = "0";
  document.getElementById('computerIMG').src = "/Rock-Paper-Scissors/Pictures/computer-scissors.png";
  document.getElementById('computerIMG').style.display = "inline-flex";
  document.getElementById('computerIMG').style.marginTop = "1.2%";
  computerScore.textContent--;
};

//PAPER SECTION-----

//TIE ---
const paperTie = function () {
  document.getElementById('results').style.display = "block";
  document.querySelector('#results').textContent = "TIE!"
  document.getElementById('playerIMG').style.display = "inline-flex";
  document.getElementById('playerIMG').src = "/Rock-Paper-Scissors/Pictures/computer-paper.png";
  document.getElementById('playerIMG').style.marginTop = "0";
  document.getElementById('computerIMG').style.display = "inline-flex";
  document.getElementById('computerIMG').src = "/Rock-Paper-Scissors/Pictures/computer-paper.png";
  document.getElementById('computerIMG').style.marginTop = "0";
};

//PAPER VS SCISSORS ------
const paperVsScissors = function () {
  document.getElementById('results').style.display = "block";
  document.querySelector('#results').textContent = "I Won 🤖";
  document.getElementById('playerIMG').style.display = "inline-flex";
  document.getElementById('playerIMG').src = "/Rock-Paper-Scissors/Pictures/paper-red.png";
  document.getElementById('playerIMG').style.marginTop = "0";
  document.getElementById('computerIMG').style.display = "inline-flex";
  document.getElementById('computerIMG').src = "/Rock-Paper-Scissors/Pictures/computer-scissors.png";
  document.getElementById('computerIMG').style.marginTop = "1.2%";
  playerScore.textContent--;
};

//PAPER VS ROCK ----
const paperVsRock = function () {
  document.getElementById('results').style.display = "block";
  document.querySelector('#results').textContent = "NICE! 👍";
  document.getElementById('playerIMG').style.display = "inline-flex";
  document.getElementById('playerIMG').src = "/Rock-Paper-Scissors/Pictures/paper-green.png";
  document.getElementById('playerIMG').style.marginTop = "0";
  document.getElementById('computerIMG').style.display = "inline-flex";
  document.getElementById('computerIMG').src = "/Rock-Paper-Scissors/Pictures/computer-rock.png";
  document.getElementById('computerIMG').style.marginTop = "0";
  computerScore.textContent--;
};
//SCISSORS SECTION ----

//TIE --
const scissorsTie = function () {
  document.getElementById('results').style.display = "block";
  document.querySelector('#results').textContent = "TIE!"
  document.getElementById('playerIMG').style.display = "inline-flex";
  document.getElementById('playerIMG').src = "/Rock-Paper-Scissors/Pictures/player-scissors.png";
  document.getElementById('playerIMG').style.marginTop = "1.2%";
  document.getElementById('computerIMG').style.display = "inline-flex";
  document.getElementById('computerIMG').src = "/Rock-Paper-Scissors/Pictures/computer-scissors.png";
  document.getElementById('computerIMG').style.marginTop = "1.2%";
};

//SCISSORS VS ROCK ---- 
const scissorsVsRock = function () {
  document.getElementById('results').style.display = "block";
  document.querySelector('#results').textContent = "I Won 🤖";
  document.getElementById('playerIMG').style.display = "inline-flex";
  document.getElementById('playerIMG').src = "/Rock-Paper-Scissors/Pictures/player-scissors-red.png";
  document.getElementById('playerIMG').style.marginTop = "1.2%";
  document.getElementById('computerIMG').style.display = "inline-flex";
  document.getElementById('computerIMG').src = "/Rock-Paper-Scissors/Pictures/computer-rock.png";
  document.getElementById('computerIMG').style.marginTop = "0";
  playerScore.textContent--;
};

//SCISSORS VS PAPER ----
const scissorsVsPaper = function () {
  document.getElementById('results').style.display = "block";
  document.querySelector('#results').textContent = "NICE! 👍";
  document.getElementById('playerIMG').style.display = "inline-flex";
  document.getElementById('playerIMG').src = "/Rock-Paper-Scissors/Pictures/player-scissors-green.png";
  document.getElementById('playerIMG').style.marginTop = "1.2%";
  document.getElementById('computerIMG').style.display = "inline-flex";
  document.getElementById('computerIMG').src = "/Rock-Paper-Scissors/Pictures/computer-paper.png";
  document.getElementById('computerIMG').style.marginTop = "0";
  computerScore.textContent--;
}
//END OF GAME SECTION----

//PLAYER WIN ----
const playerWins = function () {
  document.querySelector('#title').textContent = "You beat me! 🤯";
  document.getElementById('body').style.backgroundImage = "none";
  document.getElementById('body').style.backgroundColor = "rgb(36,130,40)";
  if (computerScore.textContent > 0) {
    computerScore.textContent--;
  }
};

//COMPUTER WIN ---
const computerWins = function () {
  document.querySelector('#title').textContent = "ROBOT > HUMAN! 🤖";
  document.getElementById('body').style.backgroundImage = "none";
  document.getElementById('body').style.backgroundColor = "rgb(186,61,61)";
  if (playerScore.textContent > 0) {
    playerScore.textContent--;
  }
};
//END OF GAME ---

//WHEN PLAYER CLICKS ROCK,PAPER,OR SCISSORS ----

//ROCK -----
document.querySelector('#rock').addEventListener('click', function () {
if (playerScore.textContent > 1 && computerScore.textContent > 1) {
  if (computerSelection() === "Rock") {
    rockTie();
  } else if (computerSelection() === "Paper") {
    rockVsPaper();
  } else if (computerSelection() === "Scissors") {
    rockVsScissors();
  }
  } else if (computerScore.textContent <= 1 && playerScore.textContent > 1) {
playerWins();
  } else if (playerScore.textContent <= 1 && computerScore.textContent > 1) {
computerWins();
  };
});

//PAPER ------
document.querySelector('#paper').addEventListener('click', function () {
  if (playerScore.textContent > 1 && computerScore.textContent > 1) {
    if (computerSelection() === "Paper") {
      paperTie();
    } else if (computerSelection() === "Scissors") {
      paperVsScissors();
    } else if (computerSelection() === "Rock") {
     paperVsRock();
    }
    } else if (computerScore.textContent <= 1 && playerScore.textContent > 1) {
  playerWins();
    } else if (playerScore.textContent <= 1 && computerScore.textContent > 1) {
  computerWins();
    };
});

//SCISSORS -----
document.querySelector('#scissors').addEventListener('click', function () {
  if (playerScore.textContent > 1 && computerScore.textContent > 1) {
    if (computerSelection() === "Scissors") {
      scissorsTie();
    } else if (computerSelection() === "Rock") {
      scissorsVsRock();
    } else if (computerSelection() === "Paper") {
     scissorsVsPaper();
    }
    } else if (computerScore.textContent <= 1 && playerScore.textContent > 1) {
  playerWins();
    } else if (playerScore.textContent <= 1 && computerScore.textContent > 1) {
  computerWins();
    };
});

//RESET GAME ----
document.querySelector('#startOver').addEventListener('click', function () {
  document.getElementById('results').style.display = "none";
  document.getElementById('playerIMG').style.display = "none";
  document.getElementById('computerIMG').style.display = "none";
  playerScore.textContent = 5;
  computerScore.textContent = 5;
  document.querySelector('#title').textContent = "ROCK, PAPER, SCISSORS";
  document.getElementById('body').style.backgroundImage = "linear-gradient(2deg, rgba(15, 15, 15) 38%, #4b4b4b)"
});