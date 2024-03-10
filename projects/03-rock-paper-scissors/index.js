// Step 1: Define the choices available in the game
const choices = ["Rock", "Paper", "Scissors"];

// Step 2: Get references to HTML elements
const player1ChoiceDisplay = document.getElementById("player1-choice-display")// Get the element with the id of "player1-choice-display"
const player1ScoreDisplay = document.getElementById("player1-score")// Get the element with the id of "player1-score"
const player2ChoiceDisplay = document.getElementById("player2-choice-display")// Get the element with the id of "player2-choice-display"
const player2ScoreDisplay = document.getElementById("player2-score")// Get the element with the id of "player2-score"

const gameStatusDisplay = document.getElementById("game-status")// Get the element with the id of "game-status"
const resetGameButton = document.getElementById("reset-game-btn")// Get the element with the id of "reset-game-btn"

const rockBtn = document.getElementById("rock-btn")// Get the element with the id of "rock-btn"
const paperBtn = document.getElementById("paper-btn")// Get the element with the id of "paper-btn"
const scissorsBtn = document.getElementById("scissors-btn")// Get the element with the id of "scissors-btn"
let player1Choice;

// Step 3: Add event listeners to the buttons
rockBtn.addEventListener("click", function () {
    player1Choice = "Rock";
    startRound();
});

paperBtn.addEventListener("click", function () {
    player1Choice = "Paper";
    startRound();
});

scissorsBtn.addEventListener("click", function () {
    player1Choice = "Scissors";
    startRound();
});

resetGameButton.addEventListener("click", function () { 
    player1ChoiceDisplay.innerHTML = '';
    player2ChoiceDisplay.innerHTML = '';
    player1ScoreDisplay.innerHTML = '0';
    player2ScoreDisplay.innerHTML = '0';
    gameStatusDisplay.textContent = 'SHOW YOUR HAND TO START THE GAME!';
});

// Step 4: Define helper functions that will be the actions of the game
function startRound() {
    const player2Choice = choices[Math.floor(Math.random() * choices.length)];

    player1ChoiceDisplay.textContent = `${player1Choice}`;
    player2ChoiceDisplay.textContent = `${player2Choice}`;

    const result = winner(player1Choice, player2Choice);

    if (result === "Player 1 Wins") {   
        player1ScoreDisplay.textContent++;
        gameStatusDisplay.textContent = "Player 1 Wins";
    } else if (result === "Player 2 Wins") {
        player2ScoreDisplay.textContent++;
        gameStatusDisplay.textContent = "Player 2 Wins";
    } else {
        gameStatusDisplay.textContent = result;
    }

    if(player2Choice === 'Rock'){
        player2ChoiceDisplay.innerHTML = '<img src="./assets/hand-rock-solid.svg" alt="Rock">';
    }else if(player2Choice === 'Paper'){
        player2ChoiceDisplay.innerHTML = '<img src="./assets/hand-paper-solid.svg" alt="Paper">';
    }else if(player2Choice === 'Scissors'){
        player2ChoiceDisplay.innerHTML = '<img src="./assets/hand-scissors-solid.svg" alt="Scissors">';
    }

    if(player1Choice === 'Rock'){
        player1ChoiceDisplay.innerHTML = '<img src="./assets/hand-rock-solid.svg" alt="Rock">';
    }else if(player1Choice === 'Paper'){
        player1ChoiceDisplay.innerHTML = '<img src="./assets/hand-paper-solid.svg" alt="Paper">';
    }else if(player1Choice === 'Scissors'){
        player1ChoiceDisplay.innerHTML = '<img src="./assets/hand-scissors-solid.svg" alt="Scissors">';
    }
}

function winner(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) {
        return "It's a tie!";
    } else if (
        (player1Choice === "Rock" && player2Choice === "Scissors") ||
        (player1Choice === "Paper" && player2Choice === "Rock") ||
        (player1Choice === "Scissors" && player2Choice === "Paper")
    ) { 
        return "Player 1 Wins";
    } else {
        return "Player 2 Wins";
    }
}

// Step 5: Embrace mistakes as opportunities for learning and improvement, and fuel your curiosity by exploring new the wonders of frontend development. The vast tech world is filled with exciting discoveries waiting for you. Ask when you have the need or want to! Just keep coding!