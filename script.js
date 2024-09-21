let computerScore = 0;
let playerScore = 0;

function playGame(choice) {
    const computerElement = document.getElementById('computer');
    const playerElement = document.getElementById('player');

    computerElement.classList.remove('comClassAnimationDetail');
    playerElement.classList.remove('plClassAnimationDetail');

    computerElement.classList.add('comClassAnimationDetail');
    playerElement.classList.add('plClassAnimationDetail');

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let resultMessage = '';

    if (choice === computerChoice) {
        resultMessage = 'It\'s a draw!';
    } else if (
        (choice === 'rock' && computerChoice === 'scissors') ||
        (choice === 'paper' && computerChoice === 'rock') ||
        (choice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage = 'You win!';
        playerScore++;
    } else {
        resultMessage = 'Computer wins!';
        computerScore++;
    }

    document.getElementById('computer').querySelector('img').src = `src/${computerChoice}Computer.png`;
    document.getElementById('player').querySelector('img').src = `src/${choice}Player.png`;

    document.querySelector('.computerPoint').innerText = computerScore;
    document.querySelector('.playerPoint').innerText = playerScore;
    
    if( choice === computerChoice) alert(resultMessage);

    setTimeout(() => {
        computerElement.classList.remove('comClassAnimationDetail');
        playerElement.classList.remove('plClassAnimationDetail');
    }, 900);
}

function resetPoints() {
    computerScore = 0;
    playerScore = 0;
    document.querySelector('.computerPoint').innerText = computerScore;
    document.querySelector('.playerPoint').innerText = playerScore;
    
    document.getElementById('computer').querySelector('img').src = 'src/rockComputer.png';
    document.getElementById('player').querySelector('img').src = 'src/rockPlayer.png';
}

resetPoints();