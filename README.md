# Rock-Paper-Scissors

Live Preview : https://ecurry15.github.io/Rock-Paper-Scissors/

---

### Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)
- [Pain Points](#Pain-Points)


---

## Description

Hi, this is my first Javascript project. It is a Rock, Paper, Scissors game that allows users to play against the computer. The game plays in 5-round increments and keeps tally of each until the game ends. The user will type in their choice, the computer will randomly select an option, and then the results will show in the console log for each round as well as at the end of the game. The idea comes from "theodinproject.com".

#### Languages

- Javascript
- Html/css

---

## How To Use

1. Press F12 to view the console.
2. (Only For Google Chrome -- Skip this step for FireFox) press enter or the "Ok" button 5 times to start seeing results.
3. Enter either Rock, Paper, or Scissors in the type box and press enter.
4. Press F5 or refresh the page to restart the game after 5 rounds.

---

## Pain Points
1. Round Results 

I had some trouble with displaying the results of each round to the console. The promt window would only show up one time before the loop started and the results of each round would only show in the console after the loop was finished. I fixed this by declaring the computerSelection and playerSelection variables inside the for loop rather than outside it.

2. Chrome Console log

I took days trying to figure out why Chrome won't register Javascript in the Dev tools right away. I found that for some reason my for loop needed to complete one time before the console would even be active. Unfortunatly, I have not been able to  find a solution yet which is why chrome users must press enter 5 times before the game starts.


[Back To The Top](#Rock-Paper-Scissors)



