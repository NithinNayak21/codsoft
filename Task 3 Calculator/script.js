let display = document.getElementById("display");
let expression = "";

function appendToDisplay(value) {
    expression += value;
    display.value = expression;
}

function clearDisplay() {
    expression = "";
    display.value = "";
}

function calculateResult() {
    try {
        expression = eval(expression);
        display.value = expression;
    } catch (error) {
        display.value = "Error";
    }
}

document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (/[\d\+\-\*\/]/.test(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
