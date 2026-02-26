let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");
let clearButton = document.getElementById("clear");
let currentInput = "";

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let value = button.getAttribute("data-value");

    if (value === "=") {
      try {
        currentInput = eval(currentInput);
        display.value = currentInput;
      } catch (error) {
        display.value = "Error";
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

clearButton.addEventListener("click", function () {
  currentInput = "";
  display.value = "";
});
