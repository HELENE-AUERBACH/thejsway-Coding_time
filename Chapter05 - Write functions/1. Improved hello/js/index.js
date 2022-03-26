/* https://github.com/thejsway/thejsway/blob/master/manuscript/chapter05.md

Coding time!
*/

/* 1. Improved hello
Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

// Say hello to the user
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

// TODO: ask user for first and last name
// TODO: call sayHello() and show its result
*/

function showHello(event) {
  event.preventDefault(); // to avoid a reset of the form on the submit event
  console.log("showHello :");
  function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
  }

  const inputFirstName = document.querySelector("#inputFirstName").value;
  console.log(inputFirstName);
  const inputLastName = document.querySelector("#inputLastName").value;
  console.log(inputLastName);
  const helloResult = document.querySelector("#helloResult");
  helloResult.innerText = sayHello(inputFirstName, inputLastName);
}

const btnShowHello = document.querySelector("#btnHelloSubmit");
if (btnShowHello !== null) {
  btnShowHello.addEventListener("click", (event) => showHello(event));
}

