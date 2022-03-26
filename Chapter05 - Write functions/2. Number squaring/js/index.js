/* https://github.com/thejsway/thejsway/blob/master/manuscript/chapter05.md

Coding time!
*/

/* 2. Number squaring
Complete the following program so that the square1() and square2() functions work properly.

// Square the given number x
function square1(x) {
  // TODO: complete the function code
}

// Square the given number x
const square2 = x => // TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

When it's done, update the program so that it shows the square of every number between 0 and 10.

Writing 10 dumb calls to square() is forbidden! You know how to repeat statements, don't you? ;)
*/

// Square the given number x
function square1(x) {
  return x ** 2;
}

// Square the given number x
const square2 = (x) => x ** 2;

// console.log(square1(0)); // Must show 0
// console.log(square1(2)); // Must show 4
// console.log(square1(5)); // Must show 25

// console.log(square2(0)); // Must show 0
// console.log(square2(2)); // Must show 4
// console.log(square2(5)); // Must show 25

function showSquare(event) {
  event.preventDefault(); // to avoid a reset of the form on the submit event
  let result = "";
  for (let i = 0; i <= 10; i++) {
    result += `${i} ** 2 === ${i <= 5 ? square1(i) : square2(i)} <br/>`;
  }
  const squareResult = document.querySelector("#squareResult");
  squareResult.innerHTML = `${result}`;
}

const btnShowSquare = document.querySelector("#btnSquareSubmit");
if (btnShowSquare !== null) {
  btnShowSquare.addEventListener("click", (event) => showSquare(event));
}
