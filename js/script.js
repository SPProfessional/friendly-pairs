/* Friendly Pairs - Game Setup */

// Get the main game controls from the HTML
const themeSelect = document.getElementById("theme");
const difficultySelect = document.getElementById("difficulty");
const startButton = document.getElementById("start");

// Get the game display elements
const board = document.getElementById("board");
const movesDisplay = document.getElementById("moves");
const message = document.getElementById("message");

// Store the current game settings
let currentTheme = "animals";
let currentDifficulty = 8;
let moves = 0;


/* Generate Game Cards */

function createCards() {

    board.innerHTML = "";

    for (let i = 0; i < currentDifficulty; i++) {

        const card = document.createElement("button");

        card.classList.add("card");

        card.textContent = "?";

        card.setAttribute("aria-label", "Hidden game card");

        board.appendChild(card);
    }
}


/* Start Game */

startButton.addEventListener("click", function () {

    currentTheme = themeSelect.value;
    currentDifficulty = Number(difficultySelect.value);

    moves = 0;
    movesDisplay.textContent = moves;

    message.textContent = "Game ready! Find the matching pairs.";

    createCards();

});