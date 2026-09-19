function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        return "You win!";
    }
    computerScore++;
    return "Computer wins!";
}

function handleSelection(event) {
    if (humanScore === 5 || computerScore === 5) {
        return;
    }

    const humanSelection = event.target.dataset.choice;
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);

    roundNumber++;

    const resultsBody = document.querySelector("#results-body");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${roundNumber}</td>
        <td>${humanSelection}</td>
        <td>${computerSelection}</td>
        <td>${result}</td>
    `;
    resultsBody.appendChild(row);

    const score = document.querySelector("#score");
    score.textContent = `Score: You ${humanScore}, Computer ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "You win the game!" : "Computer wins the game!";
        document.querySelector("#game-over").textContent = winner;
    }
}

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", handleSelection);
});