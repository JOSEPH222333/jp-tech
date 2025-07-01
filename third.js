const display = document.getElementById("display");

function press(value) {
  display.value += value;
}

function calculate() {
  try {
    const result = eval(display.value);
    if (result === Infinity || result === -Infinity) {
      display.value = "Cannot divide by zero";
    } else {
      display.value = result;
    }
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}
