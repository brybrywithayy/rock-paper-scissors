/*
 * ROCK PAPER SCISSORS GAME
 * 
 * Right now, just plays from the browser console
 * Need the following:
 * Function that randomly returns rock, paper, or scissors - this is the computer 'AI'
 * Function that controls each round of the game, takes 2 params and determines winner
 *  
 */

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let randomNum = randNum();
    let computerChoice = " ";
    
    if (randomNum === 1) {
        computerChoice = "Rock";
        console.log(computerChoice);
    } else if (randomNum === 2) {
        computerChoice = "Paper";
        console.log(computerChoice);
    } else if (randomNum === 3) {
        computerChoice = "Scissors"
        console.log(computerChoice);
    } else {
        console.log("Something went wrong");
    }
}

function randNum() {
    let randNum = Math.floor((Math.random() * 3) + 1);
    // console.log(randNum);
    return randNum;
}

function getPlayerChoice() {
    return "rock";
}

function playRound(playerSelection, computerSelection) {
    
}

function game() {
    for (let i=0; i<5; i++) {
        playRound(getPlayerChoice(), getComputerChoice());
        
    }
}