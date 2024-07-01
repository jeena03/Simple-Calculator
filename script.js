function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let input = document.getElementById('display').value;
    let result = eval(input); // Using eval for simplicity; consider using a safer method in production
    document.getElementById('display').value = result;
}

function backspace() {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}
