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
let computerScore = 0;
let playerScore = 0; 

function playRound() {
    computerPlay();
    playerPlay();
    if ((computerSelection === "Rock" && playerSelection === "Scissors") || (computerSelection === "Rock" && playerSelection == "Scissor")) {
        alert("You Lose! Rock beats Scissors")
        computerScore++;
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        alert("You Lose! Paper beats Rock");
        computerScore++;
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        alert("You Lose! Scissors beat Paper");
        computerScore++;
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        alert("You Win! Paper beats Rock");
        playerScore++;
    } else if ((computerSelection === "Paper" && playerSelection === "Scissors") || (computerSelection === "Paper" && playerSelection == "Scissor")) {
        alert("You Win! Scissors beat Paper");
        playerScore++;
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        alert("You win! Rock beat Scissors")
        playerScore++;
    } else {
        alert("You picked the same!");
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    alert("Let's play some rock, paper, scissors!\nYou against the computer, best of 5...")
    playRound();
    console.log(`Your score: ${playerScore}, Computer score: ${computerScore}`);
    playRound();
    console.log(`Your score: ${playerScore}, Computer score: ${computerScore}`);
    playRound();
    console.log(`Your score: ${playerScore}, Computer score: ${computerScore}`);
    playRound();
    console.log(`Your score: ${playerScore}, Computer score: ${computerScore}`);
    playRound();
    if (computerScore > playerScore) {
        alert(`You lost. Better luck next time!\nFinal score:\nYou: ${playerScore}, Computer: ${computerScore}`);
    } else if (computerScore < playerScore) {
        alert(`You won! Congratulations!\nFinal score:\nYou: ${playerScore}, Computer: ${computerScore}`);
    } else {
        alert(`It's a tie!\nFinal score:\nYou: ${playerScore}, Computer: ${computerScore}`)
    }
}