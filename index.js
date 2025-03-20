// TODO: this file! :)
/**
 * When the user clicks the "Add Number" button, the number they entered into the input field should be added to the number bank.
 */

const state = {
  numberBank: [],
  evenArray: [],
  oddArray: [],
};

const addNumberBtn = document.querySelector(".addNumber");
addNumberBtn.setAttribute("type", "button");
const addNumberInput = document.querySelector("#number");
addNumberInput.setAttribute("name", "number");
addNumberInput.setAttribute("type", "text");
const numberBankOutput = document.querySelector("#numberBank > output");
const sort1Btn = document.querySelector("#sortOne");
sort1Btn.setAttribute("type", "button");
const oddOutput = document.querySelector("#odds > output");
const evenOutput = document.querySelector("#evens > output");
const sortAllBtn = document.querySelector("#sortAll");

addNumberBtn.addEventListener("click", addNumbers);
sort1Btn.addEventListener("click", sortFirstNumber);
sortAllBtn.addEventListener("click", sortAllNumber);

function addNumbers(event) {
  event.preventDefault();
  const number = addNumberInput.value;
  console.log("input number" + number);

  if (!isNaN(number)) {
    state.numberBank.push(number);
    console.log(state.numberBank);
    numberBankOutput.innerHTML = state.numberBank;
  }
} //end addNumbers

function sortFirstNumber(event) {
  event.preventDefault();
  const firstNumber = state.numberBank.at(0);
  if (firstNumber % 2 == 0) {
    state.evenArray.push(firstNumber);
    evenOutput.innerHTML = state.evenArray;
  } else {
    state.oddArray.push(firstNumber);
    oddOutput.innerHTML = state.oddArray;
  }
  state.numberBank.shift();
  numberBankOutput.innerHTML = state.numberBank;
} //end sortFirstNumber

function sortAllNumber(event) {
  state.numberBank.forEach((item) => {
    if (item % 2 == 0) {
      state.evenArray.push(item);
      evenOutput.innerHTML = state.evenArray;
    } else {
      state.oddArray.push(item);
      oddOutput.innerHTML = state.oddArray;
    }
  });
  state.numberBank = [];
  numberBankOutput.innerHTML = state.numberBank;
} //end sortAlNumber
