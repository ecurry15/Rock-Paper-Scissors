# Rock-Paper-Scissors
Live Preview :
https://ecurry15.github.io/Rock-Paper-Scissors/

---

### Table of Contents

- [Description](#description)
- [Pain Points](#Pain-Points)


---

## Description

Hi, this is my first Javascript project. It is a Rock, Paper, Scissors game that allows users to play against the computer. The player and the CPU both start with a score of 5. If the player wins, the CPU score decreases by one and vice versa if the CPU wins. When a score hits zero the game is over and the winner is shown. The first version worked with the console.log, the final version works with a user-interface. The idea comes from "theodinproject.com".

#### Languages

- Javascript
- Html/css

---
## Pain Points
---First design/ No UI ---

1. Round Results 

I had some trouble with displaying the results of each round to the console. The promt window would only show up one time before the loop started and the results of each round would only show in the console after the loop was finished. I fixed this by declaring the computerSelection and playerSelection variables inside the for loop rather than outside it.

2. Chrome Console log

I took days trying to figure out why Chrome won't register Javascript in the Dev tools right away. I found that for some reason my for loop needed to complete one time before the console would even be active. Unfortunatly, I have not been able to  find a solution yet which is why chrome users must press enter 5 times before the game starts.

--- Game With UI ---

3. I had the most trouble working with css and making the page responsive. I Solved the problem by staying away from fixed measurements and using a media query. 

[Back To The Top](#Rock-Paper-Scissors)



