/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/ 


//GLOBAL VARS
var scorePlayer, roundScore, activePlayer, diceDOM, gamePlaying, dice, lastDice, winningScore, gameStart;

// GAME INIT
init();

//ROLL THE DICE ACTION 
//For each Action we select the button where we will roll the dice(Event Handler)
document.querySelector('.btn-roll').addEventListener('click',function() {
    document.querySelector('.btn-winningScore').style.display = 'none';
    
    if(gamePlaying){
        //1. We need a random number and another variable to store previous dice roll
        dice = Math.floor(Math.random() * 6)+1;
        // console.log('player#' + (activePlayer+1) );
        // console.log('dice ' + dice);
        // console.log('last dice ' + lastDice);
        
        //2. Display the result
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        

    if (dice === 6 && lastDice === 6) {
            //1. Actual playerer looses his ENTIRE score 
            scorePlayer[activePlayer] = 0;
            document.getElementById('score-'+ activePlayer).textContent = scorePlayer[activePlayer];
            //2. and change player turn
            changePlayer();
            
        } else {
            //3. Update the round score only if the roll number isn't 1 or rolls two 6 in a row
            if (dice !== 1) {
                //Add value to the roundscore of the current player and print it
                roundScore += dice;
                document.getElementById('current-'+ activePlayer).textContent = roundScore;
                lastDice = dice;
            } else {
                //The actual player lost current points
                changePlayer();
            } 
        }
            
        }

        
});

 //HOLD ACTION
 document.querySelector('.btn-hold').addEventListener('click',function(){
    if (gamePlaying) {
        //Add the current score to the global scole
        scorePlayer[activePlayer] += roundScore;
        
        //Update the UI
        document.getElementById('score-'+ activePlayer).textContent = scorePlayer[activePlayer];
        
        //Check if player won the game
        if (scorePlayer[activePlayer] >= winningScore) {
            roundScore = 0;   
            //Update UI
            document.getElementById('name-'+ activePlayer).textContent = 'You Win!'; //Display this text instead of Player name
            document.getElementById('current-'+ activePlayer).textContent = roundScore;//Display the roundscore 0
            diceDOM.style.display = 'none'; // Hide the Dice
            document.querySelector('.player-0-panel').classList.remove('active');// Hide Actual player red dot
            document.querySelector('.player-1-panel').classList.remove('active');//Hide Actual Player red dot
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            gamePlaying = false;
        } else {
            //Change Player
            changePlayer();
        }
    }
 });

// NEW GAME ACTION
 document.querySelector('.btn-new').addEventListener('click',init);

  //INPUT ACTION
  document.querySelector('.btn-winningScore').addEventListener('click',function(){
        winningScore = document.getElementById("input-0").value;
        console.log(winningScore);
});

//FUNCTIONS
function init(){
    //Set default values
    scorePlayer = [0,0];
    roundScore = 0;
    activePlayer = 0;
    diceDOM = document.querySelector('.dice');
    gamePlaying = true;
    lastDice = 0;
    winningScore = 0;
    gameStart = false;

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
    document.querySelector('.btn-winningScore').style.display = 'block';    
}
 function changePlayer(){
    //The actual player lost current points or just if it click hold option
   roundScore = 0;
   document.getElementById('current-'+ activePlayer).textContent = roundScore;
   lastDice =0;

   // Player change turn
   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');
    
   //Hide the DICE
    diceDOM.style.display = 'none';
}




/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/