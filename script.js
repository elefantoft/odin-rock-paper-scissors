//The computer randomly picks rock, paper, or scissors
let computerChoice = Math.random()*3;
function computerPlay() {
    if (computerChoice < 1) {
        computerChoice = "Rock";
    } else if (computerChoice < 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors"
    }
}


//The computer doesn't reveal it's pick
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