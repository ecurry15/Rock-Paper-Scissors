let computerPlay = randomValue => {
let randomPosition = Math.floor((Math.random() * randomValue.length));
return randomValue[randomPosition];
}
console.log(computerPlay(["Rock", "Paper", "Scissors"]));