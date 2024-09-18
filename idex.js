


let computerMove = '';

function pickComputerMove() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }
}

function checkWhoWins(playerMove) {
    if (playerMove === computerMove) {
        return 'It is a tie!';
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function playGame(playerMove) {
    pickComputerMove();
    const result = checkWhoWins(playerMove);
    alert(`You picked ${playerMove}, computer picked ${computerMove}. ${result}`);
}