//The computer randomly picks rock, paper, or scissors
let computerSelection = "";
function computerPlay() {
    computerSelection = Math.random()*3;
    if (computerSelection < 1) {
        computerSelection = "Rock";
    } else if (computerSelection < 2) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors"
    }
};

//The computer doesn't reveal it's pick
//The user is prompted to choose rock, paper or scissor.
let playerSelection = "";
function playerPlay() {
    playerSelection = prompt("Rock, paper or scissors?");
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissor" || playerSelection == "Scissors") {
        return playerSelection;
    } else {
        playerPlay();
    };
}

function playGame() {
    computerPlay();
    playerSelection = prompt("Rock, paper or scissors?");
    playerSelection.toLowerCase() + playerSelection.charAt(0).toUpperCase();
    console.log(computerSelection);
    console.log(playerSelection);
    
    
}




//The user is prompted to choose rock, paper or scissor.
//The user chooses rock, paper or scissor.
//Any other imput, the user is prompted to pick either rock, paper or scissor.
//The computer reveals its pick
//If the answers are equal, choose again.
//If user picks scissor && computer picks paper = User won
//Else computer won
// If user picks paper && computer picks rock = User won
//Else computer won
//If user picks rock && computer picks scissor = User won
//Else computer won