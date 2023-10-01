// Définition des cartes et de leurs valeurs
const cards = [
    { rank: '2', value: 2 },
    { rank: '3', value: 3 },
    { rank: '4', value: 4 },
    { rank: '5', value: 5 },
    { rank: '6', value: 6 },
    { rank: '7', value: 7 },
    { rank: '8', value: 8 },
    { rank: '9', value: 9 },
    { rank: '10', value: 10 },
    { rank: 'J', value: 10 },
    { rank: 'Q', value: 10 },
    { rank: 'K', value: 10 },
    { rank: 'A', value: 11 },
];

let playerHand = [];
let dealerHand = [];
let playerScore = 0;
let dealerScore = 0;

// Fonction pour mélanger les cartes
function shuffleDeck() {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}

// Fonction pour distribuer une carte
function dealCard(hand) {
    const card = cards.pop();
    hand.push(card);
    return card;
}

// Fonction pour calculer le score d'une main
function calculateHandScore(hand) {
    let score = 0;
    let aces = 0;

    for (const card of hand) {
        score += card.value;
        if (card.rank === 'A') {
            aces++;
        }
    }

    while (score > 21 && aces > 0) {
        score -= 10;
        aces--;
    }

    return score;
}

// Fonction pour afficher les cartes dans une main
function displayHand(hand, handElement, scoreElement) {
    handElement.innerHTML = '';
    let score = 0;

    for (const card of hand) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.textContent = card.rank;
        handElement.appendChild(cardElement);
        score += card.value;
    }

    scoreElement.textContent = `Score: ${score}`;
    return score;
}

// Fonction pour démarrer une nouvelle partie
function startGame() {
    shuffleDeck();
    playerHand = [dealCard(playerHand), dealCard(playerHand)];
    dealerHand = [dealCard(dealerHand), dealCard(dealerHand)];
    playerScore = calculateHandScore(playerHand);
    dealerScore = calculateHandScore(dealerHand);

    const dealButton = document.getElementById('deal-button');
    const hitButton = document.getElementById('hit-button');
    const standButton = document.getElementById('stand-button');
    const messageElement = document.getElementById('message');

    dealButton.disabled = true;
    hitButton.disabled = false;
    standButton.disabled = false;
    messageElement.textContent = '';

    displayHand(playerHand, document.getElementById('player-cards'), document.getElementById('player-score'));
    displayHand(dealerHand, document.getElementById('dealer-cards'), document.getElementById('dealer-score'));

    // Vérifier le blackjack
    if (playerScore === 21) {
        endGame('Blackjack ! Vous avez gagné.');
    } else if (dealerScore === 21) {
        endGame('Le dealer a un blackjack. Vous avez perdu.');
    }
}

// Fonction pour piocher une carte
function hit() {
    playerHand.push(dealCard(playerHand));
    playerScore = calculateHandScore(playerHand);
    const playerScoreElement = document.getElementById('player-score');
    const playerCardsElement = document.getElementById('player-cards');
    displayHand(playerHand, playerCardsElement, playerScoreElement);

    if (playerScore > 21) {
        endGame('Vous avez dépassé 21. Vous avez perdu.');
    }
}

// Fonction pour la fin du jeu
function endGame(message) {
    const dealButton = document.getElementById('deal-button');
    const hitButton = document.getElementById('hit-button');
    const standButton = document.getElementById('stand-button');
    const messageElement = document.getElementById('message');

    dealButton.disabled = false;
    hitButton.disabled = true;
    standButton.disabled = true;
    messageElement.textContent = message;
}

// Fonction pour que le dealer joue
function dealerPlay() {
    while (dealerScore < 17) {
        dealerHand.push(dealCard(dealerHand));
        dealerScore = calculateHandScore(dealerHand);
    }

    const dealerScoreElement = document.getElementById('dealer-score');
    const dealerCardsElement = document.getElementById('dealer-cards');
    displayHand(dealerHand, dealerCardsElement, dealerScoreElement);

    if (dealerScore > 21 || dealerScore < playerScore) {
        endGame('Vous avez gagné.');
    } else if (dealerScore > playerScore) {
        endGame('Le dealer a gagné.');
    } else {
        endGame('Égalité.');
    }
}

// Fonction pour le joueur qui reste
function stand() {
    dealerPlay();
}
