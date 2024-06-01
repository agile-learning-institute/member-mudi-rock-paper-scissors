
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    result = Math.floor(Math.random() * 3) + 1;

    if (result === 1)
        {
            console.log("rock");
        }
    else if (result === 2)
        {
            console.log("paper");
        }
    else
        {
            console.log("scissors");
        }
}

console.log(getComputerChoice());

function getHumanChoice() {
    let text;
    let choice = prompt("Enter your choice:");

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

console.log(getHumanChoice());