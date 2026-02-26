const display = document.getElementById("display")
const buttons = document.querySelectorAll(".btn")
let currentInput = ""

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    const value = button.getAttribute("data-value")

    if (button.id === "clear") {
      currentInput = ""
      display.value = ""
    } else if (button.id === "equals") {
      try {
        display.value = eval(currentInput)
        currentInput = display.value
      } catch (e) {
        display.value = "Error"
        currentInput = ""
      }
    } else {
      currentInput += value
      display.value = currentInput
    }
  })
})
