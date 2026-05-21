// Simple calculator logic
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.getAttribute('data-value');
    if (value) {
      // Append value to display
      display.value += value;
    }
  });
});

document.getElementById('clear').addEventListener('click', () => {
  display.value = '';
});

document.getElementById('equal').addEventListener('click', () => {
  try {
    // Evaluate the expression using JavaScript eval.
    // Replace the unicode mul/div signs if present.
    const expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
    const result = eval(expression);
    display.value = result;
  } catch (e) {
    display.value = 'Error';
  }
});
