
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const result = Math.floor(Math.random() * 3) + 1;

    if (result === 1)
        {
            return "rock";
        }
    else if (result === 2)
        {
            return "paper";
        }
    else
        {
            return "scissors";
        }
}


function getHumanChoice() {
    let text;
    let choice = prompt("Enter your choice:").toLowerCase();

    switch (choice) {
        case "rock":
            text = "rock";
            break;
        case "paper":
            text = "paper";
            break;
        case "scissors":
            text = "scissors";
            break;
        default:
            text = "Your entered choice not found";
    }

    return text;
}




function playRound(humanChoice, computerChoice) {
    
    if ((humanChoice === "rock" && computerChoice === "rock") ||
        (humanChoice === "paper" && computerChoice === "paper") ||
        (humanChoice === "scissors" && computerChoice === "scissors")) {
            console.log("No winner for this round");
        }
    else if ((humanChoice === "rock" && computerChoice === "paper") ||
             (humanChoice === "paper" && computerChoice === "scissors") ||
             (humanChoice === "scissors" && computerChoice === "rock")) {
                computerScore++;
                console.log("Computer wins here");
             }
    else
        {
            humanScore++;
            console.log("You win here");
        }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


