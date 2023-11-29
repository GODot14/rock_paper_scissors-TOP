/*TO DO:
- playRound function for BO5
- make playerSelection case-insensitive
- add context to consolelog for better readability
- do not accept othen than rock paper scissors */

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

function playRound(playerSelection, computerChoice, result) {
    if (playerSelection == computerChoice) {
        return result = 'its a draw!';
    } else if ((playerSelection === 'Rock' && computerChoice === 'Scissors') || (playerSelection === 'Scissors' && computerChoice === 'Paper') || (playerSelection === 'Paper' && computerChoice === 'Rock')) {
        return result = 'Congrats, you won!';
    } else {
        return result = 'You lose, try again!';
    }
}

function checkPlayerSelection(playerSelection) {
   playerSelection = playerSelection.toLowerCase();
   if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
    let firsLetter = playerSelection.slice(0, 1);
    let remaining = playerSelection.slice(1);
    let format = firsLetter.toUpperCase();
    return playerSelection = format + remaining;
   } else {
    return 'Choose a real play!';
   }
}

console.log(computerChoice);
console.log(playerSelection);
console.log(checkPlayerSelection(playerSelection));
/*console.log(playRound(playerSelection, computerChoice));*/