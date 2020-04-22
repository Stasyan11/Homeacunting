//this code deletes inputs
function deliteInput(liquidator) {
  liquidator.addEventListener("click", (e) => {
    liquidator.parentElement.remove();
  });
}
//get debit input
const buttonDebit = document.querySelector("#add-debit-input");
buttonDebit.addEventListener("click", addDebitLine);

function addDebitLine() {
  let container = document.querySelector("#debit-input-area");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const content = document.createElement("div");

  button.classList.add("button-content");

  container.appendChild(content);
  button.textContent = "Delete";
  input.classList.add("info-debit");

  content.appendChild(input);
  content.appendChild(button);
  content.insertAdjacentHTML(
    "afterbegin",
    `<select>
    <option>salary</option>
    <option>helps</option>
    <option>other</option>
    </select> `
  );
  deliteInput(button);
}

//get credit input
let buttonCredit = document.querySelector("#add-credit-input");
buttonCredit.addEventListener("click", addCreditLine);

function addCreditLine() {
  let container = document.querySelector("#Credit-input-area");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const content = document.createElement("div");

  button.classList.add("button-content");

  container.appendChild(content);
  button.textContent = "Delate";
  input.classList.add("info-credit");

  content.appendChild(input);
  content.appendChild(button);
  content.insertAdjacentHTML(
    "afterbegin",
    `<select>
    <option>food</option>
    <option>luxary-stuff</option>
    <option>education</option>
    <option>sport</option>
    <option>hous</option>
    <option>animals food</option>
    <option>transpor</option>
    </select> `
  );
  deliteInput(button);
}

let addResult = document.getElementById("add-result");
addResult.addEventListener("click", calcuteBalance);
addResult.addEventListener("click", dispalyBalance);

function calcuteBalance() {
  // THIS CODE SUMS UP debit-MASIV
  let arrdebit = [];
  let addInArrdebit;
  const inpdebit = document.getElementsByClassName("info-debit");
  for (let i = 0; i < inpdebit.length; i++) {
    addInArrdebit = Number(inpdebit[i].value);
    arrdebit.push(addInArrdebit);
  }
  //THIS CODE SUMS UP CREDIT-MASIV
  let arrCredit = [];
  let addInArrCredit;
  const inpCredit = document.getElementsByClassName("info-credit");
  for (let i = 0; i < inpCredit.length; i++) {
    addInArrCredit = Number(inpCredit[i].value);
    arrCredit.push(addInArrCredit);
  }
  return {
    arrdebit: arrdebit,
    arrCredit: arrCredit,
  };
}

function dispalyBalance() {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const resultdebit = calcuteBalance().arrdebit.reduce(reducer);
  const resultCredit = calcuteBalance().arrCredit.reduce(reducer);
  document.getElementById("debit-result").innerHTML = resultdebit;
  document.getElementById("debit-result").style.color = "green";
  document.getElementById("credit-result").innerHTML = resultCredit;
  document.getElementById("credit-result").style.color = "red";

  const balance = resultdebit - resultCredit;
  document.getElementById("balance").innerHTML = balance;
  if (balance > 0) {
    document.getElementById("balance").style.color = "green";
  } else document.getElementById("balance").style.color = "red";
  const resultContent = document.getElementById("result-content");
  resultContent.style.display = "flex";
}
