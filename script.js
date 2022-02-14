let computerSelection = "";
let playerSelection = "";
let computerScore = 0;
let playerScore = 0; 

const message = document.querySelector('#message');
const score = document.querySelector('#score');
const computerPick = document.querySelector('#computerPick');

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

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        playRound();
    });
});

function playRound() {
    computerPlay();
    computerPick.textContent = `Computer played... ${computerSelection}`;
    if (computerSelection === "Rock" && playerSelection === "Scissors") {
        message.textContent = 'You Lose! Rock beats Scissors';
        computerScore++;
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        message.textContent = 'You Lose! Paper beats Rock';
        computerScore++;
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        message.textContent = 'You Lose! Scissors beat Paper';
        computerScore++;
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        message.textContent = 'You Win! Paper beats Rock';
        playerScore++;
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        message.textContent = 'You Win! Scissors beat Paper';
        playerScore++;
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        message.textContent = 'You win! Rock beat Scissors';
        playerScore++;
    } else {
        message.textContent = 'You picked the same!';
    }
    scoreTracker();
}

function scoreTracker() {
    while (playerScore < 5 && computerScore < 5) {
        return score.textContent = `Your score: ${playerScore}, Computer score: ${computerScore}`;
    };
    if (computerScore > playerScore) {
        score.textContent = "";
        alert(`You lost. Better luck next time!\nFinal score:\nYou: ${playerScore}, Computer: ${computerScore}\nPlay again?`);
    } else if (computerScore < playerScore) {
        score.textContent = "";
        alert(`You won! Congratulations!\nFinal score:\nYou: ${playerScore}, Computer: ${computerScore}\nPlay again?`);
    } else {
        score.textContent = "";
        alert(`It's a tie!\nFinal score:\nYou: ${playerScore}, Computer: ${computerScore}\nPlay again?`);
    };
    computerScore = 0;
    playerScore = 0; 
    computerPick.textContent = "";
    message.textContent = "";
};