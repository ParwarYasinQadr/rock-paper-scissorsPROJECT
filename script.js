
/* here we created a function that take a parameter from the html button like rock,paper
   and then the function take the argument as choice name */
   
   let computerScore = 0;
   let playerScore = 0;

function playGame(choice) {


    /* document is a special object that represents the entire HTML document (the webpage).
    It allows you to interact with the elements in the page (like buttons, divs).

    getElementById is a  is a method that finds an HTML element by its id attribute
    */
    const computerElement = document.getElementById('computer');
    const playerElement = document.getElementById('player');
    
    /* ba classList ish aw class a zya w kam dakayn ka animation akay tya xazn krawa
    First, remove any existing animation classes in case they're still applied*/
    computerElement.classList.remove('comClassAnimationDetail');
    playerElement.classList.remove('plClassAnimationDetail');


    // Add the animation classes to apply the animations
    computerElement.classList.add('comClassAnimationDetail');
    playerElement.classList.add('plClassAnimationDetail');



    // Generate a random choice for the computer
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determine the result
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



    playerElement.querySelector('img').src = "src/${choice}Player.png";
    computerElement.querySelector('img').src = "src/${computerChoice}Computer.png";

    /* am querySelector a methodeka bo garandaway aw elementay ka class y computerPoint y 
    pe drawa balam achet yakam dana agarenetawa agar bmanawet hamo aw elementana bgarenertawa
    ka aw class ayan drawa pey awa abet ama bnosin querySelectorAll()
    aw innertext ash This property is used to get or set the text inside an HTML element
    */ 
    document.querySelector('.computerPoint').innerText = computerScore;
    document.querySelector('.playerPoint').innerText = playerScore;

    if( choice === computerChoice) alert(resultMessage);
    

    /* this setTimeout method have 2 part first is the function that excute and the second one is the time which that function
    wil excute after it in milisecond
    
    Remove the animation classes after 6 seconds (the duration of your animation) */
    setTimeout(() => {
        computerElement.classList.remove('comClassAnimationDetail');
        playerElement.classList.remove('plClassAnimationDetail');
    }, 6000);
    /*const hello = function() {
    console.log("Hello");
    }
    hello()
    esta ema am code aman haya atwanin bam shewayash bynosin
    const hello = (name, age) => {console.log( Hello ${name}`)
    console.log("You are ${age} years old)};
    hello("Bro", 25);
    kawata bakar hen any aw arrow ya It's a shorter and more concise way to write functions agar yak line code ysh bet aw{}anaman
    nawet */ 
    document.getElementById('computer').querySelector('img').src = 'src/stoneComputer.png';
    document.getElementById('player').querySelector('img').src = 'src/stonePlayer.png';

    
}

    function resetPoints() {
        computerScore = 0;
        playerScore = 0;
        document.querySelector('.computerPoint').innerText = computerScore;
        document.querySelector('.playerPoint').innerText = playerScore;
    }
