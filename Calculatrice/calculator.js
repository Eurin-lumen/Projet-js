let currentInput = '';
let previousInput = '';
let operator = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function setOperator(value) {
    operator = value;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Division par zéro impossible');
                clearDisplay();
                return;
            }
            result = num1 / num2;
            break;
    }

    document.getElementById('display').value = result;
    currentInput = result.toString();
    previousInput = '';
    operator = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('display').value = '';
}
