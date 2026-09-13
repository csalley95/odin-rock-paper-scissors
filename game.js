document.body.textContent = "Hello World!";

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    while (!choices.includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    if  ((humanChoice === "rock" && computerChoice === "scissors") ||
         (humanChoice === "paper" && computerChoice === "rock") ||
         (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins!";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        console.log(`Round ${i + 1}: You chose ${humanSelection}, Computer chose ${computerSelection}. ${result}`);
    }
}

playGame();
