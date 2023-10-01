// Tableau pour stocker les tâches
const tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Veuillez entrer une tâche.');
        return;
    }

    // Créer un objet de tâche avec des propriétés telles que le nom, la date d'échéance, etc.
    const task = {
        id: Date.now(),
        text: taskText,
    };

    // Ajouter la tâche au tableau
    tasks.push(task);

    // Mettre à jour l'affichage de la liste de tâches
    displayTasks();

    // Réinitialiser l'entrée de texte
    taskInput.value = '';
}

function deleteTask(id) {
    // Supprimer la tâche du tableau en fonction de l'ID
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
    }

    // Mettre à jour l'affichage de la liste de tâches
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById('taskList');

    // Effacer la liste actuelle
    taskList.innerHTML = '';

    // Parcourir les tâches et les ajouter à la liste
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${task.text}</span>
            <button class="delete" onclick="deleteTask(${task.id})">Supprimer</button>
        `;
        taskList.appendChild(listItem);
    });
}
