// Générer un nombre aléatoire entre 1 et 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let numberOfTries = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Veuillez entrer un nombre entre 1 et 100.');
        return;
    }

    numberOfTries++;

    const messageElement = document.getElementById('message');

    if (guess === randomNumber) {
        messageElement.textContent = `Bravo ! Vous avez deviné le nombre ${randomNumber} en ${numberOfTries} tentatives.`;
        messageElement.style.color = 'green';
        guessInput.setAttribute('disabled', true);
    } else if (guess < randomNumber) {
        messageElement.textContent = 'Trop petit. Essayez encore.';
        messageElement.style.color = 'red';
    } else {
        messageElement.textContent = 'Trop grand. Essayez encore.';
        messageElement.style.color = 'red';
    }

    guessInput.value = '';
    guessInput.focus();
}
