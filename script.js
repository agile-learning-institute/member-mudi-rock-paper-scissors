let humanScore = 0;
let computerScore = 0;

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

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
    const resultBox = document.getElementsByClassName('result');
    let resultText = `Human: ${humanChoice}, Computer: ${computerChoice}. `;
        
    if (humanChoice === computerChoice) {
        resultText += "No winner for this round.";
    } else if ((humanChoice === "rock" && computerChoice === "paper") ||
                (humanChoice === "paper" && computerChoice === "scissors") ||
                (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore++;
        resultText += "Computer wins this round.";
    } else {
        humanScore++;
        resultText += "You win this round.";
    }
    
    resultText += `<br>Scores -> Human: ${humanScore}, Computer: ${computerScore}`;
    
    if (humanScore === 5) {
        resultText += "<br><strong>You win the game, Congratulations!</strong>";
        resetGame();
    } else if (computerScore === 5) {
        resultText += "<br><strong>Computer wins the game!</strong>";
    resetGame();
    }
        
    resultBox.innerHTML = resultText;
}

