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

// Game Start
startButton.addEventListener("click", function () {

    currentTheme = themeSelect.value;
    currentDifficulty = Number(difficultySelect.value);

    moves = 0;
    movesDisplay.textContent = moves;

    message.textContent = "Game ready! Find the matching pairs.";

    board.innerHTML = "";

});