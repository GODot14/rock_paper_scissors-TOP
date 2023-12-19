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
const buttons = document.querySelector('.buttons');
const resultText = document.querySelector('.resultText');

let playerChoice = null;
let computerChoice = null;
let draw = 0;
let playerCount = 0;
let computerCount = 0;
let totalCount = 0;

buttons.addEventListener('click', (button) => {
    computerChoice = getComputerChoice();
    playerChoice = button.target.id;
    switch (playerChoice) {
        case 'rock':
            playerChoice = ENUM_CHOICE.ROCK;
            playRound(playerChoice, computerChoice);
            break
        case 'paper':
            playerChoice = ENUM_CHOICE.PAPER;
            playRound(playerChoice, computerChoice);
            break
        case 'scissors':
            playerChoice = ENUM_CHOICE.SCISSORS;
            playRound(playerChoice, computerChoice);
            break
    }
})

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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        resultText.textContent = `You both played ${playerSelection}. It\'s a draw!`;
        game(ENUM_STATUS.DRAW);
    } else if ((playerSelection === ENUM_CHOICE.PAPER && computerSelection === ENUM_CHOICE.ROCK)
     || (playerSelection === ENUM_CHOICE.ROCK && computerSelection === ENUM_CHOICE.SCISSORS)
     || (playerSelection === ENUM_CHOICE.SCISSORS && computerSelection === ENUM_CHOICE.PAPER)) {
         resultText.textContent = `You played ${playerSelection} and the computer played ${computerChoice}. You win!`;
         game(ENUM_STATUS.WIN);
    } else {
        resultText.textContent = `You played ${playerSelection} and the computer played ${computerChoice}. You loose!`;
        game(ENUM_STATUS.LOOSE)
    }
}

function game(status) {
    if (status === ENUM_STATUS.DRAW) {
        draw++;
        console.log('It\'s a draw!');
    } else if (status === ENUM_STATUS.WIN) {
        playerCount++;
        console.log('You win this round!');
    } else {
        computerCount++;
        console.log('You loose this round!');
    }

    totalCount = computerCount + playerCount + draw;
    console.log(`You won ${playerCount} round. The computer won ${computerCount} round. You made ${draw} draw`);
}