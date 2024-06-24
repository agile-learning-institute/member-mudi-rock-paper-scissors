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
