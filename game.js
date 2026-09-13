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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const results = [];

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        results.push(`Round ${i + 1}: You chose ${humanSelection}, Computer chose ${computerSelection}. ${result}`);
    }
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

    results.push(`Final score: You ${humanScore}, Computer ${computerScore}`);
    document.body.textContent = results.join("\n");
}

playGame();
