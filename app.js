/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/ 

// var scorePlayer1 = 0;
// var scorePlayer2 = 0;

//VARIABLES
var scorePlayer = [0,0];
var roundScore = 0;
var activePlayer = 1;
var dice = Math.floor(Math.random() * 6)+1;
// console.log(dice);

//DOM MANIPULATION
//SET For id="current-0" */
document.querySelector('#current-' + activePlayer).textContent = dice; 
//READ/GET for id="score-0"
var readDom = document.querySelector('#score-0').textContent;
//Changing CSS for an element Ex: class="dice"
document.querySelector('.dice').style.display = 'none';



