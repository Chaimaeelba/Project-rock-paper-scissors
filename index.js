var options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    var choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function getHumanChoice() {
    var validatedInput = false;
    while (validatedInput==false) {
        const choice = prompt("Choose one of the three choices - rock, paper, or scissors:");
        if (choice == null) {
            console.log("You must make a choice!");
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        } else {
            console.log("Invalid choice. Please choose rock, paper, or scissors.");
        }
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a draw! Both you and the computer chose ${playerSelection}.`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return `Congratulations! Your ${playerSelection} outsmarted the computer's ${computerSelection}. You win this round!`;
    } else {
        return `Oh no! The computer's ${computerSelection} overpowered your ${playerSelection}. Better luck next time!`;
    }
}


function game() {
    console.log("A classic game - Rock, Paper, Scissors!");
    var scoreComputer = 0;
    var scorePlayer = 0;
    for (let i = 0; i < 3; i++) {
        console.log(`\nRound ${i + 1}`);
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`You played ${playerSelection}, The computer played ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
        if ( (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock"))
            {scorePlayer=scorePlayer+1;}
        else if (playerSelection == computerSelection){
            continue;
        }
        else {
            scoreComputer=scoreComputer+1;
        }
    }
    if (scoreComputer > scorePlayer) {
        console.log(`\nGame over! The computer emerged victorious with a score of ${scoreComputer} to ${scorePlayer}. Better luck next time!`);
    } else if (scoreComputer < scorePlayer) {
        console.log(`\nGame over! Congratulations, you won! The final score is ${scorePlayer} to ${scoreComputer}.`);
    } else {
        console.log(`\nGame over! It's a draw! Both you and the computer scored ${scorePlayer}. What a close match!`);
    }
    
    
}

game();
