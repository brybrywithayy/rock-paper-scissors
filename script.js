/*
 * ROCK PAPER SCISSORS GAME
 * 
 * Right now, just plays from the browser console
 * Need the following:
 * Function that randomly returns rock, paper, or scissors - this is the computer 'AI'
 * Function that controls each round of the game, takes 2 params and determines winner
 *  
 */

// const playerSelection = getPlayerChoice().toLowerCase;
// const computerSelection = getComputerChoice().toLowerCase;

function getComputerChoice() {
    let randomNum = randNum();
    let computerChoice = " ";
    
    if (randomNum === 1) {
        computerChoice = "rock";
        console.log(computerChoice);
    } else if (randomNum === 2) {
        computerChoice = "paper";
        console.log(computerChoice);
    } else if (randomNum === 3) {
        computerChoice = "scissors"
        console.log(computerChoice);
    } else {
        console.log("Something went wrong");
    }

    return computerChoice;
}

function randNum() {
    let randNum = Math.floor((Math.random() * 3) + 1);
    // console.log(randNum);
    return randNum;
}

function getPlayerChoice() {
    // let playerChoice = prompt("Enter either rock, paper, or scissors: ").toLowerCase;
    // return playerChoice;
    return "rock";
}

function playRound() {
    // call functions to get selections
    let playerSelection = getPlayerChoice().toLowerCase;
    let computerSelection = getComputerChoice().toLowerCase;

    // win condition messages
    let rockWinsMessage = "Rock beats scissors";
    let paperWinsMessage = "Paper beats rock";
    let scissorsWinMessage = "Scissors beat paper";
    let playerWins = " - YOU WIN!";
    let computerWins = " - computer wins";
    let tieMessage = "Tie! Try again";

    // logic for sorting type precedence
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            console.log(paperWinsMessage + computerWins);
        } else if (computerSelection === "scissors") {
            console.log(rockWinsMessage + playerWins);
        } else if (computerSelection === "rock") {
            console.log(tieMessage);
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log(paperWinsMessage + playerWins);
        } else if (computerSelection === "scissors") {
            console.log(scissorsWinMessage + computerWins);
        } else if (computerSelection === "paper") {
            console.log(tieMessage);
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log(rockWinsMessage + computerWins);
        } else if (computerSelection === "paper") {
            console.log(scissorsWinMessage + playerWins);
        } else if (computerSelection === "scissors") {
            console.log(tieMessage);
        }
    }
}

function game() {
    for (let i=0; i<5; i++) {
        playRound();
    }
}

playRound();