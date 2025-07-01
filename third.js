function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
    if (display.value.includes('/0')) {
      display.value = "Cannot divide by zero";
    } else {
      display.value = eval(display.value);
    }
  } catch (error) {
    display.value = "Error";
  }
}
