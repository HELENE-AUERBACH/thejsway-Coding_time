/* https://github.com/thejsway/thejsway/blob/master/manuscript/chapter05.md

Coding time!
*/

/* 5. Circumference and area of a circle
Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

Here are some tips for solving this exercise:
- Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
- The value of number π (Pi) is obtained with Math.PI in JavaScript.
- You might want to use the exponentiation operator ** to perform computations.
console.log(2 ** 3); // 8: 2 * 2 * 2
console.log(3 ** 2); // 9: 3 * 3
*/

function calculateCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

function calculateCircleArea(radius) {
  return Math.PI * radius ** 2;
}

function showCircleCalculations(event) {
  event.preventDefault(); // to avoid a reset of the form on the submit event
  console.log("showCircleCalculations :");
  const inputCircleRadius = document.querySelector("#inputCircleRadius");
  const circleRadius = Number(inputCircleRadius.value || 0);
  console.log(circleRadius);
  const circleCalculationsResult = document.querySelector(
    "#circleCalculationsResult"
  );
  circleCalculationsResult.innerHTML = `Circumference and area of a circle defined by a radius of ${circleRadius} are respectively ${calculateCircleCircumference(
    circleRadius
  )} and ${calculateCircleArea(circleRadius)} <br/>`;
}

const btnShowCircleCalculations = document.querySelector(
  "#btnCircleCalculationsSubmit"
);
if (btnShowCircleCalculations !== null) {
  btnShowCircleCalculations.addEventListener("click", (event) =>
    showCircleCalculations(event)
  );
}
