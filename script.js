/*TO DO:
- playRound function for BO5*/

let computerChoice = getComputerChoice();
let playerSelection = '';
let result = playRound();

function getComputerChoice(computerChoice){
    let random = Math.floor(Math.random() * 3 + 1);
    switch(random){
        case 1:
            return computerChoice = 'Rock';
            break;
        case 2:
            return computerChoice = 'Paper';
            break;
        case 3:
            return computerChoice = 'Scissors';
            break;
    }

}

function game() {
    let countPlayer = 0;
    let countComputer = 0;
    let draw = 0;
    for (let i = 0; i < 5;) {
        console.log(`You played ${checkPlayerSelection(playerSelection)}`);
        console.log(`The computer played ${computerChoice}`);
        playRound();
        if (result === 'draw') {
            draw++;
            console.log('It\'s a draw!');
        } else if (result === 'playerWin') {
            countPlayer++;
            console.log('You win this round!');
        } else if (result === 'playerLoose') {
            countComputer++;
            console.log('You loose this round!');
        } else {
            console.log('Choose a real play!');
        }

        i = countComputer + countPlayer + draw;
    }
}

function checkPlayerSelection(playerSelection) {
    playerSelection = window.prompt('What will you play?');
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
     let firsLetter = playerSelection.slice(0, 1);
     let remaining = playerSelection.slice(1);
     let format = firsLetter.toUpperCase();
     return formatPlayerSelection = format + remaining;
    } else {
     return formatPlayerSelection = 'error';
    }
}

function playRound(formatPlayerSelection, computerChoice, result) {
    if (formatPlayerSelection === computerChoice) {
        return result = 'draw';
    } else if ((formatPlayerSelection === 'Rock' && computerChoice === 'Scissors') || (formatPlayerSelection === 'Scissors' && computerChoice === 'Paper') || (formatPlayerSelection === 'Paper' && computerChoice === 'Rock')) {
        return result = 'playerWin';
    } else if (formatPlayerSelection === 'error') {
        return result = 'error';
    } else {
        return result = 'playerLoose';
    }
}

game();
