const words = [
    "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew",
    "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry",
    "strawberry", "tangerine", "ugli", "vanilla", "watermelon", "xigua", "yam", "zucchini"
];
let currentWordIndex = 0;
let score = 0;

const wordDisplay = document.getElementById('word-display');
const wordInput = document.getElementById('word-input');
const submitButton = document.getElementById('submit-button');
const scoreDisplay = document.getElementById('score-display');

function scrambleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayWord() {
    const scrambledWord = scrambleWord(words[currentWordIndex]);
    wordDisplay.textContent = scrambledWord;
}

function checkWord() {
    const userInput = wordInput.value.trim().toLowerCase();
    if (userInput === words[currentWordIndex]) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    }
    wordInput.value = '';
    currentWordIndex = (currentWordIndex + 1) % words.length;
    displayWord();
}

submitButton.addEventListener('click', checkWord);

shuffleArray(words);
displayWord();

document.addEventListener('DOMContentLoaded', function () {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#000000', '#FF5733', '#FF8C00', '#FFD700', '#ADFF2F', '#00FF7F', '#00CED1', '#1E90FF', '#9370DB', '#FF1493', '#000000'];
    let colorIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 5000);
});