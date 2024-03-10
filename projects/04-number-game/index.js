const playernumberinput = document.getElementById("guess-input")

const gameStatusDisplay = document.getElementById("game-status")
const GuessClueDisplay = document.getElementById("guide-display")

const resetGameButton = document.getElementById("reset-game-btn")
const submitGameButton = document.getElementById("submit-btn")

//Game Proper
const RandomNumber = Math.floor(Math.random() * 100) + 1

submitGameButton.addEventListener("click", GuessGame)

resetGameButton.addEventListener("click", function() {
    const RandomNumber = Math.floor(Math.random() * 100) + 1;
    gameStatusDisplay.textContent="ENTER A NUMBER TO START THE GAME!";
})

function GuessGame() {
    const guessUser = parseInt(playernumberinput.value)

    if (guessUser === RandomNumber) {
        gameStatusDisplay.textContent="You Guessed it, Traveler!";
        GuessClueDisplay.innerHTML = '<img src="https://i.pinimg.com/originals/53/78/49/537849f7921a512853f718f31883652e.webp" alt="correct" width="150" height="150">'
    } else if (guessUser < RandomNumber) {
        gameStatusDisplay.textContent="Guess Higher, Traveler!";
        GuessClueDisplay.innerHTML = '<img src="https://upload-os-bbs.hoyolab.com/upload/2022/12/21/56605917/4b949a484dbd34051d7c17b1fb8d41cc_2491667590306264134.png?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80" alt="wrong"  width="150" height="150">'
    } else {
        gameStatusDisplay.textContent="Guess Lower, Traveler";
        GuessClueDisplay.innerHTML = '<img src="https://upload-os-bbs.hoyolab.com/upload/2022/12/21/56605917/4b949a484dbd34051d7c17b1fb8d41cc_2491667590306264134.png?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80" alt="wrong"  width="150" height="150">'
    }

    playernumberinput.value=''
}

