/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/ 

//VARIABLES
var scorePlayer = [0,0];
var roundScore = 0;
var activePlayer = 1;

/*
//DOM MANIPULATION
//SET For id="current-0" 
document.querySelector('#current-' + activePlayer).textContent = dice; 
//READ/GET for id="score-0"
var readDom = document.querySelector('#score-0').textContent;
//Changing CSS for an element Ex: class="dice"
*/

//document.querySelector('.dice').style.display = 'none';
var diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'none';

// METHOD GET ELEMENT BY ID
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


/**** Set up an event handler ****/
//1.Select the button where we will roll the dice
document.querySelector('.btn-roll').addEventListener('click',function() {
    // What happens as soon as someone clicks the button?:

    //1. We need a random number
    var dice = Math.floor(Math.random() * 6)+1;

    //2. Display the result
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3. Update the round score only if the roll number isn't 1
    } 
  );

