/*TO DO:
- playRound function for BO5
- add context to consolelog for better readability
- do not accept other than rock paper scissors */

let computerChoice = getComputerChoice();
let playerSelection = window.prompt('What will you play?');
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

function checkPlayerSelection(playerSelection) {
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
        return result = 'its a draw!';
    } else if ((formatPlayerSelection === 'Rock' && computerChoice === 'Scissors') || (formatPlayerSelection === 'Scissors' && computerChoice === 'Paper') || (formatPlayerSelection === 'Paper' && computerChoice === 'Rock')) {
        return result = 'Congrats, you won!';
    } else if (formatPlayerSelection === 'error') {
        return result = 'Choose a real play!';
    } else {
        return result = 'You lost, try again!';
    }
}

console.log(`The computer played ${computerChoice}`);
/*console.log(playerSelection);*/
console.log(`You played ${checkPlayerSelection(playerSelection)}`);
console.log(playRound(formatPlayerSelection, computerChoice, result));