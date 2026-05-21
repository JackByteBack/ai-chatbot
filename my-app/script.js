const previousOperandEl = document.getElementById('previous-operand');
const currentOperandEl = document.getElementById('current-operand');

let currentOperand = '0';
let previousOperand = '';
let operation = null;
let shouldResetScreen = false;

function updateDisplay() {
    currentOperandEl.textContent = currentOperand;
    previousOperandEl.textContent = previousOperand;

    if (currentOperand.length > 10) {
        currentOperandEl.classList.add('long');
    } else {
        currentOperandEl.classList.remove('long');
    }
}

function appendNumber(number) {
    if (shouldResetScreen) {
        currentOperand = '';
        shouldResetScreen = false;
    }
    if (number === '.' && currentOperand.includes('.')) return;
    if (currentOperand === '0' && number !== '.') {
        currentOperand = number;
    } else {
        currentOperand += number;
    }
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '' && previousOperand === '') return;
    if (currentOperand === '' && previousOperand !== '') {
        operation = op;
        previousOperand = `${previousOperand.slice(0, -2)} ${getOperatorSymbol(op)}`;
        updateDisplay();
        return;
    }
    if (previousOperand !== '' && !shouldResetScreen) {
        compute();
    }
    operation = op;
    previousOperand = `${currentOperand} ${getOperatorSymbol(op)}`;
    shouldResetScreen = true;
    updateDisplay();
    highlightOperator(op);
}

function getOperatorSymbol(op) {
    const symbols = {
        add: '+',
        subtract: '-',
        multiply: '*',
        divide: '/'
    };
    return symbols[op] || '';
}

function compute() {
    let result;
    const prev = parseFloat(previousOperand);
    const curr = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operation) {
        case 'add':
            result = prev + curr;
            break;
        case 'subtract':
            result = prev - curr;
            break;
        case 'multiply':
            result = prev * curr;
            break;
        case 'divide':
            if (curr === 0) {
                currentOperand = 'Error';
                previousOperand = '';
                operation = null;
                updateDisplay();
                return;
            }
            result = prev / curr;
            break;
        default:
            return;
    }

    // Handle floating point precision
    result = Math.round(result * 1e12) / 1e12;
    currentOperand = result.toString();
    operation = null;
    previousOperand = '';
    shouldResetScreen = true;
    updateDisplay();
}

function clearCalculator() {
    currentOperand = '0';
    previousOperand = '';
    operation = null;
    shouldResetScreen = false;
    updateDisplay();
    clearOperatorHighlight();
}

function deleteNumber() {
    if (currentOperand === 'Error') {
        clearCalculator();
        return;
    }
    if (shouldResetScreen) return;
    if (currentOperand.length === 1 || (currentOperand.length === 2 && currentOperand.startsWith('-'))) {
        currentOperand = '0';
    } else {
        currentOperand = currentOperand.slice(0, -1);
    }
    updateDisplay();
}

function toggleSign() {
    if (currentOperand === '0' || currentOperand === 'Error') return;
    if (currentOperand.startsWith('-')) {
        currentOperand = currentOperand.slice(1);
    } else {
        currentOperand = '-' + currentOperand;
    }
    updateDisplay();
}

function applyPercent() {
    if (currentOperand === '' || currentOperand === 'Error') return;
    const value = parseFloat(currentOperand);
    currentOperand = (value / 100).toString();
    updateDisplay();
}

function highlightOperator(op) {
    clearOperatorHighlight();
    const btn = document.querySelector(`[data-action="${op}"]`);
    if (btn) btn.classList.add('active');
}

function clearOperatorHighlight() {
    document.querySelectorAll('.btn.operator').forEach(btn => {
        btn.classList.remove('active');
    });
}

// Button click handlers
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const action = button.dataset.action;

        if (!isNaN(action) || action === 'decimal') {
            appendNumber(action === 'decimal' ? '.' : action);
            clearOperatorHighlight();
        } else if (['add', 'subtract', 'multiply', 'divide'].includes(action)) {
            chooseOperation(action);
        } else if (action === 'equals') {
            if (operation) {
                compute();
                clearOperatorHighlight();
            }
        } else if (action === 'clear') {
            clearCalculator();
        } else if (action === 'delete') {
            deleteNumber();
        } else if (action === 'toggle-sign') {
            toggleSign();
        } else if (action === 'percent') {
            applyPercent();
        }
    });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    e.preventDefault();

    if (e.key >= '0' && e.key <= '9') {
        appendNumber(e.key);
        clearOperatorHighlight();
    } else if (e.key === '.') {
        appendNumber('.');
        clearOperatorHighlight();
    } else if (e.key === '+') {
        chooseOperation('add');
    } else if (e.key === '-') {
        chooseOperation('subtract');
    } else if (e.key === '*') {
        chooseOperation('multiply');
    } else if (e.key === '/') {
        chooseOperation('divide');
    } else if (e.key === 'Enter' || e.key === '=') {
        if (operation) {
            compute();
            clearOperatorHighlight();
        }
    } else if (e.key === 'Backspace') {
        deleteNumber();
    } else if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') {
        clearCalculator();
    } else if (e.key === '%') {
        applyPercent();
    }
});

// Initialize display
updateDisplay();