// Variables pour suivre les revenus et les dépenses
let income = 0;
let expenses = 0;

function calculateBudget() {
    const incomeInput = document.getElementById('income');
    const expensesInput = document.getElementById('expenses');
    const resultElement = document.getElementById('result');

    // Obtenir les valeurs des entrées
    income = parseFloat(incomeInput.value) || 0;
    expenses = parseFloat(expensesInput.value) || 0;

    // Calculer le solde
    const balance = income - expenses;

    // Afficher le solde
    resultElement.textContent = `Solde actuel: ${balance.toFixed(2)} $`;

    // Réinitialiser les champs de saisie
    incomeInput.value = '';
    expensesInput.value = '';
}
