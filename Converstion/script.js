// Taux de conversion (USD vers EUR)
const exchangeRates = {
    usd: {
        eur: 0.85,
    },
    // Ajoutez d'autres taux de conversion ici
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    if (!amount || isNaN(amount)) {
        alert('Veuillez entrer un montant valide.');
        return;
    }

    if (!exchangeRates[fromCurrency] || !exchangeRates[fromCurrency][toCurrency]) {
        alert('Conversion non prise en charge.');
        return;
    }

    const conversionRate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * conversionRate;

    document.getElementById('result').textContent = `${amount} ${fromCurrency.toUpperCase()} équivaut à ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;
}
