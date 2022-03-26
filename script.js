function computerPlay() {
    let result = Math.floor(Math.random() * 3)
    switch (result) {
        case 0:
            return "paper";
        case 1:
            return "rock";
        case 2:
            return "scissors";
    }
}

function oneRound () {

    const playerSelection = prompt().toLowerCase();
    const computerSelection = computerPlay();

    console.log(`Vos sacaste: ${playerSelection}`)
    console.log(`La maquina elígio: ${computerSelection}`);

    if (playerSelection === computerSelection) {
        return "It´s a tie!";
    } 
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")
    )   {
        return "You win!";
    }
    if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        return "You lose!";
    }
}

