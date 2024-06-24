let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let plays = ["rock", "paper", "scissors"];
    const result = Math.floor(Math.random() * 3) + 1;
    if (result === 1) {
            return plays[0];
    } else if (result === 2) {
            return plays[1];
    } else {
            return plays[2];
    }
}

function getHumanChoice() {
    let option;
    while (true) {
        option = prompt("Type in any of these: rock, paper, or scissors:").toLowerCase();
    if (option === "rock" || option === "paper" || option === "scissors") {
            return option;
        } else {
            alert("You choose a wrong option! Choose again");
        }
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);
    if (humanChoice === computerChoice) {
            console.log("No winner for this round");
    } else if ((humanChoice === "rock" && computerChoice === "paper") ||
             (humanChoice === "paper" && computerChoice === "scissors") ||
             (humanChoice === "scissors" && computerChoice === "rock")) {
                computerScore++;
                console.log("Computer wins here");
    } else {
            humanScore++;
            console.log("You win here");
    }
        console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
}
