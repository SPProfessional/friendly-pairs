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

// Track the cards currently being selected
let firstCard = null;
let secondCard = null;
let lockedBoard = false;


/* Game Theme */

const themes = {
    animals: ["🐶", "🐱", "🦁", "🐸", "🐵", "🐼", "🐰", "🐨"],
    numbers: ["1", "2", "3", "4", "5", "6", "7", "8"],
    colours: ["🔴", "🔵", "🟢", "🟡", "🟣", "🟠", "⚫", "⚪"]
};

/* Theme Settings */

const themeSettings = {
    animals: {
        name: "Animals"
    },
    numbers: {
        name: "Numbers"
    },
    colours: {
        name: "Colours"
    }
};

/* Difficulty Settings */

const difficultySettings = {
    8: {
        pairs: 4
    },
    12: {
        pairs: 6
    },
    16: {
        pairs: 8
    }
};


/* Shuffle Cards */

function shuffleCards(cards) {

    for (let i = cards.length - 1; i > 0; i--) {

        const randomIndex = Math.floor(Math.random() * (i + 1));

        [cards[i], cards[randomIndex]] =
            [cards[randomIndex], cards[i]];
    }

    return cards;
}


/* Card Flipping */

function flipCard(card) {

    if (lockedBoard) {
        return;
    }

    if (card === firstCard) {
        return;
    }

    if (card.classList.contains("matched")) {
        return;
    }

    card.textContent = card.dataset.value;
    card.setAttribute(
        "aria-label",
        `Revealed card: ${card.dataset.value}`
    );

 if (!firstCard) {

    firstCard = card;

} else {

    secondCard = card;
    lockedBoard = true;

    moves++;
    movesDisplay.textContent = moves;

    checkMatch();
}

/* Check for Pair Match */

function checkMatch() {

if (firstCard.dataset.value === secondCard.dataset.value) {

    firstCard.classList.add("matched");
    secondCard.classList.add("matched");

    message.textContent = "Great match!";

    firstCard = null;
    secondCard = null;
    lockedBoard = false;

    checkGameComplete();

    } else {

        message.textContent = "Not a match. Try again!";

        setTimeout(function () {

            firstCard.textContent = "?";
            secondCard.textContent = "?";

            firstCard.setAttribute("aria-label", "Hidden game card");
            secondCard.setAttribute("aria-label", "Hidden game card");

            firstCard = null;
            secondCard = null;
            lockedBoard = false;

            message.textContent = "Find another pair!";

        }, 1000);
    }
}

/* Check for Game Completion */

function checkGameComplete() {

    const matchedCards = document.querySelectorAll(".card.matched");

    if (matchedCards.length === currentDifficulty) {

        message.textContent =
            `Well done! You found all the pairs in ${moves} moves.`;

        lockedBoard = true;
    }
}

/* Generate Cards */

function createCards() {

    board.innerHTML = "";

    const selectedTheme = themes[currentTheme];

    const selectedThemeSettings = themeSettings[currentTheme];

    const numberOfPairs = difficultySettings[currentDifficulty].pairs;

    const selectedValues = selectedTheme.slice(0, numberOfPairs);

    const cardValues = [
        ...selectedValues,
        ...selectedValues
    ];

    shuffleCards(cardValues);

    cardValues.forEach(function (value) {

        const card = document.createElement("button");

        card.classList.add("card");

        card.textContent = "?";

        card.dataset.value = value;

        card.setAttribute("aria-label", "Hidden game card");

        card.addEventListener("click", function () {
            flipCard(card);
        });

        board.appendChild(card);
    });
}


/* Start Game */

startButton.addEventListener("click", function () {

    currentTheme = themeSelect.value;
    currentDifficulty = Number(difficultySelect.value);

    moves = 0;
    firstCard = null;
    secondCard = null;
    lockedBoard = false;

    movesDisplay.textContent = moves;

    message.textContent =
    `${selectedThemeSettings.name} game ready! Find the matching pairs.`;

});