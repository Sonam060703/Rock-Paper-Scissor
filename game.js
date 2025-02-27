const readline = require('readline');

const choices = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'user';
    }
    return 'computer';
}

function playRound() {
    rl.question("Enter rock, paper, or scissors: ", (userChoice) => {
        userChoice = userChoice.toLowerCase().trim();
        if (!choices.includes(userChoice)) {
            console.log("Invalid choice! Try again.");
            return playRound();
        }

        let computerChoice = getComputerChoice();
        console.log(`Computer chose: ${computerChoice}`);
        
        let winner = determineWinner(userChoice, computerChoice);
        if (winner === 'user') {
            userScore++;
            console.log("You win this round!");
        } else if (winner === 'computer') {
            computerScore++;
            console.log("Computer wins this round!");
        } else {
            userScore++ ;
            computerScore++ ;
            console.log("It's a draw!");
        }

        console.log(`Score - You: ${userScore}, Computer: ${computerScore}`);
        
        if (userScore === 3) {
            console.log("Congratulations! You won the game!");
            rl.close();
        } else if (computerScore === 3) {
            console.log("Computer wins the game! Better luck next time.");
            rl.close();
        } else {
            playRound();
        }
    });
}

console.log("Welcome to Rock, Paper, Scissors! First to 3 points wins.");
playRound();
