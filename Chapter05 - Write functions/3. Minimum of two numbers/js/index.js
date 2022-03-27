const min = (number1, number2) =>
  isNaN(number1) || isNaN(number2)
    ? NaN
    : number1 <= number2
    ? number1
    : number2;

function showMinimum(event) {
  event.preventDefault(); // to avoid a reset of the form on the submit event
  console.log("showMinimum :");
  const inputMinimumNumber1 = document.querySelector("#inputMinimumNumber1");
  const minimumNumber1 = Number(inputMinimumNumber1.value || 0);
  console.log(minimumNumber1);
  const inputMinimumNumber2 = document.querySelector("#inputMinimumNumber2");
  const minimumNumber2 = Number(inputMinimumNumber2.value || 0);
  console.log(minimumNumber2);
  const minimumResult = document.querySelector("#minimumResult");
  minimumResult.innerHTML = `The minimum of these two received numbers is ${min(
    minimumNumber1,
    minimumNumber2
  )} <br/>`;
}

const btnShowMinimum = document.querySelector("#btnMinimumSubmit");
if (btnShowMinimum !== null) {
  btnShowMinimum.addEventListener("click", (event) => showMinimum(event));
}
