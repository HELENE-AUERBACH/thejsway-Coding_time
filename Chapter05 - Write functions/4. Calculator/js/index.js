/* https://github.com/thejsway/thejsway/blob/master/manuscript/chapter05.md

Coding time!
*/

/* 4. Calculator
Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

// TODO: complete program
console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity
*/

function calculate(operand1 = 0, operator, operand2 = 0) {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      return operand1 / operand2;
    default:
      return NaN;
  }
}

// console.log(calculate(4, "+", 6)); // Must show 10
// console.log(calculate(4, "-", 6)); // Must show -2
// console.log(calculate(2, "*", 0)); // Must show 0
// console.log(calculate(12, "/", 0)); // Must show Infinity

function showCalculation(event) {
  event.preventDefault(); // to avoid a reset of the form on the submit event
  console.log("showCalculation :");
  const inputCalculatorOperand1 = document.querySelector(
    "#inputCalculatorOperand1"
  );
  const operand1 = Number(inputCalculatorOperand1.value || 0);
  console.log(operand1);
  const operator = document.querySelector(
    'input[name="calculatorRadioGroup"]:checked'
  )?.value;
  console.log(operator);
  const inputCalculatorOperand2 = document.querySelector(
    "#inputCalculatorOperand2"
  );
  const operand2 = Number(inputCalculatorOperand2.value || 0);
  console.log(operand2);
  const calculatorResult = document.querySelector("#calculatorResult");
  calculatorResult.innerHTML = `calculate(${operand1}, "${operator}", ${operand2}) === ${calculate(
    operand1,
    operator,
    operand2
  )} <br/>`;
}

const btnShowCalculator = document.querySelector("#btnCalculatorSubmit");
if (btnShowCalculator !== null) {
  btnShowCalculator.addEventListener("click", (event) =>
    showCalculation(event)
  );
}
