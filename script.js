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
const ENUM_COUNTERS = {
    PLAYER: 0,
    COMPUTER: 0,
    DRAW: 0,
}
const buttons = document.querySelector('.buttons');
const resultText = document.querySelector('.resultText');
const scoreText = document.querySelector('.score');

let playerChoice = null;
let computerChoice = null;
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
        ENUM_COUNTERS.DRAW++;
    } else if (status === ENUM_STATUS.WIN) {
        ENUM_COUNTERS.PLAYER++;
    } else {
        ENUM_COUNTERS.COMPUTER++;
    }
    totalCount = ENUM_COUNTERS.COMPUTER + ENUM_COUNTERS.DRAW + ENUM_COUNTERS.PLAYER;
    scoreText.textContent = `SCORE - Player: ${ENUM_COUNTERS.PLAYER}  Computer: ${ENUM_COUNTERS.COMPUTER} - Draw: ${ENUM_COUNTERS.DRAW}`;
}

function endGame() {

}