/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/ 

/*
//DOM MANIPULATION
//SET For id="current-0" 
document.querySelector('#current-' + activePlayer).textContent = dice; 
//READ/GET for id="score-0"
var readDom = document.querySelector('#score-0').textContent;
//Changing CSS for an element Ex: class="dice"
*/

//VARIABLES
var scorePlayer, roundScore, activePlayer, diceDOM;

// Init Game
init();

/**** Set up an event handler ****/
//ROLL THE DICE ACTION
//1.Select the button where we will roll the dice
document.querySelector('.btn-roll').addEventListener('click',function() {
    // What happens as soon as someone clicks the button?:

    //1. We need a random number
    var dice = Math.floor(Math.random() * 6)+1;

    //2. Display the result
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3. Update the round score only if the roll number isn't 1
    
    if (dice !== 1) {
        //Add value to the roundscore of the current player and print it
        roundScore += dice;
        document.getElementById('current-'+ activePlayer).textContent = roundScore;

    } else {
        //The actual player lost current points
        changePlayer();
    }

    } 
  );

 //HOLD ACTION
 document.querySelector('.btn-hold').addEventListener('click',function(){
    //Add the current score to the global scole
    scorePlayer[activePlayer] += roundScore;
   //Update the UI
   document.getElementById('score-'+ activePlayer).textContent = scorePlayer[activePlayer];
   //Check if player won the game
   if (scorePlayer[activePlayer] >= 20) {
    roundScore = 0;   
    //Update UI
       document.getElementById('name-'+ activePlayer).textContent = 'You Win!'; //Display this text instead of Player name
       document.getElementById('current-'+ activePlayer).textContent = roundScore;//Display the roundscore 0
       diceDOM.style.display = 'none'; // Hide the Dice
       document.querySelector('.player-0-panel').classList.remove('active');// Hide Actual player red dot
       document.querySelector('.player-1-panel').classList.remove('active');//Hide Actual Player red dot
       document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
   } else {
       //Change Player
   changePlayer();
   }
 });

// NEW GAME ACTION
 document.querySelector('.btn-new').addEventListener('click',init);



 function changePlayer(){
    //The actual player lost current points or just if it click hold option
   roundScore = 0;
   document.getElementById('current-'+ activePlayer).textContent = roundScore;
   // Player change turn
   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');

    //Hide the DICE
    diceDOM.style.display = 'none';
}

 function init(){
//Set default values
scorePlayer = [0,0];
roundScore = 0;
activePlayer = 0;
diceDOM = document.querySelector('.dice');

//Update UI

diceDOM.style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}