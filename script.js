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
    return computerSelection;
}

let playerSelection = "";
function playerPlay() {
    playerSelection = prompt("Rock, paper or scissors?");
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissor" || playerSelection == "Scissors") {
        return playerSelection;
    } else {
        playerPlay();
    }
}

function playRound() {
    computerPlay();
    playerPlay();
    if ((computerSelection === "Rock" && playerSelection === "Scissors") || (computerSelection === "Rock" && playerSelection == "Scissor")) {
        alert("You Lose! Rock beats Scissors");
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        alert("You Lose! Paper beats Rock");
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        alert("You Lose! Scissors beat Paper");
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        alert("You Win! Paper beats Rock");
    } else if ((computerSelection === "Paper" && playerSelection === "Scissors") || (computerSelection === "Paper" && playerSelection == "Scissor")) {
        alert("You Win! Scissors beat Paper");
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        alert("You win! Rock beat Scissors");
    } else {
        alert("You picked the same! Try again");
    }
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