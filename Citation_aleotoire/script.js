// Tableau d'objets contenant les citations
const quotes = [
    {
        text: "La vie est belle.",
        author: "Inconnu"
    },
    {
        text: "La simplicité est la sophistication suprême.",
        author: "Leonardo da Vinci"
    },
    {
        text: "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.",
        author: "Winston Churchill"
    },
    {
        text: "Le bonheur est quand ce que vous pensez, ce que vous dites et ce que vous faites sont en harmonie.",
        author: "Mahatma Gandhi"
    },
    {
        text: "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
        author: "Steve Jobs"
    }
];

function generateRandomQuote() {
    // Sélectionner une citation aléatoire du tableau
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Afficher la citation dans l'élément HTML
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = `"${randomQuote.text}" - ${randomQuote.author}`;
}

// Générer une citation aléatoire lors du chargement initial
generateRandomQuote();
