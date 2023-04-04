/*
 * ROCK PAPER SCISSORS GAME
 * 
 * Right now, just plays from the browser console
 * Need the following:
 * Function that randomly returns rock, paper, or scissors - this is the computer 'AI'
 * Function that controls each round of the game, takes 2 params and determines winner
 *  
 */

const rock = document.querySelector("#rockbtn");
rock.addEventListener("click", () => {
    playRound(0);
});

const paper = document.querySelector("#paperbtn");
paper.addEventListener("click", () => {
    playRound(1);
});

const scissors = document.querySelector("#scissorsbtn");
scissors.addEventListener("click", () => {
    playRound(2);
})

// generate random number 0-2 for computer's choice
function randNum() {
    let randNum = Math.floor(Math.random() * 3);
    console.log("Random number for computer: " + randNum);
    return randNum;
}

// parses numeric selection into a string
function getChoiceAsString(num) {
    let strChoice = " ";

    if (num === 0) {
        strChoice = "rock";
    } else if (num === 1) {
        strChoice = "paper";
    } else if (num === 2) {
        strChoice = "scissors";
    } else {
        console.log("Invalid integer from randNum()");
    }

    console.log("Number " + num + " is " + strChoice);
    return strChoice;
}

function displayResults(playerStr, computerStr, winner) {
    // container links to existing DOM element
    const container = document.querySelector("#results");
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Player chooses " + playerStr + ". Computer chooses " + computerStr + "... " + winner;
    container.appendChild(newParagraph);
}

// evaluating winner based on numeric position rock=0, paper=1, scissors=2
// rounds start and are evaluated here
function playRound(playerNum) {
    let computerNum = randNum();
    let playerSelection = getChoiceAsString(playerNum);
    let computerSelection = getChoiceAsString(computerNum);

    if ((playerNum + 1) % 3 == computerNum) {
        displayResults(playerSelection, computerSelection, "Computer wins.");
    } else if (playerNum === computerNum) {
        displayResults(playerSelection, computerSelection, "Tie! Try again.");
    } else {
        displayResults(playerSelection, computerSelection, "YOU WIN!");
    }

}



/*
 * ORIGINAL CONSOLE VERSION
 */
// function getComputerChoice() {
//     let randomNum = randNum();
//     let computerChoice = " ";
    
//     if (randomNum === 0) {
//         computerChoice = "rock";
//         console.log("Computer chose " + computerChoice);
//     } else if (randomNum === 1) {
//         computerChoice = "paper";
//         console.log("Computer chose " + computerChoice);
//     } else if (randomNum === 2) {
//         computerChoice = "scissors"
//         console.log("Computer chose " + computerChoice);
//     } else {
//         console.log("Something went wrong");
//     }

//     return computerChoice;
// }

// function randNum() {
//     let randNum = Math.floor((Math.random() * 3));
//     console.log(randNum);
//     return randNum;
// }

// function getPlayerChoice() {
//     let playerChoice = prompt("Enter either rock, paper, or scissors: ").toLowerCase();
//     return playerChoice;
// }

// function playRound(playerSelection) {
//     // call functions to get selections
//     // let playerSelection = getPlayerChoice().toLowerCase();
//     let computerSelection = getComputerChoice().toLowerCase();

//     // win condition messages
//     let rockWinsMessage = "Rock beats scissors";
//     let paperWinsMessage = "Paper beats rock";
//     let scissorsWinMessage = "Scissors beat paper";
//     let playerWins = " - YOU WIN!";
//     let computerWins = " - computer wins";
//     let tieMessage = "Tie! Try again";

//     // logic for sorting type precedence
//     if (playerSelection === "rock") {
//         if (computerSelection == "paper") {
//             displayResults(paperWinsMessage + computerWins);
//         } else if (computerSelection == "scissors") {
//             displayResults(rockWinsMessage + playerWins);
//         } else if (computerSelection == "rock") {
//             displayResults(tieMessage);
//         }
//     } else if (playerSelection === "paper") {
//         if (computerSelection == "rock") {
//             displayResults(paperWinsMessage + playerWins);
//         } else if (computerSelection == "scissors") {
//             displayResults(scissorsWinMessage + computerWins);
//         } else if (computerSelection == "paper") {
//             displayResults(tieMessage);
//         }
//     } else if (playerSelection === "scissors") {
//         if (computerSelection == "rock") {
            
//         } else if (computerSelection == "paper") {
//             console.log(scissorsWinMessage + playerWins);
//         } else if (computerSelection == "scissors") {
//             console.log(tieMessage);
//         }
//     } else {
//         console.log("Player selection invalid");
//     }
// }

// // from console tests
// function game() {
//     for (let i=0; i<5; i++) {
//         playRound();
//     }
// }

// game();
