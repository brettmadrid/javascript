const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  const logEntry = {
    operation: "ADD",
    prevResult: initialResult,
    number: enteredNumber,
    newResult: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry.operation);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
