// Tableau pour stocker les articles
const articles = [];

function addArticle() {
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (title === '' || content === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Créer un objet d'article
    const article = {
        title: title,
        content: content,
        date: new Date().toLocaleDateString(),
    };

    // Ajouter l'article au tableau
    articles.push(article);

    // Mettre à jour l'affichage de la liste d'articles
    displayArticles();

    // Réinitialiser les champs de saisie
    titleInput.value = '';
    contentInput.value = '';
}

function displayArticles() {
    const articleList = document.getElementById('articleList');

    // Effacer la liste actuelle
    articleList.innerHTML = '';

    // Parcourir les articles et les ajouter à la liste
    articles.forEach(article => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.content}</p>
            <p>Date de publication: ${article.date}</p>
            <button onclick="deleteArticle('${article.title}')">Supprimer</button>
        `;
        articleList.appendChild(listItem);
    });
}

function deleteArticle(title) {
    // Supprimer l'article du tableau en fonction du titre
    const index = articles.findIndex(article => article.title === title);
    if (index !== -1) {
        articles.splice(index, 1);
    }

    // Mettre à jour l'affichage de la liste d'articles
    displayArticles();
}

// Afficher les articles initiaux au chargement
displayArticles();
