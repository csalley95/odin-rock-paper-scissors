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

const humanScore = 0;
const computerScore = 0;
