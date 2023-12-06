const ENUM_CHOICE = {
    ROCK: 'Rock',
    PAPER: 'Paper',
    SCISSORS: 'Scissors',
}
const ENUM_STATUS = {
    DRAW: 'draw',
    WIN: 'win',
    LOOSE: 'loose',
}

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return ENUM_CHOICE.PAPER;
        case 1:
            return ENUM_CHOICE.ROCK;
        case 2:
            return ENUM_CHOICE.SCISSORS
    }
}

function getPlayerChoice() {
    let playerChoice = window.prompt('What will you play?');
    playerChoice = playerChoice.toLowerCase();
    switch (playerChoice) {
        case 'rock':
            return ENUM_CHOICE.ROCK;
        case 'paper':
            return ENUM_CHOICE.PAPER;
        case 'scissors':
            return ENUM_CHOICE.SCISSORS;
        default:
            console.log('Choose a real play!');
            return getPlayerChoice();
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ENUM_STATUS.DRAW;
    } else if ((playerSelection === ENUM_CHOICE.PAPER && computerSelection === ENUM_CHOICE.ROCK)
     || (playerSelection === ENUM_CHOICE.ROCK && computerSelection === ENUM_CHOICE.SCISSORS)
     || (playerSelection === ENUM_CHOICE.SCISSORS && computerSelection === ENUM_CHOICE.PAPER)) {
        return ENUM_STATUS.WIN;
    } else {
        return ENUM_STATUS.LOOSE;
    }
}

function game() {
    let draw = 0;
    let playerCount = 0;
    let computerCount = 0;
    for (let index = 0; index < 5;) {
        let playerChoice = getPlayerChoice();
        console.log(`You played ${playerChoice}!`);

        let computerChoice = getComputerChoice();
        console.log(`The computer played ${computerChoice}!`);

        let result = playRound(playerChoice, computerChoice);
        if (result === ENUM_STATUS.DRAW) {
            draw++;
            console.log('It\'s a draw!');
        } else if (result === ENUM_STATUS.WIN) {
            playerCount++;
            console.log('You win this round!');
        } else {
            computerCount++;
            console.log('You loose this round!');
        }

        index = computerCount + playerCount + draw;
    }
    console.log(`You won ${playerCount} round. The computer won ${computerCount} round. You made ${draw} draw`);
}

game();